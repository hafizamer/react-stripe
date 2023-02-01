import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import {toast} from "react-hot-toast"
import axios from 'axios'
//import ButtonDebug from '../components/ButtonDebug'
//import InputDebug from '../components/InputDebug'

const Home = ({}) => {


    
    
        return (
            <div className="d-flex justify-content-center" style={{ height: '88vh' }}>
                <div className="container align-item-center d-flex">
                    <div className="row col-md-6 offset-md-3 text-center">
                        <h1 className="pt-5 fw-bold">Home</h1>
                        <p className="lead pb-4">
                            Welcome
                        </p>

                            {/* <div className="d-grid">
                        <ButtonDebug text="Magic" handleDebug={handleDebug} type="primary"/>
                        </div>
                       <div className="form-group">
                        <InputDebug label="Debug" value={word} setValue={setWord}/>
    </div>*/}
                        
                        
                      
                    </div>

                </div>

            </div>
        )
    
}

export default Home