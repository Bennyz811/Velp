import React from 'react';
import BusinessMap from '../business_map/business_map';
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
  }

  componentDidMount(){
    this.props.searchForBusinesses(this.state.searchTerm);
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleInput(e){
    this.setState({ searchTerm: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const searchInput = Object.assign({}, this.state)
    this.props.searchForBusinesses(searchInput)
  }

  matches() {
    const matches = [];
    const input = this.state.searchTerm;
    if (input.length === 0){
      return this.props.business.category;
    }
    let cat = this.props.business.category
    let sub = cat.slice(0, input.length)
    if (sub.toLowercase() === input.toLowercase()){
      matches.push(cat)
    }

    return matches;
  }

  render(){
    return(
      <div>
        <form className='search-bar' onSubmit={this.handleSubmit}>
          <span className="psuedo-text">Find</span>
          <input
            onChange={this.handleInput}
            value={this.state.searchTerm}
            placeholder="Burgers, Sushi, Human, Dogs and Cats"/>

          <input type='submit' value='submit' />

        </form>
      </div>
    )
  }

}

export default Search;
