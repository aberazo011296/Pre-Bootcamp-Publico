function incrementoLikes(index) {
    var likes = document.querySelector("#like-"+index);
    likes.innerHTML = parseInt(likes.innerHTML) + 1;
}