window.onload = function() {

const form = document.querySelectory("form");
form.onsubmit = function(event) {
    event.preventDefault();

    // access HTML elements and gather age value

    const age = parseInt(document.querySelector("input#age").value);

    let vegetarian = document.getElementById("vegetarian").value
    let educationLevel = document.getElementById("education").value;
    let snackType= document.getElementById('snack').value;
    let energyLevel= document.getElementById("energy").value;
 
    if (vegetarian === 'yes' && educationLevel === 'high-school' && snackType === 'chips' && energyLevel === 'day') {
        programmingLanguage = 'Ruby';
      } else if (vegetarian === 'yes' && educationLevel === 'undergrad' && snackType === 'chips' && energyLevel === 'day') {
        programmingLanguage = 'C#';
      } else if (vegetarian === 'no' && educationLevel === 'masters' && snackType === 'cookies' && energyLevel === 'night') {
        programmingLanguage = 'Javascript';
      } else {
        programmingLanguage = 'Unknown';
      }
    

}















}