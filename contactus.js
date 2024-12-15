const form = document.getElementById('contact-us');

// $('#contact-form').featherlight();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const emailBody = [];
    for (const [key, value] of formData.entries()) {
        emailBody.push(`${key}: ${value}`);
    }

    const emailSubject = 'Contact Form Submission';
    const emailTo = 'thisisdavidjijo@gmail.com'; // Replace with your email address

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody.join('\n'))}`;

    window.location.href = mailtoLink;
});
