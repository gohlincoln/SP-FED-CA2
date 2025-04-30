document.addEventListener("DOMContentLoaded", () => {
  //ensures that Javascript code runs only after the HTML document hasa been completely loaded and parsed
  const wishesForm = document.getElementById("wishesForm"); //document.getElementById("wishesForm");
  const formOutput = document.getElementById("formOutput"); //References the element where form data will be displayed

  const validateName = () => {
    //name validation
    const name = document.getElementById("name").value.trim();//removes white space from from ends of the string
    if (name === "") {
      alert("Name is required.");
      return false;
    }

    return true;
  };

  const validateEmail = () => {
    //email validator
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; //gives the correct email format(//TLD must be between 2 and 6 letters long)($ ensures match must end at the end of the string)
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const validateSchool = () => {
    //school validation
    const school = document.getElementById("school").value;
    if (school === "") {
      alert("Please select your school.");
      return false;
    }
    return true;
  };

  const validateYearLevel = () => {
    //year level validation
    const yearLevel = document.querySelector(
      'input[name="year_level"]:checked'
    );
    if (!yearLevel) {
      alert("Please select your current year at SP.");
      return false;
    }
    return true;
  };

  const validateConsent = () => {
    //consent validation
    const consent = document.getElementById("remember").checked;
    if (!consent) {
      alert("You must consent to the sharing of this form.");
      return false;
    }
    return true;
  };

  const retrieveFormData = () => {
    //retrieving form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const school = document.getElementById("school").value;
    const yearLevel = document.querySelector(
      'input[name="year_level"]:checked'
    ).value;
    const experience = document.getElementById("commBox").value;
    const consent = document.getElementById("remember").checked;

    return {
      name,
      email,
      school,
      yearLevel,
      experience,
      consent,
    };
  };

  const displayFormData = (data) => {
    //display the data
    formOutput.innerHTML = `
      <h2>Form Data:</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>School:</strong> ${data.school}</p>
      <p><strong>Year Level:</strong> ${data.yearLevel}</p>
      <p><strong>Wishes:</strong> ${data.experience}</p>
    `;
  };

  wishesForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    if (
      validateName() &&
      validateEmail() &&
      validateSchool() &&
      validateYearLevel() &&
      validateConsent()
    ) {
      //Retrieving and displaying form data if all validations pass.
      const formData = retrieveFormData();
      displayFormData(formData);
      wishesForm.classList.add("green-bg"); //Adding a green-bg class to the form to indicate successful submission.
    }
  });

  wishesForm.addEventListener("reset", () => {
    formOutput.innerHTML = "";
    wishesForm.classList.remove("green-bg");
  }); //Clears the form output and removes the background color class when the form is reset.
});
