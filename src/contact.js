export function loadContact() {
    const content = document.getElementById('content');

    const contactDiv = document.createElement('div');

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = "Contact Us";

    const contactDescription = document.createElement('p');
    contactDescription.textContent = "We’d love to hear from you! Whether you have a question, feedback, or want to book a reservation, feel free to reach out."

    const locationHeading = document.createElement('h2');
    locationHeading.textContent = "Our Location"; 
    const location =  document.createElement('p');
    location.textContent = "123 Flavor Street, Culinary City, FC 45678";

    const phoneHeading = document.createElement('h2');
    phoneHeading.textContent = "Phone";
    const phone = document.createElement('p');
    phone.innerHTML = `<a href="tel:+123456789>123 456-7890</a>`;

    const emailHeading = document.createElement('h2');
    emailHeading.textContent = "Email";
    const email = document.createElement('p');
    email.innerHTML = `<a href="mailto:info@flavorhaven.com">info@flavorhaven.com</a>`;

    const openingHours = document.createElement('h2');
    openingHours.textContent = "Opening Hours";
    const hoursList = document.createElement('ul');
    hoursList.innerHTML = `
            <li>Monday – Friday: 11:00 AM – 10:00 PM</li>
            <li>Saturday – Sunday: 9:00 AM – 11:00 PM</li>
    `
    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(contactDescription);
    contactDiv.appendChild(locationHeading);
    contactDiv.appendChild(location);
    contactDiv.appendChild(phoneHeading);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(emailHeading);
    contactDiv.appendChild(email);
    contactDiv.appendChild(openingHours);
    contactDiv.appendChild(hoursList);

    content.appendChild(contactDiv);
}