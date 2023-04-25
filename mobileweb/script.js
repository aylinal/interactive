
console.log("Hello, Airtable!");

var Airtable = require('airtable');
console.log(Airtable);

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key2mO7mZvq0vvHqA'
});

var base = Airtable.base('appIHcFiArrefYhTE');

base('SentForFatima').select({
    fields: ['Flowers']
}).firstPage(function(err, records) {
    if (err) {
        console.error(err);
        return;
    }

    // Get the data from the first record in the table
    var record = records[0];
    
    // Get the value of the "Flowers" column
    var flowers = record.get('Flowers');
    console.log(flowers);

    // Display the data on the website
    var flowersDiv = document.getElementById('flowers');
    flowersDiv.innerHTML = flowers;
});
