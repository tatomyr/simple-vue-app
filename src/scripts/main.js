// Animations
var os = new OnScreen();

os.on('enter', '.greeting', (element, event) => {
  setTimeout(() => {
    $(element).addClass('animated bounce');
  }, element.dataset.debounce || 0);
});
