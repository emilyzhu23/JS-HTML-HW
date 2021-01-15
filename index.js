//1.15.21
myStorage = window.localStorage;
myDiv = document.getElementById("myDiv");
//localStorage.clear();
var prevSessionsDataStr = localStorage.getItem("prevSessions");
console.log(prevSessionsDataStr);
if (prevSessionsDataStr == null)
{
  myJSONtest = {
    "favcolor": "jdiafhl",
    "favalbumcover": "lakejlkfaj",
    "likefh": "laejflka",
    "checkfh": true,
    "checknotfh": false,
    "checknone": true,
    "radioyes": false,
    "radiono": true,
    "radiomaybe": false,
    "wishsport": "adkjld",
  }
  var prevSessionsDataJSON = [myJSONtest];
  console.log("NO DATA IN STORAGE");
}
else
{
  var prevSessionsDataJSON = JSON.parse(prevSessionsDataStr);
  console.log(prevSessionsDataJSON); /*LIST WITH STRINGS*/
  console.log(prevSessionsDataJSON.length);
  var count = 0;
  for (i = 0; i < prevSessionsDataJSON; i++)
  {
    console.log(prevSessionsDataJSON[i]);
    console.log(i);
    var prevSessionJSON = JSON.parse(prevSess);
    console.log(prevSessionJSON)
  }
}


/*
myDiv.innerHTML += "\t\t<h3>Your Previous Answers: </h3>";
myDiv.innerHTML += "\t\t<p>Your favorite color: </p>" + prevSessionDataJSON.favcolor;
myDiv.innerHTML += "\t\t<p>Your favorite album cover: </p>" + prevSessionDataJSON.favalbumcover;
myDiv.innerHTML += "\t\t<p>How much you liked field hockey: </p>" + prevSessionDataJSON.likefh + "/100";
myDiv.innerHTML += "\t\t<p>What sport you played: </p>";
if (prevSessionDataJSON.checkfh)
{
  myDiv.innerHTML += "\t\t<p>Field Hockey</p>";
}
if(prevSessionDataJSON.checknotfh)
{
  myDiv.innerHTML += "\t\t<p>Not Field Hockey</p>";
}
if(prevSessionDataJSON.checknone)
{
  myDiv.innerHTML += "\t\t<p>No sport</p>";
}

myDiv.innerHTML += "\t\t<p>What sport you wish you played: </p>" + prevSessionDataJSON.wishsport;

myDiv.innerHTML += "\t\t<p>Had you considered playing field hockey: </p>";
if (prevSessionDataJSON.radioyes)
{
  myDiv.innerHTML += "\t\t<p>Yes</p>";
}
if(prevSessionDataJSON.radiono)
{
  myDiv.innerHTML += "\t\t<p>No</p>";
}
if(prevSessionDataJSON.radiomaybe)
{
  myDiv.innerHTML += "\t\t<p>Maybe</p>";
}
*/

// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.

  var favColor = document.getElementById("favcolor").value;
  var albumCover = document.getElementById("albumcover").value;
  var likefh = document.getElementById("likefh").value;
  var checkfh = document.getElementById('checkfh');
  var checknotfh = document.getElementById('checknotfh');
  var checknone = document.getElementById('checknone');
  var radioyes = document.getElementById('radioyes');
  var radiono = document.getElementById('radiono');
  var radiomaybe = document.getElementById('radiomaybe');
  var wishsport = document.getElementById('wishsport').value;

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

  console.log(prevSessionsDataJSON);
  prevSessionsDataJSON.push(myJSON);
  console.log(prevSessionsDataJSON);
  localStorage.setItem("prevSessions", JSON.stringify(prevSessionsDataJSON)); /*Thought stored as list*/

  myDiv.innerHTML = "\n";
  myDiv.style.backgroundColor = favColor;

  myDiv.innerHTML += "\t\t<img src= 'fh.jpg' />\n";
  //First Q

  if (likefh >= 50)
  {
    myDiv.innerHTML += "\t\t<h1>If you like field hockey so much, you def have good taste in sports</h1>\n"
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



  if (wishsport.toLowerCase() == "field hockey")
  {
    myDiv.innerHTML += "\t\t<h1>Yes! If you want to play field hockey, go for it! It's so much fun, I promise</h1>\n"
  }
  else
  {
    myDiv.innerHTML += "\t\t<h1>I'm disappointed. The sport you should want to play is field hockey. That was the correct answer. :(</h1>\n"
  }

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
