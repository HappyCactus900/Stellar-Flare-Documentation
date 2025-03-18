fetch('/docs/_data/catalog.csv')
  .then(response => response.text())
  .then(data => {
    // Convert CSV to JSON
    const jsonData = csvToJson(data);
    const tableBody = document.getElementById('catalogTable').getElementsByTagName('tbody')[0];

    // Function to filter and display data
    window.filterData = function() {
      const ticId = document.getElementById('ticInput').value;
      tableBody.innerHTML = ''; // Clear the table

      jsonData.forEach(row => {
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

// Function to convert CSV to JSON
function csvToJson(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
}