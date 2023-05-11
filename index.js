const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passGen = document.getElementById("generatePassword")
let Ltext = document.getElementById("Textleft")
let Rtext = document.getElementById("Textright")

passGen.addEventListener("click", function () {
    Ltext.textContent = ""
    Rtext .textContent = ""
    Ltext.textContent = randomPasswordGenerate()
    Rtext.textContent = randomPasswordGenerate()

})


let passwordLimit = 15

function randomPasswordGenerate() {
    let NewPassword = ""
    for (let i = 0; i < passwordLimit; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        NewPassword += characters[randomNumber]
    }
    return NewPassword
}