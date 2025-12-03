// -----------------------------
// SELECTORES
// -----------------------------
const cardsContainer = document.getElementById("cards-container");
const toggle = document.getElementById("theme-toggle");

// -----------------------------
// CARGA TEMA DESDE localStorage
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        toggle.checked = true;
    }

    fetchCharacters();
});

// -----------------------------
// EVENTO PARA CAMBIAR TEMA
// -----------------------------
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    // Guarda en localStorage
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});

// -----------------------------
// FETCH A LA API
// -----------------------------
async function fetchCharacters() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        if (!response.ok) {
            throw new Error("Error al obtener datos");
        }

        const data = await response.json();
        renderCards(data.results);

    } catch (error) {
        cardsContainer.innerHTML = `<p>Error al cargar datos 😢</p>`;
        console.error(error);
    }
}

// -----------------------------
// RENDERIZAR TARJETAS
// -----------------------------
function renderCards(characters) {
    cardsContainer.innerHTML = "";

    characters.forEach((char) => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <h2>${char.name}</h2>
            <p><strong>Estado:</strong> ${char.status}</p>
            <p><strong>Especie:</strong> ${char.species}</p>
        `;

        cardsContainer.appendChild(card);
    });
}