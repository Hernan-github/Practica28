function Convertir() {
    const celsiusInput = document.querySelector("input[type='number']");
    const FLabel = document.getElementById("F");
    const FLabel2 = document.getElementById("F2");
    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        FLabel.textContent = `${celsius.toFixed(0)}° Celsius = ${fahrenheit.toFixed(1)}° Fahrenheit`;
        FLabel2.textContent = `Ya que ${celsius.toFixed(0)}° *9/5 + 32 = ${fahrenheit.toFixed(1)}°`;
    }
}


function crearBurbuja() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Tamaño aleatorio
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Posición horizontal aleatoria
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // Duración aleatoria
    bubble.style.animationDuration = (Math.random() * 5 + 3) + "s";

    document.getElementById("bubbles").appendChild(bubble);

    // Eliminar burbuja después de animación
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(crearBurbuja, 200);