import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

export class HomeView {
    static render(data, currentPage, totalPages, onPageChange) {
        document.getElementById('content').innerHTML = `
			${Header.render()}
			
			<section class="p-4">
				<div class="flex flex-col items-center justify-center py-5">
					<p class="text-center text-4xl font-semibold tracking-widest uppercase">Home Example</p>
					<p>Example of using the Fetch API</p>
				</div>
				<div class="gap-4 grid grid-cols-1 lg:grid-cols-3">
					${data.map(item => `
						<div class="border p-4 rounded-lg shadow-md">
							<div class="flex items-center">
								<img src="${item.logo}" alt="${item.name} logo" class="w-12 h-12 mr-4"/>
								<div>
									<h3 class="text-xl font-semibold">${item.name}</h3>
									<p class="text-sm">Rank: ${item.rank}</p>
									<p class="text-sm">Market Data: ${item.marketData}</p>
									<p class="text-sm">Markets: ${item.markets}</p>
								</div>
							</div>
						</div>
					`).join('')}
				</div>
				<div class="mt-4 flex justify-center gap-2 items-center">
					<button id="prev-page" class="p-2 bg-blue-500 text-white rounded-md" ${currentPage === 1 ? 'disabled' : ''}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
						</svg>
					</button>
					<span>${currentPage} of ${totalPages}</span>
					<button id="next-page" class="p-2 bg-blue-500 text-white rounded-md" ${currentPage === totalPages ? 'disabled' : ''}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
						</svg>
					</button>
				</div>
			</section>
			${Footer.render()}
        `;

        document.getElementById('prev-page').addEventListener('click', () => {
            if (currentPage > 1) {onPageChange(currentPage - 1);}
        });

        document.getElementById('next-page').addEventListener('click', () => {
            if (currentPage < totalPages) {onPageChange(currentPage + 1);}
        });
    }
}
