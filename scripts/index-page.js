let api = '6ceb11dc-2ff7-4333-a7b2-e59085b2da97'

let getCommentContainer = document.querySelector('.posted-comments')

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

        //creates name
        let createNameHeader = document.createElement('p')
        createNameHeader.classList.add('posted-comments_header-name')
        createNameHeader.innerText = comment.name;
        createHeaderSection.appendChild(createNameHeader)

        //creates date
        let createDate = document.createElement('p')
        createDate.classList.add('posted-comments_header-date')
        createDate.innerText = formatDate(comment.timestamp);
        createHeaderSection.appendChild(createDate)

        //creates comment section
        let createComment = document.createElement('p')
        createComment.classList.add('posted-comments_comment')
        createComment.innerText = comment.comment;
        createCommentDiv.appendChild(createComment)

        //creates likes div
        let createCommentLikeSection = document.createElement('div')
        createCommentLikeSection.classList.add('posted-comments_likes-section')
        createCommentDiv.appendChild(createCommentLikeSection)

        //adds like button
        let createLikeButton = document.createElement('img')
        createLikeButton.classList.add('posted-comments_like-button')
        createLikeButton.setAttribute('id','like' + comment.id)
        createLikeButton.setAttribute('src', '../assets/Icons/SVG/icon-like.svg')
        createCommentLikeSection.appendChild(createLikeButton)

        //add like count
        let likeCount = document.createElement('p')
        likeCount.classList.add('posted-comments_likes')
        likeCount.classList.add('id'+ comment.id)
        likeCount.innerText = comment.likes;
        createCommentLikeSection.appendChild(likeCount)

        //adds delete button
        let createDeleteButton = document.createElement('img')
        createDeleteButton.classList.add('posted-comments_delete-button')
        createDeleteButton.setAttribute('id','del' + comment.id)
        createDeleteButton.setAttribute('src', '../assets/Icons/SVG/icon-delete.svg')
        createCommentLikeSection.appendChild(createDeleteButton)

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
        addLike();
        deleteComment();
        
    })
    .catch(error => {
    console.log(error)
    })

}

// event listener for submitting form
const commentForm = document.getElementById('comments-form')
commentForm.addEventListener('submit', event => {
    event.preventDefault();
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

// event listener for like button
function addLike() {
    const likeButton = document.querySelectorAll('.posted-comments_like-button')
    likeButton.forEach(like => {
        like.addEventListener('click', event => {
            let pullButtonId = like.id
            let buttonId = pullButtonId.substr(4)
            updateCounter(buttonId)
    })
    })
    
}

//function to update counter
function updateCounter(id) {
    const p = axios.put('https://project-1-api.herokuapp.com/comments/' + id + '/like?api_key=' + api);
    p.then(results => {
        const commentId = results.data.id

        //grabbing like counter
        const likedComment = document.querySelector('.id' + commentId)
        likedComment.innerText = results.data.likes;
    })
    .catch(error => {
        console.log(error)
    })
}

//function to delete comment
function deleteComment() {
    const deleteButton = document.querySelectorAll('.posted-comments_delete-button')
    deleteButton.forEach(item => {
        item.addEventListener('click', event => {
            let pullButtonId = item.id
            let buttonId = pullButtonId.substr(3)
            runDeleteCall(buttonId)
        })
    })
}

//function to run API call
function runDeleteCall(id) {
    const p = axios.delete('https://project-1-api.herokuapp.com/comments/' + id + '?api_key=' + api);
    p.then(results => {
        const commentId = results.data.id

        clearComments()
        displayComment()
    })
    .catch(error => {
        console.log(error)
    })
}