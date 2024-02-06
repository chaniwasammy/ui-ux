import React from 'react'
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
const Wrapper = styled.div`
background-color:#000;

.ngaa{
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  @media(min-width:1200px){
      
  
    }
  h6{
    color:white;
    margin-top:5px;
    position:absolute;

    @media(min-width:768px){
      margin-top:90px;
      font-size:25px;
      margin-left:100px;
    }
    @media(min-width:1024px){
      margin-top:120px;
      font-size:25px;
      margin-left:100px;
    }
    @media(min-width:1200px){
      margin-top:80px;
      font-size:25px;
      position:absolute;
      margin-left:400px;
    }
  }
  .text{
    @media(min-width:1200px){
      margin-left:-380px;
      margin-top:90px;
    
    }
    .ooo{
      position:relative;
      margin-left:90px;
      @media(min-width:768px){
      margin-left:270px;
      margin-top:90px;
      width:30px;
      position:absolute;
  
    }
      @media(min-width:1024px){
      margin-left:270px;
      margin-top:120px;
      width:30px;
      position:absolute;
  
    }
    @media(min-width:1200px){
      margin-left:563px;
      margin-top:80px;
      width:30px;
      position:absolute;
  
    }
    }
    .aaa{
      position:absolute;
      margin-top:7px;
      left:115px;
  
      @media(min-width:768px){
      margin-left:158px;
      margin-top:98px;
      width:20px;
      position:absolute;
    }
      @media(min-width:1024px){
      margin-left:158px;
      margin-top:128px;
      width:20px;
      position:absolute;
    }
    @media(min-width:1200px){
      margin-left:263px;
      margin-top:90px;
      width:15px;
      position:absolute;
  
    }
    }
  h1{
    font-family:${(props) => props.theme.fam.bold };
  
    color:white;
    margin-top:20px;
    line-height:40px;
    @media(min-width:768px){
     margin-left:100px;
     position:absolute;
     margin-top:35px;
     font-size:40px;
    }
    @media(min-width:1024px){
     margin-left:100px;
     position:absolute;
     margin-top:55px;
     font-size:55px;
    }
    @media(min-width:1200px){
      font-size:75px;
      margin-top:10px;
      position:absolute;
      margin-left:400px;
  
    }
   
       
  }
   
    p{
     line-height:30px;
      font-size:15px;
      color:white;
    
      @media(min-width:768px){
       position:absolute;
      margin-left:100px;
      font-size:17px;
    }
      @media(min-width:1024px){
       position:absolute;
      margin-left:100px;
      font-size:25px;
    }
      @media(min-width:1200px){
       position:absolute;
      margin-left:400px;
      font-size:25px;
      top:300px;
    }
    }
  }
}
.images{
  img{
width: 40%;
}
.wee{
  position: relative;
  height:60vh;
  width:100%;
  right:35px;

    @media(min-width:375px){
       right:10px;
       margin-top:35px;
       
    }
    @media(min-width:768px){
      margin-left:450px;
       margin-top:35px;
       height:180vh;
       width:40%;
       margin-bottom:830px;
       
    }
    @media(min-width:1024px){
      margin-left:570px;
       margin-top:35px;
       height:180vh;
       width:40%;
       margin-bottom:1030px;
       
    }
    @media(min-width:1200px){
      margin-left:1170px;
      margin-top:90px;
      width:15%;
      height:650px;
      margin-bottom:90px;
  
    }
}
.woo{
  position:absolute;
  right:15px;


    @media(min-width:375px){
       right:7px;
       margin-top:75px;
       width:35%;
  
    }
    @media(min-width:768px){
       right:15px;
       top:130px;
       width:46%;
    }
    @media(min-width:1024px){
       right:15px;
       top:130px;
       width:46%;
    }
    @media(min-width:1200px){
      right:170px;
      top:1px;
      width:19%;
    }
}
}
`
function Banner() {
  return (
    <Wrapper>
      <Slide direction="left">
        <div className='ngaa'>
            <div className='text'>
                <p>Hi there! I'm Tay Dylan Magwaro</p>
               <h1>UI/UX DESIGNER</h1>
                <h6>Discover Tay</h6>
                <img src='./images/Group 29.png'width={20} className='ooo' alt=''></img>
                <img src='./images/Vector 1.png'width={10} className='aaa' alt=''></img>
            </div>
            <div className='images'>
              <img src='./images/Rectangle 1.png'className='wee' alt=''></img>
              <img src='./images/Path 118 1.png'className='woo' alt=''></img>
            </div>
        </div>
        </Slide>
    </Wrapper>
  )
}
export default Banner;