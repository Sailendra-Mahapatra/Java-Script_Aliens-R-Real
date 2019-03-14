// YOUR CODE HERE!

// from data.js
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  


// Taking date input from user and retieving the relevant data

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  d3.selectAll("td").remove();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputValue);

  console.log(filterData);



  // Displaying filtered data

  filterData.forEach((filData) => {
    var row = tbody.append("tr");
    Object.entries(filData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});



