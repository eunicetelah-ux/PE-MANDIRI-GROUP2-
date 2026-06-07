// ==========================================
// DATA SOAL MULTIPLE CHOICE (20 SOAL)
// ==========================================

const mcQuestions = [
  {
    context: "Mia is a cheerful 4th-grade student. She really likes wearing her favorite blue dress. One sunny afternoon, Mia goes to the park near her house to play. While walking around, she sees a small white cat sitting under a tree.",
    q: "1. What color is Mia's dress?",
    options: ["A. Red", "B. Blue", "C. Green", "D. Yellow"],
    correct: 1,
    level: "Easy"
  },
  {
    context: "Mia is a cheerful 4th-grade student...",
    q: "2. Where does Mia see the cat?",
    options: ["A. At school", "B. At home", "C. At the park", "D. At the market"],
    correct: 2,
    level: "Easy"
  },
  {
    context: "Dani is an active boy who loves sports. Every afternoon, he rides his bicycle around his neighborhood. One day, he goes to the river near his house with his best friend to enjoy the view.",
    q: "3. What does Dani ride?",
    options: ["A. Car", "B. Bicycle", "C. Bus", "D. Train"],
    correct: 1,
    level: "Easy"
  },
  {
    context: "Dani is an active boy...",
    q: "4. Where does Dani go?",
    options: ["A. School", "B. Park", "C. River", "D. Mall"],
    correct: 2,
    level: "Easy"
  },
  {
    context: "Siti is a diligent girl who always brings lunch from home. Today, she brings rice, fried chicken, and a fresh red apple in her lunch box. She feels happy because she can eat together with her friends at school.",
    q: "5. What fruit does Siti have?",
    options: ["A. Banana", "B. Orange", "C. Apple", "D. Mango"],
    correct: 2,
    level: "Easy"
  },
  {
    context: "Siti is a diligent girl...",
    q: "6. Where does Siti bring her lunch?",
    options: ["A. Park", "B. School", "C. Beach", "D. Home"],
    correct: 1,
    level: "Easy"
  },
  {
    context: "Budi is a disciplined boy. Every morning, he wakes up early before going to school. He always brushes his teeth first, then takes a bath so his body feels clean and fresh.",
    q: "7. What does Budi do first?",
    options: ["A. Eats", "B. Sleeps", "C. Brushes his teeth", "D. Plays"],
    correct: 2,
    level: "Easy"
  },
  {
    context: "Budi is a disciplined boy...",
    q: "8. When does Budi wake up?",
    options: ["A. Afternoon", "B. Evening", "C. Night", "D. Morning"],
    correct: 3,
    level: "Easy"
  },
  {
    context: "Lina loves reading story books. She has many books at home. Every Sunday, she goes to the library with her sister to borrow new books.",
    q: "9. What does Lina like to do?",
    options: ["A. Swimming", "B. Reading", "C. Running", "D. Singing"],
    correct: 1,
    level: "Medium"
  },
  {
    context: "Lina loves reading...",
    q: "10. When does Lina go to the library?",
    options: ["A. Monday", "B. Friday", "C. Sunday", "D. Saturday"],
    correct: 2,
    level: "Medium"
  },
  {
    context: "Riko has a small pet fish in an aquarium. The fish is bright orange and very cute. Every morning before going to school, Riko always feeds his fish.",
    q: "11. What pet does Riko have?",
    options: ["A. Cat", "B. Dog", "C. Fish", "D. Bird"],
    correct: 2,
    level: "Medium"
  },
  {
    context: "Riko has a small pet fish...",
    q: "12. What color is the fish?",
    options: ["A. Blue", "B. Black", "C. White", "D. Orange"],
    correct: 3,
    level: "Medium"
  },
  {
    context: "Tina and her friends love playing together. After school, they go to the playground near their school. There, they play on the swing and laugh happily.",
    q: "13. Where do Tina and her friends play?",
    options: ["A. Classroom", "B. Playground", "C. Library", "D. Kitchen"],
    correct: 1,
    level: "Medium"
  },
  {
    context: "Tina and her friends...",
    q: "14. What do they play?",
    options: ["A. Slide", "B. Ball", "C. Swing", "D. Rope"],
    correct: 2,
    level: "Medium"
  },
  {
    context: "Andi goes to a small shop near his house in the afternoon. The weather is very hot, so he wants something cold. Finally, he buys his favorite chocolate ice cream.",
    q: "15. What does Andi buy?",
    options: ["A. Cake", "B. Candy", "C. Ice cream", "D. Bread"],
    correct: 2,
    level: "Medium"
  },
  {
    context: "Andi goes to a small shop...",
    q: "16. What flavor is the ice cream?",
    options: ["A. Vanilla", "B. Strawberry", "C. Chocolate", "D. Orange"],
    correct: 2,
    level: "Medium"
  },
  {
    context: "Nina is a helpful girl who likes to help her parents. One day, she helps her mother in the kitchen. She carefully cuts vegetables and washes the dishes after eating.",
    q: "17. Where does Nina help her mother?",
    options: ["A. Garden", "B. Kitchen", "C. Bedroom", "D. School"],
    correct: 1,
    level: "Hard"
  },
  {
    context: "Nina is a helpful girl...",
    q: "18. What does Nina do?",
    options: ["A. Sweeps the floor", "B. Cuts vegetables", "C. Plays", "D. Sleeps"],
    correct: 1,
    level: "Hard"
  },
  {
    context: "Rama lives quite far from his school. Because the distance is far, he cannot walk. Therefore, he goes to school by bus every day with his friends.",
    q: "19. How does Rama go to school?",
    options: ["A. Walk", "B. Bicycle", "C. Car", "D. Bus"],
    correct: 3,
    level: "Hard"
  },
  {
    context: "Rama lives quite far...",
    q: "20. Why does Rama take the bus?",
    options: ["A. He is lazy", "B. His house is far", "C. He likes buses", "D. He has no bicycle"],
    correct: 1,
    level: "Hard"
  }
];

