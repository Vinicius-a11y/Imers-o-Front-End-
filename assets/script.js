const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requesApi(searchTerm) {
	const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
	fetch();
}

document.addEventListener("input", function () {
	const searchTerm = searchInput.value.toloweCasa();
	if (searchTerm === "") {
		resultPlaylist.classList.add("hidden");
		resultArtist.classList.remove("hidden");
		return;
	}
});
