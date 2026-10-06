let reproduciendo = false;

const audio = document.getElementById("audio");
const boton = document.getElementById("botonMusica");
const btnEntrar = document.getElementById("btnEntrar");

// Evento al dar clic en el botón de la pantalla de inicio
btnEntrar.addEventListener("click", function() {
    document.getElementById("pantalla-inicio").style.display = "none";

    // Iniciar audio con promesa para manejar restricciones del navegador
    if (audio) {
        audio.play().then(() => {
            reproduciendo = true;
            boton.innerHTML = "🔊 Música";
        }).catch(error => {
            console.log("El navegador bloqueó la reproducción automática o hubo un error:", error);
            reproduciendo = false;
            boton.innerHTML = "🎵 Música";
        });
    }
});

// Función para alternar la música con el botón flotante
function musica() {
    if (!audio) return;

    if (!reproduciendo) {
        audio.play().then(() => {
            boton.innerHTML = "🔊 Música";
            reproduciendo = true;
        }).catch(err => console.log("Error al reproducir audio:", err));
    } else {
        audio.pause();
        boton.innerHTML = "🎵 Música";
        reproduciendo = false;
    }
}

function enviarMensaje() {
    let nombre = document.getElementById("nombre").value.trim();
    let idea = document.getElementById("idea").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || idea === "") {
        alert("Por favor escribe tu nombre y qué página necesitas.");
        return;
    }

    let texto = `Hola, soy ${nombre}. Me interesa una página web de: ${idea}. ${mensaje}`;
    let numero = "524497555027";
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}

function animarElementos() {
    let elementos = document.querySelectorAll(".servicio, .trabajo, .paso");

    elementos.forEach(function(elemento) {
        let posicion = elemento.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 50) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", animarElementos);
window.addEventListener("load", animarElementos);