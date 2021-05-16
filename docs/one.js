let SetPosX;
let SetPosY;
let toggleButton = true;

function portfolioButtonClick(){
    let container = document.getElementById('dropdown-container');
    console.log(container);
    let displayState = getComputedStyle(container).display;
    console.log(displayState)
    if(displayState === "none"){
        container.style.transitionDuration='3ms';
        container.style.display = 'block';
        console.log('doing this')
    }
    else if(displayState === "block"){
        container.style.transitionDuration='3ms';
        container.style.display = 'none';
    }
}

function slidingNav(){
    let navBar = document.getElementById('navbar');
    let mainBody = document.getElementById('mainBody');
    let navBarWidth = getComputedStyle(navBar).width;
    console.log("opening...")
    if(navBarWidth === "0px"){
        navBar.style.width = '200px'
        mainBody.style.marginLeft ='200px';
        navBar.style.paddingLeft = '15px'
    }
    else if(navBarWidth === "200px"){
        navBar.style.width = '0px'
        mainBody.style.marginLeft ='0px';
        navBar.style.paddingLeft = '0px'
    }
}


function slidingCards(){
    console.log('doing this')
    let containerSlider = document.getElementById("containerSlider");
    let carousel = document.getElementById('carousel')
    let toggleArrow = document.getElementById('toggleArrow');
    let textNarrative = document.getElementById("narrativeText");
    let textNarrativeMarginLeft = getComputedStyle(textNarrative).marginLeft;
    let maximumContainerLen = getComputedStyle(containerSlider).width;
    if(toggleButton==true){
        console.log('opening')
        textNarrative.style.visibility = 'hidden';
        carousel.style.width = maximumContainerLen;
        toggleArrow.style.marginLeft = maximumContainerLen;
        document.getElementById('thisbutton').style.backgroundImage = 'url(image/arrow-left-short.svg)';
        toggleButton = false;
        textNarrative.style.transitionDelay = '0.0s'
    }
    else if(toggleButton==false){
        textNarrative.style.visibility = 'visible';
        carousel.style.width = '50%';
        toggleArrow.style.marginLeft = '49%';
        textNarrative.style.transitionDelay = '0.8s'
        document.getElementById('thisbutton').style.backgroundImage = 'url(image/arrow-right-short.svg)';
        toggleButton = true;
    }
}