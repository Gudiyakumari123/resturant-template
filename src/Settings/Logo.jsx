import React from "react";
import "./Logo.scss";
const ImgUpload =({
    onChange,
    src
  })=>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img for="photo-upload" src={src} alt=""/>
      </div>
      <input id="photo-upload" type="file" onChange={onChange}/> 
    </label>
  
  
  
  const Profile =({
    src,
  })=>
    <div className="card">
        <label className="custom-file-upload fas">
          <div className="img-wrap" >
            <img for="photo-upload" src={src} alt=""/>
          </div>
        </label>
      
    </div>
       
        
  const Edit =({
    children,
  })=>
    <div className="card">
          {children}
    </div>
  
  class Logo extends React.Component {
    state = {
      file: '',
      imgSrc:'./icons/hrimg.svg',
      name:'',
      status:'',
      active: 'edit'
    }
  
    photoUpload2 = e =>{
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
             active} = this.state;
      return (
        <div className="p-photo-hr">
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload2} src={imgSrc}/>
            </Edit>
          ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imgSrc} 
              name={name} 
              />)}
          
        </div>
      )
    }
  }
  
export default Logo;