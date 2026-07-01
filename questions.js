/**
 * Question bank for Quiz Night.
 * Add, remove, or edit questions freely — the app adapts automatically.
 *
 * Shape:
 * {
 *   question: string,
 *   options: string[4],
 *   answerIndex: number (0-3),
 *   category: string
 * }
 */
const QUESTIONS = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
    answerIndex: 2,
    category: "Literature"
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which data structure uses FIFO (First In, First Out) order?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "Which year did the first man land on the Moon?",
    options: ["1965", "1969", "1971", "1975"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "In JavaScript, which keyword declares a variable that cannot be reassigned?",
    options: ["let", "var", "const", "static"],
    answerIndex: 2,
    category: "Computer Science"
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answerIndex: 3,
    category: "Geography"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answerIndex: 2,
    category: "Art"
  },
  {
    question: "What does 'CSS' stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Styled Sections",
      "Colorful Style Syntax"
    ],
    answerIndex: 1,
    category: "Computer Science"
  },

  /* ===================== Science ===================== */
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "What gas do plants primarily absorb for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "How many bones are in the adult human body?",
    options: ["186", "206", "226", "246"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Watt", "Ampere", "Ohm"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "What force keeps planets in orbit around the Sun?",
    options: ["Magnetism", "Gravity", "Friction", "Nuclear force"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "O2", "H2O2"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "Which blood type is known as the universal donor?",
    options: ["A", "AB", "O negative", "B positive"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "What part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "What is the speed of light in a vacuum (approx.)?",
    options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
    answerIndex: 0,
    category: "Science"
  },
  {
    question: "Which planet has the most moons in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "What is the process by which caterpillars become butterflies called?",
    options: ["Mitosis", "Metamorphosis", "Photosynthesis", "Pollination"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "What organ pumps blood throughout the human body?",
    options: ["Liver", "Lungs", "Heart", "Kidney"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "What is the study of earthquakes called?",
    options: ["Seismology", "Meteorology", "Geology", "Volcanology"],
    answerIndex: 0,
    category: "Science"
  },
  {
    question: "Which vitamin is primarily produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    answerIndex: 2,
    category: "Science"
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Atom", "Cell", "Tissue", "Organ"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "Which scientist proposed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
    answerIndex: 1,
    category: "Science"
  },
  {
    question: "What type of energy is stored in a stretched rubber band?",
    options: ["Kinetic energy", "Thermal energy", "Potential energy", "Nuclear energy"],
    answerIndex: 2,
    category: "Science"
  },

  /* ===================== Geography ===================== */
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answerIndex: 1,
    category: "Geography"
  },
  {
    question: "Which country has the largest population in the world?",
    options: ["United States", "China", "India", "Indonesia"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "What is the smallest country in the world by area?",
    options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which desert is the largest hot desert in the world?",
    options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Thar Desert"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Mount Everest is located on the border of which two countries?",
    options: ["India and China", "Nepal and China", "Nepal and India", "Bhutan and China"],
    answerIndex: 1,
    category: "Geography"
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "South America", "Africa", "Australia"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "What is the capital of Japan?",
    options: ["Osaka", "Kyoto", "Tokyo", "Yokohama"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    options: ["Indonesia", "Australia", "Philippines", "Thailand"],
    answerIndex: 1,
    category: "Geography"
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which mountain range separates Europe from Asia?",
    options: ["Alps", "Andes", "Ural Mountains", "Himalayas"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which African country was formerly known as Abyssinia?",
    options: ["Kenya", "Ethiopia", "Sudan", "Somalia"],
    answerIndex: 1,
    category: "Geography"
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Alexandria", "Giza", "Cairo", "Luxor"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which country has the most time zones?",
    options: ["Russia", "United States", "France", "China"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "The Amazon Rainforest is primarily located in which country?",
    options: ["Peru", "Colombia", "Brazil", "Venezuela"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which sea separates Europe and Africa at its narrowest point?",
    options: ["Red Sea", "Mediterranean Sea", "Black Sea", "Caspian Sea"],
    answerIndex: 1,
    category: "Geography"
  },
  {
    question: "What is the capital city of South Korea?",
    options: ["Busan", "Incheon", "Seoul", "Daegu"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which country has the most natural lakes?",
    options: ["United States", "Russia", "Canada", "Finland"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "What is the largest island in the world?",
    options: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
    answerIndex: 2,
    category: "Geography"
  },
  {
    question: "Which strait separates Asia from North America?",
    options: ["Strait of Gibraltar", "Bering Strait", "Strait of Malacca", "Cook Strait"],
    answerIndex: 1,
    category: "Geography"
  },
  {
    question: "What is the driest place on Earth?",
    options: ["Sahara Desert", "Atacama Desert", "Death Valley", "Gobi Desert"],
    answerIndex: 1,
    category: "Geography"
  },

  /* ===================== History ===================== */
  {
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "The ancient pyramids of Giza were built primarily as what?",
    options: ["Temples", "Tombs for pharaohs", "Granaries", "Military fortresses"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Which empire was ruled by Julius Caesar?",
    options: ["Greek Empire", "Roman Empire", "Persian Empire", "Ottoman Empire"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "The Berlin Wall fell in which year?",
    options: ["1987", "1989", "1991", "1993"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Who was known as the 'Maid of Orléans'?",
    options: ["Marie Antoinette", "Joan of Arc", "Catherine the Great", "Eleanor of Aquitaine"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Which country gifted the Statue of Liberty to the United States?",
    options: ["Britain", "Spain", "France", "Italy"],
    answerIndex: 2,
    category: "History"
  },
  {
    question: "The Renaissance period began in which country?",
    options: ["France", "Italy", "Germany", "Spain"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Who was the leader of the Soviet Union during World War II?",
    options: ["Vladimir Lenin", "Nikita Khrushchev", "Joseph Stalin", "Mikhail Gorbachev"],
    answerIndex: 2,
    category: "History"
  },
  {
    question: "The Great Wall of China was primarily built to defend against whom?",
    options: ["Japanese invaders", "Mongol and nomadic tribes", "Russian forces", "British forces"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "In which year did India gain independence from British rule?",
    options: ["1945", "1947", "1950", "1952"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Who wrote the Declaration of Independence?",
    options: ["Benjamin Franklin", "Thomas Jefferson", "John Adams", "Alexander Hamilton"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "The Industrial Revolution began in which country?",
    options: ["United States", "Germany", "Britain", "France"],
    answerIndex: 2,
    category: "History"
  },
  {
    question: "Which ancient civilization built Machu Picchu?",
    options: ["Aztec", "Maya", "Inca", "Olmec"],
    answerIndex: 2,
    category: "History"
  },
  {
    question: "Who was the British Prime Minister during most of World War II?",
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "The French Revolution began in which year?",
    options: ["1776", "1789", "1799", "1804"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Which explorer is credited with reaching the Americas in 1492?",
    options: ["Ferdinand Magellan", "Vasco da Gama", "Christopher Columbus", "Marco Polo"],
    answerIndex: 2,
    category: "History"
  },
  {
    question: "The Cold War was primarily fought between the United States and which nation?",
    options: ["China", "Soviet Union", "North Korea", "Cuba"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Who was the ancient Egyptian queen known for her alliance with Mark Antony?",
    options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ankhesenamun"],
    answerIndex: 1,
    category: "History"
  },
  {
    question: "Which war was fought between the North and South regions of the United States?",
    options: ["Revolutionary War", "War of 1812", "Civil War", "Spanish-American War"],
    answerIndex: 2,
    category: "History"
  },

  /* ===================== Literature ===================== */
  {
    question: "Who wrote the novel '1984'?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "Who is the author of the 'Harry Potter' series?",
    options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Roald Dahl"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "Which novel begins with the line 'Call me Ishmael'?",
    options: ["Moby-Dick", "The Old Man and the Sea", "Treasure Island", "Robinson Crusoe"],
    answerIndex: 0,
    category: "Literature"
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    options: ["Emily Brontë", "Jane Austen", "Charlotte Brontë", "George Eliot"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "Which Greek poet is credited with writing 'The Odyssey'?",
    options: ["Sophocles", "Homer", "Virgil", "Aeschylus"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "What is the name of the fictional wizarding school in 'Harry Potter'?",
    options: ["Hogwarts", "Beauxbatons", "Durmstrang", "Ilvermorny"],
    answerIndex: 0,
    category: "Literature"
  },
  {
    question: "Who wrote 'War and Peace'?",
    options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "Which Shakespeare play features the characters Hamlet and Ophelia?",
    options: ["Macbeth", "Othello", "Hamlet", "King Lear"],
    answerIndex: 2,
    category: "Literature"
  },
  {
    question: "Who wrote the dystopian novel 'Brave New World'?",
    options: ["George Orwell", "Aldous Huxley", "Kurt Vonnegut", "Philip K. Dick"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "Which author created the detective Sherlock Holmes?",
    options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Wilkie Collins"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "What is the name of the hobbit protagonist in 'The Lord of the Rings'?",
    options: ["Bilbo Baggins", "Frodo Baggins", "Samwise Gamgee", "Peregrin Took"],
    answerIndex: 1,
    category: "Literature"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Toni Morrison", "Maya Angelou", "Flannery O'Connor"],
    answerIndex: 0,
    category: "Literature"
  },
  {
    question: "Which epic poem tells the story of the Trojan War?",
    options: ["The Odyssey", "The Aeneid", "The Iliad", "Metamorphoses"],
    answerIndex: 2,
    category: "Literature"
  },
  {
    question: "Who wrote 'One Hundred Years of Solitude'?",
    options: ["Pablo Neruda", "Jorge Luis Borges", "Gabriel García Márquez", "Mario Vargas Llosa"],
    answerIndex: 2,
    category: "Literature"
  },

  /* ===================== Computer Science ===================== */
  {
    question: "What does 'HTML' stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "Which company developed the JavaScript language?",
    options: ["Microsoft", "Netscape", "Apple", "Google"],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "What does 'HTTP' stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "HyperText Transmission Process",
      "Home Tool Transfer Protocol"
    ],
    answerIndex: 0,
    category: "Computer Science"
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out) order?",
    options: ["Queue", "Stack", "Linked list", "Array"],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    answerIndex: 2,
    category: "Computer Science"
  },
  {
    question: "Which of these is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answerIndex: 2,
    category: "Computer Science"
  },
  {
    question: "What does 'SQL' stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Logic",
      "Simple Query Language",
      "Structured Question Language"
    ],
    answerIndex: 0,
    category: "Computer Science"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["#", "//", "<!--", "/*"],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "What does 'API' stand for?",
    options: [
      "Application Programming Interface",
      "Automated Program Interaction",
      "Applied Programming Instruction",
      "Application Process Integration"
    ],
    answerIndex: 0,
    category: "Computer Science"
  },
  {
    question: "Which sorting algorithm has the best average time complexity?",
    options: ["Bubble sort", "Selection sort", "Quick sort", "Insertion sort"],
    answerIndex: 2,
    category: "Computer Science"
  },
  {
    question: "What is the binary representation of the decimal number 5?",
    options: ["100", "101", "110", "111"],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "PHP"],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "What does 'CPU' stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Core Processing Unit"
    ],
    answerIndex: 0,
    category: "Computer Science"
  },
  {
    question: "Which company created the Git version control system?",
    options: [
      "It was created by Linus Torvalds",
      "Microsoft",
      "GitHub Inc.",
      "Atlassian"
    ],
    answerIndex: 0,
    category: "Computer Science"
  },
  {
    question: "What does 'JSON' stand for?",
    options: [
      "JavaScript Object Notation",
      "Java Standard Object Network",
      "JavaScript Oriented Nodes",
      "Joint Syntax Object Notation"
    ],
    answerIndex: 0,
    category: "Computer Science"
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    answerIndex: 2,
    category: "Computer Science"
  },
  {
    question: "In Python, which keyword is used to define a function?",
    options: ["func", "def", "function", "define"],
    answerIndex: 1,
    category: "Computer Science"
  },
  {
    question: "What does 'RAM' stand for?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Rapid Access Module",
      "Random Allocation Memory"
    ],
    answerIndex: 0,
    category: "Computer Science"
  },
  {
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    answerIndex: 2,
    category: "Computer Science"
  },
  {
    question: "What is the correct file extension for a Python file?",
    options: [".py", ".pt", ".pn", ".python"],
    answerIndex: 0,
    category: "Computer Science"
  },

  /* ===================== Art & Culture ===================== */
  {
    question: "Which artist cut off part of his own ear?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Claude Monet"],
    answerIndex: 1,
    category: "Art"
  },
  {
    question: "Which art movement is Salvador Dalí most associated with?",
    options: ["Cubism", "Impressionism", "Surrealism", "Pop Art"],
    answerIndex: 2,
    category: "Art"
  },
  {
    question: "Who sculpted the statue of 'David'?",
    options: ["Donatello", "Michelangelo", "Raphael", "Bernini"],
    answerIndex: 1,
    category: "Art"
  },
  {
    question: "Which museum houses the Mona Lisa?",
    options: ["The British Museum", "The Louvre", "The Uffizi Gallery", "The Prado"],
    answerIndex: 1,
    category: "Art"
  },
  {
    question: "Who painted 'The Starry Night'?",
    options: ["Claude Monet", "Vincent van Gogh", "Edvard Munch", "Paul Cézanne"],
    answerIndex: 1,
    category: "Art"
  },
  {
    question: "Which art style is Pablo Picasso best known for pioneering?",
    options: ["Cubism", "Baroque", "Realism", "Romanticism"],
    answerIndex: 0,
    category: "Art"
  },
  {
    question: "Who composed the 'Ninth Symphony'?",
    options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"],
    answerIndex: 1,
    category: "Art"
  },
  {
    question: "Which painter is known for 'The Persistence of Memory'?",
    options: ["Salvador Dalí", "René Magritte", "Joan Miró", "Max Ernst"],
    answerIndex: 0,
    category: "Art"
  },
  {
    question: "In which city is the Sistine Chapel located?",
    options: ["Florence", "Venice", "Vatican City", "Milan"],
    answerIndex: 2,
    category: "Art"
  },
  {
    question: "Who composed the opera 'The Magic Flute'?",
    options: ["Beethoven", "Mozart", "Verdi", "Wagner"],
    answerIndex: 1,
    category: "Art"
  },

  /* ===================== Sports ===================== */
  {
    question: "How many players are on a standard soccer (football) team on the field?",
    options: ["9", "10", "11", "12"],
    answerIndex: 2,
    category: "Sports"
  },
  {
    question: "In which sport would you perform a 'slam dunk'?",
    options: ["Volleyball", "Basketball", "Tennis", "Badminton"],
    answerIndex: 1,
    category: "Sports"
  },
  {
    question: "How often are the Summer Olympic Games held?",
    options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
    answerIndex: 2,
    category: "Sports"
  },
  {
    question: "Which country has won the most FIFA World Cup titles?",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
    answerIndex: 2,
    category: "Sports"
  },
  {
    question: "In tennis, what is a score of zero called?",
    options: ["Nil", "Love", "Zero", "Duck"],
    answerIndex: 1,
    category: "Sports"
  },
  {
    question: "How many rings are on the Olympic flag?",
    options: ["4", "5", "6", "7"],
    answerIndex: 1,
    category: "Sports"
  },
  {
    question: "Which sport is known as 'the king of sports' in much of the world?",
    options: ["Basketball", "Cricket", "Football (Soccer)", "Rugby"],
    answerIndex: 2,
    category: "Sports"
  },
  {
    question: "In golf, what is one stroke under par called?",
    options: ["Bogey", "Eagle", "Birdie", "Albatross"],
    answerIndex: 2,
    category: "Sports"
  },
  {
    question: "How many players are on a standard basketball team on the court?",
    options: ["4", "5", "6", "7"],
    answerIndex: 1,
    category: "Sports"
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "United Kingdom", "Brazil", "Japan"],
    answerIndex: 2,
    category: "Sports"
  },

  /* ===================== General Knowledge ===================== */
  {
    question: "What is the currency used in Japan?",
    options: ["Won", "Yuan", "Yen", "Ringgit"],
    answerIndex: 2,
    category: "General Knowledge"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
    category: "General Knowledge"
  },
  {
    question: "What is the tallest animal in the world?",
    options: ["Elephant", "Giraffe", "Ostrich", "Horse"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "Which instrument has 88 keys?",
    options: ["Guitar", "Piano", "Violin", "Harp"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "What is the national language of Brazil?",
    options: ["Spanish", "Portuguese", "French", "Italian"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "How many colors are in a rainbow?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
    category: "General Knowledge"
  },
  {
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Horse", "Gazelle"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "Which shape has three sides?",
    options: ["Square", "Pentagon", "Triangle", "Hexagon"],
    answerIndex: 2,
    category: "General Knowledge"
  },
  {
    question: "What do bees collect from flowers to make honey?",
    options: ["Pollen", "Nectar", "Sap", "Seeds"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "Which of these is the largest mammal in the world?",
    options: ["African elephant", "Blue whale", "Giraffe", "Polar bear"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "How many hours are there in a full day?",
    options: ["12", "24", "36", "48"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "What is the primary language spoken in Mexico?",
    options: ["Portuguese", "Spanish", "French", "Italian"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "Which organ in the human body is primarily responsible for filtering blood?",
    options: ["Liver", "Kidney", "Heart", "Lungs"],
    answerIndex: 1,
    category: "General Knowledge"
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "100°C", "-10°C"],
    answerIndex: 0,
    category: "General Knowledge"
  },
  {
    question: "Which of these is a primary color?",
    options: ["Green", "Orange", "Blue", "Purple"],
    answerIndex: 2,
    category: "General Knowledge"
  }
];
