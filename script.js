var beep1 = new Audio('https://cdn.glitch.global/087fd7a0-f5c4-4eb5-a759-26611465694a/beep1.mp3?v=1647034402603');
beep1.loop = true; 
var beep2 = new Audio('https://cdn.glitch.global/087fd7a0-f5c4-4eb5-a759-26611465694a/beep2.mp3?v=1647034406203');
beep2.loop = true;
var beep3 = new Audio('https://cdn.glitch.global/087fd7a0-f5c4-4eb5-a759-26611465694a/beep3.mp3?v=1647034409660');
beep3.loop = true;
var beep4 = new Audio('https://cdn.glitch.global/087fd7a0-f5c4-4eb5-a759-26611465694a/beep4.mp3?v=1647034412363');
beep4.loop = true;
let started = false;
let bot = false;
let pattern = [];
let inputs = [];
let counter = 0;
let next = 0;
let q = 0, j = 0;
let patternLength = 8;
let shapeChoice = false; 
let colorChoice = 2; 
let buttonDownColor1 = "#57A050";
let buttonUpColor1 = "#7de274";
let buttonDownColor2 = "#3C3692";
let buttonUpColor2 = "#83c9f8";
let buttonDownColor3 = "#A05050";
let buttonUpColor3 = "#f79c9c";
let buttonDownColor4 = "#859442";
let buttonUpColor4 = "#f6f79c";

function start()
{  
    if(started)
    {
        end();
    }

    else
    {
        startButton.innerText = "Stop";
        started = true;
        setPattern();
        game();
    }
}

function decreasePattern()
{
    if(!started)
    {
        if(patternLength == 4)
        {
            alert("Cannot Decrease Anymore.");
        }
        
        else
        {
            patternLength--;
        }
    
        difficultyDisplay();
    }

    else
    {
        alert("Cannot modify pattern While game is active.");
    }
}

function increasePattern()
{
    if(!started)
    {
        if(patternLength == 12)
        {
            alert("Cannot Increase Anymore.");
        }
    
        else
        {
            patternLength++;
        }
    
        difficultyDisplay();
    }

    else 
    {
            alert("Cannot modify pattern While game is active.");
    }
}

function changeShape()
{
    
    if(shapeChoice)
    {
        document.getElementById("shapeChanger").style.borderRadius = '35px';
        document.getElementById("green").style.borderRadius = '15px';
        document.getElementById("blue").style.borderRadius = '15px';
        document.getElementById("red").style.borderRadius = '15px';
        document.getElementById("yellow").style.borderRadius = '15px';  
        shapeChoice = false;     
    }

    else
    {
        document.getElementById("shapeChanger").style.borderRadius = '10px';
        document.getElementById("green").style.borderRadius = '150px';
        document.getElementById("blue").style.borderRadius = '150px';
        document.getElementById("red").style.borderRadius = '150px';
        document.getElementById("yellow").style.borderRadius = '150px';
        shapeChoice = true;
    }
}

function changeColor()
{
    if(colorChoice == 5)
    {
        colorChoice = 1;
    }

    switch(colorChoice)
    {
        case 1:
            buttonUpColor1 = "#7de274";
            document.getElementById("green").style.background = buttonUpColor1;
            buttonDownColor1 = "#57A050";
            buttonUpColor2 = "#83c9f8";
            document.getElementById("blue").style.background = buttonUpColor2;
            buttonDownColor2 = "#3C3692";
            buttonUpColor3 = "#f79c9c";
            document.getElementById("red").style.background = buttonUpColor3;
            buttonDownColor3 = "#A05050";
            buttonUpColor4 = "#f6f79c";   
            document.getElementById("yellow").style.background = buttonUpColor4;
            buttonDownColor4 = "#859442";
            break;

        case 2:
            buttonUpColor1 = "#FF7300";
            document.getElementById("green").style.background = buttonUpColor1;
            buttonDownColor1 = "#A54A00";
            buttonUpColor2 = "#00FFB2";
            document.getElementById("blue").style.background = buttonUpColor2;
            buttonDownColor2 = "#00A06F";
            buttonUpColor3 = "#6400FF";
            document.getElementById("red").style.background = buttonUpColor3;
            buttonDownColor3 = "#2E0076";
            buttonUpColor4 = "#BDFF00";
            document.getElementById("yellow").style.background = buttonUpColor4;
            buttonDownColor4 = "#78A200";   
            break;

        case 3:
            buttonUpColor1 = "#FF5ECF";
            document.getElementById("green").style.background = buttonUpColor1;
            buttonDownColor1 = "#AA3E8A";
            buttonUpColor2 = "#FFD873";
            document.getElementById("blue").style.background = buttonUpColor2;
            buttonDownColor2 = "#988143";
            buttonUpColor3 = "#FF5733";
            document.getElementById("red").style.background = buttonUpColor3;
            buttonDownColor3 = "#9F351F";
            buttonUpColor4 = "#8C89FD";   
            document.getElementById("yellow").style.background = buttonUpColor4;
            buttonDownColor4 = "#3F3D76";
            break;

        case 4:
            buttonUpColor1 = "#DAF7A6";
            document.getElementById("green").style.background = buttonUpColor1;
            buttonDownColor1 = "#839463";
            buttonUpColor2 = "#FFC300";
            document.getElementById("blue").style.background = buttonUpColor2;
            buttonDownColor2 = "#7E6002";
            buttonUpColor3 = "#C70039";
            document.getElementById("red").style.background = buttonUpColor3;
            buttonDownColor3 = "#6E0020";
            buttonUpColor4 = "#983A7C";     
            document.getElementById("yellow").style.background = buttonUpColor4;
            buttonDownColor4 = "#552146";
            break;
    }

    colorChoice++;
}

