// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
const logoLight = document.querySelector('.logo-light');
const logoDark = document.querySelector('.logo-dark');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  logoLight.style.display = 'none';
  logoDark.style.display = 'block';
} else {
  logoLight.style.display = 'block';
  logoDark.style.display = 'none';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    logoLight.style.display = 'none';
    logoDark.style.display = 'block';
  } else {
    localStorage.removeItem('theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    logoLight.style.display = 'block';
    logoDark.style.display = 'none';
  }
});

// Адаптивное меню
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

// Кнопка "Наверх"
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Обработка формы (EmailJS)
emailjs.init("YOUR_PUBLIC_KEY"); // Замени на твой Public Key из EmailJS
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Валидация телефона
  const phone = document.getElementById('phone').value;
  const phoneRegex = /^\+?\d{10,15}$/;
  if (!phoneRegex.test(phone)) {
    alert('Пожалуйста, введите корректный номер телефона');
    return;
  }

  // Отправка данных
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: document.getElementById('name').value,
    phone: phone,
    message: document.getElementById('message').value,
  }).then(
    () => alert('Запрос успешно отправлен!'),
    (error) => alert('Ошибка при отправке: ' + error.text)
  );
});

// Модальное окно
const phoneButton = document.getElementById('phone-button');
const phoneModal = document.getElementById('phone-modal');
const modalClose = document.getElementById('modal-close');
const callButton = document.getElementById('call-button');
const copyButton = document.getElementById('copy-button');

phoneButton.addEventListener('click', () => {
  phoneModal.style.display = 'flex';
});

modalClose.addEventListener('click', () => {
  phoneModal.style.display = 'none';
});

// Закрытие модального окна при клике вне контента
window.addEventListener('click', (e) => {
  if (e.target === phoneModal) {
    phoneModal.style.display = 'none';
  }
});

// Обработка кнопки "Позвонить"
callButton.addEventListener('click', () => {
  try {
    window.location.href = 'tel:+79516309997';
  } catch (e) {
    alert('Звонки не поддерживаются на этом устройстве. Скопируйте номер: +7 (951) 630-99-97');
  }
});

// Копирование номера
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText('+79516309997').then(
    () => alert('Номер скопирован!'),
    () => alert('Ошибка при копировании номера')
  );
});