import React, {Component, useState} from "react";
import '../../node_modules/materialize-css/dist/css/materialize.css';
import img from './imgs/images.jpg'
import { db,auth,storage } from 'config/fire';
import Alert from "components/alert";




export default function Contact(){
    const [alertMessage, setAlertMessage] = useState(null)
const [name, setName] = useState('')
const [title, setTitle] = useState('')
const [discription, setDiscription] = useState('')
const [email, setEmail] = useState('')

const handleUpdate = (e) => {
  e.preventDefault()
  setAlertMessage(null)
  if((discription=='')){
    setAlertMessage({
      type:'error',
      message:"Description shouldn't be empty"})
     return;

}else if((discription==null)){
setAlertMessage({
  type:'error',
  message:"Description shouldn't be empty"})
return;
}else{
  
  db.ref('Questions')
 .push({
      user:email,
      date:new Date().toISOString().substring(0, 10),
      name:name,
      title:title,
      description:discription,
      respond:"",
    }
).then(() => {

  setAlertMessage({
    type:'success',
    message:'Message Sent Successfully'
})
setDiscription("")
setName("")
setEmail("")
setTitle("")

}).catch((error) => {
    console.log(error);
});
}
}


    return(
        <section className="section section-contact blue-grey lighten-1" id="contact">
        <div className="container">
           
                
                <div className="row">
                <div className="col s12 m6 center" style={{color:"white"}}>
                    
                    <div className="center" style={{color:"white"}}><h3><i><br/>Is SafeKid For You?</i></h3></div>
                    <p>If you have loved ones that you are responsible for, if you’re a parent, if you are a caregiver, then YES! This helps you track your loved ones and with multiple features ensures their safety! Be carefree and stay in touch on the go!</p>
                    <img src={img}/>
                </div>
               

                
                <div className="col s12 m6">
                    <br/>
                    <div className="card-panel grey lighten-3">
                        <h5>Contact Us</h5>
                        <form>
                            <div className="input-field">
                                <input type="text" id="name"  value= {name}
                    onChange={e => setName(e.target.value)}/>
                                <label for ="name" className="purple-text">Name</label>
                            </div>

                            <div className="input-field">
                                <input type="text" id="email" value= {email}
                    onChange={e => setEmail(e.target.value)}/>
                                <label for ="email" className="purple-text">Email</label>
                            </div>

                            <div className="input-field">
                                <input type="text" id="title"  value= {title}
                    onChange={e => setTitle(e.target.value)}/>
                                <label for ="title" className="purple-text">Title</label>
                            </div>

                            <div className="input-field">
                                <textarea type="text" id="discription" value= {discription}
                    onChange={e => setDiscription(e.target.value)} className="materialize-textarea" data-length="120"/>
                                <label for ="msg" className="purple-text">Message</label>
                            </div>

                            <input type="submit" value="Submit" onClick={handleUpdate} className="btn purple"/>
                        </form>
                       
                    </div>
                </div>
                {alertMessage &&
            <Alert type ={alertMessage.type} message={alertMessage.message} autoClose={5000}/>  }
                
                </div>
            

        
        </div>
        </section>
    )
}



