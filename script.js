const questionCount = document.getElementById('questionCount');
const questionText = document.getElementById('questionText');
const answersBox = document.getElementById('answersBox');
const scoreText = document.getElementById('scoreText');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

const quizData = [
  {
    question: 'What was Kozuki Oden boiling in when he died?',
    answers: [
      'Oil',
      'Water',
      'Sea Prism Stone liquid',
      'Lava'
    ],
    correctAnswer: 'Oil'
  },
  {
    question: 'Which Road Poneglyph was originally located on Fish-Man Island?',
    answers: [
      'The one later held by Kaido',
      'The one later held by Big Mom',
      'The one in Zou',
      'The one in Wano'
    ],
    correctAnswer: 'The one later held by Big Mom'
  },
  {
    question: 'What is the name of Zoro’s sword that constantly drains its user’s Haki?',
    answers: [
      'Wado Ichimonji',
      'Sandai Kitetsu',
      'Shusui',
      'Enma'
    ],
    correctAnswer: 'Enma'
  },
  {
    question: 'Who was the original owner of Enma before Zoro?',
    answers: [
      'Kozuki Sukiyaki',
      'Kozuki Oden',
      'Shimotsuki Ryuma',
      'Denjiro'
    ],
    correctAnswer: 'Kozuki Oden'
  },
  {
    question: 'Which island did the Straw Hats first reach after entering the Grand Line?',
    answers: [
      'Whisky Peak',
      'Little Garden',
      'Drum Island',
      'Jaya'
    ],
    correctAnswer: 'Whisky Peak'
  },
  {
    question: 'What was the false name used by Kozuki Momonosuke when traveling in Wano?',
    answers: [
      'Kozuki Taro',
      'Kazuki Momo',
      'Momo no Jo',
      'He did not use a false name'
    ],
    correctAnswer: 'He did not use a false name'
  },
  {
    question: 'Which member of CP9 could use Rankyaku, Tekkai, Soru, Geppo, Kami-e, and Shigan at the highest level?',
    answers: [
      'Kaku',
      'Blueno',
      'Rob Lucci',
      'Jabra'
    ],
    correctAnswer: 'Rob Lucci'
  },
  {
    question: 'What substance weakened Crocodile’s Logia intangibility during his fight with Luffy?',
    answers: [
      'Blood and water',
      'Fire',
      'Sea salt only',
      'Mud'
    ],
    correctAnswer: 'Blood and water'
  },
  {
    question: 'What was Nico Robin’s alias inside Baroque Works?',
    answers: [
      'Miss Goldenweek',
      'Miss Valentine',
      'Miss All Sunday',
      'Miss Merry Christmas'
    ],
    correctAnswer: 'Miss All Sunday'
  },
  {
    question: 'Who carved the apology message on the Shandorian golden bell’s poneglyph area?',
    answers: [
      'Joy Boy',
      'Mont Blanc Noland',
      'Gol D. Roger',
      'Kalgara'
    ],
    correctAnswer: 'Gol D. Roger'
  },
  {
    question: 'What is the name of the ancient elephant that carries Zou?',
    answers: [
      'Zunesha',
      'Surume',
      'Umibozu',
      'Nika'
    ],
    correctAnswer: 'Zunesha'
  },
  {
    question: 'Which Kozuki family member ordered Zunesha to walk for centuries?',
    answers: [
      'Kozuki Oden',
      'Kozuki Sukiyaki',
      'An ancestor of the Kozuki clan',
      'Kozuki Momonosuke'
    ],
    correctAnswer: 'An ancestor of the Kozuki clan'
  },
  {
    question: 'What was Doflamingo’s position among the Seven Warlords before losing it?',
    answers: [
      'He was the newest member',
      'He was the former leader',
      'He was one of the Seven Warlords of the Sea',
      'He was never a Warlord'
    ],
    correctAnswer: 'He was one of the Seven Warlords of the Sea'
  },
  {
    question: 'What Devil Fruit does Trafalgar Law possess?',
    answers: [
      'Gura Gura no Mi',
      'Ope Ope no Mi',
      'Mochi Mochi no Mi',
      'Bari Bari no Mi'
    ],
    correctAnswer: 'Ope Ope no Mi'
  },
  {
    question: 'What is the special ultimate surgery tied to Law’s fruit called in fan discussions?',
    answers: [
      'Immortality Operation',
      'Phoenix Transfer',
      'Soul Exchange',
      'Perfect Room'
    ],
    correctAnswer: 'Immortality Operation'
  },
  {
    question: 'Who was Corazon’s real name?',
    answers: [
      'Donquixote Mjosgard',
      'Donquixote Rosinante',
      'Donquixote Homing',
      'Donquixote Rocinante'
    ],
    correctAnswer: 'Donquixote Rosinante'
  },
  {
    question: 'What ability did Corazon’s Devil Fruit grant him?',
    answers: [
      'Create fire',
      'Create silence zones',
      'Turn invisible',
      'Swap personalities'
    ],
    correctAnswer: 'Create silence zones'
  },
  {
    question: 'Who taught Sanji how to survive starvation and harsh life at sea when he was young?',
    answers: [
      'Judge',
      'Zeff',
      'Ivankov',
      'Sora'
    ],
    correctAnswer: 'Zeff'
  },
  {
    question: 'What sea is known as the home of the Vinsmoke family’s military kingdom?',
    answers: [
      'East Blue',
      'West Blue',
      'North Blue',
      'South Blue'
    ],
    correctAnswer: 'North Blue'
  },
  {
    question: 'What is the name of Sanji’s raid suit family designation?',
    answers: [
      'Stealth Black',
      'Black Leg',
      'Germa Noir',
      'Night Cook'
    ],
    correctAnswer: 'Stealth Black'
  },
  {
    question: 'Which Charlotte sibling fought Luffy using advanced Observation Haki and mochi powers?',
    answers: [
      'Perospero',
      'Daifuku',
      'Katakuri',
      'Oven'
    ],
    correctAnswer: 'Katakuri'
  },
  {
    question: 'What does Big Mom’s Soru Soru no Mi primarily manipulate?',
    answers: [
      'Memories',
      'Shadows',
      'Souls',
      'Dreams'
    ],
    correctAnswer: 'Souls'
  },
  {
    question: 'Who cut off Zeff’s leg in the manga version of the story?',
    answers: [
      'A marine',
      'A Sea King',
      'Zeff himself',
      'Don Krieg'
    ],
    correctAnswer: 'Zeff himself'
  },
  {
    question: 'What was the name of the prison where Ace was held before Marineford?',
    answers: [
      'Enies Lobby',
      'Impel Down',
      'Levely Hall',
      'Punk Hazard'
    ],
    correctAnswer: 'Impel Down'
  },
  {
    question: 'Which level of Impel Down was known as the Frozen Hell?',
    answers: [
      'Level 3',
      'Level 4',
      'Level 5',
      'Level 6'
    ],
    correctAnswer: 'Level 5'
  },
  {
    question: 'Who was the chief warden of Impel Down during Luffy’s break-in?',
    answers: [
      'Hannyabal',
      'Magellan',
      'Shiryu',
      'Momonga'
    ],
    correctAnswer: 'Magellan'
  },
  {
    question: 'What poison-related problem made Magellan especially dangerous to fight directly?',
    answers: [
      'His poison could spread through shadows',
      'Touching him could be deadly',
      'He could poison Haki itself',
      'He could poison the ocean'
    ],
    correctAnswer: 'Touching him could be deadly'
  },
  {
    question: 'Who stopped Akainu’s attack at the end of Marineford?',
    answers: [
      'Whitebeard',
      'Marco',
      'Shanks',
      'Sengoku'
    ],
    correctAnswer: 'Shanks'
  },
  {
    question: 'What was Whitebeard’s real name?',
    answers: [
      'Edward Newgate',
      'Marshall Newgate',
      'Edward Teach',
      'Rocks Newgate'
    ],
    correctAnswer: 'Edward Newgate'
  },
  {
    question: 'What was the name of Gol D. Roger’s final island as revealed later in the story?',
    answers: [
      'Raftel',
      'Laugh Tale',
      'God Valley',
      'Lodestar'
    ],
    correctAnswer: 'Laugh Tale'
  },
  {
    question: 'Which member of Roger’s crew is known as the Dark King?',
    answers: [
      'Scopper Gaban',
      'Crocus',
      'Silvers Rayleigh',
      'Douglas Bullet'
    ],
    correctAnswer: 'Silvers Rayleigh'
  },
  {
    question: 'What race is King of the Beasts Pirates?',
    answers: [
      'Fish-Man',
      'Mink',
      'Lunarian',
      'Giant'
    ],
    correctAnswer: 'Lunarian'
  },
  {
    question: 'What is unusual about Lunarians according to the story?',
    answers: [
      'They can breathe underwater',
      'They produce clouds',
      'They can survive in extreme environments and create flames',
      'They do not cast shadows'
    ],
    correctAnswer: 'They can survive in extreme environments and create flames'
  },
  {
    question: 'Who was the former Rocks Pirates member that became captain of the Big Mom Pirates?',
    answers: [
      'Shiki',
      'Charlotte Linlin',
      'Stussy',
      'Bakkin'
    ],
    correctAnswer: 'Charlotte Linlin'
  },
  {
    question: 'Who was the former Rocks Pirates member that became captain of the Beasts Pirates?',
    answers: [
      'Kaido',
      'King',
      'Silver Axe',
      'Captain John'
    ],
    correctAnswer: 'Kaido'
  },
  {
    question: 'What is the name of Kaido’s Devil Fruit model?',
    answers: [
      'Uo Uo no Mi, Model: Seiryu',
      'Ryu Ryu no Mi, Model: Azure Dragon',
      'Hebi Hebi no Mi, Model: Dragon',
      'Tatsu Tatsu no Mi, Model: Oni'
    ],
    correctAnswer: 'Uo Uo no Mi, Model: Seiryu'
  },
  {
    question: 'Who defeated Charlotte Cracker before Luffy went on to fight Katakuri?',
    answers: [
      'Luffy alone',
      'Luffy with Nami’s help',
      'Sanji alone',
      'Jinbe and Brook together'
    ],
    correctAnswer: 'Luffy with Nami’s help'
  },
  {
    question: 'What was the name of the scientist group that included Vegapunk, Caesar, Judge, and Queen?',
    answers: [
      'MADS',
      'GERMA',
      'SSG',
      'Neo Marine Lab'
    ],
    correctAnswer: 'MADS'
  },
  {
    question: 'What was Vegapunk trying to recreate when making the artificial fruit eaten by Momonosuke?',
    answers: [
      'Whitebeard’s fruit',
      'Kaido’s fruit',
      'Marco’s fruit',
      'Sengoku’s fruit'
    ],
    correctAnswer: 'Kaido’s fruit'
  },
  {
    question: 'Who inherited the will and sword of Kuina in Zoro’s journey?',
    answers: [
      'Tashigi',
      'Zoro',
      'Hiyori',
      'Momonosuke'
    ],
    correctAnswer: 'Zoro'
  },
  {
    question: 'What is the name of the legendary samurai whose grave and sword are tied to Wano’s history and Zoro’s parallels?',
    answers: [
      'Kawamatsu',
      'Shimotsuki Ryuma',
      'Ushimaru',
      'Yasuie'
    ],
    correctAnswer: 'Shimotsuki Ryuma'
  },
  {
    question: 'Which Straw Hat was the first to awaken Conqueror’s Haki besides Luffy, based on story confirmation?',
    answers: [
      'Sanji',
      'Jinbe',
      'Zoro',
      'Robin'
    ],
    correctAnswer: 'Zoro'
  },
  {
    question: 'What is the name of Robin’s gigantic demon-like form introduced in Wano?',
    answers: [
      'Demon Bloom',
      'Gigante Fleur',
      'Demonio Fleur',
      'Dark Hana Form'
    ],
    correctAnswer: 'Demonio Fleur'
  },
  {
    question: 'Who was the first Yonko that Luffy directly challenged in person?',
    answers: [
      'Whitebeard',
      'Big Mom',
      'Kaido',
      'Blackbeard'
    ],
    correctAnswer: 'Big Mom'
  },
  {
    question: 'What was the name of the massive elephant sword attack Zoro used against King?',
    answers: [
      'Ichidai Sanzen Daisen Sekai',
      'Hiryu Kaen',
      'King of Hell Three Sword Serpent',
      'Santoryu Ogi: Sanzen Sekai'
    ],
    correctAnswer: 'Ichidai Sanzen Daisen Sekai'
  },
  {
    question: 'Which admiral blinded himself because of his disgust with the world?',
    answers: [
      'Aokiji',
      'Kizaru',
      'Fujitora',
      'Ryokugyu'
    ],
    correctAnswer: 'Fujitora'
  },
  {
    question: 'What was the name of the alliance formed to bring down Kaido?',
    answers: [
      'Ninja-Pirate-Mink-Samurai Alliance',
      'Worst Generation Alliance',
      'New Dawn Alliance',
      'Wano Liberation Front'
    ],
    correctAnswer: 'Ninja-Pirate-Mink-Samurai Alliance'
  },
  {
    question: 'Who guarded the final Road Poneglyph clue location path alongside the Minks on Zou?',
    answers: [
      'Inuarashi and Nekomamushi',
      'Carrot and Wanda',
      'Shishilian and Bepo',
      'Pedro and Pekoms'
    ],
    correctAnswer: 'Inuarashi and Nekomamushi'
  },
  {
    question: 'What major truth was revealed about Luffy’s Devil Fruit in Wano?',
    answers: [
      'It was a Logia all along',
      'It was originally Roger’s fruit',
      'Its true name is Hito Hito no Mi, Model: Nika',
      'It was created by Vegapunk'
    ],
    correctAnswer: 'Its true name is Hito Hito no Mi, Model: Nika'
  },
  {
    question: 'What title is associated with Joy Boy in relation to Luffy’s awakening?',
    answers: [
      'The Sun God returns',
      'The Warrior of Liberation',
      'The New Pirate King',
      'The One Above All'
    ],
    correctAnswer: 'The Warrior of Liberation'
  },
  {
    question: 'Which event erased an island with a mysterious weapon after Sabo’s investigation?',
    answers: [
      'Ohara Incident',
      'God Valley Incident',
      'Lulusia Kingdom destruction',
      'Rocky Port Incident'
    ],
    correctAnswer: 'Lulusia Kingdom destruction'
  }
];

