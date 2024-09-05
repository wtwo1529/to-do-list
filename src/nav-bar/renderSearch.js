function renderSearch(doListTitle, doListElement) {
    doListTitle.textContent = "Search"
    doListElement.innerHTML = " ";

    let searchBar = document.createElement('input');
    searchBar.type = "text";
    searchBar.placeholder = "Search.."
    searchBar.addEventListener()

    doListElement.appendChild(searchBar);
}

export default renderSearch;