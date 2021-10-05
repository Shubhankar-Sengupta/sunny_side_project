const footer_logo = document.querySelector('.sunny-logo-2');
const graph_design_img = document.querySelector('.graphic-dsn');
const orange_photo = document.querySelectorAll('.photography');
const ft_img_grp = document.querySelectorAll('.grp-figure > img');
const social_media = document.querySelectorAll('.ft-content-wrapper svg > path');
const li_content = document.querySelector('.navbar-nav');
const h1 = document.querySelector('.heading-1');
const image_Arrow = document.querySelector('.img-arrow');


footer_logo.firstElementChild.attributes["fill"].value = `var(--color-dark-green)`;

function photoComponent(evt) {

    if (window.innerWidth <= 675) {
        graph_design_img.src = `./images/mobile/image-graphic-design.jpg`;
        orange_photo[1].src = `./images/mobile/image-photography.jpg`;
        ft_img_grp[0].src = `./images/mobile/image-gallery-milkbottles.jpg`;
        ft_img_grp[1].src = `./images/mobile/image-gallery-orange.jpg`;
        ft_img_grp[2].src = `./images/mobile/image-gallery-cone.jpg`;
        ft_img_grp[3].src = `./images/mobile/image-gallery-sugar-cubes.jpg`;
    }

    else {
        graph_design_img.src = `./images/desktop/image-graphic-design.jpg`;
        orange_photo[1].src = `./images/desktop/image-photography.jpg`;
        ft_img_grp[0].src = `./images/desktop/image-gallery-milkbottles.jpg`;
        ft_img_grp[1].src = `./images/desktop/image-gallery-orange.jpg`;
        ft_img_grp[2].src = `./images/desktop/image-gallery-cone.jpg`;
        ft_img_grp[3].src = `./images/desktop/image-gallery-sugarcubes.jpg`;
    }
}


window.onload = photoComponent;

window.addEventListener('resize', photoComponent);


for (let i of social_media) {
    i.classList.add('social-media');
};

li_content.addEventListener('show.bs.collapse', (evt) => {
    h1.classList.add('hidden');
    image_Arrow.classList.add('hidden');
});

li_content.addEventListener('hide.bs.collapse', (evt) => {
    h1.classList.remove('hidden');
    image_Arrow.classList.remove('hidden');
});