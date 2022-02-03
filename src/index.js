import showHome from "./home";
import showMenu from "./menu";
import showContact from "./contact";

const contentDiv = document.getElementById('content');
const navButtons = document.getElementsByClassName('button-nav');

function createHeader(){
    const header = document.createElement('header');
    header.classList.add = 'header';
    
    const restrauntName = document.createElement('h1');
    restrauntName.classList.add('r-name');
    restrauntName.textContent = 'Restraunt Name';
    
    header.appendChild(restrauntName);
    header.appendChild(createNav());
    
    return header
}

function createNav(){
    const navBar = document.createElement('nav');
    navBar.classList.add('navbar');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click',()=>{
        selectButton(homeButton)
        showHome()
    })
    
    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click',()=>{
        selectButton(menuButton)
        showMenu()
        const maindiv = document.getElementById('main');
        main.style.marginBottom = "4em"
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click',()=>{
        selectButton(contactButton)
        showContact()
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);

    return navBar
}

function selectButton(clickedButton){

    for (const button of navButtons) {
        button.classList.remove('selected');
    }

    clickedButton.classList.add('selected');
}


function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id','main');
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.classList.add('copyright-text');
    copyright.textContent= "copyright © Darshika";

    footer.appendChild(copyright);

    return footer

}

contentDiv.appendChild(createHeader());
contentDiv.appendChild(createMain());
contentDiv.appendChild(createFooter());
showHome()
