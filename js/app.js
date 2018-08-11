// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x property
    // y property

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If enemy is not passed the boundary
    // Move forward
    // Increment x by speed * dt
    // else
    // Reset position to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// Hero class (the player object)
class Hero {
    //Constructor
    constructor() {
        //Properties
        // added are the step and the jump property
        this.step = 101;
        this.jump = 83;
        // adding a start specific starting location property
        this.startX = this.step * 2;
        this.startY = (this.jump * 5) - 20;
        // modififed the value of the x and y property to be the values of the startX and startY
        // x coordinates
        this.x = this.startX;
        // y coordinates
        this.y = this.startY;
        //Sprite image
        this.sprite = 'images/char-boy.png';
    }


    //Methods
    //  an update() for checking our Hero’s position on the board
    update() {

        }
        // Check for collision
        // Did hero's x and y property collide with enemy?
        // Check for victory
        // Did hero's  x and y coords match the final tile?
        // render() 
    render() {
            // Draw hero sprite on current x and y coord position
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }
        // a handleInput() for handling keyboard input
        /**Update hero's x and y property according to event listeners
         * 
         @param {string} input - Direction to travel
         */
    handleInput(input) {
            const maxX = this.startX + this.step * 3;
            const minX = this.startX - this.step * 3;
            const maxY = this.startY;
            const minY = this.startY - this.jump * 6;
            switch (input) {
                case 'left':
                    this.x - this.step > minX ? this.x -= this.step : "";
                    // this.x -= this.step;
                    break;
                case 'up':
                    this.y - this.jump > minY ? this.y -= this.jump : "";
                    // this.y -= this.jump;
                    break;
                case 'right':
                    this.x + this.step < maxX ? this.x += this.step : "";
                    // this.x += this.step;
                    break;
                case 'down':
                    this.y + this.jump < maxY ? this.y += this.jump : "";
                    // this.y += this.jump;
                    break;
            }
        }
        // Resetting Hero
        // Set x and y postion to starting x and y coord position
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Init allEnemies array
// For each enemy create and push new Enemy object
// into above array
// Place the player object in a variable called player
// New Hero Object
const player = new Hero();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});