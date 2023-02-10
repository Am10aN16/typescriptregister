import { useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css'
import { Myform } from './components/Myform'
import Posts from './components/Apipage'
import swal from 'sweetalert'
import {Routes , Route} from 'react-router-dom'


const Routing = ()=>{
  const navigate = useNavigate();
  return(
    <Routes>
        <Route path='/' element={<Myform onSubmit={({Name, PhoneNo , email}) => {
    
    console.log(Name, PhoneNo, email);
    try{
      if(Name ==="" && PhoneNo==="" && email===""){
        swal({
          text: "Please fill all fields",
          icon: "error"
        });
      }
      else if(Name===""){
        swal({
          text: "Please fill your Name",
          icon: "error"
        });
      }
      else if(PhoneNo===""){
        swal({
          text: "Please fill the Mob No.",
          icon: "error"
        });
      }else if(email===""){
        swal({
          text: "Please fill your email",
          icon: "error"
        });
      }else{
        swal({
          text: "Registration Success",
          icon: "success"
        });

        navigate('/posts')

        }
      }
    catch(err){
      console.log(err);
      
    }
   
    localStorage.setItem('Name', Name)
    localStorage.setItem('Phone', PhoneNo)
    localStorage.setItem('Email', email)
   } } />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
  );
};

interface Values {
  Name: string;
  PhoneNo: string;
  email: string;
}


export const useLocalStorage=<T,>(key:string, initialValue: T) =>{
  const[state, setState] = useState();


  useEffect(()=>{

  },[state]);
  

}

function App() {

  return (
    <div >
      <Routing/>
   
  
    </div>
  )
}

export default App
