function mobileNav() {
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIconClose = document.querySelector('.nav-icon-close');
    const menuIconOpen = document.querySelector('.nav-icon-open');
    const navLinks = document.querySelectorAll('.mobile-nav a');
    const mobileWrapper = document.querySelector(".mobile-wrapper");

    navBtn.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        menuIconOpen.classList.toggle('nav-icon-open--active');
        menuIconClose.classList.toggle('nav-icon-close--active');
        mobileWrapper.classList.toggle('mobile-wrapper--active')
        // document.body.classList.toggle('no-scroll');
    };

    // Close the mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.onclick = function () {
            nav.classList.remove('mobile-nav--open');
            menuIconOpen.classList.remove('nav-icon-open--active');
            menuIconClose.classList.toggle('nav-icon-close--active');
            mobileWrapper.classList.remove('mobile-wrapper--active')
            // document.body.classList.remove('no-scroll');
        };
    });
}

export default mobileNav;
