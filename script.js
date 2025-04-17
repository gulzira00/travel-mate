document.getElementById("routeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const city = document.getElementById("city").value;
  const interest = document.getElementById("interest").value;
  const resultSection = document.getElementById("result");

  const routes = {
    culture: "Посетите музеи, театры и исторические здания.",
    nature: "Исследуйте парки, горы и природные достопримечательности.",
    food: "Попробуйте местные блюда в популярных ресторанах.",
    party: "Откройте для себя лучшие бары и ночные клубы."
  };

  resultSection.innerHTML = `
    <h3>Рекомендации для ${city}</h3>
    <p>${routes[interest]}</p>
  `;
});
