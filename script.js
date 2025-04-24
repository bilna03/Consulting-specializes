function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        name: document.getElementById("email").value,
        name: document.getElementById("subject").value,
        name: document.getElementById("message").value,
    }

    emailjs.send("service_ao9kwrc","template_gxjkogp",parms).then(alert("Email Sent!!"))
}