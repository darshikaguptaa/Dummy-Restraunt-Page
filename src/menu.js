function createMenu(){
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    
    menuDiv.appendChild(foodItem('Margarita',"Your Pizza !!" ));
    menuDiv.appendChild(foodItem('Veg Loaded Pizza',"Your Pizza !!" ));
    menuDiv.appendChild(foodItem('White Sauce Pasta',"Your Pasta !!" ));
    menuDiv.appendChild(foodItem('Red Sauce Pasta',"Your Pasta !!" ));
    menuDiv.appendChild(foodItem('Veg Burger',"Your Veb Loaded Burger with extra patty" ));
    menuDiv.appendChild(foodItem('Non Veg Burger',"Delicious Chicken Burger with extra patty" ));
    menuDiv.appendChild(foodItem('French Fries',"Your Fries !!" ));
    menuDiv.appendChild(foodItem('Grilled Sandwich',"Your Fries !!" ));

    return menuDiv
}


function foodItem(name,description){
    const food = document.createElement('div');
    food.classList.add('food-item');

    const foodName = document.createElement('h1');
    foodName.textContent = name

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description

    const foodImage = document.createElement('img');
    foodImage.src = `./images/food/${name}.jpg`
    foodImage.alt = `${name}`

    food.appendChild(foodImage)
    food.appendChild(foodName)
    food.appendChild(foodDescription)

    return food

}

function showMenu(){
    const mainDiv = document.getElementById('main');
    mainDiv.textContent = ''
    mainDiv.appendChild(createMenu());
}

export default showMenu;