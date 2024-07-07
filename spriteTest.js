const texture = Assets.load('https://pixijs.com/assets/bunny.png');

// Create a bunny Sprite
const bunny = new Sprite(texture);

// Center the sprite's anchor point
bunny.anchor.set(0.5);

// Move the sprite to the center of the screen
bunny.x = 10;
bunny.y = 10;
