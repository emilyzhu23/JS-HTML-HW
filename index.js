//Emily Zhu: Honors Comp Sci P7
//Date: 2.5.21

myStorage = window.localStorage;
myDiv = document.getElementById("myDiv");
prevAnswersDiv = document.getElementById("prevAnswersDiv");

//Get the list of strigified JSON objects from previous sessions
var prevSessionsDataStr = localStorage.getItem("prevSessions");
var prevSessionsDataJSON = JSON.parse(prevSessionsDataStr);

//Create a button to show the past sessions if clicked
myDiv.innerHTML += "\t\t<button onclick = 'clickPastSess()' id = 'pastresponse'>Past Responses</button>\n";
buttonPast = document.getElementById("pastresponse");
var clickCountPastSess = 0;
function clickPastSess()
{
  /*
    Purpose: This outputs/minimizes the past sessions when the user clicks the button.
    Inputs: None, depends on when the user clicks
    Returns: None, outputs to website page
  */
  clickCountPastSess += 1;
  //If the button was clicked again, it minimizes the previous answers
  if (clickCountPastSess % 2 == 0)
  {
    prevAnswersDiv.innerHTML = "\n";
    buttonPast.innerHTML = "Past Responses";
  }
  //If the button was clicked, it outputs the past responses
  else
  {
    for (i = prevSessionsDataJSON.length - 1; i >= 0; i--) /* Starts by outputting most recent response */
    {
      var prevSessionDataJSON = prevSessionsDataJSON[i];
      prevAnswersDiv.innerHTML += "\t\t<h3>Your Previous Answer #"+(i+1)+":</h3>";
      prevAnswersDiv.innerHTML += "\t\t<p>Your favorite color: </p>" + prevSessionDataJSON.favcolor;
      prevAnswersDiv.innerHTML += "\t\t<p>How much you liked field hockey: </p>" + prevSessionDataJSON.likefh + "/100";
      prevAnswersDiv.innerHTML += "\t\t<p>What sport you played: </p>";
      if (prevSessionDataJSON.checkfh)
      {
        prevAnswersDiv.innerHTML += "\t\t<p>Field Hockey</p>";
      }
      if(prevSessionDataJSON.checknotfh)
      {
        prevAnswersDiv.innerHTML += "\t\t<p>Not Field Hockey</p>";
      }
      if(prevSessionDataJSON.checknone)
      {
        prevAnswersDiv.innerHTML += "\t\t<p>No sport</p>";
      }

      prevAnswersDiv.innerHTML += "\t\t<p>What sport you wish you played: </p>" + prevSessionDataJSON.wishsport;

      prevAnswersDiv.innerHTML += "\t\t<p>Had you considered playing field hockey: </p>";
      if (prevSessionDataJSON.radioyes)
      {
        prevAnswersDiv.innerHTML += "\t\t<p>Yes</p>";
      }
      if(prevSessionDataJSON.radiono)
      {
        prevAnswersDiv.innerHTML += "\t\t<p>No</p>";
      }
      if(prevSessionDataJSON.radiomaybe)
      {
        prevAnswersDiv.innerHTML += "\t\t<p>Maybe</p>";
      }
    }
    buttonPast.innerHTML += " --- Click again to minimize";
  }
}

function selectYes()
{
  /*
    Purpose: This automatically selects the "yes" option and makes it so the
    user can't pick the other 2 options
    Inputs: None, depends on whether the user is hovering over the option choices
    Returns: None, but does select the "yes" button and moves the other options
    down on the page away from the user's mouse
  */
  var radioyes = document.getElementById('radioyes');
  var q5div = document.getElementById('q5');
  radioyes.checked = true;
  var temp = q5div.innerHTML;
  q5div.innerHTML = "<br />" + temp;
}

