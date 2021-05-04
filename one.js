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
        navBar.style.paddingLeft = '20px'
    }
    else if(navBarWidth === "200px"){
        navBar.style.width = '0px'
        mainBody.style.marginLeft ='0px';
        navBar.style.paddingLeft = '0px'
    }
}