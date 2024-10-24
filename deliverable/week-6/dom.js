
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();

            // Appointee Name and the date booked
        const appointeeName = document.getElementById('name').value;
        const appointmentDate = document.getElementById('date').value;

        // create a display when appointment is booked
        const confirmaitionMessage = document.getElementById('p');
        confirmaitionMessage.textContent = `Dear ${appointeeName}, Appointment booked on ${appointmentDate}.`; 

        document.getElementsById('message').appendChild(confirmaitionMessage);
    });
})