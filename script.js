
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    console.log('Script loaded'); // Debug check

    if (hamburger && navList) {
        hamburger.addEventListener('click', function () {
            navList.classList.toggle('active');
        });
    } else {
        console.log('Elements not found:', { hamburger, navList });
    }
});
