import React from 'react';
import './signup.css';

class Signup extends React.Component{
    render(){
        return(
            <div className = {'authBox'}>
                <div className = {'rBox'}>
                    <div className = {'bBlue'}/>
                    <div className = {'imageAth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                </div>
                <div className = {'lBox'}>
                    <div className = {'bo'}>
                        <div className={'titleAth'}>REGISTER</div>
                        <form>
                        <div className = {'inputBox'}>
                            <label>First name:</label>
                            <input className={'input'} type={'text'}/>
                        </div>
                        <div className = {'inputBox'}>
                             <label>Last Name:</label>
                            <input className={'input'} type={'text'}/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Email:</label>
                            <input className={'input'} type={'email'}/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Password:</label>
                            <input className={'input'} type={'password'}/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Confirm Password:</label>
                            <input className={'input'} type={'password'}/>
                        </div>
                        <div className={'btnAuth'}>Register</div>
                        <div className={'text'}>Already a Member?</div>
                        <div className={'text2'}>Sign In</div>
                      </form>
                    </div>
                </div>
            </div>

            )
        }
        
    }
    
    export default Signup;