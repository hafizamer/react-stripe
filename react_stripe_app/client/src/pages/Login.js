import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import {toast} from "react-hot-toast"
import axios from 'axios'
//import ButtonDebug from '../components/ButtonDebug'
//import InputDebug from '../components/InputDebug'

const Login = ({history}) => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const [word, setWord] = useState("")
    
    const handleClick = async (e) => {
        //console.log(name, email, password, word)
        //console.log(email, password);

        try {
            e.preventDefault();
            const { data } = await axios.post('http://localhost:8000/api/login', {email, password })
            console.log(data);
            if (data.error) {
                toast.error(data.error)
            }
            else {

                setEmail("")
                setPassword("")
                history.push("/")
                window.location.reload(false);
            }

            
        }
        catch (err) {
            console.log(err)
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
                        <h1 className="pt-5 fw-bold">Login</h1>
                        <p className="lead pb-4">
                            Use your email and password
                        </p>
                        <div className="form-group">

                            <Input type="email" label="Email" value={email} setValue={setEmail} />
                            <Input type="password" label="Password" value={password} setValue={setPassword} />
                            <div className="d-grid">
                                <Button text="Login" handleClick={handleClick} type="danger" />
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

export default Login