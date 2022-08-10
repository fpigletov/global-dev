'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const homeDescr = document.querySelector('.home__descr');
    const input = document.querySelector('.home-search__input');
    const burgerBtn = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');    

    //SlideToggle
    let slideUp = (target, duration = 500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('slide');
        }, duration);
    };

    let slideDown = (target, duration = 500) => {
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') {
            display = 'block';
        }            
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('slide');
        }, duration);
    };

    let slideToggle = (target, duration = 500) => {
        if (!target.classList.contains('slide')) {
            target.classList.add('slide');
            if (window.getComputedStyle(target).display === 'none') {
                return slideDown(target, duration);
            } else {
                return slideUp(target, duration);
            }
        }
};

    //Header
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        slideToggle(headerMenu);
    });

    function removeActive() {
        if (headerMenu.style.display === 'block') {
            slideUp(headerMenu);                
        }

        if (burgerBtn.classList.contains('active')) {
            burgerBtn.classList.remove('active');
        }
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {           
            removeActive();            
        }
    });

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.header__menu') && !target.closest('.header__burger') &&
            burgerBtn.classList.contains('active')) {
            removeActive();
        }

        if (target.classList.contains('header__link')) {
            removeActive();
        }
    });

    //Upload
    fetch('https://baconipsum.com/api/?type=lucky')
        .then(response => response.json())
        .then(data => {
            homeDescr.textContent = data[0].substr(0, 150);
        })
        .catch(err => alert(err));
    
    //Search
    input.addEventListener('input', () => {        
        let inputValue = input.value.replace(/[!,@,#,$,%,^,&,*,(,)]/g, '');
        input.value = inputValue;
    });

    //Animation
    gsap.registerPlugin(MotionPathPlugin);

    gsap.from('#flag-1', {
        motionPath: {
            path: [{ x: 80, y: 50 }, { x: 200, y: 0 }]
        },
        duration: 3,
        delay: 3
    });
    

    gsap.from('#flag-2', {
        motionPath: {
            path: [{x:100, y:150}, {x:200, y:170}]
        },
        duration: 3,
        delay: 3.4
    });

    gsap.from('#flag-3', {
        motionPath: {
            path: [{x:-70, y:100}, {x:-20, y:200}]
        },
        duration: 3,
        delay: 3.8
    });

    gsap.from('#flag-4', {
        motionPath: {
            path: [{x:-100, y:-20}, {x:-200, y:50}]
        },
        duration: 3,
        delay: 4.2
    });

    gsap.from('#flag-5', {
        motionPath: {
            path: [{x:-100, y:-50}, {x:-130, y:0}]
        },
        duration: 3,
        delay: 4.6
    });

    gsap.to('#flag-1',{
        motionPath: {
            curviness: 1.5,
            path: [{x: 0, y: 0}, {x: 157, y: -269}, {x: 436, y: -98},
            {x: 272, y: 169}, {x: 0, y: 0}]
        },
        duration: 20,
        delay: 7.6,     
        repeat: -1,
        ease: Power0.easeNone
    });

    gsap.to('#flag-2',{
        motionPath: {
            curviness: 1.5,
            path: [{x: 0, y: 0}, {x: 298, y: -96}, {x: 387, y: 213},
            {x: 91, y: 300}, {x: 0, y: 0}]
        },
        duration: 20,
        delay: 7.6,   
        repeat: -1,
        ease: Power0.easeNone
    });
    
    gsap.to('#flag-3',{
        motionPath: {
            curviness: 1.5,
            path: [{x: 0, y: 0}, {x: 196, y: 250}, {x: -56, y: 442},
            {x: -253, y: 195}, {x: 0, y: 0}]
        },
        duration: 20,
        delay: 7.6,  
        repeat: -1,
        ease: Power0.easeNone
    });

    gsap.to('#flag-4',{
        motionPath: {
            curviness: 1.5,
            path: [{x: 0, y: 0}, {x: -90, y: 300}, {x: -400, y: 204},
            {x: -306, y: -97}, {x: 0, y: 0}]
        },
        duration: 20,
        delay: 7.6,  
        repeat: -1,
        ease: Power0.easeNone
    });

    gsap.to('#flag-5',{
        motionPath: {
            curviness: 1.5,
            path: [{x: 0, y: 0}, {x: -255, y: 176}, {x: -433, y: -98},
            {x: -168, y: -267}, {x: 0, y: 0}]
        },
        duration: 20,
        delay: 7.6,   
        repeat: -1,
        ease: Power0.easeNone
    });
});