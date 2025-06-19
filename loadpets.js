const pets = [
  { name: "Buddy - Beagle", type: "Dog", age: 3, image: "img/dogs/dog01.jpg" },
  { name: "Max - Terrier", type: "Dog", age: 4, image: "img/dogs/dog02.jpg" },
  { name: "Charlie - Puppy", type: "Dog", age: 2, image: "img/dogs/dog03.jpg" },
  { name: "Whiskers - Tabby", type: "Cat", age: 2, image: "img/cats/cat01.jpg" },
  { name: "Mittens - Persian", type: "Cat", age: 3, image: "img/cats/cat02.jpg" },
  { name: "Luna - Siamese", type: "Cat", age: 1, image: "img/cats/cat03.jpg" },
  { name: "Hyan - American Capybara", type: "Capybara", age: 3, image: "img/capybaras/capybara01.jpg" },
  { name: "Tofu - British Capybara", type: "Capybara", age: 4, image: "img/capybaras/capybara02.jpg" },
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

function renderFilteredPets(container, filterTypes) {
  container.innerHTML = '';
  pets.forEach(pet => {
    if (filterTypes.includes(pet.type)) {
      container.innerHTML += createPetCard(pet);
    }
  });
}

function loadPets() {
  const petContainer = document.getElementById('pet-list');
  if (!petContainer) return;

  function getCheckedTypes() {
    return Array.from(document.querySelectorAll('input[name="pet-type"]:checked'))
      .map(cb => cb.value);
  }

  function handleFilterChange() {
    const selected = getCheckedTypes();
    renderFilteredPets(petContainer, selected);
  }

  handleFilterChange(); // Initial

  document.querySelectorAll('input[name="pet-type"]').forEach(cb => {
    cb.addEventListener('change', handleFilterChange);
  });
}

document.addEventListener('DOMContentLoaded', loadPets);
