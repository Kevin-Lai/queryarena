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

export const createQuestion = (question) => {
    return $.ajax({
        method: "POST",
        url: "api/questions/",
        data: {question}
    })
}