export const fetchRecommendationAPI = () => {
    return $.ajax({
        method: 'get',
        url: '/api/businesses/recommend'
    });
};