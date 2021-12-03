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


let parent = document.querySelector('.shows');
let showTable = document.createElement('table');
showTable.classList.add('show_table')
parent.appendChild(showTable)

for (let i = 0; i < showList.length; i++) {

let showRow = document.createElement('tr');
showRow.classList.add('show_row')
showTable.appendChild(showRow)

let showDateHeader = document.createElement ('th')
showDateHeader.classList.add('show_date_header')
showRow.appendChild(showDateHeader)

let addDateHeader = document.querySelectorAll('.show_date_header')
//need to interate across all show date header classes
addDateHeader.innerText = 'Date';
console.log(addDateHeader.innerText)

let showDate = document.createElement('td');
showDate.classList.add('show_date');
showRow.appendChild(showDate)

let addDate = document.querySelector('.show_date')
addDate.innerText = showList[i].date;
console.log(addDate.innerText)

let showVenueHeader = document.createElement ('th')
showVenueHeader.classList.add('show_venue_header')
showRow.appendChild(showVenueHeader)

let addVenueHeader = document.querySelector('.show_venue_header')
addVenueHeader.innerText = 'Venue';
console.log(addVenueHeader.innerText)

let showVenue = document.createElement ('td')
showVenue.classList.add('show_venue')
showRow.appendChild(showVenue)

let addVenue = document.querySelector('.show_venue')
addVenue.innerText = showList[i].venue;
console.log(addVenue.innerText)

let showLocationHeader = document.createElement ('th')
showLocationHeader.classList.add('show_location_header')
showRow.appendChild(showLocationHeader)

let addLocationHeader = document.querySelector('.show_location_header')
addLocationHeader.innerText = 'Location';
console.log(addLocationHeader.innerText)

let showLocation = document.createElement ('td')
showLocation.classList.add('show_location')
showRow.appendChild(showLocation)

let addLocation = document.querySelector('.show_location')
addLocation.innerText = showList[i].location;
console.log(addLocation.innerText)

let showButton = document.createElement ('td')
showButton.classList.add('show_button')
showRow.appendChild(showButton)

let addButton = document.createElement('button')
showButton.appendChild(addButton)

let addButtonText = document.querySelector('button')
addButtonText.innerText = 'Buy Tickets';
console.log(addButtonText.innerText)

}

//console.log(showList[i].date);
    //console.log(showList[i].venue);
   // console.log(showList[i].location);