import React from 'react'
import Roll from 'react-reveal/Roll';
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const Wrapper = styled.div`
.bawo{
    background-color:#000;
    height:1000px;
    @media(min-width:768px){
      display:flex;
      height:900px;
  
    }
    @media(min-width:1200px){
     display:flex;
     height:850px;
  
    }
    .mveli{
        img{
            width:60%;
            height:50%;
   
     @media(min-width:768px){
      width:100%;
  
      padding:5% 45% 25% 20%;
      
  
    }
     @media(min-width:1024px){
      width:100%;
  
      padding:5% 45% 25% 60%;
      
  
    }
    @media(min-width:1200px){
      width:100%;
      height:70%;
      padding:5% 45% 25% 80%;
      
  
    }
        }
    }
    .duze{
      h1{
        font-family:${(props) => props.theme.fam.bold };
        animation: ${slideIn} 3s ;
        color:white;
        margin-top:20px;
        margin-left:15px;
     @media(min-width:1024px){
      margin-left:150px;
      margin-top:40px;
      font-size:50px;
     
    
  
    }
     @media(min-width:1200px){
      margin-left:230px;
      margin-top:20px;
      font-size:70px;
  
    }
      }
        p{
            color:white;
            padding:5% ;
            line-height:20px;
            opacity: 0;
        animation: ${fadeIn} 4s forwards;
        @media(min-width:1024px){
      margin-left:115px;
      line-height:30px;
      padding:0 10% 1% 7%;
      margin-top:20px;
      font-size:18px;
    
  
    }
        @media(min-width:1200px){
      margin-left:180px;
      line-height:30px;
      padding:0 10% 1% 7%;
      margin-top:20px;
      font-size:18px;
    
  
    }
        }
        .mabru{
            color:white;
            padding:5% ;
            line-height:20px;
            opacity: 0;
        animation: ${fadeIn} 4s forwards;
        @media(min-width:1024px){
      margin-left:115px;
      line-height:30px;
      padding:0 10% 1% 7%;
     
      font-size:24px;
    
  
    }
        @media(min-width:1200px){
      margin-left:180px;
      line-height:30px;
      padding:0 10% 1% 7%;
      margin-top:20px;
      font-size:18px;
    
  
    }
        }
      

        h6{
            color:white;
            margin-left:15px;
            @media(min-width:1024px){
          margin-left:149px;
          margin-top:70px;
          font-size:25px;
 
   }
            @media(min-width:768px){
     
     margin-top:200px;
     font-size:25px;
 
   }
  @media(min-width:1200px){
      margin-left:240px;
      margin-top:200px;
      font-size:20px;
  
    }


        }
      .zalo{
        color:white;
        margin-left:130px;
        position:absolute;
        margin-top:2px;
   
        @media(min-width:768px){
      left:114px;
      position:absolute;
      top:1710px;
    }
        @media(min-width:1024px){
      left:220px;
      position:absolute;
      top:2210px;
    }
    @media(min-width:1200px){
      margin-left:260px;
      margin-top:18px;
      top:673px;
      position:absolute;
    
      
  
    }
      }
      .zee{
        position:absolute;
        right:51px;
        margin-top:15px;
        animation: ${slideIn} 3s ease-in-out;
   
        @media(min-width:375px){
       right:102px;
       margin-top:35px;
  
    }

    @media(min-width:768px){
      left:428px;
      width:10px;
     
     
  
    }
    @media(min-width:1024px){
      left:545px;
      width:10px;
     
     
  
    }
    @media(min-width:1200px){
        position:absolute;
        margin-left:160px;
        height:2%;
    }
      }
      .zoo{
        margin-left:250px;
        position:absolute;
        margin-top:10px;
        @media(min-width:1200px){
      left:458px;
      position:absolute;
      margin-top:20px;
      width:25px;
  
    }
    @media(min-width:375px){
       
       margin-top:29px;
  
    }
    @media(min-width:768px){
       right:320px;
       position:absolute;
  
    }
    @media(min-width:1024px){
       right:458px;
       position:absolute;
  
    }
    @media(min-width:1200px){
       margin-left:240px;
       position:absolute;
    } 
      }
    }
}
`

function About() {
  return (
    <Wrapper>
       <Roll ln>
        <div className='bawo'>
            <div className='mveli'>
                <img src='./images/2022_12_06_15_43_IMG_2437 1-1.png' alt=''></img>
            </div>
            <div className='duze'>
                <h6>Here is something about</h6>
                <h1>Tay Dylan Magwaro</h1>
                <p >I decided to pursue a career in UI/UX Design because I desired <br></br> 
                     to live creatively and address people's true needs when it came <br></br> 
                      to visual language. My constant goal is to enhance the user’s <br></br> 
                       experience while fusing pragmatism and aesthetics. <br></br> </p>
                      <p className='mabru'>consider myself to be a delicate balance of process and<br></br>
                     creativity, fiercely motivated by passion. The subtle yet<br></br>
                     profound nuances that are deeply ingrained in African cultures,<br></br>
                     such as patterns, textures, historical writings, symbols, and<br></br>
                     color as a form of visual communication, have a significant<br></br>
                     influence on my work.<br></br></p>
                   I 
                     <p className='zalo'>Download CV</p>

                     <img src='./images/Group 30.png'width={30}className='zoo' alt=''></img>
                     <img src='./images/Vector .png'width={10}className='zee' alt=''></img>
            </div>
        </div>
        </Roll>
    </Wrapper>
  )
}

export default About