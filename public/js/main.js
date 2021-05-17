// sidebar responsive
const btnMenu = document.querySelector('.btn-menu');
const sideBar = document.querySelector('.main__sidebar');

btnMenu.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar-responsive');
})

// sous menu
const btnProfil = document.querySelector('.btn-profil');
const sousMenu = document.querySelector('.sous-menu');

btnProfil.addEventListener('click', () => {
    sousMenu.classList.toggle('visible-sous-menu');
})