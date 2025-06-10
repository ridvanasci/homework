import service from './service.js'; // Correct relative path

(async () => {
    try {
        const result = await service.getData(2);
        console.log("Result:", result);
    } catch (error) {
        console.error("Error calling getData:", error.message);
    }
})();