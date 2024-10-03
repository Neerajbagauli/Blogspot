import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp(){
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
        <form className="flex flex-col gap-4" >
          <div >
            <Label value = 'Usersame'/>
            <TextInput
            
              type="text"
              placeholder="UserName"
              id="username"
            />
          </div>
          <div >
            <Label value = 'E-Mail'/>
            <TextInput
            
              type="text"
              placeholder="Email"
              id="email"
            />
          </div>
          <div >
            <Label value = 'Password'/>
            <TextInput
            
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <Button gradientDuoTone="purpleToPink" type ='submit'>
            Sign UP
          </Button>
        </form>
         <div className="flex gap-2 text-sm mt-5">
          <span>Have an Account ?</span>
            <Link to = '/sign-in' className="text-blue-500">
              Sign IN
            </Link>
         </div>
      </div>
    </div>
  </div>
}