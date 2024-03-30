document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Voorkom standaardformulierverzending
            
            // Haal de ingevoerde code op
            var enteredCode = document.getElementById("code").value;
            
            // Controleer of de ingevoerde code overeenkomt met het juiste wachtwoord
            var correctCode = "geheim"; // Het juiste wachtwoord
            if (enteredCode === correctCode) {
                // Als het wachtwoord juist is, stuur de gebruiker door naar de pagina "0513.html"
                window.location.href = "0513.html";
            } else {
                // Als het wachtwoord onjuist is, toon een foutmelding (hier kun je ook een ander gedrag kiezen)
                alert("Onjuiste code. Probeer het opnieuw.");
            }
        });
