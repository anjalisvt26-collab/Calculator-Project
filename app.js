const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        let value = button.innerText.trim();

        // CE aur C dono display clear karenge
        if (value === "CE" || value === "C") {
            display.value = "";
        }

        // Answer calculate karega
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        // Positive/Negative
        else if (value === "+/-") {
            if (display.value !== "") {
                display.value = (-Number(display.value)).toString();
            }
        }

        // Number aur operators display me add honge
        else {
            display.value += value;
        }

    });
});