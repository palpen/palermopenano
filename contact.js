// Light obfuscation deters simple harvesters. This is not a secrecy boundary.
const encodedAddress = [112,115,112,101,110,97,110,111,64,111,117,116,108,111,111,107,46,99,111,109];
const reveal = document.getElementById('reveal-email');
const details = document.getElementById('email-details');
const addressLink = document.getElementById('email-address');
const copy = document.getElementById('copy-email');
const status = document.getElementById('contact-status');
reveal.addEventListener('click', () => {
  const address = String.fromCharCode(...encodedAddress);
  addressLink.textContent = address;
  addressLink.href = 'mailto:' + address;
  details.hidden = false;
  reveal.setAttribute('aria-expanded', 'true');
  reveal.hidden = true;
  addressLink.focus();
  status.textContent = 'Email address revealed.';
});
copy.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(addressLink.textContent);
    copy.textContent = 'Copied';
    status.textContent = 'Email address copied.';
    setTimeout(() => { copy.textContent = 'Copy'; }, 2000);
  } catch {
    status.textContent = 'Copy unavailable. Select the email address to copy it manually.';
    copy.textContent = 'Select email';
    const range = document.createRange();
    range.selectNodeContents(addressLink);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});
