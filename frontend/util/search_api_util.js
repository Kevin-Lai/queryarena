export const searchQuery = (query) => {
    return $.ajax({
        method: "GET",
        url: "/api/search?q=" + query,
        data: { query }
    });
};