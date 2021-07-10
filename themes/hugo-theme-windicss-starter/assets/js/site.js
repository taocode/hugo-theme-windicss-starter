function initMenuToggle() {
  let showMenu = document.getElementById('show-menu')
  let menuToggle = document.getElementById('toggle-menu')
  menuToggle.addEventListener('click', () => {
    showMenu.checked = !showMenu.checked
  })
}

function initDarkMode() {
  const rootClassList = document.documentElement.classList
  const lsThemeMode = localStorage.getItem('theme-mode')
  let darkMode = (lsThemeMode !== null) 
            ? lsThemeMode !== 'light' 
            : ! matchMedia('(prefers-color-scheme: light)').matches
  rootClassList.toggle('dark',darkMode)
  const toggleDarkMode = document.getElementById('toggle-dark-mode')
  toggleDarkMode.addEventListener('click',() => {
    darkMode = !darkMode
    rootClassList.toggle('dark',darkMode)
    localStorage.setItem('theme-mode', darkMode ? 'dark' : 'light')
  })   
}

function init() {
  initMenuToggle();
  initDarkMode();
}

document.addEventListener("DOMContentLoaded", init);