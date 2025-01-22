
const slider = document.querySelector(".slider");
const container = document.querySelector(".container");

slider.addEventListener("input", (e) => {
    const position = e.target.value;
    container.style.setProperty("--position", `${position}%`);
});

function openWhatsApp() {
    const phoneNumber = "5491136932502"; // Número en formato internacional (código de país + número)
    const message = encodeURIComponent("¡Hola! Me gustaría hacer una consulta."); // Mensaje opcional
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}