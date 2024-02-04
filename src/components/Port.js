import React from 'react'
import Roll from 'react-reveal/Roll';
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const Wrapper = styled.div`
.whole{
  background-color:#000;
  height:635px;
  @media(min-width:1024px){
     height:860px;
      
      
  
    }
  @media(min-width:1200px){
     height:800px;
      
      
  
    }
  .port{
    color:white;
    padding:20px;
    line-height:35px;
    p{
      @media(min-width:768px){
     margin-top:80px;
     margin-left:260px;
    }
      @media(min-width:1024px){
     margin-top:80px;
     margin-left:370px;
    }
      @media(min-width:1200px){
     margin-top:80px;
     margin-left:5px;
    }
    }
    h1{
      font-family:${(props) => props.theme.fam.bold };
      animation: ${fadeIn} 4s forwards;
      font-size:40px;
      @media(min-width:768px){
    margin-top:25px;
    position:absolute;
    left:230px;
    font-size:50px;
    }
      @media(min-width:1024px){
    margin-top:25px;
    position:absolute;
    left:330px;
    font-size:65px;
    }
      @media(min-width:1200px){
    font-size:79px;
    margin-top:45px;
    position:absolute;
    left:430px;
    }
    }
    @media(min-width:1200px){
      
      margin-left:500px;
      
      
  
    }
  }
  .folio{
    @media(min-width:768px){
      display:flex;
     }
    @media(min-width:1200px){
     display:flex;
    }
    .text{
      color:white;
      padding:20px;
      @media(min-width:1200px){
      position:relative;

      
  
    }
      .ooo{
            position:relative;
            width:15%;
          
            @media(min-width:768px){
              margin-left:160px;
              width:6%;
              position:absolute;
              top:2935px;
            }
            @media(min-width:1024px){
              margin-left:190px;
              width:4%;
              position:absolute;
              top:3592px;
            }
            @media(min-width:1200px){
              margin-left:260px;
              width:8%;
              position:absolute;
              top:480px;
            }
          }
          .aaa{
            position:absolute;
            margin-top:15px;
            left:30px;
            width:6%;
            animation: ${slideIn} 3s ease-in-out;
            @media(min-width:768px){
              margin-left:155px;
              width:4%;
              top:2933px;
              position:absolute;
              
            }
            @media(min-width:1024px){
              margin-left:185px;
              width:3%;
              top:3590px;
              position:absolute;
              
            }
            @media(min-width:1200px){
              margin-left:255px;
              width:4%;
              top:473px;
              
            }
          }
      .xoo{
        margin-bottom:20px;
        animation: ${slideIn} 4s ;
        @media(min-width:768px){
      margin-left:50px;
      margin-top:170px;
    }
        @media(min-width:1024px){
      margin-left:90px;
      margin-top:318px;
    }
        @media(min-width:1200px){
      margin-left:130px;
      margin-top:300px;
    }
      }
      .xuu{
        margin-bottom:20px;
        line-height:30px;
        animation: ${fadeIn} 3s ease-in-out;
        @media(min-width:768px){
      margin-left:50px;
    }
        @media(min-width:1024px){
      margin-left:90px;
    }
        @media(min-width:1200px){
      margin-left:130px;
    }
      }
    }
  }
  .image{
    .boo{
      width:86%;
      height:70%;
      padding:20px;
      animation: ${fadeIn} 3s ease-in-out;
      @media(min-width:768px){
      width:55%;
      height:30%;
    
      left:260px;
      margin-top:50px;
      position: absolute;
    }
      @media(min-width:1024px){
      width:55%;
      height:30%;
    
      left:315px;
      margin-top:90px;
      position: absolute;
    }
      @media(min-width:1200px){
      width:50%;
      height:60%;
    
      left:455px;
      margin-top:90px;
      position: absolute;
     
      
      
  
    }
    }
  }
}

`




function Port() {
  return (
    <Wrapper>
       <Roll ln>
      <div className='whole'>
     
        <div className='port'>
          <p>Check out some of my work</p>
          <h1>My Portfolio</h1>
        </div>

        <div className='folio'>
          <div className='text'>
          <p className='xoo'>UI/UX Design</p>
          <p className='xuu'>
          The National Art<br></br>
          Gallery App - <br></br>
          Designed for the<br></br>
          National Gallery<br></br>
          of Zimbabwe<br></br></p>
          <img src='./images/Group 29.png'width={20} className='ooo' alt=''></img>
          <img src='./images/Vector 1.png'width={10} className='aaa' alt=''></img>
          </div>

         <div className='image'>
          <img src='./images/Group 16.png'className='boo' alt=''></img>
         </div>

        </div>
       
      </div>
      </Roll>
    </Wrapper>
  )
}

export default Port