// ==========================================
// DATA SOAL ESSAY (5 SOAL)
// ==========================================

const essayQuestions = [
  {
    context: "Lala has a very cute pet cat. The cat is black and has soft fur. Every day, the cat likes to sleep on the sofa in the living room.",
    q: "21. Describe Lala's cat!",
    keywords: ["black", "soft", "fur", "sleep", "sofa", "living room", "cute"]
  },
  {
    context: "Tom is a diligent student. He always goes to school at 7 a.m. At school, he learns many subjects such as English and Mathematics with his teacher and friends.",
    q: "22. What does Tom do at school?",
    keywords: ["learn", "study", "english", "mathematics", "teacher", "friends", "subjects"]
  },
  {
    context: "Susi really loves fruits because they are healthy. Every day, she eats bananas and oranges as snacks at home.",
    q: "23. What fruits does Susi like?",
    keywords: ["banana", "orange", "fruits", "healthy", "snack"]
  },
  {
    context: "Bayu is an active boy who likes sports. Every afternoon, he plays football with his friends in a field near his house.",
    q: "24. When and with whom does Bayu play football?",
    keywords: ["afternoon", "friends", "football", "field", "house"]
  },
  {
    context: "Rina is a diligent and responsible girl. She always helps her parents at home, such as sweeping the floor and cleaning her room. She also studies every night to become a smart student.",
    q: "25. Why is Rina a good girl?",
    keywords: ["help", "parents", "sweep", "clean", "study", "diligent", "responsible", "smart"]
  }
];

// ==========================================
// STATE VARIABLES
// ==========================================

let currentMCIndex = 0;
let currentEssayIndex = 0;
let currentMode = 'mc'; // 'mc' or 'essay'
let mcScore = 0;
let essayScore = 0;

// ==========================================
// NAVIGATION FUNCTIONS
// ==========================================

function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active-btn'));
  event.target.classList.add('active-btn');
}

