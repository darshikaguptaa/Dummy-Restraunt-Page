
function createHome(){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    
    const welcome = document.createElement('p');
    welcome.classList.add('welcome');
    welcome.textContent = 'Welcome to the Restraunt Name '

    const tagLine = document.createElement('p');
    tagLine.classList.add('tagline');
    tagLine.textContent = 'Best Food in the Country'

    const image = document.createElement('img');
    image.setAttribute('src','./images/home.jpg');

    const orderUs = document.createElement('p')
    orderUs.classList.add('order')
    orderUs.textContent = 'Order From Us Online and get 10% Off'
    
    homeDiv.appendChild(welcome)
    homeDiv.appendChild(tagLine)
    homeDiv.appendChild(image)
    homeDiv.appendChild(orderUs)

    return homeDiv
}

function showHome(){
    const mainDiv = document.getElementById('main');
    mainDiv.textContent = ''
    mainDiv.appendChild(createHome());
}

export default showHome;