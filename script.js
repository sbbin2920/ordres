// POPUP IMAGE ON HOVER
        const popup = document.getElementById("popup");
        const link = document.getElementById("hoverLink");

        // Show the popup on mouse enter
        link.addEventListener("mouseenter", () => {
            popup.style.display = "block"; // Show the popup
        });

        // Hide the popup on mouse leave
        link.addEventListener("mouseleave", () => {
            popup.style.display = "none"; // Hide the popup
        });

        // Update the position of the popup based on mouse movement
        link.addEventListener("mousemove", (event) => {
            const popupWidth = popup.offsetWidth; // Get the width of the popup
            const popupHeight = popup.offsetHeight; // Get the height of the popup

            // Position the popup beside the mouse pointer
            popup.style.left = `${event.pageX + 10}px`; // 10px to the right of the pointer
            popup.style.top = `${event.pageY - popupHeight / 1000}px`; // Centered vertically with respect to the pointer
        });


// Add functionality to search automatically as the user types
document.getElementById('search').addEventListener('input', function() {
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
});


// Optional: Add functionality to search when pressing "Enter"
//document.getElementById('search').addEventListener('keypress', function(event) {
//    if (event.key === 'Enter') {
//        document.getElementById('search-button').click();
//    }
//});

// BACK TO TOP Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
};
