// lets start here..
// get all the buttons text & input Box

var inputValues = document.querySelector("input");
var buttons = document.querySelectorAll(".oprants");
var result = document.querySelector("#equal");
var clear = document.querySelector("#clear");
var del = document.querySelector("#del");
// getting each values

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // show in input
        inputValues.value += button.textContent;

        // show result
        result.onclick = function () {
            const x = inputValues.value;
            const y = eval(x)
            document.querySelector("input").value = y;
        }
        // clear all values
        clear.onclick = function () {
            inputValues.value = "";
        }

        // clear only previous value
        del.onclick = function () {

            var previous = inputValues.value;
            console.log(previous);
            document.querySelector("input").value = previous.substring(0, previous.length - 1);
        }
    });
});
