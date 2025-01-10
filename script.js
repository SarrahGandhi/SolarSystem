var solarSystemInfo = {
  sun: {
    title: "Sun",
    description:
      "The Sun is the center of the solar system and provides energy needed for life on Earth.",
    image: "images/sun.jpg",
    facts: [
      "The Sun is about 4.6 billion years old.",
      "It contains 99.8% of the solar system's mass.",
      "The Sun's surface temperature is about 5,500°C.",
    ],
  },
  mercury: {
    title: "Mercury",
    description:
      "Mercury is the smallest planet in the solar system and has no atmosphere.",
    image: "images/mercury.png",
    facts: [
      "Mercury has a large metallic core.",
      "Mercury has no moons.",
      "A year on Mercury is just 88 Earth days.",
    ],
  },
  venus: {
    title: "Venus",
    description:
      "Venus has a thick atmosphere and is the hottest planet in the solar system.",
    image: "images/venus.png",
    facts: [
      "Venus rotates backward compared to most planets.",
      "Its surface temperature is around 465°C.",
      "A day on Venus is longer than a year on Venus.",
    ],
  },
  earth: {
    title: "Earth",
    description:
      "Earth is the only planet known to support life, with a rich variety of climates and ecosystems.",
    image: "images/earth.png",
    facts: [
      "Earth is 4.5 billion years old.",
      "70% of Earth's surface is covered by water.",
      "The atmosphere is 78% nitrogen and 21% oxygen.",
    ],
  },
  mars: {
    title: "Mars",
    description:
      "Mars is known as the 'Red Planet' and may have supported life in the past.",
    image: "images/mars.png",
    facts: [
      "Mars has the largest volcano in the solar system, Olympus Mons.",
      "Mars has two moons: Phobos and Deimos.",
      "A year on Mars lasts 687 Earth days.",
    ],
  },
  jupiter: {
    title: "Jupiter",
    description:
      "Jupiter is the largest planet in the solar system and is known for its Great Red Spot.",
    image: "images/jupiter.webp",
    facts: [
      "Jupiter has the largest moon, Ganymede.",
      "Jupiter has a Great Red Spot, a giant storm that has been raging for centuries.",
      "A year on Jupiter lasts 11 Earth days.",
    ],
  },
  saturn: {
    title: "Saturn",
    description:
      "Saturn is the second largest planet in the solar system and is known for its beautiful rings.",
    image: "images/saturn.webp",
    facts: [
      "Saturn has the largest rings in the solar system.",
      "Saturn has a moon, Titan.",
      "A year on Saturn lasts 12 Earth days.",
    ],
  },
  uranus: {
    title: "Uranus",
    description:
      "Uranus is the third largest planet in the solar system and is known for its unique tilt.",
    image: "images/uranus.webp",
    facts: [
      "Uranus has the largest rings in the solar system.",
      "Uranus has a moon, Titania.",
      "A year on Uranus lasts 84 Earth years.",
    ],
  },
  neptune: {
    title: "Neptune",
    description:
      "Neptune is the fourth largest planet in the solar system and is known for its blue color.",
    image: "images/neptune.webp",
    facts: [
      "Neptune has the largest rings in the solar system.",
      "Neptune has a moon, Triton.",
      "A year on Neptune lasts 167 Earth years.",
    ],
  },
};

// Function to display information when a planet is clicked
function displayInfo(planet) {
  var rightTitle = document.getElementById("right-title");
  var rightInfo = document.getElementById("right-info");
  var planetImage = document.getElementById("planet-image");
  var factsList = document.getElementById("facts-list");

  if (solarSystemInfo[planet]) {
    var info = solarSystemInfo[planet];
    rightTitle.textContent = info.title;
    rightInfo.textContent = info.description;
    planetImage.src = info.image;
    planetImage.alt = info.title;

    // Update facts
    factsList.innerHTML = "";
    for (let i = 0; i < info.facts.length; i++) {
      const li = document.createElement("li");
      li.textContent = info.facts[i];
      factsList.appendChild(li);
    }
  } else {
    // Reset to default solar system info
    rightTitle.textContent = "Solar System";
    rightInfo.textContent =
      "Welcome to the interactive solar system! Click on any planet to learn more about it.";
    planetImage.src = "images/solar-system.png";
    planetImage.alt = "Solar System";
    factsList.innerHTML = `
      <li>The solar system has 8 planets.</li>
      <li>Earth is the only planet known to support life.</li>`;
  }
}

// Shooting star
// Combined window.onload function
window.onload = function () {
  // Stars container logic
  var starsContainer = document.querySelector(".stars-container");
  var numStars = 100; // Adjust the number of stars

  for (var i = 0; i < numStars; i++) {
    var star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    starsContainer.appendChild(star);
  }

  // Comet container logic
  const cometContainer = document.getElementById("comet-container");

  function createComet() {
    const comet = document.createElement("div");
    comet.classList.add("comet");

    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    // Set the starting position
    comet.style.left = startX + "px";
    comet.style.top = startY + "px";

    // Add the comet to the container
    cometContainer.appendChild(comet);

    // Remove the comet after the animation ends
    setTimeout(function () {
      comet.remove();
    }, 5000);
  }

  // Generate a comet every 5 seconds
  setInterval(createComet, 5000);
};
