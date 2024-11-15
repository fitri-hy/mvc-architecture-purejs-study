export class DataModel {
    static async getData(page = 1) {
        try {
            const response = await fetch(`https://api.i-as.dev/api/coinranking?page=${page}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.exchanges;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
}
