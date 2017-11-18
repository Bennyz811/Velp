import React from 'react';
import {Route} from 'react-router-dom'
import BusinessMap from '../business_map/business_map';
import IndexItem from './business_index_item';
import BusinessIndex from './business_index';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      suggestions: null
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navToBizIndex = this.navToBizIndex.bind(this);
  }

  // componentDidMount(){
  //   this.props.searchForBusinesses(this.state.searchTerm);
  // }

  update(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  handleInput(e){
    this.setState({ searchTerm: e.currentTarget.value});
  }

  navToBizIndex(){
    this.props.history.push(`/businesses/search`)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateFilter({searchTerm: this.state.searchTerm}).then( () => this.navToBizIndex())
  }
  //
  // matches() {
  //   const matches = [];
  //   const input = this.state.searchTerm;
  //   if (input.length === 0){
  //     return this.props.business.category;
  //   }
  //   let cat = this.props.business.category
  //   let sub = cat.slice(0, input.length)
  //   if (sub.toLowercase() === input.toLowercase()){
  //     matches.push(cat)
  //   }
  //
  //   return matches;
  // }

  render(){
    return(
      <div className="search-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="search-bar-container">
            <div className='search-bar'>
              <div className="psuedo-input psuedo-find">
                <span className="psuedo-text">Find</span>
                <input
                  onChange={this.handleInput}
                  value={this.state.searchTerm}
                  placeholder="Restaurant Name"/>
              </div>
              <div className="psuedo-input psuedo-near">
                <span className="psuedo-text">Near</span>
                <input placeholder="New York, NY" />
              </div>
              <div className="submit-btn">
                <input type='submit' value='submit' />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default Search;

// <ul>
//   {
//     this.props.search.input.map(biz => (
//       <IndexItem
//         className="result-list-ind"
//         key={biz.id}
//         business={biz} />
//     ))
//   }
// </ul>
