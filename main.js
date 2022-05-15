
let myContainer = document.querySelector('.container0');
let myWelcome = document.querySelector('.welcome');

anime({
    targets: [myContainer,myWelcome],  
    translateX: {       
        value:[-250,0],
        opacity:0,
        duration:2300,
        
        },   
        rotate: {
        value:180,
        duration:2500,
        easing: 'easeInOutSine',   
        }, 
        scale: {
            value:5.5,
            duration:3000,           
        },
        delay:1000,
        
        
});



