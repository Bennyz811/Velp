import React from 'react';
import BusinessMap from '../business_map/business_map';
import IndexItem from './business_index_item';

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
    this.props.searchForBusinesses({searchTerm: e.currentTarget.value})
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
    debugger
    return(
      <div>
        <form className='search-bar' onSubmit={this.handleSubmit}>
          <span className="psuedo-text">Find</span>
          <input
            onChange={this.handleInput}
            value={this.state.searchTerm}
            placeholder="Burgers, Sushi, Human, Dogs and Cats"/>

          <input type='submit' value='submit' />

        <ul>
          {
            this.props.businesses.map(biz => (
              <IndexItem
                className="result-list-ind"
                key={biz.id}
                business={biz} />
            ))
          }
        </ul>
        </form>
      </div>
    )
  }

}

export default Search;
