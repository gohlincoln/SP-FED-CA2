document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn"); //code only runs when website has finished loading

  // Show the button when the user scrolls down 200px
  window.addEventListener("scroll", function () {
    //checking for scroll event
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the button when the user scrolls down 200px
  window.addEventListener("scroll", function () {
    scrollToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Define quiz questions with objects and arrays
const questions = [
  {
    question: "In what year was Singapore Polytechnic first established?",
    options: ["1954", "1960", "1975", "1980"],
    correct: "1954",
    name: "establishment_year",
  },
  {
    question:
      "Singapore Polytechnic was the first polytechnic to be established in Singapore. True or False?",
    options: ["True", "False"],
    correct: "True",
    name: "first_polytechnic",
  },
  {
    question:
      "Which school is the most recent addition to Singapore Polytechnic?",
    options: [
      "School of Computing",
      "School of Business",
      "School of Artificial Intelligence",
      "School of Design",
    ],
    correct: "School of Artificial Intelligence",
    name: "recent_school",
  },
  {
    question:
      "Which of the following is a course offered by Singapore Polytechnic?",
    options: [
      "Aerospace Engineering",
      "Marine Biology",
      "Urban Planning",
      "Veterinary Medicine",
    ],
    correct: "Aerospace Engineering",
    name: "course_offered",
  },
  {
    question: "Where is the main campus of Singapore Polytechnic located?",
    options: ["Dover", "Bishan", "Jurong", "Tampines"],
    correct: "Dover",
    name: "campus_location",
  },
  {
    question: "What is the motto of Singapore Polytechnic?",
    options: [
      "Berita Harian",
      "Open the Door",
      "Beyond Boundaries",
      "To Break New Frontiers",
    ],
    correct: "To Break New Frontiers",
    name: "motto",
  },
  {
    question:
      "Singapore Polytechnic's library is named after which historical figure?",
    options: ["Tan Kah Kee", "Lee Kong Chian", "Goh Chok Tong", "Yusof Ishak"],
    correct: "Lee Kong Chian",
    name: "library_name",
  },
  {
    question:
      "What is the name of the student activity hub at Singapore Polytechnic?",
    options: ["The Hive", "The Hub", "The Junction", "The Arena"],
    correct: "The Junction",
    name: "activity_hub",
  },
  {
    question:
      "Which of the following is a notable alumni of Singapore Polytechnic?",
    options: [
      "Sim Wong Hoo, founder of Creative Technology",
      "Ho Ching, CEO of Temasek Holdings",
      "Jack Ma, founder of Alibaba",
      "Elon Musk, CEO of SpaceX",
    ],
    correct: "Sim Wong Hoo, founder of Creative Technology",
    name: "notable_alumni",
  },
  {
    question:
      "What is the name of Singapore Polytechnic's annual student arts and cultural festival?",
    options: [
      "SP Arts Fiesta",
      "SP Cultural Night",
      "SPARTS Festival",
      "SP Extravaganza",
    ],
    correct: "SP Arts Fiesta",
    name: "arts_festival",
  },
];
//The shuffle function takes an array and returns a new array with its elements shuffled in a random order. This is done using the sort method with a comparator function that returns a random value between -0.5 and 0.5.
// Function to shuffle an array from chatgpt
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Function to render questions
function renderQuestions() {
  const quizQuestionsDiv = document.getElementById("quizQuestions"); //selects the div element with the ID quizQuestions.
  quizQuestionsDiv.innerHTML = ""; // Clear previous questions

  // Shuffle and select 3 questions
  const selectedQuestions = shuffle(questions).slice(0, 3); //.slice(0, 3) selects the first three questions from the shuffled array to be displayed.

  selectedQuestions.forEach((questionObj) => {
    //This line initiates a loop that processes each of the selected questions.
    const fieldset = document.createElement("fieldset"); //document.createElement("fieldset") creates a new fieldset element to group each question and its options.
    fieldset.className = "mb-3"; //assigns class mb-3 to the fieldset for style

    const legend = document.createElement("legend"); //create paragraph element
    legend.className = "form-label";
    legend.textContent = questionObj.question;
    fieldset.appendChild(legend); //adds legend to fieldset as a child

    // Shuffle options
    const shuffledOptions = shuffle(questionObj.options);
    shuffledOptions.forEach((option, idx) => {
      const div = document.createElement("div"); //const div = document.createElement("div") creates a div element to wrap the radio button and its label.
      div.className = "form-check";

      const input = document.createElement("input");
      input.type = "radio";
      input.id = `${questionObj.name}${idx}`; //sets a unique ID for the input by combining the question name and index.
      input.name = questionObj.name;
      input.value = option;
      input.className = "form-check-input";
      input.required = true;

      const label = document.createElement("label");
      label.htmlFor = input.id;
      label.className = "form-check-label";
      label.textContent = option;

      div.appendChild(input);
      div.appendChild(label);
      fieldset.appendChild(div);
    });

    quizQuestionsDiv.appendChild(fieldset);
  });
}

// Call renderQuestions on page load
window.onload = renderQuestions;

// Handle form submission
document.getElementById("submitBtn").addEventListener("click", function () {
  const form = document.getElementById("singaporepolyquiz");
  const feedback = document.getElementById("feedback");
  let feedbackHtml = "";
  let score = 0;

  // Check each question's answer
  document.querySelectorAll("fieldset").forEach((fieldset) => {
    //This line selects all fieldset elements (each representing a question) and iterates over them using the forEach method.
    const selectedOption = fieldset.querySelector(
      'input[type="radio"]:checked'
    );
    const questionName = fieldset.querySelector('input[type="radio"]').name;
    const questionObj = questions.find((q) => q.name === questionName);// finds the question object in the questions array that matches the name.

    if (selectedOption) {
      feedbackHtml +=
        selectedOption.value === questionObj.correct
          ? `<div class="alert alert-success">Correct! ${selectedOption.value} is the right answer.</div>`//feedback html yay
          : `<div class="alert alert-danger">Incorrect. The correct answer is ${questionObj.correct}.</div>`;//feedback html :(   
    } else {
      feedbackHtml +=
        '<div class="alert alert-warning">Please answer all questions before submitting.</div>';//if no answer is chosen
    }
  });

  // Display the score
  feedbackHtml += `<div class="alert alert-info">Your score: ${score} out of 3</div>`;
  feedback.innerHTML = feedbackHtml;
});

// Handle form reset
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("feedback").innerHTML = "";
  renderQuestions(); // Re-render the questions
});
