import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { executeLogin } from '../features/userSlice';
const Login=(props)=>{
    let navigate = useNavigate();
    const dispatch= useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorState , setErrorState]= useState(null);
    const onSubmit = async (data) => {
        
        let response = await fetch("/data/users.json") ;
        if(response.ok){
            let userData = await response.json();
            if(userData.mobile===data.Mobile){
                setErrorState(null);
                dispatch(executeLogin(userData));
                navigate("/Home");
            }
            else{
                setErrorState("Invalid Login");
            }
        }
        else{
            setErrorState("Network Failure! Try Again.");
        }
        
        
    }
    
    const onClose =()=>navigate("/Home");
    return(
        <Container>
            <Content>
                <Bgimage/>
                <LoginForm>
                    <CloseModal onClick={onClose}>X</CloseModal>
                    <Description>Login to continue</Description>
                    <form onSubmit={handleSubmit(onSubmit)}>
          
                    <input placeholder="Enter Mobile" {...register("Mobile", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
      
                    <input type="submit" />
                    </form>
                    {errorState && <div>{errorState}</div>}
                </LoginForm>
                </Content>
        </Container>
    )
}

const Description= styled.div`
margin-right:auto;
margin-left: 2vw;
font-weight:bold;
font-size:25px;
letter-spacing: 1.5px;
`;
const CloseModal= styled.div`
cursor: pointer;
display: flex;
flex-flow: row flex-end;
margin-left:auto;
margin-right: 3px;
margin-top: 2px;
font-weight:bold;
`;
const Container = styled.section`
height: 100vh;
overflow: hidden;
display: flex;
text-align: center;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Content = styled.div`
overflow: hidden;
 position: relative;
 height: 100%;
 width: 100%;
 box-sizing:border-box;
 padding:80px 40px;
 margin-bottom:10vw;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;
const Bgimage = styled.div`
 height: 100%;
 background-position: top;
 background-size: cover;
 background-repeat: no-repeat;
 background-image: url("/images/login-background.jpg");
 position: absolute;
 top:0;
 left:0;
 right:0;
 z-index: -1;
`;

const LoginForm = styled.div`
display:flex;
flex-direction: column;
justify-content:space-between;
max-width: 50vw;
max-height: 50vh;
height: 50vh;
width: 30vw;
background-color: #141b29;
margin-top:10vh;
border-radius: 5px;
`;

export default Login;