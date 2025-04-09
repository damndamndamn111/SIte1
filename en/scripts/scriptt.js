const data = [
  {
    title: "Home",
    url: "index.html",
    content:
      "Welcome to our website. We offer a variety of services to cater to your needs.",
  },
  {
    title: "JAW CRUSHER",
    url: "product13.html",
    content:
      "We are a company dedicated to providing excellent service to our customers. Our team is experienced and professional.",
  },
  {
    title: "Services",
    url: "uslugi.html",
    content:
      "We offer a range of services including web development, consulting, and design.",
  },
  {
    title: "Design",
    url: "design.html",
    content:
      "Get in touch with us through our contact form or email us at contact@example.com.",
  },
  {
    title: "Technical Support and Spare Parts",
    url: "tech.html",
    content:
      "Read our latest blog posts to stay updated on industry news and insights.",
  },
  {
    title: "Production",
    url: "property.html",
    content:
      "Find answers to frequently asked questions about our services and processes.",
  },
  {
    title: "Testing and Assembly",
    url: "test-zborka.html",
    content:
      "Our terms of service outline the rules and regulations for using our website.",
  },
  { title: "Contacts", url: "contacts.html", content: "" },
  { title: "About us", url: "about-us.html", content: "" },
  { title: " Secondary Impact Crusher ", url: "product2.html", content: "" },
  { title: "Tertiary Crusher", url: "product3.html", content: "" },
  { title: "Cubic Crusher", url: "product5.html", content: "" },
  { title: " Vibrating Screens ", url: "product6.html", content: "" },
  { title: "Belt Conveyors ", url: "product7.html", content: "" },
  {
    title: "Mobile with Vertical Shaft Cracking",
    url: "product8.html",
    content: "",
  },
  { title: "Mobile Cement Plant", url: "product9.html", content: "" },
  { title: "Rock Feeders", url: "product10.html", content: "" },
  { title: "Bunkers and Feed Bunkers", url: "product11.html", content: "" },
  { title: "Spiral Washing Mechanisms", url: "product12.html", content: "" },
  { title: "Vertical Shaft Crusher", url: "product4.html", content: "" },
  { title: "Impact Crusher", url: "product1.html", content: "" },
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
