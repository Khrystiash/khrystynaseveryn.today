const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.open-menu');
const menuBtnClose = document.querySelector('.close-menu');
const menuBtnCloseOurwedding = document.getElementById('close-menuOurwedding');
const menuBtnCloseTiming = document.getElementById('close-menuTiming');
const menuBtnCloseLocations = document.getElementById('close-menuLocations');
const menuBtnCloseTransfer = document.getElementById('close-menuTransfer');
const menuBtnCloseQuestionary = document.getElementById('close-menuQuestionary');
const menuBtnCloseDonations = document.getElementById('close-menuDonations');
const menuBtnCloseAbout = document.getElementById('close-menuAbout');
const menuBtnClosePhoto = document.getElementById('close-menuPhoto');
const menuBtnCloseContacts = document.getElementById('close-menuContacts');

const toggleMenu = () => {
    return mobileMenu.classList.toggle('is-open');
};

const closeMenu = () => {
    requestAnimationFrame(() => {
        mobileMenu.classList.remove('is-open');
    })
};



menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', closeMenu);
menuBtnCloseOurwedding.addEventListener('click', closeMenu);
menuBtnCloseTiming.addEventListener('click', closeMenu);
menuBtnCloseLocations.addEventListener('click', closeMenu);
menuBtnCloseTransfer.addEventListener('click', closeMenu);
menuBtnCloseQuestionary.addEventListener('click', closeMenu);
menuBtnCloseDonations.addEventListener('click', closeMenu);
menuBtnCloseAbout.addEventListener('click', closeMenu);
menuBtnClosePhoto.addEventListener('click', closeMenu);
menuBtnCloseContacts.addEventListener('click', closeMenu);