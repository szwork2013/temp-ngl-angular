// --------------------------------------------------
// CREATE EMPTY ARRAYS
// --------------------------------------------------

var dependencies = ['ui.router', 'ngSanitize', 'Forms'];
var routes       = [];

// Convert an array of objects into the proper dropdown array format
function buildOptions(arr, label, value) {
	var options = [];

	arr.forEach(function(item) {
		options.push({
				label: item[label],
				value: item[value]
			});
	});

	return options;
}

function toggleArrayValue(arr, value) {
	var valueIndex = arr.indexOf(value);

	if (valueIndex !== -1) {
		arr.splice(valueIndex, 1);
	} else {
		arr.push(value);
	}
}