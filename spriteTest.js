(async () =>
{
    // Create a new application
    //const app = new PIXI.Application();

    // Initialize the application
    //await app.init({ background: '#1099bb', resizeTo: window });

    // Append the application canvas to the document body
    //document.body.appendChild(app.canvas);

    // Load the bunny texture
    const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a bunny Sprite
    const bunny = new PIXI.Sprite(texture);

    // Center the sprite's anchor point
    bunny.anchor.set(0.5);

    // Move the sprite to the center of the screen
    bunny.x = 100 / 2;
    bunny.y = 100 / 2;

    //app.stage.addChild(bunny);

    // Listen for animate update
    /*
    app.ticker.add((time) =>
    {
        // Just for fun, let's rotate mr rabbit a little.
        // * Delta is 1 if running at 100% performance *
        // * Creates frame-independent transformation *
        bunny.rotation += 0.1 * time.deltaTime;
    });
    */
})();
