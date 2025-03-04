export default async function handler(req, res) {
    const { username, offset = 0 } = req.query;
    const apiUrl = `https://api.scratch.mit.edu/users/${username}/followers?offset=${offset}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}