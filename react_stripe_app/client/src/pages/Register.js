import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import {toast} from "react-hot-toast"
import axios from 'axios'
//import ButtonDebug from '../components/ButtonDebug'
//import InputDebug from '../components/InputDebug'

const Register = ({history}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const [word, setWord] = useState("")
    
    const handleClick = async (e) => {
        //console.log(name, email, password, word)
        try {
            e.preventDefault();
            const { data } = await axios.post('http://localhost:8000/api/register', { name, email, password })
            console.log(data);
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setName("")
                setEmail("")
                setPassword("")
                toast.success(`Hi ${data.user.name}, registration was successful`)
                history.push("/")
                window.location.reload(false);
            }
            
            
        }
        catch (err) {
            console.log("PRoblem")
            toast.error("problem")
        
        }
        //const handleDebug = () => {
            //console.log("MAGIC")
        
        //}
    }
        return (
            <div className="d-flex justify-content-center" style={{ height: '88vh' }}>
                <div className="container align-item-center d-flex">
                    <div className="row col-md-6 offset-md-3 text-center">
                        <h1 className="pt-5 fw-bold">Let's Start</h1>
                        <p className="lead pb-4">
                            Sign Up Now. It is free
                        </p>
                        <div className="form-group">
                            <Input label="Name" value={name} setValue={setName} />
                            <Input type="email" label="Email" value={email} setValue={setEmail} />
                            <Input type="password" label="Password" value={password} setValue={setPassword} />
                            <div className="d-grid">
                                <Button text="Register" handleClick={handleClick} type="danger" />
                            </div>
                            {/* <div className="d-grid">
                        <ButtonDebug text="Magic" handleDebug={handleDebug} type="primary"/>
                        </div>
                       <div className="form-group">
                        <InputDebug label="Debug" value={word} setValue={setWord}/>
    </div>*/}
                        
                        
                        </div>
                    </div>

                </div>

            </div>
        )
    
}

export default Register