require('typeface-abeezee')

var element = document.createElement('p')
element.innerHTML = 'Oh boyyy'
document.body.appendChild(element)

var styleElement = document.createElement('style')
styleElement.type = 'text/css'
styleElement.innerHTML = 'html { font-family: ABeeZee; }'
document.head.appendChild(styleElement)