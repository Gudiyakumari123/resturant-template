import React from "react";
import profile from "../../public/favicon.png";
import "./CardProfile.scss";
const ImgUpload2 =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src}/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  
  
  const Profile2 =({
    src,
  })=>
    <div className="card">
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src}/>
          </div>
        </label>
      
    </div>
       
        
  const Edit =({
    children,
  })=>
    <div className="card">
          {children}
    </div>
  
  class CardProfile extends React.Component {
    state = {
      file: '',
      imgSrc:'../../public/favicon.png',
      name:'',
      status:'',
      active: 'edit'
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imgSrc: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    render() {
      const {imgSrc, 
             name, 
             status, 
             active} = this.state;
      return (
        <div className="p-photo">
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload2 onChange={this.photoUpload} src={imgSrc}/>
            </Edit>
          ):(
            <Profile2 
              onSubmit={this.handleSubmit} 
              src={imgSrc} 
              name={name} 
              />)}
          
        </div>
      )
    }
  }
  
export default CardProfile;