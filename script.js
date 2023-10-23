const form = document.getElementById("myForm");
const urlElement = document.getElementById("url");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;

    const queryString = `?name=${name}&year=${year}`;
    urlElement.textContent = "https://localhost:8080/" + queryString;
});

