import React from 'react'
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Wrapper = styled.div`
.tool{
  .kit{
    position:relative;

    .kitt{
      width:100%;
      height:50vh;
      @media(min-width:1200px){
      
      height:70vh;
  
    }
    }
    h1{
      font-family:${(props) => props.theme.fam.bold };
    
      position:absolute;
      top:20%;
      margin-left:50px;
      color:white;
      font-size:35px;
   
      @media(min-width:768px){
      margin-left:40px;
      margin-top:135px;
      font-size:45px;
    }
      @media(min-width:1024px){
      margin-top:195px;
      font-size:45px;
      margin-left:90px;
    }
    @media(min-width:1200px){
      margin-left:150px;
      margin-top:115px;
      font-size:85px;
    }
    }
    .one{
      width:15%;
      position:absolute;
      right:260px;
      margin-top:130px;
      
   
      @media(min-width:768px){
      width:12%;
      left:420px;
      margin-top:65px;
    }
      @media(min-width:1024px){
      width:12%;
      left:470px;
      margin-top:85px;
    }
    @media(min-width:1200px){
      width:5%;
      left:900px;
      margin-top:75px;
    }
    }
    .two{
      width:18%;
      position:absolute;
      right:180px;
      margin-top:130px;
      
   
      @media(min-width:768px){
      width:15%;
      left:410px;
      margin-top:239px;
    }
    @media(min-width:1024px){
      width:15%;
      left:455px;
      margin-top:340px;
    }
    @media(min-width:1200px){
      width:7%;
      left:890px;
      margin-top:239px;
    }
    }
    .three{
      width:18%;
      position:absolute;
      right:100px;
      margin-top:130px;
    

      @media(min-width:768px){
      width:15%;
      left:570px;
    }
    @media(min-width:1024px){
      width:15%;
      left:693px;
      margin-top:210px;
    }
    @media(min-width:1200px){
      width:7%;
      left:1090px;
      margin-top:120px;
    }
    }
    .four{
      width:18%;
      position:absolute;
      right:20px;
      margin-top:130px;
    
   
      @media(min-width:768px){
      width:15%;
      left:565px;
      margin-top:320px;
    }
      @media(min-width:1024px){
      width:15%;
      left:685px;
      margin-top:420px;
    }
    @media(min-width:1200px){
      width:7%;
      left:1090px;
      margin-top:280px;
    }
    }
  }
}

`


function MyToolkit() {
  return (
    <Wrapper>
       
      <div className='tool'>
      <Slide direction="right">
        <div className='kit'>
          <img src='./images/Rectangle 8.png' className='kitt' alt='' ></img>
      
          <h1>MY TOOL KIT.</h1>
          <img src='./images/logos_figma.png' className='one' alt=''></img>
          <img src='./images/logos_adobe-illustrator.png' className='two' alt=''></img>
          <img src='./images/logos_adobe-xd.png' className='three' alt=''></img>
          <img src='./images/logos_adobe-photoshop.png' className='four' alt=''></img>
        
        </div>
        </Slide>
      </div>
    
    </Wrapper>
  )
}

export default MyToolkit