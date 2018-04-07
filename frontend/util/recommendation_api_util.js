export const fetchRecommendations = recom => {
    return $.ajax({
        method: 'get',
        url: '/api/recommend'
    });
};