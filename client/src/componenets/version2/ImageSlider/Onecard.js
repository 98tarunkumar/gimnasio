import React from 'react'
import styled from 'styled-components';
import {useSpring,animated} from 'react-spring'
// 
const Styledh5= styled.h1`
font-size:70px;
    line-height:0.05;
    letter-spacing:0.5;
    font-family:"Gilroy";
    color:silver;
`;
const Styledh4= styled.p`
display:flex;
font-size:30px;
    line-height:1.5;
    letter-spacing:1.15;
    font-family:"Gilroy";
    color:silver;
`;
const Container = styled(animated.div)`

display: inline-block;
padding: 1em;
width: 750px;
height: 500px;
top:30px;
background: #75777c66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Onecard = ()=> { 
    const [props,set]=useSpring(()=>({xys:[0,0,1],config: {mass:10,tension:200,friction:50}}))
    return (
        <Container 
            onMouseMove={({clientX:x,clientY:y})=>(set({xys:calc(x,y)}))}
            onMouseLeave={()=>set({xys:[0,0,1]})}
            style={{
                transform:props.xys.interpolate(trans)
            }}
            >
                 <Styledh5><center>ABOUT</center></Styledh5>
                 <Styledh4><center>Ever seen a person and wished you had a body like that individual! 
                     Here we are to help you reach that goal of yours. Gimnasio cares about you all and 
                     there's nothing more important to it than helping you all go through an experience 
                     that makes you happy, confident and strong. There's no doubt that every body type is beautiful
                     but like we want ourselves to grow our body should also grow and glow.
                     </center></Styledh4>    
            {/* <StyledImage src={work}/>  */}
                 {/* <Styledh1>Workout</Styledh1>
                <Styledh3>The only bad workout
                     is<br/> the one that didn't happen!</Styledh3> */}
                    {/* //  <Styledh1><center>ABOUT</center></Styledh1> */}
        </Container>
    )
}

export default Onecard
