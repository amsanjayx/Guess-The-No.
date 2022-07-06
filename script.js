var randomnum = Math.floor(Math.random() * 100)+1;
var guess = 0;
function guessNumber()
{
    var num = document.getElementById('in').value;
    
    if (num > 100 || num < 1 || num ==='')
    {
        document.getElementById('out').innerText = 'Invalid Input';
    }
    else
    {
        guess++;
        var num = parseInt(document.getElementById('in').value);
        if (num === randomnum)
        {
            document.getElementById('out').innerHTML = '<i><b>GUESSED THE ANSWER CORRECTLY IN  '+ guess + ' guesses <b></i>';
        }
        else if (num > randomnum)
        {
            document.getElementById('out').innerText = 'GUESS A SMALLER NUMBER';
        }
        else
        {
            document.getElementById('out').innerText = 'GUESS A BIGGER NUMBER';
        }
    }
}