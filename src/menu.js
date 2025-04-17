export function loadMenu() {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "Our Menu";

    const startersHeading = document.createElement('h2');
    startersHeading.textContent = "Starters";
    
    const startersList = document.createElement('ul');
    const starter_1 = document.createElement('li');
    starter_1.textContent = "Bruschetta - Toasted bread topped with diced tomatoes, basil, and olive oil."
    const starter_2 = document.createElement('li');
    starter_2.textContent = "Stuffed Mushrooms - Baked mushrooms filled with herbed cream cheese."

    startersList.appendChild(starter_1);
    startersList.appendChild(starter_2);
    
    const mainCourseHeading = document.createElement('h2');
    mainCourseHeading.textContent = "Desserts";

    const mainCourseList = document.createElement('ul');
    const course_1 = document.createElement('li');
    course_1.textContent = "Grilled Salmon - Served with lemon butter sauce and seasonal veggies.";
    const course_2 = document.createElement('li');
    course_2.textContent = "Spaghetti Carbonara - Classic Italian pasta with creamy egg sauce and pancetta.";
    const course_3 = document.createElement('li');
    course_2.textContent = "Vegetarian Buddha Bowl - Quinoa, roasted chickpeas, and avocado with tahini dressing.";

    mainCourseList.appendChild(course_1);
    mainCourseList.appendChild(course_2);

    const dessertsHeading = document.createElement('h2');
    dessertsHeading.textContent = "Desserts";

    const dessertsList = document.createElement('ul');

    const dessert_1 = document.createElement('li');
    dessert_1.innerHTML = "<strong>Tiramisu</strong> – Layers of espresso-soaked ladyfingers and mascarpone cream.";

    const dessert_2 = document.createElement('li');
    dessert_2.innerHTML = "<strong>Chocolate Lava Cake</strong> – Warm chocolate cake with a gooey center, served with vanilla ice cream.";

    dessertsList.appendChild(dessert_1);
    dessertsList.appendChild(dessert_2);

    menuContainer.appendChild(startersList);
    menuContainer.appendChild(mainCourseList);
    menuContainer.appendChild(dessertsList);

    content.appendChild(menuContainer);
}