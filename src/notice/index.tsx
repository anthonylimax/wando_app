import { useLocation, useNavigate } from "react-router-dom"
import { Section } from "../style";
import axios from "axios";
import { useState } from "react";


export const IluNotice = () =>{

    const [clicked, setClicked] = useState(false);
    const props = useLocation();    
    const Service = axios.create({
        baseURL:"http://localhost:5000",
    }); 
    const [number, setNumber] = useState(props.state.upvotes)
    const navigator = useNavigate();
    return(
    <Section className="scopo">
        <Section className="IluNotice">
                <div onClick={()=>{
                    navigator(-1);
                }} className="backButton">
                    <img src="./back.png" alt="" />
                    <span>VOLTAR</span>
                </div>

                <div onClick={
                    ()=>{
                        if(!clicked){     
                            
                            setNumber(number + 1);  
                            Service.put("/atualizeUpvote", {
                                uuid: props.state.uuid,
                                number: 1,
                            })   
                            setClicked(!clicked);
                        }
                        else{
                            
                            setNumber(number - 1);     
                            Service.put("/atualizeUpvote", {
                                uuid: props.state.uuid,
                                number: -1,
                            })   
                            setClicked(!clicked);
                        }
                    }
                }className="upvote">
                    <div className="imgUpvote" style={
                    {
                        width: 40,
                        height:45,
                        backgroundColor: clicked ? "red" : "white" 
                    }
                }>
                </div>
                    <span style={{
                        color: clicked ? "red" : "white" 
                    }}>{number}</span>
                </div>
                <h1 className="title">{props.state.header}</h1>
                
                    <img src={props.state.url} alt="" />
                <p>{props.state.notice}</p>
        </Section>
    </Section>
    )
}