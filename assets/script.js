const woofProject = document.querySelector('.woofproject');
const quizProject = document.querySelector('.quizproject');
const weatherProject = document.querySelector('.weatherproject');
const passwordProject = document.querySelector('.passwordproject');

woofProject.addEventListener('click', function() {
    location.href = 'https://joeytmab.github.io/Restaurant-Picker-Project/'
});



quizProject.addEventListener('click', function() {
    location.href = 'https://joeytmab.github.io/MCU-Trivia-Quiz-With-Web-APIs/'
});



weatherProject.addEventListener('click', function() {
    location.href = 'https://joeytmab.github.io/Realtime-Weather-Dashboard/'
});



passwordProject.addEventListener('click', function() {
    location.href = 'https://joeytmab.github.io/Password-Generator-JS-/'
});

function sendEmail() {
    Email.send({
        secureToken: "14c17798-7775-4cdd-93d5-27647d3c8a61",
        To: "freeholai@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Inquiry via Contact Form",
        Body: "Name: " + document.getElementById("name").value + 
                "<br> Email: " + document.getElementById("email").value +
                "<br> Phone no.: " + document.getElementById("phone").value +
                "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Your message has been sent successfully.")
    );
}


window.transitionToPage = function(href) {
    document.querySelector('.body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

