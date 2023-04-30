
console.log("Hello, Airtable!");

var Airtable = require('airtable');
console.log(Airtable);

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key2mO7mZvq0vvHqA'
});

var base = Airtable.base('appIHcFiArrefYhTE');


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
        flowersImage.classList.add('flower');
        document.getElementById("guller").appendChild(flowersImage);

        

        var popup = document.createElement("div");
        popup.classList.add("popup");
        popup.setAttribute("data-index", i);
        popup.style.display = "none";

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

    

    function close_popup(event) {
    // Check if the clicked target is not a flower
    if (!event.target.classList.contains('flower')) {
        var popups = document.getElementsByClassName('popup');

        // Iterate through popups and hide them
        for (var i = 0; i < popups.length; i++) {
            popups[i].style.display = 'none';
        }
    }
}

function stop_propagation(event) {
    event.stopPropagation();
}

// click a flower, show the form...
    var flowers = document.getElementsByClassName("flower");
    console.log(flowers);
    function show_details() {
    console.log('show_details');
    var index = event.target.getAttribute("data-index");
     console.log("flower-index =" + index);

    var popup = document.body.querySelector('.popup[data-index = "'+ index +'"]');
    popup.style.display = "block";

    }
    // Add event listener to close popup when clicking outside
document.addEventListener('click', close_popup, false);

// Add event listener to stop propagation inside the popup
var popups = document.getElementsByClassName('popup');
for (var i = 0; i < popups.length; i++) {
    popups[i].addEventListener('click', stop_propagation, false);
}


    // for (var i = 0; i < flowers.length; i++) {
    // flowers[i].addEventListener('click', show_details, false);
    // }
    setTimeout( function() {
    console.log("add event listener");
    for (var i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', show_details, false);
    };
    }, 1000);











