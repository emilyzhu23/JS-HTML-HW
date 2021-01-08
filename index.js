//1.7.21
myDiv = document.getElementById("myDiv");
console.log(myDiv);
var checkfh = document.getElementById('checkfh');
var checknotfh = document.getElementById('checknotfh');
var checknone = document.getElementById('checknone');
var radioyes = document.getElementById('radioyes');
var radiono = document.getElementById('radiono');
var radiomaybe = document.getElementById('radiomaybe');

// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.

  var wishsport = document.getElementById('wishsport').value;

  console.log(wishsport);
  console.log(checkfh.checked, checknotfh.checked, checknone.checked);
  console.log(radioyes.checked, radiono.checked, radiomaybe.checked);

  myDiv.innerHTML = "\n";

  myDiv.innerHTML += "\t\t<img src= 'fh.jpg' />\n";
  //First Q
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
