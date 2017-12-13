import React from 'react';

class UploadPhoto extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e){
    let file = e.currentTarget.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: reader.result });
    };
    if (file){
      reader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let file = this.state.imageFile;

  }

  render(){
    return(
      <div>

      </div>
    );
  }
}
