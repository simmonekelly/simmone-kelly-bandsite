let api = '6ceb11dc-2ff7-4333-a7b2-e59085b2da97'

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

    //axios get request
    const p = axios.get('https://project-1-api.herokuapp.com/comments?api_key=' + api);
    p.then(results => {
        let comments = results.data
        
        //sort comments
        const sortedComments = comments.sort((a,b) => {
            return b.timestamp - a.timestamp;
        })

        loadComments(sortedComments);
    })
    .catch(error => {
    console.log(error)
    })

}

// event listener for submitting form
const commentForm = document.getElementById('comments-form')
commentForm.addEventListener('submit', event => {
    event.preventDefault();
    console.log('Comment Submitted')
    const formTarget = event.target
    const passedName = formTarget.user_name.value
    const passedComment = formTarget.comment.value
    postComment(passedName,passedComment)
    clearComments();
    commentForm.reset();
})



//posting new comment to axios
function postComment(passedName, passedComment) {

    const newComment = axios.post('https://project-1-api.herokuapp.com/comments?api_key=' + api, {
        name: passedName,
        comment: passedComment
    });
    newComment.then(results => {
        console.log(results.data)
        displayComment();
    })
    .catch(error => {
        console.log(error)
    })
}

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