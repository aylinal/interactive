
console.log("Hello, Airtable!");

var Airtable = require('airtable');
console.log(Airtable);

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key2mO7mZvq0vvHqA'
});

var base = Airtable.base('appIHcFiArrefYhTE');

// base('SentForFatima').select({
//     fields: ['Flowers']
// }).firstPage(function(err, records) {
//     // if (err) {
//     //     console.error(err);
//     //     return;
//     // };

//     // Get the data from the first record in the table
//     var record = records[0];
    
//     // Get the value of the "Flowers" column
//     var flowers = record.get('Flowers');
//     console.log(flowers);

//     // Display the data on the website
//     var flowersDiv = document.getElementById('flowers');
//     flowersDiv.innerHTML = flowers;
// });

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base('SentForFatima').select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");

    rows.push(...records);

    fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");

    // first, if there's an error we're going to log that.
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }

    // if no error, we're going to run two more functions.
    consoleLogRows();
    showRows();
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    
    console.log("consoleLogRows()");
    
    rows.forEach((row) => {
        console.log("Row:", row);
    });

}

var i = 0;

// showRows is what puts the content onto the HTML page
function showRows() {
    console.log("showRows()");
    rows.forEach((row) => {
        

        var flowersImage = document.createElement("img");
        flowersImage.src = row.fields.Flowers;
        flowersImage.setAttribute("data-index", i);
        document.getElementById("guller").appendChild(flowersImage);
        

        var popup = document.createElement("div");
        popup.classList.add("popup");
        popup.setAttribute("data-index", i);

        var name = document.createElement("div");
        name.innerHTML = row.fields.Name;
        // console.log(row.fields.Name);
        popup.appendChild(name);

        var note = document.createElement("div");
        note.innerHTML = row.fields.Note;
        popup.appendChild(note);

        document.body.appendChild(popup);

        i++;

        
    })
}

function set_up_modals() {

    console.log("set_up_modals");

    var images = document.querySelectorAll('img');

    console.log(images);

    // images.forEach(function(img) {
    //   img.addEventListener('click', function(event) {
    //     console.log("clicked!!");
    //     // console.log(event.target.getAttribute("data-index"));
    //   });
    // });

}


