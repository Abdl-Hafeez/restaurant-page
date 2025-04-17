import image from "./delicious-plate.jpg";
export function homeLoad() {
    const content = document.getElementById('content');
    
    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Flavor Haven";

    const img = document.createElement('img');
    img.src = image;
    img.alt = "Delicious food";
    img.style.width = "300px";

    const description = document.createElement('p');
    description.textContent = "At Flavor Haven, we serve delicious, freshly prepared dishes inspired by global flavors and local ingredients. Whether you're here for a quick bite or a long, cozy dinner, you'll find something to love.";

    content.appendChild(heading);
    content.appendChild(img);
    content.appendChild(description);
}





