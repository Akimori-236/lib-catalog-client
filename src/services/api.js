export function getYamahaListings(limit, offset) {
    return fetch(
        `http://localhost:8080/api/dummy?limit=${limit}&offset=${offset}`
    )
        .then((data) => data.json())
        .catch((error) => []);
}
