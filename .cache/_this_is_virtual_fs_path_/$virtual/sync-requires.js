
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-jsx": preferDefault(require("/Users/mohamedfaisal/portfolio/mohamed_faisal/portfolio-website/src/pages/about.jsx")),
  "component---src-pages-contact-jsx": preferDefault(require("/Users/mohamedfaisal/portfolio/mohamed_faisal/portfolio-website/src/pages/contact.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/mohamedfaisal/portfolio/mohamed_faisal/portfolio-website/src/pages/index.jsx")),
  "component---src-pages-projects-jsx": preferDefault(require("/Users/mohamedfaisal/portfolio/mohamed_faisal/portfolio-website/src/pages/projects.jsx"))
}

