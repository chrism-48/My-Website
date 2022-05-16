
let myContainer = document.querySelector('.container0');
let myWelcome = document.querySelector('.welcome');
let myPicture = document.querySelector('#me');
let myContainer2 = document.querySelector('.container2');
let myParagraph = document.querySelector('p');

let myLinkBar = document.querySelector('#links');
let myLinks = document.querySelector('.thelinks');

let myGH = document.querySelector('.thelinks.gh');
let myLI = document.querySelector('.thelinks.li');
let myHO = document.querySelector('.thelinks.ho');

anime({
    targets: [myContainer,myWelcome],  
    translateX: {       
        value:[-250,0],
        duration:1300,       
        },   
        rotate: {
        value:[180,-180],
        duration:2500,
        easing: 'easeInOutSine',   
        }, 
        // scale: {
        //     value:0,
        //     duration:3000,           
        // },        
        delay:3000,          
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


anime ({
    targets:[myContainer2, myParagraph],
    scale: {
        value: [0, 1], 
        easing: 'easeInOutSine', 
        duration:3200,  
         
    },
});

anime ({
    targets:[myLinkBar, myLinks],
    translateX: {
        value: [1000,0], 
        easing: 'easeInOutSine', 
        duration:3200,  
         
    },
});

anime ({
    targets:[myGH,myLI,myHO],
    translateX: {
        value: [800,0], 
        easing: 'easeInOutSine', 
        duration:1200,           
    },
    rotate: {
        value:'10turn',
        duration:4000,
        easing: 'easeInOutSine', 
    }
    
});