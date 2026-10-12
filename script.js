// Simple interactions for the AI assistant prototype

document.addEventListener('DOMContentLoaded', function () {
  // Suggestion card click — simulate user sending the question
  var cards = document.querySelectorAll('.suggestion-card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var title = card.querySelector('.suggestion-title').textContent.trim();
      // Subtle press feedback already handled by :active CSS
      console.log('User asked:', title);
      // In a real prototype this would navigate to a chat screen or show a response
    });
  });

  // Voice button feedback
  var voiceBtn = document.querySelector('.input-voice');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', function () {
      console.log('Voice input triggered');
    });
  }

  // Plus button feedback
  var plusBtn = document.querySelector('.input-plus');
  if (plusBtn) {
    plusBtn.addEventListener('click', function () {
      console.log('Plus menu triggered');
    });
  }

  // Help modal toggle
  var helpBtn = document.getElementById('helpBtn');
  var helpModal = document.getElementById('helpModal');
  var closeModal = document.getElementById('closeModal');

  function openModal() {
    if (helpModal) helpModal.classList.add('active');
  }

  function closeModalFn() {
    if (helpModal) helpModal.classList.remove('active');
  }

  if (helpBtn) helpBtn.addEventListener('click', openModal);
  if (closeModal) closeModal.addEventListener('click', closeModalFn);
  if (helpModal) {
    helpModal.addEventListener('click', function (e) {
      if (e.target === helpModal) closeModalFn();
    });
  }
});
