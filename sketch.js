// Création des variables initiales
let home;
let over;
let bg;
let player;
let ennemy;
let speed;
let status = "not-in-game";

// Création d'une fonction de pré-chargement
function preload() {
  // Chargement des images
  home = loadImage('/img/home.png');
  over = loadImage('/img/over.png');
  bg = loadImage('/img/bg.png');
  player = loadImage('/img/player.png');
  ennemy = loadImage('/img/ennemy.png');
}

// Création d'une fonction de configuration
function setup() {
  createCanvas(512, 512); // Création du canvas
  image(home, 0, 0); // Affichage de l'écran de démarrage
}

// Création de la fonction "draw"
function draw() {
  movePlayer(); // Appel de la fonction de déplacement du joueur
}

function init() {
  image(bg, 0, 0); // Affichage du fond du jeu
  image(player, 128, 360); // Affichage du joueur
  image(ennemy, 128, 0); // Affichage de l'ennemi
}

// Création de la fonction de déplacement du joueur
function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    image(player, 1, 360);
  }
}

// Création de la fonction de détection de touche
function keyPressed() {
  if (status === "not-in-game") {
    drop();
  }
}