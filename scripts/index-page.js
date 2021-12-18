let api = '6ceb11dc-2ff7-4333-a7b2-e59085b2da97'

let commentList = [
    {user_name: "Connor Walton", date: new Date("02/17/2021"), comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."} ,
    {user_name: "Emilie Beach", date: new Date("01/09/2021"), comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {user_name: "Miles Acosta", date: new Date("12/20/2020"), comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
]

let getCommentContainer = document.querySelector('.posted-comments')

// //format date
// function formatDate(date) {
//     return (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear();
// }

// // creates comment section
// function displayComment() {

//     //sort comments
//     const sortedComments = commentList.sort((a,b) => {
//         return b.date - a.date;
//     })

//     sortedComments.forEach((comment) => {

//         //creates comment div
//         let createCommentSection = document.createElement('div')
//         createCommentSection.classList.add('posted-comments_container')
//         getCommentContainer.appendChild(createCommentSection)

//         //creates avatar
//         let createAvatar = document.createElement('figure')
//         createAvatar.classList.add('posted-comments_avatar')
//         createCommentSection.appendChild(createAvatar)

//         //creates comment div
//         let createCommentDiv = document.createElement('div')
//         createCommentDiv.classList.add('posted-comments_section')
//         createCommentSection.appendChild(createCommentDiv)

//         //creates header div
//         let createHeaderSection = document.createElement('div')
//         createHeaderSection.classList.add('posted-comments_header-seciton')
//         createCommentDiv.appendChild(createHeaderSection)

//         //creates name header
//         let createNameHeader = document.createElement('p')
//         createNameHeader.classList.add('posted-comments_header-name')
//         createNameHeader.innerText = comment.user_name;
//         createHeaderSection.appendChild(createNameHeader)

//         //creates date section
//         let createDate = document.createElement('p')
//         createDate.classList.add('posted-comments_header-date')
//         createDate.innerText = formatDate(comment.date);
//         createHeaderSection.appendChild(createDate)

//         //creates comment section
//         let createComment = document.createElement('p')
//         createComment.classList.add('posted-comments_comment')
//         createComment.innerText = comment.comment;
//         createCommentDiv.appendChild(createComment)

//         //creates line
//         let createLine = document.createElement('hr')
//         createLine.classList.add('comment_seperator')
//         getCommentContainer.appendChild(createLine)
//     })
// }

// //loads comment section on pageload
// window.addEventListener('load',displayComment)

// //form submission function
// const commentForm = document.getElementById('comments-form');
// commentForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const formTarget = event.target;
//     commentList.push(
//         {user_name: formTarget.user_name.value,
//         date: new Date(Date.now()),
//         comment: formTarget.comment.value})
//     clearComments();
//     displayComment();
//     commentForm.reset();
// })



// //Clears all comments from the page
// function clearComments() {
//     let getCommentSection = document.querySelector('.posted-comments')
//     let commentToRemove = document.querySelectorAll('.posted-comments_container')
//     let lineToRemove = document.querySelectorAll('.comment_seperator')
    
//     commentToRemove.forEach(comment => {
//         getCommentSection.removeChild(comment)
//     })

//     lineToRemove.forEach(line => {
//         getCommentSection.removeChild(line)
//     })
// }


// //loads comment section on pageload
// window.addEventListener('load',displayComment)



//NEW CODE
//loads comment section on pageload
window.addEventListener('load',displayComment)
//format date
function formatDate(dateString) {
    let date = new Date(dateString);
    return (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear();
}

//function to load comments
function loadComments(commentList) {
    commentList.forEach((comment) => {
        //creates comment div
        let createCommentSection = document.createElement('div')
        createCommentSection.classList.add('posted-comments_container')
        getCommentContainer.appendChild(createCommentSection)

        //creates avatar
        let createAvatar = document.createElement('figure')
        createAvatar.classList.add('posted-comments_avatar')
        createCommentSection.appendChild(createAvatar)

        //creates comment div
        let createCommentDiv = document.createElement('div')
        createCommentDiv.classList.add('posted-comments_section')
        createCommentSection.appendChild(createCommentDiv)

        //creates header div
        let createHeaderSection = document.createElement('div')
        createHeaderSection.classList.add('posted-comments_header-seciton')
        createCommentDiv.appendChild(createHeaderSection)

        //creates name header
        let createNameHeader = document.createElement('p')
        createNameHeader.classList.add('posted-comments_header-name')
        createNameHeader.innerText = comment.name;
        createHeaderSection.appendChild(createNameHeader)

        //creates date section
        let createDate = document.createElement('p')
        createDate.classList.add('posted-comments_header-date')
        createDate.innerText = formatDate(comment.timestamp);
        createHeaderSection.appendChild(createDate)

        //creates comment section
        let createComment = document.createElement('p')
        createComment.classList.add('posted-comments_comment')
        createComment.innerText = comment.comment;
        createCommentDiv.appendChild(createComment)

        //creates line
        let createLine = document.createElement('hr')
        createLine.classList.add('comment_seperator')
        getCommentContainer.appendChild(createLine)
    })
}

// function to dipslay comments
function displayComment() {

    //axios
    const p = axios.get('https://project-1-api.herokuapp.com/comments?api_key=api');
    p.then(results => {
        console.log(results.data)

        let originalComments = results.data
        
        //sort comments
        const sortedComments = originalComments.sort((a,b) => {
                    return b.date - a.date;
                })

        loadComments(sortedComments);
        //submitForm();
    })
    .catch(error => {
    console.log(error)
    })

}

//what is the difference between creating an event listener to post the comment vs setting the action
//on the form to the URL and the method on the form  to post 


// steps for form
// on click of button post comment to axios
// push to current array results.data
// clear comments
// reload comment array
// do we have to recall the get method since it previously was in another function?

//form submission function
// not loading since other funcitn is on load
// function submitForm() {
//     const commentForm = document.getElementById('comments_form')
//     console.log(commentForm)
//     commentForm.addEventListener('submit', event => {
//         event.preventDefault();
//         console.log('Comment Submitted')
//         const formTarget = event.target
//         const name = formTarget.user_name.value
//         const comment = formTarget.comment.value
//         postComment(name,comment)
//         //clearComments();
//         //displayComment();
//         commentForm.reset();
//     })
// }


const commentForm = document.getElementById('comments-form')
commentForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Comment Submitted')
    const formTarget = event.target
    const name = formTarget.user_name.value
    const comment = formTarget.comment.value
    postComment(name,comment)
    clearComments();
    displayComment();
    commentForm.reset();
})



//posting new comment to axios
function postComment(passedName, passedComment) {
    const p = axios.post('https://project-1-api.herokuapp.com/comments?api_key=api', {
        name: passedName,
        comment: passedComment
    });
    p.then(results => {
        console.log(results.data)
        //need to append new array here
        //let newComment = results.form
        //console.log(newComment)
    })
    .catch(error => {
        console.log(error)
    })
}
// //form submission function need to add post functionality to this
// const commentForm = document.getElementById('comments-form');
// commentForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('Comment Submitted')
//     const formTarget = event.target;
//     console.log(formTarget.user_name.value);
//     console.log(commentList[commentList.length - 1]);
//     commentList.push(
//         {user_name: formTarget.user_name.value,
//         date: new Date(Date.now()),
//         comment: formTarget.comment.value})
//     console.log(commentList[commentList.length - 1]);
//     clearComments();
//     displayComment();
//     console.log(commentList[commentList.length]);
//     commentForm.reset();
// })



// Clears all comments from the page
function clearComments() {
    let getCommentSection = document.querySelector('.posted-comments')
    let commentToRemove = document.querySelectorAll('.posted-comments_container')
    let lineToRemove = document.querySelectorAll('.comment_seperator')

    commentToRemove.forEach(comment => {
        getCommentSection.removeChild(comment)
    })

    lineToRemove.forEach(line => {
        getCommentSection.removeChild(line)
    })

}