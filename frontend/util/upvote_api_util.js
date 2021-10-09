export const createUpvote = (upvote) => {
    //debugger
    return $.ajax({
        method: "POST",
        url: "api/upvotes/",
        data: {upvote}
    })
}

export const deleteUpvote = (upvoteId) => {
    return $.ajax({
        method: "DELETE",
        url: "api/upvotes/" + upvoteId
    })
}