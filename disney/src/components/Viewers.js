import styled from 'styled-components';

const Viewers =()=>{
    return (
        <Container>
            <Wrap>
            <img src="/images/viewers-disney.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/vedios/1564674844-disney.mp4" type="video/mp4" />
            </video>
            </Wrap>
            <Wrap>
            <img src="/images/viewers-marvel.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/vedios/1564676115-marvel.mp4" type="video/mp4"/>
            </video>
            </Wrap>
            <Wrap>
            <img src="/images/viewers-national.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/vedios/1564676296-national-geographic.mp4" type="video/mp4"/>
            </video>
            </Wrap>
            <Wrap>
            <img src="/images/viewers-pixar.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/vedios/1564676714-pixar.mp4" type="video/mp4"/>
            </video>
            </Wrap>
            <Wrap>
            <img src="/images/viewers-starwars.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/vedios/1608229455-star-wars.mp4" type="video/mp4"/>
            </video>
            </Wrap>
            
        </Container>
    )
};

const Container = styled.div`
margin-top: 30px;
display: grid;
grid-gap:25px;
gap:25px;
grid-template-columns: repeat(5,minmax(0,1fr));

@media (max-width: 786px){
    grid-template-columns: repeat(1,minmax(0,1fr));
}
`;
const Wrap= styled.div`

margin-top: 30px;
box-shadow: 10px 10px 12px 0px rgba(0,0,0,0.52);
overflow:hidden;
position: relative;
border: 1px solid #f9f9f9;
border-radius:10px;
img{
    inset: 0px;
    display: block;
    position: relative;
    top: 0;
    height: 100%;
    width:100%;

}

video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
      transform: scale(1.1);
      border: 4px solid #f9f9f9;
      video {
      opacity: 1;
    }
  }


`;

export default Viewers;
