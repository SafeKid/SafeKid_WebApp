import React from 'react';
import './App.css';

class Signin extends React.Component{
    render(){
        return(
            <div className = {'authBox'}>
                <div className = {'leftBox'}>
                    <div className = {'bgBlue'}/>
                    <div className = {'imageAuth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                </div>
                <div className = {'rightBox'}>
                    <div className = {'box'}>
                        <div className={'titleAuth'}>LOGIN</div>
                        <div className = {'inputSBox'}>
                            <input className={'inputS'} type={'text'} placeholder={'Email / Username'}/>
                      </div>
                      <div className = {'inputSBox'}>
                            <input className={'inputS'} type={'password'} placeholder={'Password'}/>
                      </div>
                      <div className={'contentBox'}>
                          <div className={'checkboxBox'}>
                            <input type={'checkbox'} className={'checkbox'}/>
                            <label className={'checkboxLabel'}>Remember</label>
                      </div>
                      <div className={'text1'}>Forgot Password?</div>
                      </div>
                      <div className={'btnAuth'}>Login</div>
                      <div className={'text'}>Don't have an account?</div>
                      <div className={'text2'}>Sign up</div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Signin;