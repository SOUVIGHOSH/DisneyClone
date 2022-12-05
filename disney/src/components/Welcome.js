import styled from 'styled-components'
const Welcome =()=>{
    return (
        <Container>
            <Content>
                <LoginColumn>
                    <Logo1 src="/images/cta-logo-one.svg" alt=""/>
                    <GetAll>GET ALL THERE</GetAll>
                    <Description>Never Ending Entertainment just for you. Subscribe now to binge!</Description>
                    <Logo2 src="/images/cta-logo-two.png" alt=""/>
                </LoginColumn>
                <Bgimage/>
            </Content>
        </Container>
    )
}

const GetAll=styled.a`
text-decoration: none;
background-color: blue;
height:5vh;
width: 100%;
font-weight:bold;
margin-bottom:12px;
padding: 10px;
border-radius:10px;
&:hover {
    background: green;
}
`;
const Description = styled.p`
color:#f9f9f9;
`
const LoginColumn = styled.div`
 width: 100%;
 max-width: 50vw;
 display: flex;
 text-align: center;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;
const Logo1 = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const Logo2 = styled.img`
 max-width: 100%;
 display: flex;
 flex-wrap: wrap;
 margin-bottom:12px;
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

export default Welcome;
