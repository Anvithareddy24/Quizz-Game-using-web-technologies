document.addEventListener('DOMContentLoaded', (event) => {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  let currentQuestionIndex = 0;

  const questions = [
      {
          question: "What is the capital of India?",
          options: ["New York", "New Delhi", "Paris", "Dubai"],
          answer: "New Delhi"
      },
      // More questions...
      {
          question: "What is the capital of Goa?",
          options: ["Chennai", "Hyderabad", "Panaji", "Amaravathi"],
          answer: "Panaji"
      },
      {
          question: "What is the capital of Tamilnadu?",
          options: ["Hyderabad", "Panaji", "Dispur", "Chennai"],
          answer: "Chennai"
      },
      {
          question: "What is the capital of Kerala?",
          options: ["Hyderabad", "Thiruvananthapuram", "Dispur", "Chennai"],
          answer: "Thiruvananthapuram"
      },
      {
          question: "What is the capital of Telangana?",
          options: ["Hyderabad", "Panaji", "Dispur", "Chennai"],
          answer: "Hyderabad"
      },



  ];

  function loadQuestion(questionIndex) {
      const question = questions[questionIndex];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';
      question.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.classList.add('btn', 'btn-option');
          button.onclick = () => selectOption(option);
          optionsElement.appendChild(button);
      });
  }

  function selectOption(selected) {
      const question = questions[currentQuestionIndex];
      if (selected === question.answer) {
          alert('Correct!');
      } else {
          alert('Wrong!');
      }
  }

  nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          loadQuestion(currentQuestionIndex);
      } else {
          alert('Quiz completed!');
          currentQuestionIndex = 0;
      }
      loadQuestion(currentQuestionIndex);
  });

  // Load the first question
  loadQuestion(currentQuestionIndex);
});