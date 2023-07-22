import React, { useRef ,useState} from "react";

const AddForm = (props)=>{
    const [image, setImage] = useState(null);
    const [imageInput, setImageInput] = useState(null);
    const formdata = useRef()
    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageInput(file);
      const fileReader = new FileReader();
      fileReader.onload = function(e){
      setImage(e.target.result);
      }
      fileReader.readAsDataURL(file);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const {name} = formdata.current;
      console.log(name.value);
      const form = new FormData();
      form.append('title',name);
      form.append('image', imageInput);

      fetch('api/upload', {
        method: 'POST',
        body :form
      })
      .then(res => res.json())
      .then(data => console.log(data))
    };

    return <>
 <form onSubmit={handleSubmit} ref={formdata}>
      <input type="file" name="image" accept="image/*" onChange={handleFileChange} />
      <input type="text" name="name" placeholder="name "></input>
      <button type="submit" >submitt</button>
    </form>
    <div>
    { image &&   <img src ={image} alt="skd"></img>}
    </div>
    </>
}
export default AddForm;