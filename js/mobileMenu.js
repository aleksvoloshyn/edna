// Получаем элементы меню и иконки
const menuIcon = document.getElementById('menuIcon')
const mobileMenu = document.getElementById('mobileMenu')
const content = document.querySelector('.page-main')

// Обработчик клика по иконке меню
menuIcon.addEventListener('click', function () {
  // Переключаем класс active для иконки меню
  this.classList.toggle('active')
  // Переключаем класс active для мобильного меню
  mobileMenu.classList.toggle('active')
  // Переключаем класс active для контента
  content.classList.toggle('active')
})

// Обработчик клика по пункту меню
mobileMenu.addEventListener('click', function (e) {
  // Проверяем, был ли клик по пункту меню
  if (e.target.tagName === 'A') {
    // Закрываем меню и убираем классы active
    menuIcon.classList.remove('active')
    mobileMenu.classList.remove('active')
    content.classList.remove('active')
  }
})
