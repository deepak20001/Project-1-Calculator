let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
/* we get the button from here whenever a button is clicked */
let screenValue = '';
/* it is the value inside our input */

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        /* e.target is the button jispr click hua h and innerText se uske ander ka text milega */
        console.log('Button text is ', buttonText);
        /* This is just to check in console as a test case that is code running properly or not*/

        if (buttonText == 'X') {
            buttonText = '*';    /* as the computer don't think X as multiply */
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            /* This eval function helps in evaluating all previous stuff as output */
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}