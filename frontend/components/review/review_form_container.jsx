import {connect} from 'react-redux';
import {createReview, updateReview, deleteReview} from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
