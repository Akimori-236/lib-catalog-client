export function getDummyData(limit, offset) {
    return fetch(
        `http://localhost:8080/api/dummy?limit=${limit}&offset=${offset}`
    )
        .then((data) => data.json())
        .catch((error) => []);
}

export function getData(limit, offset) {
    return fetch(
        `http://localhost:8080/api?limit=${limit}&offset=${offset}`
    )
        .then((data) => data.json())
        .catch((error) => []);
}
