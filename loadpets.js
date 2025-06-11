const pets = [
    { name: "Buddy - Beagle", type: "Dog", age: 3, image: "img/dogs/dog01.jpg" },
    { name: "Max - Terrier", type: "Dog", age: 4, image: "img/dogs/dog02.jpg" },
    { name: "Charlie - Puppy", type: "Dog", age: 2, image: "img/dogs/dog03.jpg" },
    { name: "Whiskers - Tabby", type: "Cat", age: 2, image: "img/cats/cat01.jpg" },
    { name: "Mittens - Persian", type: "Cat", age: 3, image: "img/cats/cat02.jpg" },
    { name: "Luna - Siamese", type: "Cat", age: 1, image: "img/cats/cat03.jpg" },
    { name: "Hyan - American Capybara", type: "Capybara", age: 3, image: "img/capybaras/capybara01.jpg" },
    { name: "Tofu - British Capybara", type: "Capybara", age: 4, image: "img/capybaras/capybara02.jpg" }
  ];
  
  function createPetCard(pet) {
    return `
      <div class="pet">
        <img src="${pet.image}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>
      </div>
    `;
  }
  
  function loadPets() {
    const dogsContainer = document.getElementById('dogs-list');
    const catsContainer = document.getElementById('cats-list');
    const capybarasContainer = document.getElementById('capybaras-list');
    const featuredContainer = document.getElementById('featured-pets');
  
    // pets.html
    if (dogsContainer && catsContainer && capybarasContainer) {
      pets.forEach(pet => {
        const card = createPetCard(pet);
        if (pet.type === "Dog") {
          dogsContainer.innerHTML += card;
        } else if (pet.type === "Cat") {
          catsContainer.innerHTML += card;
        } else if (pet.type === "Capybara") {
          capybarasContainer.innerHTML += card;
        }
      });
    }
  
    // index.html
    if (featuredContainer) {
      const dog = pets.find(p => p.type === "Dog");
      const cat = pets.find(p => p.type === "Cat");
      const featured = [dog, cat];
      featured.forEach(pet => {
        if (pet) featuredContainer.innerHTML += createPetCard(pet);
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadPets);
  