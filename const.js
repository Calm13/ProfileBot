const command = `
/start - Привітання
/help - Допомога
/about_me - Показати кнопки для отримання CV і перегляду сайтів над якими працював
`

const portfolioData = {
  cv: 'Ви можете перейти для перегляду, натискавши на документ, або завантажити цей файл.',
  kashalot: 'Сайт <a href="https://kashalot.gift/ua/">Kashalot</a>: розробка шаблонів на позиції front-end для сторінок (головна, блог, зворотній зв\'язок, відгуки, про нас, оплата і доставка, часті питання).',
  alt: 'Сайт <a href="https://alt.ua/">Alt Ukraine</a>: розробка всіх сторінок на позиції front-end разом із напарником, який відповідав за back-end.',
  cikera: 'Сайт <a href="https://cikera-mead.com/">Cikera</a>: розробка всіх сторінок на позиції front-end разом із напарником, який відповідав за back-end.',
  oglobin: 'Сайт <a href="https://ivanogloblin.com/">Ivan Oglobin</a>: редизайн на позиції full-stack (сайт на базі WordPress).',
  snovioLanding: 'Сайт <a href="https://snov.io/">Snovio</a>: від редизайну до створення нових сторінок, видалення легасі коду, написання документації, переробка на серверний рендерінг на позиції full-stack.',
  snovioBlog: 'Сайт <a href="https://snov.io/blog/">Snovio Blog</a>: редизайн, додавання нових можливостей за допомогою кастомних полів і кешування на позиції full-stack (сайт на базі WordPress).',
  snovioCheats: 'Сайт <a href="https://growth.snov.io/">Snovio SalesCheats</a>: створення з нуля, реєстрація користувачів, наповнення контентом за допомогою кастомних полів, блокування контенту для незареєстрованих користувачів на позиції fullstack (сайт на базі WordPress).'
}

module.exports.command = command
module.exports.portfolio = portfolioData