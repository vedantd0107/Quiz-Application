# Quiz Night 🎯

An interactive multiple-choice quiz app built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step. Answer questions against a live per-question countdown, track your score in real time, and get a full breakdown at the end.

**[Live demo](#)** *(add your GitHub Pages link here once deployed)*

## Features

- **140-question bank** spanning Science, Geography, History, Literature, Computer Science, Art, Sports, and General Knowledge (`questions.js`)
- **Randomized sessions** — each playthrough draws 10 fresh questions in a random order, so no two rounds are the same
- **Real-time score calculation** — your score updates live as you answer
- **Per-question timer** with an animated countdown ring (15 seconds per question); running out of time auto-submits and moves you on
- **Result summary** with your final score, a correct / wrong / skipped breakdown, average answer time, and a question-by-question review
- **Best score tracking** saved locally in the browser (`localStorage`) between sessions
- **Responsive design** that works cleanly from mobile to desktop
- Accessible details: visible focus states, `prefers-reduced-motion` support, semantic markup

## Tech stack

- HTML5
- CSS3 (custom properties, no frameworks)
- Vanilla JavaScript (ES6+, no dependencies)

## Project structure

```
quiz-app/
├── index.html      # Markup for start / quiz / result screens
├── style.css        # Design system + layout + responsive rules
├── script.js         # App logic: state, timer, scoring, rendering
├── questions.js       # Question bank — edit this to add your own questions
└── README.md
```

## Getting started

No build tools or dependencies required.

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/quiz-night.git
   cd quiz-night
   ```
2. Open `index.html` directly in a browser, **or** serve it locally:
   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

## Customizing the questions

Edit `questions.js`. Each question follows this shape:

```js
{
  question: "Which planet is known as the Red Planet?",
  options: ["Venus", "Mars", "Jupiter", "Saturn"],
  answerIndex: 1,       // index of the correct option
  category: "Science"
}
```

Add, remove, or reorder entries in the `QUESTIONS` array — the app adapts the progress bar, question count, and results automatically.

## Configuration

A couple of constants at the top of `script.js` control the quiz's feel:

```js
const TIME_PER_QUESTION = 15;   // seconds allowed per question
const LOW_TIME_THRESHOLD = 5;   // seconds remaining before the timer ring turns red
const QUIZ_LENGTH = 10;         // questions randomly drawn per session (capped at bank size)
```

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, go to **Pages** → set the source branch to `main` and the folder to `/ (root)`.
3. Your quiz will be live at `https://<your-username>.github.io/<repo-name>/`.

## Possible next steps

- Add question categories/difficulty selection on the start screen
- Support question shuffling and randomized option order
- Add sound effects for correct/incorrect answers
- Persist full quiz history, not just the best score

## License

MIT — free to use and adapt.
