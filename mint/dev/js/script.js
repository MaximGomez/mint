'use strict'

document.addEventListener('DOMContentLoaded', function(event) {

    const   linksubMenu = document.querySelector('.drop__list--link'),
            subMenu = document.querySelector('.sub__menu'),
            arrow = document.querySelector('.drop__list-arrow'),
            footer_arrow = document.querySelector('.footer__arrow'),
            footer_link = document.querySelector('.comeback');
    
    linksubMenu.addEventListener('mouseover' , () => {
        subMenu.style.display = 'flex';
        arrow.classList.add('drop__list-arrow--active');
    });
    subMenu.addEventListener('mouseover' , () => {
        subMenu.style.display = 'flex';
    });
    
    subMenu.addEventListener('mouseout' , () => {
        subMenu.style.display = 'none';
    });
    linksubMenu.addEventListener('mouseout' , () => {
        subMenu.style.display = 'none';
        arrow.classList.remove('drop__list-arrow--active');
    });
    
    footer_link.addEventListener('mouseover' , () => {
        footer_arrow.classList.add('footer__arrow--active');
    });
    
    footer_link.addEventListener('mouseout' , () => {
        footer_arrow.classList.remove('footer__arrow--active');
    });
    
    
    const   galleryItemsActive = document.querySelectorAll('.gallery__element--active'),
            blogItemActive = document.querySelectorAll('.card__image--active');
        
    galleryItemsActive.forEach( function(child) {
    child.addEventListener('mouseover', () => { 
        child.style.opacity = 1;
    });
    child.addEventListener('mouseout', () => { 
        child.style.opacity = 0;
    });
    });
    
    blogItemActive.forEach( function(child) {
    child.addEventListener('mouseover', () => { 
        child.style.opacity = 1;
    });
    child.addEventListener('mouseout', () => { 
        child.style.opacity = 0;
    });
    });
    
    const   header = document.querySelector('.header'),
            work = document.querySelector('.work__title'),
            about = document.querySelector('.about__container'),
            blog = document.querySelector('.blog__container'),
            contact = document.querySelector('.contact__title');
    
    const   menu_work = document.querySelector('.menu__item-work'),
            menu_about = document.querySelector('.menu__item-about'),
            menu_blog = document.querySelector('.menu__item-blog'),
            menu_contact = document.querySelector('.menu__item-contact'),
            back_to_top = document.querySelector('.comeback');
    
    back_to_top.addEventListener('click', (event) => {
        event.preventDefault();
        header.scrollIntoView({
            block: "start", behavior: "smooth"
        });
    });
    
    menu_work.addEventListener('click', (event) => {
        event.preventDefault();
        work.scrollIntoView({
            block: "start", behavior: "smooth"
        });
    });
    
    menu_about.addEventListener('click', (event) => {
        event.preventDefault();
        about.scrollIntoView({
            block: "start", behavior: "smooth"
        });
    });
    
    menu_blog.addEventListener('click', (event) => {
        event.preventDefault();
        blog.scrollIntoView({
            block: "start", behavior: "smooth"
        });
    });
    
    menu_contact.addEventListener('click', (event) => {
        event.preventDefault();
        contact.scrollIntoView({
            block: "start", behavior: "smooth"
        });
    });
    
    const   burger_menu = document.querySelector('.burger__menu'),
            burger_menu_container = document.querySelector('.burger__container');
    
    burger_menu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        burger_menu.classList.toggle('burger__menu--active');
        burger_menu_container.classList.toggle('burger__container--active');
});
});