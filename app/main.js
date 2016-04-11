import App from 'App';
import $ from 'jquery';
import PIXI from 'pixi';
import RNG from 'rng';
// The "app" dependency is passed in as "App"
window.app = new App();
app.initialize();
window.addEventListener('DOMContentLoaded', function(event) {
    console.log(event.name);
});
