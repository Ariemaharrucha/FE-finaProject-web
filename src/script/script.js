console.log('test connect')

window.addEventListener('scroll', function() {
  const header = document.querySelector('.navbar');
  
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    header.classList.add('bg-navbar');
    header.classList.remove('bg-transparent');
    localStorage.setItem('scrollPosition', 'scrolled');
  } else {
    header.classList.remove('bg-navbar');
    header.classList.add('bg-transparent');
    localStorage.setItem('scrollPosition', 'top');
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.navbar');
  const scrollPosition = localStorage.getItem('scrollPosition');
  
  if (scrollPosition === 'scrolled') {
    header.classList.add('bg-navbar');
    header.classList.remove('bg-transparent');
  } else {
    header.classList.remove('bg-navbar');
    header.classList.add('bg-transparent');
  }
});

const formLogin = document.querySelector('.form-login')
formLogin.addEventListener('submit', function(event){
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const nik = document.querySelector('#nik').value;
  window.location.href = 'pemilihan_surat.html';
})