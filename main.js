
let myContainer = document.querySelector('.container0');
let myWelcome = document.querySelector('.welcome');
let myPicture = document.querySelector('#me');
let myContainer2 = document.querySelector('.container2');
let myParagraph = document.querySelector('p');

anime({
    targets: [myContainer,myWelcome],  
    translateX: {       
        value:[-250,0],
        duration:2300,       
        },   
        rotate: {
        value:180,
        duration:2500,
        easing: 'easeInOutSine',   
        }, 
        scale: {
            value:5.0,
            duration:3000,           
        },
        delay:1000,          
});


anime({
    targets: [myPicture],  
    scale: {
        value: [0,1], 
        duration:3200, 
        easing:'easeInOutExpo',          
    },
    delay:1000,
       
});


// anime ({
//     targets:[myContainer2, myParagraph],
//     translateX: {
//         value: [2002, 0], 
//         duration:3200,       
//     },
// });