const data = [
  {
    title: "Главная",
    url: "index.html",
    content:
      "",
  },
  {
    title: "ТАҢЫЛҒАН ЖЫЛЫШТЫ ДАЛАУШЫ",
    url: "product13.html",
    content:
      "",
  },
  {
    title: "Қызметтер",
    url: "uslugi.html",
    content:
      "",
  },
  {
    title: "Дизайн",
    url: "design.html",
    content:
      "",
  },
  {
    title: "Техникалық қолдау және қолданылушы құралдар",
    url: "tech.html",
    content:
      "",
  },
  {
    title: "Өндіру",
    url: "property.html",
    content:
      "",
  },
  {
    title: "Тексеру және орнату",
    url: "test-zborka.html",
    content:
      "",
  },
  { title: "БАЙЛАНЫС", url: "contacts.html", content: "" },
  { title: "БІЗ ТУРАЛЫ", url: "about-us.html", content: "" },
  { title: "ЕКІНШІЛІК СОҚҚЫЛЫҚ УАТҚЫШ ", url: "product2.html", content: "" },
  { title: "ҰДАРЛЫ ДРОБИЛКА ", url: "product1.html", content: "" },
  { title: "ҮШІНШІЛІК УАТҚЫШ", url: "product3.html", content: "" },
  { title: "КУБИК ДРОБИЛКА", url: "product5.html", content: "" },
  { title: "ВИБРАЦИОНДЫ ГРОХОТТАР", url: "product6.html", content: "" },
  { title: "ЛЕНТАЛЫ КОНВЕЙЕРЛЕР ", url: "product7.html", content: "" },
  {
    title: "ТІК ВАЛДЫ ҚОЗҒАЛМАЛЫ КРЕКИНГ",
    url: "product8.html",
    content: "",
  },
  { title: "МОБИЛЬДІ ЦЕМЕНТ ЗАУЫТЫ", url: "product9.html", content: "" },
  { title: "РОК ҚОРЕКТЕНДІРГІШТЕР", url: "product10.html", content: "" },
  { title: "БҮНКЕРЛЕР ЖӘНЕ ҚОРЕКТЕНДІРУ БҮНКЕРЛЕРІ", url: "product11.html", content: "" },
  { title: "СПИРАЛЬДЫ ЖУУ МЕХАНИЗМДЕРІ", url: "product12.html", content: "" },
  { title: "ТАҢЫЛҒАН ЖЫЛЫШТЫ ДАЛАУШЫ", url: "product13.html", content: "" },
  { title: "ТІК ВАЛДЫ УАТҚЫШ", url: "product4.html", content: "" },
  
];

function performSearch() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const searchResults = document.getElementById("searchResults");
  const dropdownMenu = document.getElementById("dropdownMenu");
  searchResults.innerHTML = "";

  if (searchInput === "") {
    searchResults.style.display = "none"; // Скрываем результаты поиска, если поле ввода пустое
    return;
  }

  const results = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchInput) ||
      item.content.toLowerCase().includes(searchInput)
  );

  if (results.length > 0) {
    results.forEach((result) => {
      const li = document.createElement("li");
      li.className = "dropdown-item";
      li.innerHTML = `<a href="${result.url}"><strong>${result.title}</strong></a>`;
      searchResults.appendChild(li);
    });
    searchResults.style.display = "block"; // Показываем результаты поиска
  } else {
    const li = document.createElement("li");
    li.className = "dropdown-item";
    li.textContent = "No results found";
    searchResults.appendChild(li);
    searchResults.style.display = "none"; // Скрываем результаты поиска, если их нет
  }
}