function switchQuizMode(mode) {
  currentMode = mode;

  document.querySelectorAll('.quiz-tab').forEach(tab => tab.classList.remove('active-tab'));
  document.getElementById(mode + '-tab').classList.add('active-tab');

  if (mode === 'mc') {
    document.getElementById('mc-container').style.display = 'block';
    document.getElementById('essay-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
    loadMC();
  } else {
    document.getElementById('mc-container').style.display = 'none';
    document.getElementById('essay-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    loadEssay();
  }
}

// ==========================================
// MULTIPLE CHOICE LOGIC
// ==========================================

function loadMC() {
  if (currentMCIndex >= mcQuestions.length) {
    showResult();
    return;
  }

  const qData = mcQuestions[currentMCIndex];

  document.getElementById('question-context').innerHTML =
    '<span class="badge ' + qData.level.toLowerCase() + '">' + qData.level + '</span> Context: ' + qData.context;

  document.getElementById('question-text').textContent = qData.q;

  var optsDiv = document.getElementById('options-container');
  optsDiv.innerHTML = '';

  qData.options.forEach(function(opt, index) {
    var btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';
    btn.onclick = (function(idx, btnEl, correctIdx) {
      return function() { checkMCAnswer(idx, btnEl, correctIdx); };
    })(index, btn, qData.correct);
    optsDiv.appendChild(btn);
  });

  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('next-btn').style.display = 'none';

  updateProgress();
}

function checkMCAnswer(selectedIndex, btnElement, correctIndex) {
  document.querySelectorAll('.option-btn').forEach(function(btn) { btn.disabled = true; });

  var feedbackEl = document.getElementById('feedback');

  if (selectedIndex === correctIndex) {
    btnElement.style.background = '#2e7d32';
    btnElement.style.color = 'white';
    btnElement.style.borderColor = '#2e7d32';
    feedbackEl.textContent = '✅ Correct! Well done.';
    feedbackEl.style.color = '#2e7d32';
    feedbackEl.style.background = '#e8f5e9';
    mcScore++;
  } else {
    btnElement.style.background = '#c62828';
    btnElement.style.color = 'white';
    btnElement.style.borderColor = '#c62828';
    feedbackEl.textContent = '❌ Incorrect. The answer is: ' + mcQuestions[currentMCIndex].options[correctIndex];
    feedbackEl.style.color = '#c62828';
    feedbackEl.style.background = '#ffebee';
  }

  document.getElementById('next-btn').style.display = 'inline-block';
  updateProgress();
}

function nextMC() {
  currentMCIndex++;
  loadMC();
}

// ==========================================
// ESSAY LOGIC
// ==========================================

function loadEssay() {
  if (currentEssayIndex >= essayQuestions.length) {
    showResult();
    return;
  }

  var qData = essayQuestions[currentEssayIndex];

  document.getElementById('essay-context').textContent = '📖 Context: ' + qData.context;
  document.getElementById('essay-question').textContent = qData.q;
  document.getElementById('essay-answer').value = '';
  document.getElementById('essay-answer').disabled = false;
  document.getElementById('essay-feedback').textContent = '';
  document.getElementById('essay-feedback').className = 'feedback';
  document.getElementById('essay-next-btn').style.display = 'none';

  updateProgress();
}

function submitEssay() {
  var answer = document.getElementById('essay-answer').value.trim();
  if (answer.length < 5) {
    alert('Please write a longer answer (at least 5 characters).');
    return;
  }

  var qData = essayQuestions[currentEssayIndex];
  var matches = 0;

  qData.keywords.forEach(function(keyword) {
    if (answer.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
      matches++;
    }
  });

  var feedbackEl = document.getElementById('essay-feedback');
  var percentage = matches / qData.keywords.length;

  if (percentage > 0.5) {
    feedbackEl.textContent = '✅ Great answer! (Matched keywords: ' + matches + ')';
    feedbackEl.style.color = '#2e7d32';
    feedbackEl.style.background = '#e8f5e9';
    essayScore++;
  } else {
    feedbackEl.textContent = '⚠️ Try to use more words from the text. (Keywords found: ' + matches + ')';
    feedbackEl.style.color = '#f57c00';
    feedbackEl.style.background = '#fff3e0';
    essayScore += 0.5;
  }

  document.getElementById('essay-answer').disabled = true;
  document.getElementById('essay-next-btn').style.display = 'inline-block';
  updateProgress();
}

function nextEssay() {
  currentEssayIndex++;
  loadEssay();
}

// ==========================================
// PROGRESS & RESULT
// ==========================================

function updateProgress() {
  var totalItems, currentIndex;

  if (currentMode === 'mc') {
    totalItems = mcQuestions.length;
    currentIndex = currentMCIndex;
  } else {
    totalItems = essayQuestions.length;
    currentIndex = currentEssayIndex;
  }

  var percent = (currentIndex / totalItems) * 100;
  document.getElementById('progress-fill').style.width = percent + '%';
  var totalScore = mcScore + essayScore;
  document.getElementById('progress-text').textContent = 'Question ' + (currentIndex + 1) + ' of ' + totalItems + ' | Total Score: ' + totalScore.toFixed(1);
}

function showResult() {
  document.getElementById('mc-container').style.display = 'none';
  document.getElementById('essay-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';

  var totalPossible = mcQuestions.length + essayQuestions.length;
  var totalScore = mcScore + essayScore;
  var finalPercent = Math.round((totalScore / totalPossible) * 100);

  var grade = 'F';
  var msg = 'Keep practicing!';
  var color = '#c62828';

  if (finalPercent >= 85) {
    grade = 'A'; msg = 'Excellent! You are a Reading Master!'; color = '#2e7d32';
  } else if (finalPercent >= 70) {
    grade = 'B'; msg = 'Good Job! You understand the stories well.'; color = '#1976d2';
  } else if (finalPercent >= 55) {
    grade = 'C'; msg = 'Good effort! Read the texts more carefully.'; color = '#f57c00';
  }

  document.getElementById('result-content').innerHTML =
    '<h2 style="color:' + color + '">' + grade + '</h2>' +
    '<p class="score-display">' + totalScore.toFixed(1) + ' / ' + totalPossible + '</p>' +
    '<p style="color:#666; font-size:1.2rem;">' + msg + '</p>' +
    '<div style="margin-top:20px; background:#f0f4f8; padding:15px; border-radius:8px; text-align:left;">' +
    '<p>✅ MC Score: ' + mcScore + ' / 20</p>' +
    '<p>✅ Essay Score: ' + essayScore + ' / 5</p>' +
    '</div>';
}

function restartQuiz() {
  currentMCIndex = 0;
  currentEssayIndex = 0;
  mcScore = 0;
  essayScore = 0;

  document.getElementById('result-container').style.display = 'none';
  switchQuizMode('mc');
}

// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('PE-MANDIRI System Ready!');
  loadMC();
});