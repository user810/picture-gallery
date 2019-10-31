module.exports = {
    content: ['main.html', 'about.html'],
    css: ['build/css/main.css'],
    whitelist: ['img-container', 'img', '@media', 'min-width', 'lg', 'md', 'sm'],
    whitelistPatterns: [/w-.\/./],
    whitelistPatternsChildren: [/w-.\/./],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }