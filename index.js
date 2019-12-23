function removeAllEventListeners(element) {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
}

const button = document.getElementById('button')
button.addEventListener('click', () => {
  alert('Clicked on the button')
});

removeAllEventListeners(button);
