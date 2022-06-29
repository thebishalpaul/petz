import React,{useState,useEffect} from 'react'; 
import Navbar from './Navbar'
import Ads from './Ads'
import {db} from "../firebase"
import "./css/Home.css"
import "./css/CommonCss.css"
import SearchIcon from '@mui/icons-material/Search';

const Home=({setOpenPopup,user,handleLogOut})=>{
    const [info,setInfo]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    // "ESYXOPqlJpZ48np8LfNivnh9pvc2"
    // ITNhjnYcEDUSxVdtYJtMTV9GnWI3
    
    // console.log(searchTerm);
  useEffect(() => {
    db.collection("pets ESYXOPqlJpZ48np8LfNivnh9pvc2").onSnapshot((snapshot) =>
       setInfo(snapshot.docs.map((doc) => doc.data()))
      );    
    },[]);
    
    // console.log(info);
    return(
    <>
    <Navbar
     setOpenPopup={setOpenPopup}
     user={user}
     handleLogOut={handleLogOut}
     />
     <div className="searchDiv">
     <input type="text" placeholder="Search..." id="searchbox" 
     onChange={(event)=>{
       setSearchTerm(event.target.value);
     }}
     />
     <SearchIcon fontSize="large" className="searchIcon"/>
     </div>
     <div className='main bg-color full-height white-font'>
     {info.length<1 &&(
       <div className='loading'>Finding a pet for you...</div>
     )}

     {/* filter*********************** */}
     {info.filter((val)=>{
       if(searchTerm=="") return val
       else if(val.type.toLowerCase().includes(searchTerm.toLowerCase())){
         return val
       }
     }).map(
        ({age,gender,imgUrl,petName,type,breed,contactNo,Address},ID)=>(
            <Ads 
            key={ID}
            age={age}
            gender={gender}
            imgUrl={imgUrl}
            petName={petName}
            type={type}
            breed={breed}
            user={user}
            contactNo={contactNo}
            Address={Address}
            />
         )
        )}
      </div> 
    </> 
    );
}
export default Home;