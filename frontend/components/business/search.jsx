import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value})
    };
  }

  render(){
    return(
      <div>

      </div>
    )
  }

}

export default Search;
