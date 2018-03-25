import React from 'react';
import {Route} from 'react-router-dom';
// import BusinessMap from '../business_map/business_map';
// import IndexItem from './business_index_item';
// import BusinessIndex from './business_index';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      bounds: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navToBizIndex = this.navToBizIndex.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleInput(e){
    this.setState({ searchTerm: e.currentTarget.value});
  }

  navToBizIndex(){
    // this.props.history.push('/search');
    this.props.history.push(`/search?${this.state.searchTerm}`);
  }

  handleSubmit(e){
    let query = this.state.searchTerm;
    e.preventDefault();
    // this.props.updateFilter('categories', {searchTerm: query === "" ? query : query.replace(/\s/g, '')})
    //   .then( () => this.navToBizIndex());
    this.navToBizIndex();
  }

  render(){
    return <div className="search-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="search-bar-container">
            <div className="search-bar">
              <div className="psuedo-input psuedo-find input-form">
                <span className="psuedo-text">Find</span>
                <input onChange={this.handleInput} value={this.state.searchTerm} className="find-placeholder" placeholder="Korean, Cuban, Ramen, Vegan" />
              </div>
              <div className="psuedo-input psuedo-near">
                <span className="psuedo-text">Near</span>
                <input placeholder="New York, NY" />
              </div>
              <button className="submit-btn" onClick={this.handleSubmit}>
                <span>
                  <i className="fa fa-search" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>;
  }

}

export default Search;