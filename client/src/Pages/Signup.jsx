import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function SignUp(){

    const[formData,setFormData] =useState({})
    const[errorMessage,setErrorMessage] = useState(null);
    const[loading,setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) =>{
      setFormData({ ...formData, [e.target.id]:e.target.value.trim()})
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
      if(!formData.username||!formData.email||!formData.password){
        return setErrorMessage('Please Fill Out All The Fields')
      }
      try {
        setLoading(true);
        setErrorMessage(null)
        const res = await fetch('/api/auth/signup',{
          method : 'POST',
          headers : {'Content-Type':'application/json'},
          body:JSON.stringify(formData),

        })
        const data = await res.json();
        if(data.success === false){
          setLoading(false);
          return setErrorMessage(data.message);
        }
        setLoading(false);
        if(res.ok){
          navigate('/sign-in')
        }
        
      } catch (error) {
        setLoading(false)
        console.log(error.message);
        
      }
    }


  return <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
      <div className="flex-1 ">
      <Link to ="/" className ='  font-bold dark:text-white text-4xl' >
        <span className ='px-2 py-1 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blog </span>
        Spot
      </Link>
      <hr/>
      <p className="mt-5">
      Welcome to <b>BLOGSPOT</b>, 
      your go-to platform for expressing
       your thoughts and sharing your stories!
        Sign in to unlock a world of creativity, 
        where you can write, edit, and publish
         your blogs effortlessly. Join a
          vibrant community of writers and 
          readers, and discover new perspectives
           every day. Whether you're a seasoned 
           blogger or just starting, we 
           provide the tools you need to 
           bring your ideas to life. 
           Start your blogging journey with us today!
      </p>

      </div>
      <div className="flex-1 ml-5 mt-5">
        <form className="flex flex-col gap-4 "onSubmit={handleSubmit} >
          <div >
            <Label value = 'Usersame'/>
            <TextInput
            
              type="text"
              placeholder="UserName"
              id="username"
              onChange = {handleChange}
            />
          </div>
          <div >
            <Label value = 'E-Mail'/>
            <TextInput
            
              type="email"
              placeholder="Email"
              id="email"
              onChange = {handleChange}
            />
          </div>
          <div >
            <Label value = 'Password'/>
            <TextInput
            
              type="password"
              placeholder="Password"
              id="password"
              onChange = {handleChange}
            />
          </div>
          <Button gradientDuoTone="purpleToPink" type ='submit'>
            {
              loading ? (
                <>
                <Spinner size ='sm'/>
                <span className="'pl-3">Loading...</span>
                </>
              ):(
                'Sign Up'
              )
            }
          </Button>
        </form>
         <div className="flex gap-2 text-sm mt-5">
          <span>Have an Account ?</span>
            <Link to = '/sign-in' className="text-blue-500 font-extrabold">
              Sign In
            </Link>
         </div>
         {
         errorMessage && (
          <Alert className="mt-5" color="failure">
              {errorMessage}
          </Alert>
         )
        }

      </div>
    </div>
  </div>
}