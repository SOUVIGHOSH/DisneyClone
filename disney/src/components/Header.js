import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { currentUserName, executeLogout } from '../features/userSlice';

const Header=()=>{
    const dispatch=useDispatch();

    const logoutHandler =()=>{
        console.log("logout");
        dispatch(executeLogout({}));
    }
    const user = useSelector(state=>state.user);
    //console.log(user.name);
    const onClickHandler=()=>{
        console.log("login");
    }
    //console.log(currentUserName(user));
    return (
        <AppBar>
            <Logo>
                <img src="/images/logo.svg" alt="Disney"/>
            </Logo>
            {currentUserName(user) && <Navmenu>
                <a href="/Home">
                    <img src="/images/home-icon.svg" alt="Home"/>
                    <span>HOME</span>
                </a>
                <a href="/Search">
                    <img src="/images/search-icon.svg" alt="Search"/>
                    <span>SEARCH</span>
                </a>
                <a href="/Watchlist">
                    <img src="/images/watchlist-icon.svg" alt="Watchlist"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="/Originals">
                    <img src="/images/original-icon.svg" alt="Original"/>
                    <span>ORIGINAL</span>
                </a>
                <a href="/Movies">
                    <img src="/images/movie-icon.svg" alt="Movie"/>
                    <span>MOVIES</span>
                </a>
                <a href="/Series">
                    <img src="/images/series-icon.svg" alt="Series"/>
                    <span>SERIES</span>
                </a>
            </Navmenu>}
            {!currentUserName(user) && <Login onClick={onClickHandler} href="/Login">LOGIN</Login>}
            {currentUserName(user) && 
            <>
                <UserName>{user.name}</UserName>
                <Login as="div" onClick={logoutHandler}>LOGOUT</Login>
            </>
            }
            
        </AppBar>
    )
}
const UserName = styled.div`
letter-spacing: 1.5px;
font-weight:bold;
margin-right: 1vw;
text-transform: uppercase
`
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  z-index:4;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Navmenu = styled.nav`
    margin-top:4px;
    margin-right:auto;
    margin-left:3vw;
    display: flex;
    flex-flow:row nowrap;
    align-items:center;
    height:100%;
    justify-content:flex-end;
    @media (max-width: 768px) {
        display: none;
    }
    a{
        display:flex;
        justify-content:center;
        padding 0 12px;
        img{
            height: 3vh;
            min-height:3vh;
            width: 3vw;
            min-width: 3vw;
        }
        span{
            margin-top:4px;
            letter-spacing: 2px;
            font-size: 13px;
            margin-left:0;
            font-weight:bold;
            white-space: nowrap;
            padding: 2px 0px;
        }
    }
`;
const Logo=styled.a`
    padding:0;
    max-height:60vh;
    max-width:80px;
    margin-top:4px;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`;
const AppBar = styled.nav`
    display: flex;
    position: fixed;
    top:0;
    left:0;
    right:0;
    height:10vh;
    background-color: #090b13;
    justify-content: space-between;
    align-items:center;
    padding: 0px 35px;
    z-index: 3;
`

export default Header;