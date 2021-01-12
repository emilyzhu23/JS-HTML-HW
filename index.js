//1.7.21
myStorage = window.localStorage;
myDiv = document.getElementById("myDiv");
console.log(myDiv);

myDiv.innerHTML += "\t\t<h4>Previous Answer:</h4>";
var lastFavColor = localStorage.getItem("lastFavColor");
myDiv.innerHTML += "\t\t<p>Your Favorite Color: </p>" + lastFavColor;
var lastAlbumCover = localStorage.getItem("lastAlbumCover");
myDiv.innerHTML += "\t\t<p>Your Uploaded Album Cover: </p>" + lastAlbumCover;
var lastLikeFh = localStorage.getItem("lastLikeFh");
myDiv.innerHTML += "\t\t<p>How Much You Liked Field Hockey: </p>" + lastLikeFh + "/100";

var lastCheckFh = localStorage.getItem("lastCheckfh");
var lastChecknotFh = localStorage.getItem("lastChecknotfh");
var lastCheckNone = localStorage.getItem("lastChecknone");
console.log(lastCheckFh, lastChecknotFh, lastCheckNone); /*WHAT'S HAPPENING???*/
myDiv.innerHTML += "\t\t<p>What sport you played: </p>";
if (lastCheckFh == "true")
{
  myDiv.innerHTML += "\t\t<p>Field Hockey</p>";
}
if(lastChecknotFh == "true")
{
  myDiv.innerHTML += "\t\t<p>Not Field Hockey</p>";
}
if(lastCheckNone == "true")
{
  myDiv.innerHTML += "\t\t<p>No sport</p>";
}

var lastWishsport = localStorage.getItem("lastWishsport");

myDiv.innerHTML += "\t\t<p>What sport you wanted to play: </p>" + lastWishsport;

var lastRadioY = localStorage.getItem("lastRadioyes");
var lastRadioN = localStorage.getItem("lastRadiono");
var lastRadioM = localStorage.getItem("lastRadiomaybe");

myDiv.innerHTML += "\t\t<p>Had you considered playing field hockey: </p>";
if (lastRadioY == "true")
{
  myDiv.innerHTML += "\t\t<p>Yes</p>";
}
if(lastRadioN == "true")
{
  myDiv.innerHTML += "\t\t<p>No</p>";
}
if(lastRadioM == "true")
{
  myDiv.innerHTML += "\t\t<p>Maybe</p>";
}



// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  localStorage.clear();

  var favColor = document.getElementById("favcolor").value;
  localStorage.setItem("lastFavColor", favColor);
  var albumCover = document.getElementById("albumcover").value;
  localStorage.setItem("lastAlbumCover", albumCover);
  var likefh = document.getElementById("likefh").value;
  localStorage.setItem("lastLikeFh", likefh);
  var checkfh = document.getElementById('checkfh');
  localStorage.setItem("lastCheckfh", checkfh.checked);
  var checknotfh = document.getElementById('checknotfh');
  localStorage.setItem("lastChecknotfh", checknotfh.checked);
  var checknone = document.getElementById('checknone');
  localStorage.setItem("lastChecknone", checknone.checked);
  var radioyes = document.getElementById('radioyes');
  localStorage.setItem("lastRadioyes", radioyes.checked);
  var radiono = document.getElementById('radiono');
  localStorage.setItem("lastRadiono", radiono.checked);
  var radiomaybe = document.getElementById('radiomaybe');
  localStorage.setItem("lastRadiomaybe", radiomaybe.checked);
  var wishsport = document.getElementById('wishsport').value;
  localStorage.setItem("lastWishsport", wishsport);

  console.log(wishsport);
  console.log(checkfh.checked, checknotfh.checked, checknone.checked);
  console.log(radioyes.checked, radiono.checked, radiomaybe.checked);

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
