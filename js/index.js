
const slider = document.querySelector(".slider");
const container = document.querySelector(".container");

// slider.addEventListener("input", (e) => {
//     const position = e.target.value;
//     container.style.setProperty("--position", `${position}%`);
// });

function openWhatsApp() {
    const phoneNumber = "5491136932502"; // Número en formato internacional (código de país + número)
    const message = encodeURIComponent("¡Hola! Me gustaría hacer una consulta."); // Mensaje opcional
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup");
    const popupImage = document.querySelector(".popup-image");
    const closePopup = document.querySelector(".close-popup");
    const images = document.querySelectorAll(".images-container img");
    let currentIndex = -1; // Índice de la imagen actualmente ampliada

    console.log({
        popup,
        popupImage,
        closePopup,
        images: images.length,
    });

    if (!popup || !popupImage || !closePopup || images.length === 0) {
        console.error("Algunos elementos no se encontraron en el DOM.");
        return;
    }

    // Mostrar el popup al hacer clic en una imagen
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImage.src = img.src;
            currentIndex = index; // Actualizar índice actual
        });
    });

    // Ocultar el popup al hacer clic en el botón de cerrar
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Ocultar el popup al presionar la tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            popup.style.display = "none";
        }
    });

    // Navegar entre imágenes con teclas de flecha
    document.addEventListener("keydown", (e) => {
        if (popup.style.display === "flex") {
            if (e.key === "ArrowRight") {
                navigateImage(1); // Siguiente imagen
            } else if (e.key === "ArrowLeft") {
                navigateImage(-1); // Imagen anterior
            }
        }
    });

    // Navegar entre imágenes con botones de flechas
    const navigateImage = (direction) => {
        currentIndex += direction;

        // Ciclar a la primera/última imagen si se sale de los límites
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // Actualizar la imagen en el popup
        popupImage.src = images[currentIndex].src;
    };

    // Ocultar el popup al hacer clic fuera del contenido
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Crear botones de navegación
    const leftButton = document.createElement("button");
    leftButton.textContent = "←";
    leftButton.className = "navigate-left";
    leftButton.addEventListener("click", () => navigateImage(-1));

    const rightButton = document.createElement("button");
    rightButton.textContent = "→";
    rightButton.className = "navigate-right";
    rightButton.addEventListener("click", () => navigateImage(1));

    popup.appendChild(leftButton);
    popup.appendChild(rightButton);
});
