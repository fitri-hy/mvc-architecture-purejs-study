import { DataModel } from '../models/dataModel.js';
import { HomeView } from '../views/homeView.js';

export class HomeController {
    static currentPage = 1;
    static totalPages = 5;

	static async handlePageChange(page) {
        if (page < 1 || page > HomeController.totalPages) return;
        await HomeController.render(page);
    }
	
    static async render(page = 1) {
        HomeController.currentPage = page;
        const data = await DataModel.getData(page);
        HomeView.render(
			data, 
			HomeController.currentPage, 
			HomeController.totalPages, 
			HomeController.handlePageChange
		);
    }
}
