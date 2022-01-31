let buttons = document.querySelectorAll("button");

let screen = document.getElementById("screen");

let screenValue = "";
for (items of buttons) {
    items.addEventListener('click', function(event) {
        btnText = event.target.innerText;
        console.log(btnText);
        if (btnText == '=') {
            let result = eval(screenValue);
            screen.value = result;
            screenValue = result;
        } else if (btnText == "x") {
            btnText = "*";
            screenValue += btnText;
            screen.value = screenValue;
        } else if (btnText == '÷') {
            btnText = "/";
            screenValue += btnText;
            screen.value = screenValue;

        } else if (btnText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (btnText == `b`) {
            var value = document.getElementById("screen").value;
            document.getElementById("screen").value = value.substr(0, value.length - 1);
            screenValue = screen.value;
        } else if (screen.value == 'NaN' || screen.value == 'undefined') {
            screenValue = btnText;
            screen.value = screenValue;
        } else {
            screenValue += btnText;
            screen.value = screenValue;

        }

    })

}