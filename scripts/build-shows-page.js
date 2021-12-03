let show1 = {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane", 
    location: "San Francisco, CA"
}

let show2 = {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
}

let show3 = {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"
}

let show4 = {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
}

let show5 = {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
}

let show6 = {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA"
}
let showList = [show1, show2, show3, show4, show5, show6]

//creates table
let getParent = document.querySelector('.shows');
let createShowTable = document.createElement('table');
createShowTable.classList.add('show_table')
getParent.appendChild(createShowTable)


for (let i = 0; i < showList.length; i++) {
//creates show row
let createShowRow = document.createElement('tr');
createShowRow.classList.add('show_row')
console.log(createShowRow)
createShowTable.appendChild(createShowRow)

//creates date header
let createDateHeader = document.createElement ('th')
createDateHeader.classList.add('show_date_header')
createDateHeader.innerText = 'Date';
createShowRow.appendChild(createDateHeader)
console.log(createDateHeader.innerText)

//adds date
let addShowDate = document.createElement('td');
addShowDate.classList.add('show_date');
addShowDate.innerText = showList[i].date;
createShowRow.appendChild(addShowDate)
console.log(addShowDate.innerText)

//creates venue header
let createVenueHeader = document.createElement ('th')
createVenueHeader.classList.add('show_venue_header')
createVenueHeader.innerText = 'Venue';
createShowRow.appendChild(createVenueHeader)
console.log(createVenueHeader.innerText)

//add venue
let addShowVenue = document.createElement ('td')
addShowVenue.classList.add('show_venue')
addShowVenue.innerText = showList[i].venue;
createShowRow.appendChild(addShowVenue)
console.log(addShowVenue.innerText)

//create location headr
let createLocationHeader = document.createElement ('th')
createLocationHeader.classList.add('show_location_header')
createLocationHeader.innerText = 'Location';
createShowRow.appendChild(createLocationHeader)

//add locaition
let addShowLocation = document.createElement ('td')
addShowLocation.classList.add('show_location')
addShowLocation.innerText = showList[i].location;
createShowRow.appendChild(addShowLocation)
console.log(addShowLocation.innerText)

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
console.log(addButton.innerText)
}