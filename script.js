const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%&?^~*=/({[]})'

const passwordLength = document.getElementById('length')
const useLetter = document.getElementById('useLetter')
const useNumber = document.getElementById('useNumber')
const useSymbol = document.getElementById('useSymbol')
const passwordBox = document.getElementById('password')

let allChars = ''

function generatePassword() {
  let newPassword = ''

  if (useLetter.checked) {
    allChars += uppercase + lowercase
    newPassword += uppercase[Math.floor(Math.random() * uppercase.length)]
    newPassword += lowercase[Math.floor(Math.random() * lowercase.length)]
  }

  if (useNumber.checked) {
    allChars += numbers
    newPassword += numbers[Math.floor(Math.random() * numbers.length)]
  }

  if (useSymbol.checked) {
    allChars += symbols
    newPassword += symbols[Math.floor(Math.random() * symbols.length)]
  }

  while (passwordLength.value > newPassword.length) {
    if (allChars.length == 0)
      allChars = uppercase + lowercase + numbers + symbols

    newPassword += allChars[Math.floor(Math.random() * allChars.length)]
  }

  passwordBox.value = newPassword
  allChars = ''
}

function copyPassword() {
  passwordBox.select()
  navigator.clipboard.writeText(passwordBox.value)
}
