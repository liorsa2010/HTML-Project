const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput    = document.getElementById("name");
        const emailInput   = document.getElementById("email");
        const phoneInput   = document.getElementById("phone"); 
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        const name    = nameInput.value.trim();
        const email   = emailInput.value.trim();
        const phone   = phoneInput.value.trim(); 
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim(); 

        let isValid = true;

        function showError(input, errorId) {
            input.classList.add("invalid");
            input.classList.remove("valid");
            document.getElementById(errorId).style.display = "block";
            isValid = false;
        }

        function clearError(input, errorId) {
            input.classList.remove("invalid");
            input.classList.add("valid");
            document.getElementById(errorId).style.display = "none";
        }

        if (name.length <= 3) {
            showError(nameInput, "nameError");
        } else {
            clearError(nameInput, "nameError");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError(emailInput, "emailError");
        } else {
            clearError(emailInput, "emailError");
        }

        const phonePattern = /^[0-9]{10,}$/;
        if (!phonePattern.test(phone.replace(/[-\s]/g, ""))) {
            showError(phoneInput, "phoneError");
        } else {
            clearError(phoneInput, "phoneError");
        }

        if (subject.length <= 5) {
            showError(subjectInput, "subjectError");
        } else {
            clearError(subjectInput, "subjectError");
        }

        if (message.length <= 10) {
            showError(messageInput, "messageError");
        } else {
            clearError(messageInput, "messageError");
        }

        if (isValid) {
            const banner = document.getElementById("successBanner");
            banner.style.display = "block";
            form.reset();

            [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
                input.classList.remove("valid");
            });

            setTimeout(() => {
                banner.style.display = "none";
            }, 5000);
        }
    });
}