var correctAnswer = "field hockey";
var wrongAnswerCount = 0;
var wishsport = "";
function checkTyping()
{
  /*
    Purpose: This checks what the user has typed into the textbox for the 4th question
    and verifies that it is the correct input
    Inputs: None, depends on what the user is typing
    Returns: None, but does delete what the user types if it's wrong
  */
  wishsport = document.getElementById('wishsport').value; /* Getting what the user has typed so far */
  for (i = 0; i < wishsport.length; i++)
  {
    if (wishsport[i] != correctAnswer[i]) /* Checks if input matches the correct answer */
    {
      document.getElementById("wishsport").value = '';
      wrongAnswerCount++
    }
  }
  if (wrongAnswerCount == 10) /* If they type it wrong 10 times */
  {
    var wishsportLabel = document.getElementById('wishsportlabel').innerHTML += "\tThe correct answer is 'field hockey' ;)";
  }
}


function myClick () {
  /*
    Purpose: This is the main function that runs when the user submits their form.
    Inputs: None, depends on whether or not the user clicks the button
    Returns: None, creates new page for the user
  */
  // Get the values that haven't already been gotten
  var favColor = document.getElementById("favcolor").value;
  var likefh = document.getElementById("likefh").value;
  var checkfh = document.getElementById('checkfh');
  var checknotfh = document.getElementById('checknotfh');
  var checknone = document.getElementById('checknone');
  var radiomaybe = document.getElementById('radiomaybe');
  var radiono = document.getElementById('radiono');

  myJSON = {
    "favcolor": favColor,
    "likefh": likefh,
    "checkfh": checkfh.checked,
    "checknotfh": checknotfh.checked,
    "checknone": checknone.checked,
    "radioyes": radioyes.checked,
    "radiono": radiono.checked,
    "radiomaybe": radiomaybe.checked,
    "wishsport": wishsport,
  }

  prevSessionsDataJSON.push(myJSON);
  console.log(prevSessionsDataJSON);
  // Storing the stringified list of JSON objects
  localStorage.setItem("prevSessions", JSON.stringify(prevSessionsDataJSON));

  // Creating another page
  myDiv.innerHTML = "\n";
  myDiv.style.backgroundColor = favColor;
  myDiv.innerHTML += "\t\t<h1>Field HOCKEY!!!</h1>\n";
  myDiv.innerHTML += "\t\t<img src = 'fieldhockey.jpg' />";

  if (likefh >= 50)
  {
    myDiv.innerHTML += "\t\t<h1>If you like field hockey so much, you def have good taste in sports</h1>\n";
  }
  else
  {
    myDiv.innerHTML += "\t\t<h1>You should like field hockey more. Your taste in sports is lacking</h1>\n";
  }

  if (checknone.checked)
  {
    //Neither
    myDiv.innerHTML += "\t\t<h1>You don't play a sport? U should try field hockey ;)</h1>\n";
  }
  else if (checknotfh.checked && !checkfh.checked)
  {
    //Just not field hockey
    myDiv.innerHTML += "\t\t<h1>How??? Field hockey is obviously the better sport. U should drop ur sport and play field hockey instead.</h1>\n";

  }

  else if (checkfh.checked)
  {
    //Field hockey checked
    myDiv.innerHTML += "\t\t<h1>Omg! Good job! You're definitely playing the right sport :)</h1>\n";
  }


  myDiv.innerHTML += "\t\t<h1>Yes! If you want to play field hockey, go for it! It's so much fun, I promise</h1>\n";

  if (radioyes.checked)
  {
    myDiv.innerHTML += "\t\t<h1>U considered playing field hockey which means you should play field hockey. It's great! ;)</h1>\n";
  }
  else if (radiono.checked)
  {
    myDiv.innerHTML += "\t\t<h1>Bro. Ur making me so sad. You should rly try it.</h1>\n";
  }
  else if (radiomaybe.checked)
  {
    myDiv.innerHTML += "\t\t<h1>Disappointed</h1>\n";
  }
}
