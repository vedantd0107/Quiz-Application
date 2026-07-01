/**
 * Quiz Night — app logic
 * No dependencies. Works with the QUESTIONS array from questions.js.
 */

(function () {
  "use strict";

  const TIME_PER_QUESTION = 15; // seconds
  const LOW_TIME_THRESHOLD = 5; // seconds — ring turns coral below this
  const RING_CIRCUMFERENCE = 175.9; // 2 * PI * r(28), matches the SVG in index.html
  const BEST_SCORE_KEY = "quizNightBestScore";
  const QUIZ_LENGTH = Math.min(10, QUESTIONS.length); // questions drawn per session

  // ---- DOM references ------------------------------------------------

  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");

  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const retryBtn = document.getElementById("retry-btn");

  const questionCountPreview = document.getElementById("question-count-preview");
  const bestScoreChip = document.getElementById("best-score-chip");
  const bestScoreValue = document.getElementById("best-score-value");

  const progressFill = document.getElementById("progress-fill");
  const questionIndexEl = document.getElementById("question-index");
  const scoreLiveValue = document.getElementById("score-live-value");
  const questionText = document.getElementById("question-text");
  const optionsList = document.getElementById("options-list");
  const quizHint = document.getElementById("quiz-hint");

  const timerRing = document.getElementById("timer-ring");
  const timerRingProgress = document.getElementById("timer-ring-progress");
  const timerValue = document.getElementById("timer-value");

  const resultEyebrow = document.getElementById("result-eyebrow");
  const resultScoreValue = document.getElementById("result-score-value");
  const resultMessage = document.getElementById("result-message");
  const statCorrect = document.getElementById("stat-correct");
  const statWrong = document.getElementById("stat-wrong");
  const statSkipped = document.getElementById("stat-skipped");
  const statAvgTime = document.getElementById("stat-avgtime");
  const breakdownList = document.getElementById("breakdown-list");

  // ---- State -----------------------------------------------------------

  let currentIndex = 0;
  let score = 0;
  let timeLeft = TIME_PER_QUESTION;
  let timerId = null;
  let answered = false;
  let responses = []; // { selectedIndex: number|null, correct: boolean, timeTaken: number }
  let activeQuestions = []; // the random subset of QUESTIONS used for the current session

  const OPTION_LETTERS = ["A", "B", "C", "D"];

  // ---- Helpers -----------------------------------------------------------

  /** Fisher-Yates shuffle — returns a new shuffled copy, leaves the original untouched. */
  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /** Picks `count` random, non-repeating questions from the full bank. */
  function pickRandomQuestions(count) {
    return shuffle(QUESTIONS).slice(0, count);
  }

  // ---- Init --------------------------------------------------------------

  function init() {
    questionCountPreview.textContent = QUIZ_LENGTH;
    const poolSizePreview = document.getElementById("pool-size-preview");
    if (poolSizePreview) poolSizePreview.textContent = QUESTIONS.length;
    const best = Number(localStorage.getItem(BEST_SCORE_KEY) || 0);
    if (best > 0) {
      bestScoreValue.textContent = best;
      bestScoreChip.hidden = false;
    }

    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", goToNextQuestion);
    retryBtn.addEventListener("click", resetQuiz);
  }

  // ---- Screen switching ----------------------------------------------

  function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach((s) => (s.hidden = true));
    screen.hidden = false;
  }

  // ---- Quiz flow -------------------------------------------------------

  function startQuiz() {
    currentIndex = 0;
    score = 0;
    responses = [];
    activeQuestions = pickRandomQuestions(QUIZ_LENGTH);
    showScreen(quizScreen);
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const q = activeQuestions[currentIndex];

    // Topbar
    const progressPct = (currentIndex / activeQuestions.length) * 100;
    progressFill.style.width = progressPct + "%";
    questionIndexEl.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
    scoreLiveValue.textContent = score;

    // Question + options
    questionText.textContent = q.question;
    optionsList.innerHTML = "";
    q.options.forEach((optionText, i) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.innerHTML = `<span class="option__letter">${OPTION_LETTERS[i]}</span><span>${optionText}</span>`;
      btn.addEventListener("click", () => handleAnswer(i));
      optionsList.appendChild(btn);
    });

    quizHint.textContent = "Pick an answer to continue";
    nextBtn.disabled = true;
    nextBtn.textContent =
      currentIndex === activeQuestions.length - 1 ? "See results" : "Next question";

    startTimer();
  }

  function startTimer() {
    clearInterval(timerId);
    timeLeft = TIME_PER_QUESTION;
    timerRing.classList.remove("is-low");
    updateTimerDisplay();

    timerId = setInterval(() => {
      timeLeft -= 1;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerId);
        handleAnswer(null); // time's up — treat as unanswered
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    timerValue.textContent = Math.max(timeLeft, 0);
    const offset = RING_CIRCUMFERENCE * (1 - Math.max(timeLeft, 0) / TIME_PER_QUESTION);
    timerRingProgress.style.strokeDashoffset = offset;
    timerRing.classList.toggle("is-low", timeLeft <= LOW_TIME_THRESHOLD);
  }

  function handleAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    clearInterval(timerId);

    const q = activeQuestions[currentIndex];
    const isCorrect = selectedIndex === q.answerIndex;
    const timeTaken = TIME_PER_QUESTION - Math.max(timeLeft, 0);

    if (isCorrect) score += 1;

    responses.push({
      selectedIndex,
      correct: isCorrect,
      timeTaken,
    });

    // Lock options and reveal correctness
    const optionButtons = optionsList.querySelectorAll(".option");
    optionButtons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answerIndex) {
        btn.classList.add(selectedIndex === null ? "is-missed" : "is-correct");
      } else if (i === selectedIndex) {
        btn.classList.add("is-wrong");
      }
    });

    scoreLiveValue.textContent = score;
    quizHint.textContent =
      selectedIndex === null
        ? "Time's up!"
        : isCorrect
        ? "Correct!"
        : "Not quite.";
    nextBtn.disabled = false;
  }

  function goToNextQuestion() {
    currentIndex += 1;
    if (currentIndex >= activeQuestions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  // ---- Results -----------------------------------------------------------

  function showResults() {
    progressFill.style.width = "100%";
    showScreen(resultScreen);

    const total = activeQuestions.length;
    const correctCount = responses.filter((r) => r.correct).length;
    const skippedCount = responses.filter((r) => r.selectedIndex === null).length;
    const wrongCount = total - correctCount - skippedCount;
    const avgTime =
      responses.reduce((sum, r) => sum + r.timeTaken, 0) / (responses.length || 1);

    resultScoreValue.textContent = score;
    document.querySelector(".result-score__of").textContent = `/${total}`;

    statCorrect.textContent = correctCount;
    statCorrect.style.color = "var(--mint)";
    statWrong.textContent = wrongCount;
    statWrong.style.color = "var(--coral)";
    statSkipped.textContent = skippedCount;
    statSkipped.style.color = "var(--ink-faint)";
    statAvgTime.textContent = `${avgTime.toFixed(1)}s`;

    resultEyebrow.textContent = "Final score";
    resultMessage.textContent = getResultMessage(correctCount, total);

    // Best score
    const best = Number(localStorage.getItem(BEST_SCORE_KEY) || 0);
    if (score > best) {
      localStorage.setItem(BEST_SCORE_KEY, String(score));
    }

    renderBreakdown();
  }

  function getResultMessage(correctCount, total) {
    const pct = correctCount / total;
    if (pct === 1) return "Flawless. Every single question, nailed.";
    if (pct >= 0.8) return "Excellent work — you clearly know your stuff.";
    if (pct >= 0.5) return "Solid effort. A little more practice and you'll ace it.";
    return "Rough round — give it another shot, you'll do better.";
  }

  function renderBreakdown() {
    breakdownList.innerHTML = "";
    responses.forEach((r, i) => {
      const q = activeQuestions[i];
      const item = document.createElement("div");

      let statusClass = "wrong";
      let icon = "✕";
      let detail = `Correct answer: ${q.options[q.answerIndex]}`;

      if (r.correct) {
        statusClass = "correct";
        icon = "✓";
        detail = `Your answer: ${q.options[r.selectedIndex]}`;
      } else if (r.selectedIndex === null) {
        statusClass = "skipped";
        icon = "⏱";
        detail = `Skipped — correct answer: ${q.options[q.answerIndex]}`;
      } else {
        detail = `Your answer: ${q.options[r.selectedIndex]} · Correct: ${q.options[q.answerIndex]}`;
      }

      item.className = `breakdown-item ${statusClass}`;
      item.innerHTML = `
        <span class="breakdown-item__icon">${icon}</span>
        <span class="breakdown-item__text"><strong>${i + 1}. ${q.question}</strong>${detail}</span>
      `;
      breakdownList.appendChild(item);
    });
  }

  function resetQuiz() {
    const best = Number(localStorage.getItem(BEST_SCORE_KEY) || 0);
    if (best > 0) {
      bestScoreValue.textContent = best;
      bestScoreChip.hidden = false;
    }
    showScreen(startScreen);
  }

  // ---- Go -----------------------------------------------------------------

  init();
})();
