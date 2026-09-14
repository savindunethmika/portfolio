const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerText;
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  const response = await fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert("Thank you! Your message has been sent successfully.");
    form.reset();
  } else {
    alert("Oops! Something went wrong. Please try again.");
  }

  submitBtn.innerText = originalBtnText;
  submitBtn.disabled = false;
});
