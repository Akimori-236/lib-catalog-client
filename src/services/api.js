export function getYamahaListings() {
    return fetch("http://localhost:8081/yamaha")
        .then((data) => data.json())
        .catch((error) => []);
}
