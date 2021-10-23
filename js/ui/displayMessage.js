export function displayMessage(messageType, message, target) {
  const targetElement = document.querySelector(target);

  targetElement.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
