function createContact(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const phoneNumberHead = document.createElement('h2')
    phoneNumberHead.classList.add('animate')
    phoneNumberHead.textContent = 'Our Phone Number:'
    const phoneNumber = document.createElement('h2')
    phoneNumber.textContent = ` 📞999-888-777`
    phoneNumber.classList.add('animate')
    phoneNumber.classList.add('align')

    const eMailHead = document.createElement('h2')
    eMailHead.textContent = 'Our Email Address: '
    eMailHead.classList.add('animate')
    const eMail = document.createElement('h2')
    eMail.textContent = '✉ xyz@gmail.com'
    eMail.classList.add('animate')
    eMail.classList.add('align')
    
    const addressHead = document.createElement('h2')
    addressHead.textContent = 'Our  Address: '
    addressHead.classList.add('animate')
    const address = document.createElement('h2')
    address.textContent = ' 🏠 X-Street House number : y'
    address.classList.add('animate')
    address.classList.add('align')
    
    const instaHead = document.createElement('h2')
    instaHead.textContent = 'Our  Instagram: '
    instaHead.classList.add('animate')
    const insta = document.createElement('h2')
    insta.textContent = ' @restraunt_name'
    insta.classList.add('animate')
    insta.classList.add('align')

    contactDiv.appendChild(phoneNumberHead)
    contactDiv.appendChild(phoneNumber)
    contactDiv.appendChild(eMailHead)
    contactDiv.appendChild(eMail)
    contactDiv.appendChild(addressHead)
    contactDiv.appendChild(address)
    contactDiv.appendChild(instaHead)
    contactDiv.appendChild(insta)

    return contactDiv
}

function showContact(){
    const mainDiv = document.getElementById('main');
    mainDiv.textContent = ''
    mainDiv.appendChild(createContact());
}

export default showContact;