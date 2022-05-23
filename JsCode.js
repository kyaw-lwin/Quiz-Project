/**
 * hides intro and show question 1
 */
function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides question 1 shows question 2 and validate quest1 input
 */
function question2() {
  if(document.querySelector('input[name="quest1"]:checked') == null) {
    alert ("Please choose one");
    return false;
  } else
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}

/**
 * hides question 2 shows question 3 and validate quest2 input
 */
 function question3() {
  if(document.querySelector('input[name="quest2"]:checked') == null) {
    alert ("Please choose one");
    return false;
  } else 
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "inline-block";
}

/**
 * hides question 3 shows question 4 and validate quest3 input
 */
 function question4() {
  if(document.querySelector('input[name="quest3"]:checked') == null) {
    alert ("Please choose one");
    return false;
  } else 
  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "inline-block";
}

/**
 * hides question 4 shows question 5 and validate quest4 input
 */
 function question5() {
  if(document.querySelector('input[name="quest4"]:checked') == null) {
    alert ("Please choose one");
    return false;
  } else
  document.getElementById("question4").style.display = "none";
  document.getElementById("question5").style.display = "inline-block";
}


/**
 * hides question 5 shows results and validate quest5 input
 */
function results() {
  if(document.querySelector('input[name="quest5"]:checked') == null) {
    alert ("Please choose one");
    return false;
  } else
  calculateResults()
  document.getElementById("question5").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}


/**
 * calculates and displays the results
 */
function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      }
  }

  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      }
  }

  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      }
  }


  const result = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
  
  if (result == 50) {
    msg = "Brillient! All Correct!!";
  } 
  else if (result == 40 ) {
    msg = "You scored 40 out of 50.";
  } else if (result == 30 ) {
    msg = "You scored 30 out of 50.";
  } 
  else if (result == 20 ) {
    msg = "You scored 20 out of 50.";
  } 
  else {
    msg = "Oops! You only got a question right! Retry?";
  }

  document.getElementById("result").innerHTML = msg

}

