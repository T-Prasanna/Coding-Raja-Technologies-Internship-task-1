document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const Achivements = document.getElementById('Achivements').value;
  
    const outputDiv = document.getElementById('output');
    outputDiv.style.display = 'block';
  
    outputDiv.innerHTML = `
      <h2>Resume Generated:</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Achivements:</strong> ${Achivements}</p>
    `;
  });
  