import {connect} from 'react-redux';
import {fetchAllReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  return {
    review: Object.values(state.entities.reviews)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllReviews: () => dispatch(fetchAllReviews())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex)