function difficultyDisplay()
{
    switch(patternLength)
    {
        case 4:
            document.getElementById("difficulty").textContent = "4";
            document.getElementById("difficulty").style.color = "#0FCB00";
            break;

        case 5:
            document.getElementById("difficulty").textContent = "5";
            document.getElementById("difficulty").style.color = "#11E500";
            break;

        case 6:
            document.getElementById("difficulty").textContent = "6";
            document.getElementById("difficulty").style.color = "#6CE500";
            break;

        case 7:
            document.getElementById("difficulty").textContent = "7";
            document.getElementById("difficulty").style.color = "#B8E500";
            break;

        case 8:
            document.getElementById("difficulty").textContent = "8";
            document.getElementById("difficulty").style.color = "#EFFE00";
            break;
    
        case 9:
            document.getElementById("difficulty").textContent = "9";
            document.getElementById("difficulty").style.color = "#FFD100";
            break;
    
        case 10:
            document.getElementById("difficulty").textContent = "10";
            document.getElementById("difficulty").style.color = "#FF9E00";
            break;
    
        case 11:
            document.getElementById("difficulty").textContent = "11";
            document.getElementById("difficulty").style.color = "#FF5100";
            break;

        case 12:
            document.getElementById("difficulty").textContent = "12";
            document.getElementById("difficulty").style.color = "#FF0000";
            break;
    }
}

function greenButtonDown()
{
    document.getElementById("green").style.background = buttonDownColor1;
    beep1.play();

    if(!bot && started)
    {
        inputs[counter] = 0;

        if(inputs[counter] == pattern[counter])
        {
            counter++;
        }

        else
        {
            end();
            alert("You lose!");
            return;
        }

        if(counter == next)
        {
            setTimeout(game, 1000);
        }
    }
}

function greenButtonUp()
{
    document.getElementById("green").style.background = buttonUpColor1;
    beep1.pause();
}

function blueButtonDown()
{
    document.getElementById("blue").style.background = buttonDownColor2;
    beep2.play();

    if(!bot && started)
    {
        inputs[counter] = 1;

        if(inputs[counter] == pattern[counter])
        {
            counter++;
        }

        else
        {
            end();
            alert("You lose!");
            return;
        }

        if(counter == next)
        {
            setTimeout(game, 1000);
        }
    }
}

function blueButtonUp()
{
    document.getElementById("blue").style.background = buttonUpColor2;
    beep2.pause();
}

function redButtonDown()
{
    document.getElementById("red").style.background = buttonDownColor3;
    beep3.play();

    if(!bot && started)
    {
        inputs[counter] = 2;

        if(inputs[counter] == pattern[counter])
        {
            counter++;
        }

        else
        {        
            end();
            alert("You lose!");
            return;
        }

        if(counter == next)
        {
            setTimeout(game, 1000);
        }
    }
}

function redButtonUp()
{
    document.getElementById("red").style.background = buttonUpColor3;
    beep3.pause();
}

function yellowButtonDown()
{
    document.getElementById("yellow").style.background = buttonDownColor4;
    beep4.play();
    
    if(!bot && started)
    {
        inputs[counter] = 3;

        if(inputs[counter] == pattern[counter])
        {
            counter++;
        }

        else
        {      
            end();
            alert("You lose!");
            return;
        }

        if(counter == next)
        {
            setTimeout(game, 1000);
        }
    }

}

function yellowButtonUp()
{
    document.getElementById("yellow").style.background = buttonUpColor4;
    beep4.pause();
}

function setPattern()
{
    for(let i = 0; i < patternLength; i++)
    {
        pattern[i] = (Math.random() * 3).toFixed(0);
    }
}

function game()
{
    if(counter == patternLength)
    {
        end();
        alert("You Win!"); 
        return;
    }

    counter = 0;
    bot = true;

    if(pattern[j] == 0)
    {
        greenButtonDown();
        setTimeout(greenButtonUp, 1000);

        if(j < next)
        {
            j++
            setTimeout(game, 1500);
        }

        else if(j == next)
        {
            j = 0;
            next++;
        }
    }
    
    else if(pattern[j] == 1)
    {
        blueButtonDown();
        setTimeout(blueButtonUp, 1000);

        if(j < next)
        {
            j++
            setTimeout(game, 1500);
        }

        else if(j == next)
        {
            j = 0;
            next++;
        }
    }
    
    else if(pattern[j] == 2)
    {
        redButtonDown();
        setTimeout(redButtonUp, 1000);

        if(j < next)
        {
            j++
            setTimeout(game, 1500);
        }

        else if(j == next)
        {
            j = 0;
            next++;
        }
    }
    
    else
    {
        yellowButtonDown();
        setTimeout(yellowButtonUp, 1000);

        if(j < next)
        {
            j++
            setTimeout(game, 1500);
        }

        else if(j == next)
        {
            j = 0;
            next++;
        }
    }
    bot = false;
}

function end()
{
    counter = 0;
    next = 0;
    started = false;
    startButton.innerText = "Start";
    greenButtonUp();
    blueButtonUp();
    redButtonUp();
    yellowButtonUp();
}