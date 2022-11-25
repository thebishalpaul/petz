import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {db,storage} from "../firebase";
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import {collection,addDoc} from "firebase/firestore"
import Navbar from './Navbar';
import "./css/CommonCss.css"
import "./css/AddPet.css"

function AddPet(props) {    
const [petName,setName]=useState("");
const [prog,setProg]=useState(0);
const [type,setType]=useState("");
const [age,setAge]=useState("");
const [gender,setGender]=useState("");
const [breed,setBreed]=useState("");
const [contactNo,setcontactNo]=useState("");
const [Address,setAddress]=useState("");
const [imgUrl, setImgUrl]=useState("");
const [imgError,setImgError]=useState("");
const [successMsg, setSuccessMsg]=useState("");
const [uploadError, setUploadError]=useState("");

const types =['image/jpg','image/jpeg','image/png','image/PNG'];
    const navigate=useNavigate();
    const handleProductImg=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImgUrl(selectedFile);
                setImgError('');               
            }
            else{
                setImgUrl("");
                setImgError('Please select a valid image file type (png or jpg)')
            }
        }
        else{
            console.log('Please select your file');
        }
    }
 
    const handleSubmit=(e)=>{
        e.preventDefault();
        const storageRef=ref(storage,`Images/${imgUrl.name}`);
        const uploadTask=uploadBytesResumable(storageRef,imgUrl);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            setProg(progress);
        },
        (error)=>setUploadError(error.message),
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(url=>{
                // console.log(props.user.uid);
                addDoc(collection(db,'pets '+props.user.uid)
                ,{
                    petName:petName,
                    type:type,
                    age:age,
                    gender:gender,
                    breed:breed,
                    contactNo:contactNo,
                    Address:Address,
                    imgUrl:url
                }).then(()=>{ 
                    alert('Pet added successfully');
                    setName('');
                    setAge('');
                    setType('');
                    setGender('');
                    setBreed('');
                    setcontactNo('');
                    setAddress('');
                    document.getElementById('file').value='';
                    setImgError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                    navigate("/");
                }).catch(error=>setUploadError(error.message));
            })
        }
        );   
 }
    
    
        
        const handleTypeChange=(e)=>{
           let selected=e.target.value;
           setType(selected);
        }

        const handleGenderChange=(e)=>{
           let selected=e.target.value;
           setGender(selected);
        }

  return (
    <>
    <Navbar
     user={props.user}
     handleLogOut={props.handleLogOut}/>
    <form className="form-container bg-color full-height white-font" onSubmit={handleSubmit}>
        <h1 className="heading">Rehome a Pet</h1>
        <h5>Pet Details</h5>

        <div className="pet-name margin">
        <label>Pet's Name?</label>
        <br/>
        <input type="text" placeholder="Please enter your pet's name" onChange={(e)=>setName(e.target.value)} value={petName} required/>
        </div>

       <div> 
       <label>Pet Type?</label> <br/>
       <input type="radio" className='radio' name="petType" value="Dog" onChange={handleTypeChange} required/>  
       <label htmlFor="Dog">Dog</label>
       <input type="radio" className='radio' name="petType"  value="Cat" onChange={handleTypeChange} required/>
       <label htmlFor="Cat">Cat</label><br/>
       </div>

    <div>
       <label> Pet's Breed? </label>
       <br/>
       <input type="text" placeholder="Please enter your pet's breed" onChange={(e)=>setBreed(e.target.value)} required/><br/>
    </div>

    <div>
       <label>Age of the Pet?</label>
       <br/>
       <input type="text" placeholder="Please enter your pet's age" onChange={(e)=>setAge(e.target.value)} value={age} required/>
       <br/>
    </div>   

    <div>
       <label>Gender of the Pet?</label>
       <br/>
       <input type="radio" className='radio' name="petGender" value="Male" onChange={handleGenderChange} required/>
       <label htmlFor="Male">Male</label>
       <input type="radio" className='radio' name="petGender"  value="Female" onChange={handleGenderChange} required/>
       <label htmlFor="Female">Female</label><br/>
    </div>

    <div>   
       <label>Enter Phone No.</label><br/>
       <input type="text" placeholder="Please enter your phone number" name="contactNo" onChange={(e)=>setcontactNo(e.target.value)} required/><br/>
    </div>

    <div>  
       <label>Enter Address</label><br/>
       <input type="text" placeholder="Please enter your address" name="Address" onChange={(e)=>setAddress(e.target.value)} required/>
   </div>  
       <br/><br/>
    <div>  
       <label>Upload Pets Image</label>
       <br/>
       <input type="file" id="file" className='form-control' onChange={handleProductImg} />
      
       {imgError&&<>
                    <br></br>
                    <div className='error-msg' style={{color:"red"}}>{imgError}</div>
                </>}
      {prog>0 &&<div className='uploadProgress'>
        Upload is {prog.toFixed()}% done
      </div>}
    </div>
       <button type="submit">
          SUBMIT
        </button>  
    </form>  
    </>
  )
}

export default AddPet