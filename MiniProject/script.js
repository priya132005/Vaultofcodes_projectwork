// Recipes data
const recipes = {
  1: {
    title: "Chocolate Cake",
    img: "Images/cake1.webp",
    prepTime: "45 mins",
    serves: "8",
    ingredients: [ "2 cups flour", "1 cup sugar", "1/2 cup cocoa powder", "1 tsp baking soda", "1 cup milk", "1/2 cup oil", "2 eggs" ],
    steps: [ "Preheat oven to 180°C", "Mix dry ingredients", "Add wet ingredients", "Pour into pan", "Bake for 35 mins", "Cool & serve" ]
  },
  2: {
    title: "Creamy Pasta",
    img: "Images/pasta.avif",
    prepTime: "25 mins",
    serves: "2",
    ingredients: [ "200g pasta", "1/2 cup cream", "1 tbsp butter", "Salt", "Pepper" ],
    steps: [ "Boil pasta", "Heat butter & cream", "Mix pasta", "Season", "Serve hot" ]
  },
  3: {
    title: "Cheesy Pizza",
    img: "Images/pizza.webp",
    prepTime: "30 mins",
    serves: "4",
    ingredients: [ "1 pizza base", "1/2 cup tomato sauce", "1 cup mozzarella", "1 tsp oregano", "Toppings of choice" ],
    steps: [ "Spread sauce on base", "Add cheese & toppings", "Sprinkle oregano", "Bake at 200°C for 15 mins", "Slice & serve" ]
  },
  4: {
    title: "Spicy Burger",
    img: "Images/burger.avif",
    prepTime: "20 mins",
    serves: "2",
    ingredients: [ "2 burger buns", "2 patties", "Lettuce", "Onion", "Tomato", "Hot sauce", "Cheese slice" ],
    steps: [ "Grill patties", "Toast buns", "Assemble with veggies & sauce", "Add cheese", "Serve with fries" ]
  },
  5: {
    title: "Fresh Salad",
    img: "Images/salad.jpg",
    prepTime: "10 mins",
    serves: "2",
    ingredients: [ "Lettuce", "Cucumber", "Tomato", "Carrot", "Salad dressing" ],
    steps: [ "Chop vegetables", "Mix in bowl", "Add dressing", "Toss well", "Serve fresh" ]
  },
  6: {
    title: "Pancakes",
    img: "Images/pancake.jpg",
    prepTime: "20 mins",
    serves: "3",
    ingredients: [ "1 cup flour", "1 tbsp sugar", "1 cup milk", "1 egg", "1 tbsp butter" ],
    steps: [ "Mix all ingredients", "Pour batter on hot pan", "Flip when bubbly", "Cook both sides", "Serve with syrup" ]
  },
  7: {
    title: "Tomato Soup",
    img: "Images/soup.jpg",
    prepTime: "25 mins",
    serves: "3",
    ingredients: [ "4 tomatoes", "1 onion", "2 cloves garlic", "Salt", "Pepper", "Basil" ],
    steps: [ "Sauté onion & garlic", "Add chopped tomatoes", "Cook & blend", "Season", "Serve hot" ]
  },
  8: {
    title: "Chicken Curry",
    img: "Images/curry.webp",
    prepTime: "40 mins",
    serves: "4",
    ingredients: [ "500g chicken", "2 onions", "1 cup yogurt", "Spices", "Oil", "Salt" ],
    steps: [ "Marinate chicken", "Sauté onions", "Add chicken & spices", "Cook till done", "Serve with rice" ]
  },
  9: {
    title: "Fried Rice",
    img: "Images/friedrice.webp",
    prepTime: "25 mins",
    serves: "2",
    ingredients: [ "2 cups rice", "Mixed vegetables", "Soy sauce", "Salt", "Pepper", "Oil" ],
    steps: [ "Cook rice", "Stir-fry veggies", "Add rice & sauces", "Mix well", "Serve hot" ]
  },
  10: {
    title: "Club Sandwich",
    img: "Images/sandwich.webp",
    prepTime: "15 mins",
    serves: "2",
    ingredients: [ "Bread slices", "Lettuce", "Tomato", "Cucumber", "Mayonnaise", "Cheese slice" ],
    steps: [ "Toast bread", "Layer veggies & cheese", "Spread mayo", "Stack slices", "Cut & serve" ]
  },
  11: {
    title: "Mac & Cheese",
    img: "Images/mac&cheese.jpg",
    prepTime: "30 mins",
    serves: "2",
    ingredients: [ "2 cups macaroni", "1 cup cheese", "1/2 cup milk", "Butter", "Salt", "Pepper" ],
    steps: [ "Boil macaroni", "Melt cheese in milk & butter", "Mix with macaroni", "Season", "Serve warm" ]
  },
  12: {
    title: "Sushi Rolls",
    img: "Images/Sushi.jpg",
    prepTime: "45 mins",
    serves: "2",
    ingredients: [ "Sushi rice", "Nori sheets", "Cucumber", "Avocado", "Soy sauce", "Vinegar" ],
    steps: [ "Prepare sushi rice", "Place rice on nori", "Add fillings", "Roll tightly", "Slice & serve" ]
  },
  13: {
    title: "Grilled Cheese",
    img: "Images/grilledcheese.jpg",
    prepTime: "10 mins",
    serves: "1",
    ingredients: [ "2 bread slices", "Butter", "Cheese slices" ],
    steps: [ "Butter bread", "Add cheese", "Grill both sides", "Cut & serve hot" ]
  },
  14: {
    title: "Veg Momos",
    img: "Images/momo.jpg",
    prepTime: "35 mins",
    serves: "4",
    ingredients: [ "Dough", "Cabbage", "Carrot", "Onion", "Spices" ],
    steps: [ "Prepare filling", "Make dough balls", "Stuff & fold", "Steam for 15 mins", "Serve with chutney" ]
  },
  15: {
    title: "Spring Rolls",
    img: "Images/springroll.webp",
    prepTime: "30 mins",
    serves: "4",
    ingredients: [ "Spring roll sheets", "Cabbage", "Carrot", "Soy sauce", "Oil for frying" ],
    steps: [ "Prepare filling", "Stuff & roll", "Seal edges", "Deep fry", "Serve with sauce" ]
  },
  16: {
    title: "Hakka Noodles",
    img: "Images/noddle.jpg",
    prepTime: "20 mins",
    serves: "2",
    ingredients: [ "200g noodles", "Capsicum", "Carrot", "Soy sauce", "Oil" ],
    steps: [ "Boil noodles", "Stir-fry veggies", "Add sauces", "Mix with noodles", "Serve hot" ]
  },
  17: {
    title: "Paneer Tikka",
    img: "Images/paneertikki.jpg",
    prepTime: "35 mins",
    serves: "3",
    ingredients: [ "200g paneer", "Yogurt", "Spices", "Capsicum", "Onion" ],
    steps: [ "Marinate paneer", "Skewer with veggies", "Grill or bake", "Serve with chutney" ]
  },
  18: {
    title: "Idli Sambar",
    img: "Images/idli.jpg",
    prepTime: "40 mins",
    serves: "4",
    ingredients: [ "Idli batter", "Toor dal", "Tamarind", "Spices", "Vegetables" ],
    steps: [ "Steam idlis", "Cook sambar", "Temper spices", "Serve hot idli with sambar" ]
  },
  19: {
    title: "Hyderabadi Biryani",
    img: "Images/biryani.jpg",
    prepTime: "1 hour",
    serves: "4",
    ingredients: [ "Basmati rice", "Chicken", "Yogurt", "Fried onions", "Spices" ],
    steps: [ "Marinate chicken", "Cook rice", "Layer rice & chicken", "Dum cook", "Serve with raita" ]
  },
  20: {
    title: "Sweet Lassi",
    img: "Images/lassi.webp",
    prepTime: "10 mins",
    serves: "2",
    ingredients: [ "1 cup yogurt", "1/2 cup water", "Sugar", "Cardamom", "Ice cubes" ],
    steps: [ "Blend all ingredients", "Pour into glass", "Garnish with cardamom", "Serve chilled" ]
  }
};



