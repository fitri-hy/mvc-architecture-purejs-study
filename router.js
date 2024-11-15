import { HomeController } from './controllers/homeController.js';
import { AboutController } from './controllers/aboutController.js';
import { ContactController } from './controllers/contactController.js';

export class Router {
    static start() {
        this.route();
        document.body.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                window.location.hash = event.target.getAttribute('href');
            }
        });
        window.addEventListener('hashchange', this.route);
    }

    static route() {
        const path = window.location.hash.slice(1);

        if (path === 'about') AboutController.render();
        else if (path === 'contact') ContactController.render();
        else HomeController.render();
    }
}
