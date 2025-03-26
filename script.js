// Optional: Add functionality to search when pressing "Enter"
//document.getElementById('search').addEventListener('keypress', function(event) {
//    if (event.key === 'Enter') {
//        document.getElementById('search-button').click();
//    }
//});

// with click button-> document.getElementById('search-button').addEventListener('click', function() {
    document.getElementById('search').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const table = document.getElementById('data-table');
    
    // Get all rows in the table body
    const rows = table.getElementsByTagName('tr');
    
    const noResultsDiv = document.getElementById('noResults');
    noResultsDiv.style.display = 'none';

    // Initialize a flag to check if any results are found
    let found = false;

    // Loop through all table rows (except the first one, which is the header)
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowContainsSearchTerm = false;

        // Check each cell in the row for the search term
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.toLowerCase();
		
            if (cellText.includes(searchInput)) {
                rowContainsSearchTerm = true;
                break; // No need to check further cells in this row
            }
        }

        // Show or hide the row based on whether it contains the search term
        if (rowContainsSearchTerm) {
            rows[i].style.display = ''; // Show the row
            found = true;   // At least one result is found
        } else {
            rows[i].style.display = 'none'; // Hide the row
        }
    }
    // Show or hide the no results message
    if (found) {
        noResultsDiv.style.display = 'none'; // Hide message if results are found
    } else {
        noResultsDiv.style.display = 'block'; // Show message if no results found
    }
}});

// Optional: Add functionality to search when pressing "Enter"
document.getElementById('search').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});