// Load recipe from URL parameter
const params = new URLSearchParams(window.location.search);
const recipe = recipes[params.get('id')];
if (!recipe) {
  document.body.innerHTML = "<p style='padding:20px; font-size:1.2rem;'>Recipe not found!</p>";
  throw new Error("No such recipe");
}

// Populate recipe content
document.getElementById("title").textContent = recipe.title;
document.getElementById("recipeImage").src = recipe.img;
document.getElementById("prepTime").textContent = recipe.prepTime;
document.getElementById("serving").textContent = recipe.serves;

recipe.ingredients.forEach(i => {
  const li = document.createElement("li");
  li.textContent = i;
  document.getElementById("ingredients").appendChild(li);
});

recipe.steps.forEach(s => {
  const li = document.createElement("li");
  li.textContent = s;
  document.getElementById("steps").appendChild(li);
});

// Toggle sections and auto-close the other
function toggleSection(id) {
  const target = document.getElementById(id);
  const other = id === 'ingredients' ? document.getElementById('steps') : document.getElementById('ingredients');

  if (target.style.display === 'block') {
    target.style.display = 'none';
  } else {
    target.style.display = 'block';
    other.style.display = 'none';
  }
}

// Step navigation and progress bar
let currentStep = -1;
function startCooking() {
  // Reset all steps and progress
  const steps = document.querySelectorAll(".steps li");
  steps.forEach(step => step.classList.remove("step-highlight"));
  document.getElementById("progressBar").style.width = "0%";
  currentStep = -1;
  nextStep();
}

function nextStep() {
  const list = document.querySelectorAll(".steps li");

  if (currentStep >= 0 && currentStep < list.length) {
    list[currentStep].classList.remove("step-highlight");
  }

  currentStep++;

  if (currentStep < list.length) {
    list[currentStep].classList.add("step-highlight");
    const progress = ((currentStep + 1) / list.length) * 100;
    document.getElementById("progressBar").style.width = `${progress}%`;
  } else {
    alert("You have completed all the steps!");
  }
}

// Go back to home page
function goBack() {
  window.location.href = "index.html";
}
// Timer functionality
let timerInterval;
function parsePrepTimeToSeconds(prepTime) {
  const matches = prepTime.match(/(\d+)\s*mins?/i);
  return matches ? parseInt(matches[1]) * 60 : 0;
}

function startCooking() {
  // Reset steps
  const steps = document.querySelectorAll(".steps li");
  steps.forEach(step => step.classList.remove("step-highlight"));
  document.getElementById("progressBar").style.width = "0%";
  currentStep = -1;
  nextStep();

  // Reset timer
  clearInterval(timerInterval);
  const totalSeconds = parsePrepTimeToSeconds(recipe.prepTime);
  let timeLeft = totalSeconds;
  updateTimerDisplay(timeLeft);

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay(timeLeft);
    } else {
      clearInterval(timerInterval);
      document.getElementById("timer").textContent = "Time's up!";
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  document.getElementById("timer").textContent = `${mins}:${secs}`;
}

