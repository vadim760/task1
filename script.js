document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", () => {
        const content = document.querySelector("header");
        if (window.scrollY > 50) {
            content.classList.add("header__scroll")
        } else {
            content.classList.remove("header__scroll")
        }
      });

})