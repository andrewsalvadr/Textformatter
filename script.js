const inputText = document.getElementById('inputText')
const outputText = document.getElementById
('outputText')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const capital = document.getElementById('capital')
const bold = document.getElementById('bold')
const italic = document.getElementById('italic')
const underline = document.getElementById('underline')

inputText.addEventListener('keyup', valueText);

function valueText () {
    outputText.innerHTML = inputText.value;
}

uppercase.addEventListener('click', () => {
    return(outputText.innerHTML = outputText.innerHTML.toUpperCase())
})

lowercase.addEventListener('click', () => {
    return(outputText.innerHTML = outputText.innerHTML.toLowerCase())
})

capital.addEventListener('click', () => {
    outputText.innerHTML = outputText.innerHTML.charAt(0).toUpperCase() + outputText.innerHTML.slice(1).toLowerCase()
})

bold.addEventListener('click', () => {
   if (bold.classList.contains("active")) {
       bold.classList.remove("active")
       outputText.style.fontWeight= "400"
   } else {
       bold.classList.add("active")
       outputText.style.fontWeight= "900"
   }
})

italic.addEventListener('click', () => {
    if (italic.classList.contains("active")) {
        italic.classList.remove("active")
        outputText.style.fontStyle= ""
    } else {
        italic.classList.add("active")
        outputText.style.fontStyle= "italic"
    }
 })

underline.addEventListener('click', () => {
    if (underline.classList.contains("active")) {
        underline.classList.remove("active")
        outputText.style.textDecoration= "underline"
    } else {
        underline.classList.add("active")
        outputText.style.textDecoration= "underline"
    }
 })