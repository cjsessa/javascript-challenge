// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var btn = d3.select('button');

showTable(tableData);
btn.on('click', handleClick);

// ==================================
function showTable(contents) {
    tbody.html('');

    contents.forEach(tableRow => {
        var row = tbody.append('tr');

        Object.values(tableRow).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function handleClick() {
    var date = d3.select('input').property('value');
    var filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    d3.select('input').property('value','');
    showTable(filteredData);
};