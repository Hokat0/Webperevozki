// Переключение темы
const themeToggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.removeItem('theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Адаптивное меню
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});
