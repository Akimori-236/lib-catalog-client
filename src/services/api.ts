export async function getDummyData(limit: number, offset: number, callback: Function) {
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

export async function getData(limit: number, offset: number, callback: Function) {
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
