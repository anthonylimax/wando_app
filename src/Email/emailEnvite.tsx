
import {useState } from 'react'
import './email.css'
import axios from 'axios';
export default function EmailEnvite(){

    const [enabled, setEnabled] = useState(true);
    const [focused, setFocused] = useState({
        0: false,
        1: false,
        2: false,
    })
    const [email, setEmail] = useState({
        email: '',
        about: '',
        text: '',
    }); 
    const disabledButton = ()=>{
               (email.text == '' || email.about == '' || email.email == '') ? setEnabled(true) : setEnabled(false);
    }
    return (
        <section className="email">
            
        <form action='/emailConfirmed'>  
                <span>Deseja falar comigo? me envie um email que vou checá-los.</span>
                <div className='input'>
                    <input  type='email'  onBlur={
                        ({target})=>{
                            if(email.email == ""){
                                setFocused({...focused, 0: true});
                                target.style.borderColor= "red"
                            }
                            else{
                                target.style.borderColor = "#A2FF86"
                            }
                        }
                    } onChange={({target})=>{setEmail({...email, email: target.value}); disabledButton();}} placeholder='INSIRA SEU EMAIL' />
                    {email.email == '' && focused[0] ? <img src='./error.png' ></img> : null}
                </div>
                <div className="input">
                    <input type="text" onBlur={
                        ({target})=>{
                            if(email.about == ""){
                                setFocused({...focused, 1: true}); 
                                target.style.borderColor= "red";
                            }
                            else{
                                target.style.borderColor = "#A2FF86"
                            }
                        }
                    }  onChange={({target})=>{setEmail({...email, about: target.value}); disabledButton();}} placeholder='INSIRA O ASSUNTO' />
                    {email.about == '' && focused[1] ? <img src='./error.png' ></img> : null}
                </div>
                <textarea onBlur={
                        ({target})=>{
                            if(email.text == ""){
                                setFocused({...focused, 2: true}); 
                                target.style.borderColor= "red";
                            }
                            else{
                                target.style.borderColor = "#A2FF86"
                            }
                        }
                    }  onChange={({target})=>{setEmail({...email, text: target.value});disabledButton();}} placeholder='FALE COMIGO'></textarea>
                <button disabled={enabled} onClick={()=>{

                    axios.post('http://localhost:5000/emailSender', email)

                }} className={`envite ${enabled}`}>ENVIAR</button>
        </form>
        </section>
    )
}