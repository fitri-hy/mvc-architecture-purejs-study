export class Header {
    static render() {
        return `
            <header class="px-4 py-4 bg-white shadow flex justify-between">
                <div class="flex gap-2 items-center">
					<img class="h-7 w-7 object-cover" src="./assets/img/logo.png" alt="logo" />
					<h1 class="hidden lg:flex text-xl font-bold">JS-Pure <span class="ml-2 font-normal text-xs">MVC</span></h1>
				</div>
				<nav class="flex gap-3 lg:gap-4">
					<a href="#home" class="text-gray-800 font-semibold hover:underline">Home</a>
					<a href="#about" class="text-gray-800 font-semibold hover:underline">About</a>
					<a href="#contact" class="text-gray-800 font-semibold hover:underline">Contact</a>
				</nav>
            </header>
        `;
    }
}
