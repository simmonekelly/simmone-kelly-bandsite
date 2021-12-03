let connor = {
    user_name: "Connor Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
} 

let emilie = {
    user_name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
}

let miles = {
    user_name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
}

let commentList = [connor, emilie, miles]
let getCommentContainer = document.querySelector('.comment_container')

for (let i = 0; i < commentList.length; i++) {

//creates header div
let createHeaderSection = document.createElement('div')
createHeaderSection.classList.add('comment_header_section')
console.log(getCommentContainer)
getCommentContainer.appendChild(createHeaderSection)

let getHeaderSection = document.querySelector('.comment_header_section')

//creates name header
let createNameHeader = document.createElement('p')
createNameHeader.classList.add('comment_header_name')
createNameHeader.innerText = commentList[i].user_name;
createHeaderSection.appendChild(createNameHeader)
console.log(createNameHeader.innerText)

//creates date section
let createDate = document.createElement('p')
createDate.classList.add('comment_header_date')
createDate.innerText = commentList[i].date;
createHeaderSection.appendChild(createDate)
console.log(createDate.innerText)

//creates comment section
let createComment = document.createElement('p')
createComment.classList.add('comment_text')
createComment.innerText = commentList[i].comment;
getCommentContainer.appendChild(createComment)
console.log(createComment.innerText)

//creates line
let createLine = document.createElement('hr')
createLine.classList.add('comment_seperator')
getCommentContainer.appendChild(createLine)
}