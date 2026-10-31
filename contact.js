 "use strict";

// Demo-only contact form interaction.
// No network request is made; no email is sent and no message is stored.
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if (form && message) {
  const venture = new URLSearchParams(window.location.search).get("venture");
  const ventureField = form.elements.namedItem("venture_id");
  const ventureHint = document.getElementById("ventureHint");

  if (venture && ventureField) {
    ventureField.value = venture;
    if (ventureHint) ventureHint.textContent = "Enquiry about: " + venture;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const honeypot = form.elements.namedItem("website");
    if (honeypot && honeypot.value.trim()) return;

    const button = form.querySelector('button[type="submit"]');
    if (!button) return;

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Sending…";
    message.textContent = "Checking your enquiry…";
    message.dataset.state = "pending";

    // Brief UI feedback so the tap is visible on mobile too.
    window.setTimeout(() => {
      message.textContent = "Button working — demo only. Your message was not sent or saved.";
      message.dataset.state = "success";
      button.disabled = false;
      button.textContent = originalText;
      form.reset();
      if (ventureField) ventureField.value = venture || "";
    }, 350);
  });
}
