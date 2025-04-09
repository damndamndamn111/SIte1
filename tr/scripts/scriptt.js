const data = [
  {
    title: "ANA SAYFA",
    url: "index.html",
    content:
      "Welcome to our website. We offer a variety of services to cater to your needs.",
  },
  {
    title: "ÇENE KIRICILAR",
    url: "product13.html",
    content:
      "We are a company dedicated to providing excellent service to our customers. Our team is experienced and professional.",
  },
  {
    title: "HİZMETLER",
    url: "uslugi.html",
    content:
      "We offer a range of services including web development, consulting, and design.",
  },
  {
    title: "Tasarım",
    url: "design.html",
    content:
      "Get in touch with us through our contact form or email us at contact@example.com.",
  },
  {
    title: "Teknik Destek ve Yedek Parçalar",
    url: "tech.html",
    content:
      "Read our latest blog posts to stay updated on industry news and insights.",
  },
  {
    title: "Üretim",
    url: "property.html",
    content:
      "Find answers to frequently asked questions about our services and processes.",
  },
  {
    title: "Test ve Montaj",
    url: "test-zborka.html",
    content:
      "Our terms of service outline the rules and regulations for using our website.",
  },
  { title: "İLETİŞİM", url: "contacts.html", content: "" },
  { title: "HAKKIMIZDA", url: "about-us.html", content: "" },
  { title: "İKİNCİ DARBELİ KIRICI ", url: "product2.html", content: "" },
  { title: "ÜÇÜNCÜ KIRICI", url: "product3.html", content: "" },
  { title: "KÜBİK KIRICI", url: "product5.html", content: "" },
  { title: "VİBRASYONLU ELEKLER", url: "product6.html", content: "" },
  { title: "BANTLI KONVEYÖRLER", url: "product7.html", content: "" },
  {
    title: "DİKEY ŞAFTLI KIRICI TAŞIMA KREKİNG",
    url: "product8.html",
    content: "",
  },
  { title: "MOBİL ÇİMENTO FABRİKASI", url: "product9.html", content: "" },
  { title: "KAYA BESLEYİCİLERİ", url: "product10.html", content: "" },
  { title: "BUNKERLER VE BESLEME BUNKERLERİ", url: "product11.html", content: "" },
  { title: "SPIRAL YIKAMA MEKANİZMALARI", url: "product12.html", content: "" },
  { title: "DIKEY DÖNER ŞAFTLI KIRICI", url: "product4.html", content: "" },
  { title: "DARBE KIRICI", url: "product1.html", content: "" },
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
