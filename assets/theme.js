// Divine Toys Theme - JavaScript
document.addEventListener("DOMContentLoaded", function () {
  console.log("Divine Toys theme is loaded and ready!");
});
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".header__menu-item a");
    navLinks.forEach(link => {
        if (link.innerText.trim().toLowerCase() === "my store") {
            link.parentElement.remove(); // Removes the list item
        }
    });
});
