//Javascript for Navigation effect on scroll
      window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //Javascript for responsive navigation sidebar Nav
      var menu = document.querySelector('.menu');
      var menuBtn = document.querySelector('.menu-btn');
      var closeBtn = document.querySelector('.close-btn');

      menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
      });

      closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
      });

      document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('header .menu a');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1); // Get the target section ID
      var targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        var headerHeight = document.querySelector('header').offsetHeight;
        var targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Success!");
      form.reset();
    })
  });
});
const email = document.getElementById('Email');
function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
document.my-form.email.focus();
return true;
}
else
{
showTooltip("You have entered an invalid email address!");
document.my-form.email.focus();
return false;
}
}