export default class Products {
    async readFile(filePath) {
        try {
            const response = await fetch(filePath);
            const data = await response.json();
            return data; // Return the data directly for easier use
        } catch (error) {
            console.error('Error fetching:', error);
            return []; 
        }
    }
}