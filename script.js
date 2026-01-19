// your code goes he// DARK MODE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// WISHLIST
const bookInput = document.getElementById("bookInput");
const addBookBtn = document.getElementById("addBook");
const wishlist = document.getElementById("wishlist");

let books = JSON.parse(localStorage.getItem("wishlist")) || [];

function renderBooks() {
  wishlist.innerHTML = "";
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    wishlist.appendChild(li);
  });
}

addBookBtn.addEventListener("click", () => {
  const bookName = bookInput.value.trim();
  if (bookName !== "") {
    books.push(bookName);
    localStorage.setItem("wishlist", JSON.stringify(books));
    renderBooks();
    bookInput.value = "";
  }
});

renderBooks();

// MOBILE MENU
const menuIcon = document.getElementById("menuIcon");
const nav = document.querySelector(".navbar nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});
re
