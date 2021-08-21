const input = document.querySelector('[data-js="username"]')

const dontChange = ['da', 'das', 'de', 'do', 'dos']

input.addEventListener('input', (event) => {
  const valueAsArray = event.target.value.split(' ')
  console.log('valueAsArray', valueAsArray)

  event.target.value = valueAsArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
      ? word.toLowerCase()
      : capitalize(word)
  }).join(' ')
})

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const form = document.querySelector('[data-js="form"]')
const select = document.createElement('select')
const colors = ['#6B7280', '#EF4444', '#F59E0B', '#10B981', '#3B82F6']
const colorsContainer = document.createElement('div')
colorsContainer.style.display = 'flex'

colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(option)
})

select.addEventListener('change', (event) => {
  colorsContainer.innerHTML = ''

  Array.from(event.target.selectedOptions).forEach(option => {
    const div = document.createElement('div')
    div.style.height = '100px'
    div.style.width = '100px'
    div.style.background = option.value
    colorsContainer.appendChild(div);
  })
})

select.setAttribute('multiple', '')
form.appendChild(select)
document.body.appendChild(colorsContainer)
