export default function scrollToTop() {
    const topBtn = document.querySelector(".footer__top-link");

    if (topBtn) {
        topBtn.addEventListener("click", (event) => {
            event.preventDefault(); 
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });
    }
}