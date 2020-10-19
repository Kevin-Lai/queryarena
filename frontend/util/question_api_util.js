export const fetchQuestions = () => {
    return $.ajax({
        method: "GET",
        url: "api/questions/"
    })
}


export const fetchQuestion = (questionId) => {
    return $.ajax({
        method: "GET",
        url: "api/questions/" + questionId
    })
}