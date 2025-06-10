import axios from "axios";

export default {
    async getData(userId = 1) {
        try {
            // Fetch user details
            console.log("Fetching user details...");
            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!userResponse.ok) {
                throw new Error(`User data fetch failed: ${userResponse.status}`);
            }
            const user = await userResponse.json();
            console.log("User retrieved:", user);

            // POST data
            console.log("Posting data...");
            const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: "foo",
                    body: "bar",
                    userId
                })
            });
            if (!postResponse.ok) {
                throw new Error(`Post request failed: ${postResponse.status}`);
            }
            const post = await postResponse.json();
            console.log("Post data retrieved:", post);

            // Fetch using axios
            console.log("Fetching data with Axios...");
            const axiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const axiosData = axiosResponse.data; // Extract data field from the Axios response
            console.log("Axios data retrieved:", axiosData);

            // Return all results
            console.log("Returning all data...");
            return {
                user,
                post,
                axiosData
            };
        } catch (error) {
            console.error("Error in getData:", error.message);
            throw error;
        }
    }
};