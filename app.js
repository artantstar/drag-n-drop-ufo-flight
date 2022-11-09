const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const elem of placeholders) {
  elem.addEventListener('dragover', dragover)
  elem.addEventListener('dragenter', dragenter)
  elem.addEventListener('dragleave', dragleave)
  elem.addEventListener('drop', dragdrop)
}
function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
  event.target.style.opacity=1; 
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
  event.preventDefault()
}

function dragenter(event) {
  event.target.classList.add('hovered')
}

function dragleave(event) {
  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  event.target.classList.remove('hovered')
  event.target.append(item)
}
