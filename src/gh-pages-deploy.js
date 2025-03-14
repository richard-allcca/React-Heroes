const ghpages = require('gh-pages');

// Replace with your repo URL
ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'https://github.com/richard-allcca/React-Heroes.git',
}, (err) => {
  if (err) {
    console.error('Error al desplegar en GitHub Pages:', err);
  } else {
    console.log('Despliegue exitoso en GitHub Pages');
  }
});
