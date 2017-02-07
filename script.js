var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var briefInfoInput = document.getElementById('brief-info-text')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')

var previewName = document.getElementById('preview-name')
var previewBrief = document.getElementById('preview-brief')
var previewContact = document.getElementById('preview-contact')
// var code = document.getElementById('code')

var updateProfile = function () {
  var first = firstNameInput.value
  var last = lastNameInput.value
  var brief = briefInfoInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  previewName.innerHTML = 'Hi, my name is ' + first + ' ' + last + '!'

  previewBrief.innerHTML = brief

  previewContact.innerHTML = 'If you\'re interested in a date, ' +
    'you can email me at <a     href="mailto:' + email + '" target="_blank">' +
    email + '</a> or give me a call at <a href="tel:' + phone +
    '" target="_blank">' + phone + '</a>.'

  code.textContent = '<h1>Hi, my name is ' + first + ' ' + last +
    '!</h1>\n<p>' + brief + '</p>\n<p>\n  If you\'re interested in a date, ' +
    'you can email me at\n  <a href="mailto:' + email + '" target="_blank">' +
    email + '</a>\n  or give me a call at\n  <a href="tel:' + phone +
    '" target="_blank">' + phone + '</a>.\n</p>'
}

firstNameInput.addEventListener('input', updateProfile)
lastNameInput.addEventListener('input', updateProfile)
briefInfoInput.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)