bgMusic.volume = 0.20;

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused === false && bgMusic.muted === false) {
    bgMusic.muted = true;
    musicBtn.innerText = 'Unmute Music';
  } else {
    bgMusic.muted = false;
    bgMusic.play();
    musicBtn.innerText = 'Mute Music';
  }
});

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const renderQuestion = () => {
  const currentQuestion = quizData[currentQuestionIndex];

  questionCount.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  questionText.innerText = currentQuestion.question;
  scoreText.innerText = `Score: ${score}`;

  answersBox.innerHTML = '';

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answerBtn = document.createElement('button');
    answerBtn.innerText = currentQuestion.answers[i];

    answerBtn.addEventListener('click', () => {
      if (answered === true) {
        return;
      }

      answered = true;

      if (currentQuestion.answers[i] === currentQuestion.correctAnswer) {
        score++;
        scoreText.innerText = `Score: ${score}`;
        answerBtn.style.border = '2px solid green';
      } else {
        answerBtn.style.border = '2px solid red';
      }

      const allAnswerButtons = answersBox.querySelectorAll('button');

      for (let j = 0; j < allAnswerButtons.length; j++) {
        if (allAnswerButtons[j].innerText === currentQuestion.correctAnswer) {
          allAnswerButtons[j].style.border = '2px solid green';
        }

        allAnswerButtons[j].disabled = true;
      }
    });

    answersBox.appendChild(answerBtn);
  }
};

const showFinalScreen = () => {
  questionCount.innerText = 'Quiz Finished';
  questionText.innerText = `You got ${score} out of ${quizData.length}`;
  answersBox.innerHTML = '';
  scoreText.innerText = `Final Score: ${score}`;

  nextBtn.style.display = 'none';
  restartBtn.style.display = 'inline-block';
};

nextBtn.addEventListener('click', () => {
  if (answered === false) {
    return;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    answered = false;
    renderQuestion();
  } else {
    showFinalScreen();
  }
});

restartBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  nextBtn.style.display = 'inline-block';
  restartBtn.style.display = 'none';

  renderQuestion();
});

renderQuestion();

