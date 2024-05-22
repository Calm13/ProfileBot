const command = `
/start - Greeting
/help - Help
/about_me - Show buttons to get CV and view websites I've worked on
`

const portfolioData = {
  cv: 'You can view it by clicking on the document, or download this file.',
  kashalot: 'Website <a href="https://kashalot.gift/ua/">Kashalot</a>: template development for front-end positions for pages (home, blog, feedback, reviews, about us, payment and delivery, FAQs).',
  alt: 'Website <a href="https://alt.ua/">Alt Ukraine</a>: development of all pages in the front-end position together with a partner responsible for the back-end.',
  cikera: 'Website <a href="https://cikera-mead.com/">Cikera</a>: development of all pages in the front-end position together with a partner responsible for the back-end.',
  oglobin: 'Website <a href="https://ivanogloblin.com/">Ivan Oglobin</a>: redesign in the full-stack position (site based on WordPress).',
  snovioLanding: 'Website <a href="https://snov.io/">Snovio</a>: from redesign to creating new pages, removing legacy code, writing documentation, transitioning to server-side rendering in the full-stack position.',
  snovioBlog: 'Website <a href="https://snov.io/blog/">Snovio Blog</a>: redesign, adding new features using custom fields and caching in the full-stack position (site based on WordPress).',
  snovioCheats: 'Website <a href="https://growth.snov.io/">Snovio SalesCheats</a>: created from scratch, user registration, content filling using custom fields, content blocking for unregistered users in the full-stack position (site based on WordPress).'
}

module.exports.command = command
module.exports.portfolio = portfolioData