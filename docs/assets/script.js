// Load the catalog data
fetch('/my-docs/_data/catalog.json') // Update the path to your data file
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('catalogTable').getElementsByTagName('tbody')[0];

    // Function to filter and display data
    window.filterData = function() {
      const ticId = document.getElementById('ticInput').value;
      tableBody.innerHTML = ''; // Clear the table

      data.forEach(row => {
        if (row.TIC == ticId) {
          const newRow = tableBody.insertRow();
          Object.values(row).forEach(value => {
            const cell = newRow.insertCell();
            cell.textContent = value;
          });
        }
      });
    };
  })
  .catch(error => console.error('Error loading catalog data:', error));