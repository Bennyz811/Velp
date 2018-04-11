import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchBusiness} from '../../actions/business_actions';
import {selectBusiness} from '../../reducers/selectors';
import {fetchBusinessReviews, fetchMoreReviews} from '../../actions/review_actions';
// import businessesReducer from '../reducers/business_reducer';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  const bizId = ownProps.match.params.businessId;
  const business = state.entities.selectedBusiness.business;
  return {
    bizId,
    business,
    reviews: state.entities.businessReviews,
    offSet: state.entities.businessReviews.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    fetchBusinessReviews: (revBizId, offSet) => dispatch(fetchBusinessReviews(revBizId, offSet)),
    fetchMoreReviews: (revBizId) => dispatch(fetchMoreReviews(revBizId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow));
