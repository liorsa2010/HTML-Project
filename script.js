const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name    = document.getElementById("name").value.trim();
        const email   = document.getElementById("email").value.trim();
        const phone   = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name.length < 3) {
            alert("Invalid name");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Invalid email address");
            return;
        }

        const phonePattern = /^[0-9]{10,}$/;
        if (!phonePattern.test(phone.replace(/[-\s]/g, ""))) {
            alert("Invalid phone number");
            return;
        }

        if (subject.length < 5) {
            alert("Invalid subject");
            return;
        }

        if (message.length < 10) {
            alert("Invalid message");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
}
