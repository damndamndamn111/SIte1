const data = [
  {
    title: "Главная",
    url: "index.html",
    content:
      "Welcome to our website. We offer a variety of services to cater to your needs.",
  },
  {
    title: "ЩЕКОВАЯ ДРОБИЛКА",
    url: "product13.html",
    content:
      "We are a company dedicated to providing excellent service to our customers. Our team is experienced and professional.",
  },
  {
    title: "Услуги",
    url: "uslugi.html",
    content:
      "We offer a range of services including web development, consulting, and design.",
  },
  {
    title: "Дизайн",
    url: "design.html",
    content:
      "Get in touch with us through our contact form or email us at contact@example.com.",
  },
  {
    title: "Техническая поддержка",
    url: "tech.html",
    content:
      "Read our latest blog posts to stay updated on industry news and insights.",
  },
  {
    title: "Производство",
    url: "property.html",
    content:
      "Find answers to frequently asked questions about our services and processes.",
  },
  {
    title: "Тестирование и сборка",
    url: "test-zborka.html",
    content:
      "Our terms of service outline the rules and regulations for using our website.",
  },
  { title: "Контакты", url: "contacts.html", content: "" },
  { title: "О нас", url: "about-us.html", content: "" },
  { title: " ВТОРИЧНАЯ УДАРНАЯ ДРОБИЛКА ", url: "product2.html", content: "" },
  { title: "ТРЕТИЧНАЯ ДРОБИЛКА", url: "product3.html", content: "" },
  { title: "КУБИЧЕСКАЯ ДРОБИЛКА", url: "product5.html", content: "" },
  { title: "ВИБРОЦИОННЫЕ ГРОХОТЫ", url: "product6.html", content: "" },
  { title: "ЛЕНТОЧНЫЕ КОНВЕЙЕРЫ ", url: "product7.html", content: "" },
  {
    title: "ПЕРЕДВИЖНАЯ С ВЕРТИКАЛЬНЫМ ВАЛОМ КРЕКИНГ",
    url: "product8.html",
    content: "",
  },
  { title: "МОБИЛЬНЫЙ ЦЕМЕНТНЫЙ ЗАВОД", url: "product9.html", content: "" },
  { title: "РОК ПИТАТЕЛИ", url: "product10.html", content: "" },
  { title: "БУНКЕРЫ И БУНКЕРЫ ПИТАНИЯ", url: "product11.html", content: "" },
  { title: "СПИРАЛЬНЫЕ МОЮЩИЕ МЕХАНИЗМЫ", url: "product12.html", content: "" },
  { title: "ДРОБИЛКА ВЕРТИКАЛЬНЫМ ВАЛОМ", url: "product4.html", content: "" },
  { title: "УДАРНАЯ ДРОБИЛКА", url: "product1.html", content: "" },
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
