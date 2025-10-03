document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Merci pour votre message ! Nous vous répondrons très bientôt.");
  this.reset();
});
