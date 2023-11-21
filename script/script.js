  function validateAndSubscribe() {
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');
    var cardMain = document.querySelector('.primary');
    var cardHidden = document.querySelector('.secondary');
    var dismissButton = document.querySelector('.center-button button');
    var email = emailInput.value.trim();
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email === '' || !emailRegex.test(email)) {
      emailError.textContent = 'Valid email required';
      emailError.style.color = '#FF5B63';
      emailInput.style.borderColor = '#FF5B63';
    } else {
      emailError.textContent = '';
      cardMain.style.display = 'none';
      cardHidden.style.display = 'flex';
    }
  }
 
  function showCardMain() {
    var cardMain = document.querySelector('.primary');
    var cardHidden = document.querySelector('.secondary');
  
    if (cardMain && cardHidden) {
      cardMain.style.display = '';
      cardHidden.style.display = 'none';
    }
  }

  function confirmEmail() {
    var inputValor = document.getElementById('emailInput').value;
    document.getElementById('emailConfirm').textContent = inputValor;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');
  
    if (btn) {
      btn.addEventListener('click', showCardMain);
    }
  });

  function changeImage() {
    var screenWidth = window.innerWidth;
    var imageElement = document.getElementById('responsiveImage');

    if (screenWidth < 376) {
      imageElement.src = 'assets/images/illustration-sign-up-mobile.svg';
    } else {
      imageElement.src = 'assets/images/illustration-sign-up-desktop.svg';
    }
  }
  window.addEventListener('load', changeImage);
  window.addEventListener('resize', changeImage);