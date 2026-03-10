const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    if (name.length < 5) {
        alert("Name must be at least 5 characters");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    const phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain at least 10 digits");
        return;
    }

    if (subject.length < 5) {
        alert("Subject must be at least 5 characters");
        return;
    }

    if (message.length < 20) {
        alert("Message must be at least 20 characters");
        return;
    }

    alert("Message sent successfully!");

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
});
