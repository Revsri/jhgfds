var y = Math.floor(Math.random() * 10 + 1);
playername = localStorage.getItem("player_name");
var guess = 1;
function submit()
{
    var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("CONGRUAYULLATIONS!!!"+playername+" YOU GUESSED IT RIGHT"+ guess + "GUESS");
    guess= 1;
}
else if(x > y)
{
    guess++;
    alert("OPPS SORRY!! TRY A SMALL NUMBER");
}
else
{
    guess++;
    alert("OPPS SORRY!! TRY GREATER NUMBER")
}
}

function playagain()
{ 
    y = Math.floor(Math.random() * 10 + 1);
}
