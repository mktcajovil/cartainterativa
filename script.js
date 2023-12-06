document.getElementById('envelope').addEventListener('click', function() {
  document.getElementById('carta').style.display = 'block';
});
document.getElementById('envelope').addEventListener('click', function() {
  this.classList.add('clicked');
});