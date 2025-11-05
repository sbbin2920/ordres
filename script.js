
        const popup = document.getElementById("popup");
        const link = document.getElementById("hoverLink");

        link.addEventListener("mouseenter", () => {
            popup.style.display = "block"; // /mjyc
        });

        link.addEventListener("mouseleave", () => {
            popup.style.display = "none"; 
        });

         link.addEventListener("mousemove", (event) => {
            const popupWidth = popup.offsetWidth; 
            const popupHeight = popup.offsetHeight; 

            popup.style.left = `${event.pageX + 10}px`; 
            popup.style.top = `${event.pageY - popupHeight / 1000}px`; 
        });


document.getElementById('search').addEventListener('input', function() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const table = document.getElementById('data-table');
    
    const rows = table.getElementsByTagName('tr');
    
    const noResultsDiv = document.getElementById('noResults');
    noResultsDiv.style.display = 'none';

    let found = false;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowContainsSearchTerm = false;

        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.toLowerCase();
		
            if (cellText.includes(searchInput)) {
                rowContainsSearchTerm = true;
                break; 
            }
        }

        if (rowContainsSearchTerm) {
            rows[i].style.display = ''; 
            found = true;   
        } else {
            rows[i].style.display = 'none'; 
        }
    }

    if (found) {
        noResultsDiv.style.display = 'none'; 
    } else {
        noResultsDiv.style.display = 'block'; // /mjyc
    }
});


//document.getElementById('search').addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//        document.getElementById('search-button').click();
//   }
//});

const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};


backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // /mjyc
    });
};

