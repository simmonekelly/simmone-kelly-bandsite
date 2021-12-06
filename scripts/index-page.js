let commentList = [
    {user_name: "Connor Walton", date: new Date("02/17/2021"), comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."} ,
    {user_name: "Emilie Beach", date: new Date("01/09/2021"), comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {user_name: "Miles Acosta", date: new Date("12/20/2020"), comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}]
let getCommentContainer = document.querySelector('.posted-comments')

//format date
function formatDate(date) {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

// creates comment section
function displayComment() {

    //sort comments
    const sortedComments = commentList.sort((a,b) => {
        return b.date - a.date;
    })

for (let i = 0; i < sortedComments.length; i++) {

//creates comment div
let createCommentSection = document.createElement('div')
createCommentSection.classList.add('posted-comments_container')
console.log(getCommentContainer)
getCommentContainer.appendChild(createCommentSection)

//creates avatar
let createAvatar = document.createElement('figure')
createAvatar.classList.add('posted-comments_avatar')
createCommentSection.appendChild(createAvatar)

//creates comment div
let createCommentDiv = document.createElement('div')
createCommentDiv.classList.add('posted-comments_section')
console.log(getCommentContainer)
createCommentSection.appendChild(createCommentDiv)

//creates header div
let createHeaderSection = document.createElement('div')
createHeaderSection.classList.add('posted-comments_header-seciton')
console.log(getCommentContainer)
createCommentDiv.appendChild(createHeaderSection)

//creates name header
let createNameHeader = document.createElement('p')
createNameHeader.classList.add('posted-comments_header-name')
createNameHeader.innerText = commentList[i].user_name;
createHeaderSection.appendChild(createNameHeader)
console.log(createNameHeader.innerText)

//creates date section
let createDate = document.createElement('p')
createDate.classList.add('posted-comments_header-date')
createDate.innerText = formatDate(commentList[i].date);
createHeaderSection.appendChild(createDate)
console.log(createDate.innerText)

//creates comment section
let createComment = document.createElement('p')
createComment.classList.add('posted-comments_comment')
createComment.innerText = commentList[i].comment;
createCommentDiv.appendChild(createComment)
console.log(createComment.innerText)

//creates line
let createLine = document.createElement('hr')
createLine.classList.add('comment_seperator')
getCommentContainer.appendChild(createLine)
}
}

//loads comment section on pageload
window.addEventListener('load',displayComment)

//form submission function
const commentForm = document.getElementById('comments-form');
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Comment Submitted')
    const formTarget = event.target;
    console.log(formTarget.user_name.value);
    console.log(commentList[commentList.length - 1]);
    commentList.push(
        {user_name: formTarget.user_name.value,
        date: new Date(Date.now()),
        comment: formTarget.comment.value})
    console.log(commentList[commentList.length - 1]);
    clearComments();
    displayComment();
    console.log(commentList[commentList.length]);
    commentForm.reset();
})

// Clears all comments from the page
function clearComments() {
    let getCommentSection = document.querySelector('.posted-comments')
    let commentToRemove = document.querySelectorAll('.posted-comments_container')
    let lineToRemove = document.querySelectorAll('.comment_seperator')
    //commentToRemove.forEach()[getCommentSection.remove()]
    for (let i = 0; i < (commentToRemove.length); i++) {
        getCommentSection.removeChild(commentToRemove[i])
    }
    for (let i = 0; i < (lineToRemove.length); i++) {
        getCommentSection.removeChild(lineToRemove[i])
    }
}