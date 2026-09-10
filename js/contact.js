/**
 * Santiago Penas - Contact Actions & Toast Notification Engine
 */

(function initContact() {
  const copyBtn = document.getElementById('btn-copy-email');
  const toast = document.getElementById('toast-alert');
  const toastMsg = document.getElementById('toast-message');
  const contactForm = document.getElementById('contact-form');

  let toastTimeout;

  window.showToast = function(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  };

  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'penassantiago@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        window.showToast(`Copied "${email}" to clipboard!`);
      }).catch(() => {
        window.showToast(`Email: ${email}`);
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Friend';
      const email = document.getElementById('contact-email')?.value;
      const message = document.getElementById('contact-message')?.value;

      // Construct mailto fallback for direct sending
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Santiago,\n\n${message}\n\nFrom: ${name} (${email})`);
      window.open(`mailto:penassantiago@gmail.com?subject=${subject}&body=${body}`, '_blank');

      window.showToast(`Opening your email client to send message, thank you ${name}!`);
      contactForm.reset();
    });
  }
})();
