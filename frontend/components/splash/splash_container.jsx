import {connect} from 'react-redux';
import Splash from './splash';
import { fetchRecommendations } from "../../actions/recommend_actions";

const mapStateToProps = state => {
  return {
    recommendations: state.entities.recommendations
  };
};

const mapDispatchToProps = dispatch => {
    return { fetchRecommendations: () => dispatch(fetchRecommendations()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
