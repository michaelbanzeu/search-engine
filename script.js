let query = document.querySelector('.query');
let searchBtn = document.querySelector('.search-btn');

function searchQuery() {
    let url = "https://www.google.com/search?q=" + query.value;
    window.open(url, "_self");
}

searchBtn.addEventListener('click', searchQuery);
window.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        searchQuery();
    }
})
