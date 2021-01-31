//Emily Zhu: Honors Comp Sci P7
//Date: 2.3.21

myStorage = window.localStorage;
myDiv = document.getElementById("myDiv");
prevAnswersDiv = document.getElementById("prevAnswersDiv");

//Get the list of strigified JSON objects from previous sessions
var prevSessionsDataStr = localStorage.getItem("prevSessions");
var prevSessionsDataJSON = JSON.parse(prevSessionsDataStr);

//Create a button to show the past sessions if clicked
myDiv.innerHTML += "\t\t<button onclick = 'clickPastSess()'>Past Responses</button>\n";

//The function that checks if the past session button was clicked and outputs accordingly
var clickCountPastSess = 0;
function clickPastSess()
{
  clickCountPastSess += 1;
  //If the button was clicked again, it minimizes the previous answers
  if (clickCountPastSess % 2 == 0)
  {
    prevAnswersDiv.innerHTML = "\n";
  }
  //If the button was clicked, it outputs the past responses
  else
  {
    for (i = prevSessionsDataJSON.length - 1; i >= 0; i--) /* Starts by outputting most recent response */
    {
      var prevSessionDataJSON = prevSessionsDataJSON[i];
      prevAnswersDiv.innerHTML += "\t\t<h3>Your Previous Answer #"+(i+1)+":</h3>";
      prevAnswersDiv.innerHTML += "\t\t<p>Your favorite color: </p>" + prevSessionDataJSON.favcolor;
      prevAnswersDiv.innerHTML += "\t\t<p>Your favorite album cover: </p>" + prevSessionDataJSON.favalbumcover;
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
  }
}

//This function checks what the user is typing in the textbox for the 5th question
var correctAnswer = "field hockey";
var wrongAnswerCount = 0;
var wishsport = "";
function checkTyping()
{
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
  console.log(wishsport);
}

// When the submit button is clicked
function myClick () {
  // Get the values that haven't already been gotten
  var favColor = document.getElementById("favcolor").value;
  var albumCover = document.getElementById("albumcover").value;
  var likefh = document.getElementById("likefh").value;
  var checkfh = document.getElementById('checkfh');
  var checknotfh = document.getElementById('checknotfh');
  var checknone = document.getElementById('checknone');
  var radioyes = document.getElementById('radioyes');
  var radiomaybe = document.getElementById('radiomaybe');
  var radiono = document.getElementById('radiono');

  myJSON = {
    "favcolor": favColor,
    "favalbumcover": albumCover,
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

  myDiv.innerHTML += "\t\t<img src= 'fh.jpg' />\n";

  if (likefh >= 50)
  {
    myDiv.innerHTML = "If you like field hockey so much, you def have good taste in sports";
  }
  else
  {
    myDiv.innerHTML += "\t\t<h1>You should like field hockey more. Your taste in sports is lacking</h1>\n"
  }

  if (checknone.checked)
  {
    //Neither
    myDiv.innerHTML += "\t\t<h1>You don't play a sport? U should try field hockey ;)</h1>\n"
  }
  else if (checknotfh.checked && !checkfh.checked)
  {
    //Just not field hockey
    myDiv.innerHTML += "\t\t<h1>How??? Field hockey is obviously the better sport. U should drop ur sport and play field hockey instead.</h1>\n"

  }

  else if (checkfh.checked)
  {
    //Field hockey checked
    myDiv.innerHTML += "\t\t<h1>Omg! Good job! You're definitely playing the right sport :)</h1>\n"
  }


  myDiv.innerHTML += "\t\t<h1>Yes! If you want to play field hockey, go for it! It's so much fun, I promise</h1>\n"

  if (radioyes.checked)
  {
    myDiv.innerHTML += "\t\t<h1>U considered playing field hockey which means you should play field hockey. It's great! ;)</h1>\n"
  }
  else if (radiono.checked)
  {
    myDiv.innerHTML += "\t\t<h1>Bro. Ur making me so sad. You should rly try it.</h1>\n"
  }
  else if (radiomaybe.checked)
  {
    myDiv.innerHTML += "\t\t<h1>Disappointed</h1>\n"
  }
}
