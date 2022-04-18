let api = '6ceb11dc-2ff7-4333-a7b2-e59085b2da97'

//creates table
let getParent = document.querySelector('.shows');
let createShowTable = document.createElement('table');
createShowTable.classList.add('show_table')
getParent.appendChild(createShowTable)

//creates desktop/table show row
let createShowRow = document.createElement('tr');
createShowRow.classList.add('desktop_show_row')
createShowTable.appendChild(createShowRow)

//creates desktop/table date header
let createDateHeader = document.createElement ('th')
createDateHeader.classList.add('desktop_show_date_header')
createDateHeader.innerText = 'Date';
createShowRow.appendChild(createDateHeader)

//creates desktop/table venue header
let createVenueHeader = document.createElement ('th')
createVenueHeader.classList.add('desktop_show_venue_header')
createVenueHeader.innerText = 'Venue';
createShowRow.appendChild(createVenueHeader)

//create desktop/table location headr
let createLocationHeader = document.createElement ('th')
createLocationHeader.classList.add('desktop_show_location_header')
createLocationHeader.innerText = 'Location';
createShowRow.appendChild(createLocationHeader)

// create desktop/tablet button blank header
let createButtonHeader = document.createElement ('th')
createButtonHeader.classList.add('desktop_show_button_header')
createButtonHeader.innerText = '';
createShowRow.appendChild(createButtonHeader)

//format date
function formatDate(dateString) {
    let date = new Date(JSON.parse(dateString));
    return (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear();
}

//function to create rows
function createShowList(showDetails) {
    showDetails.forEach(show => {
        //creates show row
        let createShowRow = document.createElement('tr');
        createShowRow.classList.add('show_row')
        createShowTable.appendChild(createShowRow)

        //creates date header
        let createDateHeader = document.createElement ('th')
        createDateHeader.classList.add('show_date_header')
        createDateHeader.innerText = 'Date';
        createShowRow.appendChild(createDateHeader)

        //adds date
        let addShowDate = document.createElement('td');
        addShowDate.classList.add('show_date');
        addShowDate.innerText = formatDate(show.date);
        createShowRow.appendChild(addShowDate)

        //creates venue header
        let createVenueHeader = document.createElement ('th')
        createVenueHeader.classList.add('show_venue_header')
        createVenueHeader.innerText = 'Venue';
        createShowRow.appendChild(createVenueHeader)

        //add venue
        let addShowVenue = document.createElement ('td')
        addShowVenue.classList.add('show_venue')
        addShowVenue.innerText = show.place;
        createShowRow.appendChild(addShowVenue)

        //create location headr
        let createLocationHeader = document.createElement ('th')
        createLocationHeader.classList.add('show_location_header')
        createLocationHeader.innerText = 'Location';
        createShowRow.appendChild(createLocationHeader)

        //add locaition
        let addShowLocation = document.createElement ('td')
        addShowLocation.classList.add('show_location')
        addShowLocation.innerText = show.location;
        createShowRow.appendChild(addShowLocation)

        // create button blank header
        let createButtonHeader = document.createElement ('th')
        createButtonHeader.classList.add('show_button_header')
        createButtonHeader.innerText = '';
        createShowRow.appendChild(createButtonHeader)

        //create button section
        let createShowButton = document.createElement ('td')
        createShowButton.classList.add('show_button_section')
        createShowRow.appendChild(createShowButton)

        // add button
        let addButton = document.createElement('button')
        addButton.classList.add('show_button')
        addButton.innerText = 'Buy Tickets';
        createShowButton.appendChild(addButton)

        //add line
        let createLine = document.createElement('hr')
        createLine.classList.add('show_line_break')
        createShowRow.appendChild(createLine)
    })
}

//highlighting row when selected function
//need to fix if statement
function highlightShowRow() {
    const selectShowRow = document.querySelectorAll('.show_row')
    selectShowRow.forEach(row => {
        row.addEventListener('click', (event) =>{
            if (row.classList.contains('active')){
                row.classList.remove('active')
            }
            else {
                row.classList.add('active')
            }
        })
    })
}


//axios to get show list
const p = axios.get('https://project-1-api.herokuapp.com/showdates?api_key=' + api);
p.then(results => {

    //run show list function
    createShowList(results.data)

    //run highlight function
    highlightShowRow()

})
.catch( error => {
    console.log(error)
})