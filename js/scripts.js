window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
  
      // Access HTML elements and gather values
      const age = parseInt(document.querySelector("input#age").value);
      let vegetarian = document.getElementById("vegetarian").value;
      let education = document.getElementById("education").value;
      let snack = document.getElementById('snack').value;
      let energy = document.getElementById("energy").value;
  
      // Initialize the programmingLanguage variable
      let programmingLanguage;
  
      if (vegetarian === 'yes' && education === 'high-school' && snack === 'chips' && energy === 'day') {
        programmingLanguage = 'Ruby';
      } else if (vegetarian === 'yes' && education === 'undergrad' && snack === 'chips' && energy === 'day') {
        programmingLanguage = 'C#';
      } else if (vegetarian === 'no' && education === 'masters' && snack === 'cookies' && energy === 'night') {
        programmingLanguage = 'Javascript';
      } else {
        programmingLanguage = 'Unknown';
      }
  
      // Display the result
      displayResult(programmingLanguage);
    };
  
    function displayResult(programmingLanguage) {
      let resultElement = document.getElementById('result');
      let sentence;
  
      if (programmingLanguage === 'Unknown') {
        sentence = 'Unknown, please read more about coding languages to find what would work best for you. <a href="https://www.computerscience.org/resources/computer-programming-languages/">Learn more</a>';
      } else {
        sentence = `${programmingLanguage} is the suggested coding language for you.`;
      }
  
      resultElement.innerHTML = '';
  
      resultElement.innerHTML = `<h2>Results:</h2><p>${sentence}</p>`;
      resultElement.style.display = 'block';
    }
  };
  