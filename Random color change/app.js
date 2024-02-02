const getColor =() => {

    // Generate a random number between 0 and 16777215
    const randomNumber = Math.floor(Math.random() * 16777215)


    // Convert the random number to a hexadecimal string and prepend with '#'
    const randomCode = '#' + randomNumber.toString(16)

    // Set the background color of the body to the generated color
    document.body.style.backgroundColor = randomCode;


    // Display the generated color code
    document.getElementById("color-code").innerText = randomCode;


    // Copies the generated color code to the clipboard
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(

    "click",
    getColor

);

getColor();