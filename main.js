// Get all button element
let tabButton = document.querySelectorAll('.tabLinks');
let tabContent = document.querySelectorAll('.tabContent');
let svgs = document.getElementsByTagName('svg');

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
    for(let i = 0; i < svgs.length; i++) {
      if(tab.classList[1] == svgs[i].id) {
        svgs[i].style.fill = '#b62ec4';
      } else {
        svgs[i].style.fill = '#666';
      }
    }
    document.querySelector(`.${contentClass}`).style.display = "block";
  })
});
