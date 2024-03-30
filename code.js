 document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Voorkom standaardformulierverzending
            
            // Haal de ingevoerde code op
            var enteredCode = document.getElementById("code").value;
            
            // Controleer de ingevoerde code en stuur de gebruiker door naar de juiste pagina
            switch (enteredCode) {
                case "7888":
                    // Als de code "7888" is, stuur de gebruiker door naar "0513.html"
                    window.location.href = "https://wiebren.space/0513/";
                    break;
                case "999":
                    // Als de code "999" is, stuur de gebruiker door naar een externe pagina
                    window.location.href = "https://wiebren.space/links/";
                    break;
                case "6393":
                    // Als de code "6393" is, stuur de gebruiker door naar een andere externe pagina
                    window.location.href = "https://wiebren.space/dreamin/";
                    break;
                default:
                    // Als de ingevoerde code niet overeenkomt, toon een foutmelding (hier kun je ook ander gedrag kiezen)
                    alert("Onjuiste code. Probeer het opnieuw.");
                    break;
            }
        });
