import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from 'styled-components';
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";


const Home=()=>{
    const user=useSelector(state=>state.user);
    let navigate = useNavigate();
    useEffect(() => {
        if (!user.name){
           return navigate("/");
        }
     },[user.name]);
    
    return(
        <HomeContainer>
            <ImageSlider/>
            <Viewers/>
        </HomeContainer>
    )
    }
 
    const HomeContainer = styled.main`
    position: relative;
    background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: calc(10vh + 20px);
    padding: 0 calc(3.5vw + 5px);
    
  `;

export default Home;
