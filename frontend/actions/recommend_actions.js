import * as recommendApiUtil from '../util/recommendation_api_util';

export const FETCH_RECOM = 'FETCH_RECOM';

const fetchRecom = fetchedData => ({
    type: FETCH_RECOM, fetchedData
});

export const fetchRecommendations = () => dispatch => {
    return recommendApiUtil.fetchRecommendationAPI().then( fetchedData => {
        return dispatch(fetchRecom(fetchedData));
    });
};