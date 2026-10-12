const categories = [
  {
    name: "Trending Now",
    movies: [
      "Dark Horizon", "The Last Kingdom", "Night Runner", "Ocean Deep",
      "Silent Echo", "Iron Valley", "Neon City", "Wild Frontier"
    ]
  },
  {
    name: "Top Picks for You",
    movies: [
      "Blue Moon", "Crimson Tide", "Shadow Play", "Fast Lane",
      "Lost Island", "Midnight Chase", "Golden Gate", "Red Sky"
    ]
  },
  {
    name: "Action & Adventure",
    movies: [
      "Thunder Strike", "Desert Storm", "Rogue Agent", "Steel Rain",
      "Mountain Peak", "Fire Line", "Skyfall Zero", "Hunter's Moon"
    ]
  },
  {
    name: "Comedy Hits",
    movies: [
      "Laugh Factory", "Roomies", "Office Chaos", "Wedding Week",
      "Campus Crew", "Funny Business", "Road Trip 101", "The Prank"
    ]
  }
];

const descriptions = [
  "A thrilling story full of twists that will keep you on the edge of your seat.",
  "An unforgettable journey of friendship, courage and discovery.",
  "When everything is lost, one hero rises to take on the impossible.",
  "A hilarious and heartwarming tale the whole family can enjoy."
];

function gradientFor(title) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash) % 360;
  const h2 = (h1 + 50) % 360;
  return `linear-gradient(135deg, hsl(${h1}, 65%, 35%), hsl(${h2}, 70%, 20%))`;
}

function randomFrom(arr, seedTitle) {
  return arr[seedTitle.length % arr.length];
}

const rowsContainer = document.getElementById("rows");

function renderRows(filter = "") {
  rowsContainer.innerHTML = "";

  categories.forEach(cat => {
    const filtered = cat.movies.filter(m =>
      m.toLowerCase().includes(filter.toLowerCase())
    );
    if (filtered.length === 0) return;

    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <h3>${cat.name}</h3>
      <div class="row-wrap">
        <button class="arrow left">&#8249;</button>
        <div class="cards"></div>
        <button class="arrow right">&#8250;</button>
      </div>
    `;

    const cardsBox = row.querySelector(".cards");

    filtered.forEach(title => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.background = gradientFor(title);
      card.textContent = title;
      card.addEventListener("click", () => openModal(title, cat.name));
      cardsBox.appendChild(card);
    });

    row.querySelector(".left").addEventListener("click", () => {
      cardsBox.scrollBy({ left: -600 });
    });
    row.querySelector(".right").addEventListener("click", () => {
      cardsBox.scrollBy({ left: 600 });
    });

    rowsContainer.appendChild(row);
  });
}

renderRows();

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

document.getElementById("search").addEventListener("input", e => {
  renderRows(e.target.value);
});

const modal = document.getElementById("modal");
const addListBtn = document.getElementById("addList");
let myList = [];
let currentTitle = "";

function openModal(title, category) {
  currentTitle = title;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBanner").style.background = gradientFor(title);
  document.getElementById("modalMeta").textContent =
    `98% Match  •  2026  •  ${category}`;
  document.getElementById("modalDesc").textContent =
    randomFrom(descriptions, title);
  addListBtn.textContent = myList.includes(title) ? "✓ In My List" : "+ My List";
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

document.getElementById("heroInfo").addEventListener("click", () => {
  openModal("Stranger Nights", "Featured Series");
});

addListBtn.addEventListener("click", () => {
  if (myList.includes(currentTitle)) {
    myList = myList.filter(t => t !== currentTitle);
    addListBtn.textContent = "+ My List";
  } else {
    myList.push(currentTitle);
    addListBtn.textContent = "✓ In My List";
  }
});
