export async function getDummyData(limit, offset, callback) {
    fetch(`http://localhost:8080/api/dummy?limit=${limit}&offset=${offset}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    })
    .then((body) => {
        callback(body);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}

export function getData(limit, offset, callback) {
    fetch(`http://localhost:8080/api?limit=${limit}&offset=${offset}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((body) => {
            callback(body);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
