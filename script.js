    // Handle Book Now
  const bookNowBtn = document.querySelector(".primary-btn");
  const dateInput = document.getElementById("visit-date");
  const visitList = document.querySelector(".upcoming-visits-list");
  
  bookNowBtn.addEventListener("click", () => {
    dateInput.style.display = "block";
    dateInput.focus();
  });
  
  // When a date is selected, add it to upcoming visits
  dateInput.addEventListener("change", () => {
    const selectedDate = new Date(dateInput.value);
    const formattedDate = `${selectedDate.getDate()} ${selectedDate.toLocaleString('default', { month: 'short' })}, ${selectedDate.getFullYear()}`;
  
    const newVisit = document.createElement("li");
    newVisit.textContent = `Visit - ${formattedDate}`;
    visitList.appendChild(newVisit);
  
    // Reset and hide date picker
    dateInput.value = "";
    dateInput.style.display = "none";
  });  

// QR Code Generator (Fake for now)
const qrInput = document.querySelector('.feature-card input');
const qrButton = document.querySelector('.feature-card button');

qrButton.addEventListener('click', () => {
  const passId = qrInput.value.trim();

  if (!passId) {
    alert("Please enter a Pass ID.");
    return;
  }

  const qrBox = document.createElement('div');
  qrBox.style.marginTop = "10px";
  qrBox.innerHTML = `
    <p><strong>QR Preview:</strong></p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(passId)}" alt="QR Code" />
  `;

  // Remove previous QR if exists
  const existingQR = document.querySelector('.feature-card div');
  if (existingQR) existingQR.remove();

  qrButton.parentElement.appendChild(qrBox);
});