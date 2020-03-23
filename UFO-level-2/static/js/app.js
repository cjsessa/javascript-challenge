// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var btn = d3.select('button');
var filters = d3.selectAll('input');

showTable(tableData);
filters.on('change',handleChange);
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

var filteredData = tableData;

function handleChange() {
    Object.values(filters).forEach(val => {
        var key = d3.select(this).property('id');
        var value = d3.select(this).property('value');
        filteredData = filteredData.filter(row => row[key].toLowerCase() === value.toLowerCase());
    });
    showTable(filteredData);
};

function handleClick() {
    filters.property('value','');
    filteredData = tableData;
    showTable(filteredData);
};

