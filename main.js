function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    let phoneNumber = "917219592988";

    let text =
    "New Contact Message\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message;

    let whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(text);

    window.open(whatsappURL, "_blank");
}