export function getYamahaListings() {
  return fetch('http://localhost:8080/yamaha')
  .then(data => data.json())
}