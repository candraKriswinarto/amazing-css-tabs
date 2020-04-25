// Get all button element
let tabButton = document.querySelectorAll('.tabLinks');
let tabContent = document.querySelectorAll('.tabContent');

window.onload = () => {
  document.getElementById('defaultOpen').click();
}

// Hide content function
const hideContent = () => {
  tabContent.forEach(content => {
    content.style.display = "none"
  });
}

tabButton.forEach(tab => {
  tab.addEventListener('click', () => {
    const contentClass = `${tab.classList[1]}Content`;
    hideContent();
    document.querySelector(`.${contentClass}`).style.display = "block"
  })
});
