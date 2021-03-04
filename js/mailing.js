(function () {
  emailjs.init("user_wCGbyRhd4IyT3IrCobsWU");
})();

const form = document.querySelector("#mailForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm('service_t8qvdoj', 'template_htafm7b', this).then(function(response) {
    alert('Ačiū, žinutė išsiųsta, greitu metu su Jumis susisieksime');
    }, function(error) {
       alert('Atsiprašome, siunčiant žinutę įvyko klaida', error);
  });
})

