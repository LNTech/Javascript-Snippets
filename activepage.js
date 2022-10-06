function update_history(active_page) {
	/**
	* Fetches browsing history from localstorage, then adds current page to it.
 	*/
	
	var stored_history = JSON.parse(localStorage.getItem("browsing_history")); // Fetch ls item and parse it as json
	if (stored_history == null) {
		stored_history = []; // if stored history doesn't exist just set it to an empty list
	};

	stored_history.push(active_page); // add current page to history
	localStorage.setItem("browsing_history", JSON.stringify(stored_history)); // then push it back to ls
};

function visbilityUpdate() {
	/**
	* Gets current page and stored it in localstorage, then updates browsing history
 	*/

	var page = document.location.href.split("/").at(-1); // Get last part of URL
	if (page == "") { // if its equal to nothing, i.e. root directory, then just set it to index
		page = "index";
	};

	if (!document.hidden) {  // check if page is hidden when visbility changes
		localStorage.setItem("active_page", page);
		update_history(page);
	};
}


document.addEventListener('visibilitychange', function() {
	visbilityUpdate();
});


// Needs tweaking for your needs but this is a general implementation of it