import React from 'react'
 import { RiLinkedinFill } from "react-icons/ri";
 import { GoMail } from "react-icons/go";
 import { MdLocalPhone } from "react-icons/md";
 import { AiFillInstagram } from "react-icons/ai";
import styled from 'styled-components'
import { Slide } from "react-awesome-reveal";
 const Wrapper= styled.footer`
 background: #000;
 margin-top: 10%;
 padding-bottom: 65%;
 img{
  width: 20%;
  height: 130px;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
 }

 .div-svl{
height: 50px;
width: 50px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid white;
 } 
 .div-svg{
height: 40px;
width: 40px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid white;
margin-left: 22px;
 } 
 .h4{
  font-size: 18px;
  text-align: center;
  color :white;

} 
 .quick-p{
 
  color :white;
  text-align: center;
  
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 1%; 
} 
  p{
  color :white;
  text-align: center;
    
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 1%;
} 
  h3{
  color :white;
  text-align: center;
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 1%;
} 
     svg{
        font-size: 20px;  
  
    } 
.svl{
  font-size: 25px;
  color: white;
  text-align: center;
}
.icon-div{
  gap: 20px;
  margin-top: 9%;
  display: flex;
justify-content:center
} 


@media (min-width: 768px) {
  padding-top: 8%;
 padding-bottom: 10%;

  .footer{
    display: flex;
    align-items: center;
  }
  .quick-p{

  color :white;
  text-align: left;
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 0%;
    margin-left: 32px;
  }
 p{
  color :white;
  text-align: left;
    line-height: 1.4;
    font-size: 20px;
    margin-bottom: 0%;
    margin-left: 15px;
}
 h3{
  color :white;
  text-align: left;
    font-size: 20px;
    padding-top: 5%;
    margin-bottom: 2%;
    margin-left: 29px;
}
.p-div{
  display: flex;
  gap: 15px;
  margin-left:18px;
}
.text-div{
  width: 63%;
}
.p-div-2{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.svl{
  font-size: 20px;
  
  text-align: center;
}
.icon-div{
  gap: 10px;
  margin-top: 5%;
  display: flex;
justify-content:flex-start;
margin-left: 22px;
}
img{
  width: 17%;
  height: 250px;
  object-fit: cover;
  display: flex;
  margin-left:60px;
 }

 .otis{
  display: flex;
  flex-direction: column;
  gap: 18px;
 }
 .h4{
  display: flex;
  align-items: center;
  gap: 10px;
 }
} 


@media (min-width: 992px) {
  .icon-div{
  gap: 10px;
  margin-top: 0%;
  display: flex;
justify-content:unset;
margin-right: 431px;

}
.p-div-2{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.text-div{
  width: 50%;
}
img{
  width: 15%;
  height: 250px;
  object-fit: cover;
  display: flex;
  margin-left:70px;
 }
 .otis{
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: 32px;
 }

 .text-div{
  width: 63%;
}
h3{
  color :white;
  text-align: left;
    font-size: 20px;
    padding-top: 2%;
    margin-bottom: 2%;
    margin-left: 62px;
}
.p-div{
  display: flex;
  gap: 15px;
  margin-left:51px;
}
.quick-p{

color :white;
text-align: left;
  line-height: 1.4;
  font-size: 20px;
  margin-bottom: 0%;
  margin-left: 66px;
}
} 





 @media (min-width: 1200px){
  padding-top: 0;
 padding-bottom: 3%;
  img{
  width: 10%;
  height: 250px;
  object-fit: cover;
  display: flex;
  margin-left:120px;
 }
 p{
  color :white;
  text-align: left;
    line-height: 1.4;
    font-size: 22px;
    margin-bottom: 0%;
}
 h3{
  color :white;
  text-align: left;
    font-size: 22px;
    padding-top: 2%;
    margin-bottom: 2%;
    margin-left: 25px;
}
.text-div{
  width: 70%;
}
.p-div{
  display: flex;
  gap: 50px;
  margin-left: 10px;
}
.h4{
  display: flex;
  align-items: center;
  font-size: 22px;
  width: max-content;
  gap: 10px;
 }
.p-div-2{
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items:flex-start;

}
.icon-div{
  gap: 20px;
  margin-top: 0%;
  display: flex;
justify-content:unset;
}
svg{
  font-size: 25px;
}

.svl{
  font-size: 25px;
  color: white;
  text-align: center;
}

.div-svl{
height: 40px;
width: 40px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid white;
 }
 .div-svg{
height: 40px;
width: 40px;
border-radius: 100%;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid white;
margin-left: 22px;
 }
 .quick-p{
color :white;
text-align: left;
  line-height: 1.4;
  font-size: 20px;
  margin-bottom: 0%;
  margin-left: 26px;
}
} 
 `
function Footer() {
  return (
    <Wrapper>
      <Slide direction="left">
     <div className='footer'>
     <img src="./images/Path 118 1.png" alt=""/>  
         <div className='text-div'>
         <p className='quick-p'>Quick Links</p>

         <div className='p-div'>
            <p>Discover Tay</p>
            <p>My Portfolio</p>
            <p>Contact Tay</p>
         </div>
         <h3>Contact  Tay</h3>

 <div className='p-div-2'>

 <div className='otis'>
<div className='h4'> <div className='div-svg'><MdLocalPhone /></div>+263  771  733  755</div>
<div className='h4'> <div className='div-svg'><GoMail /></div> magwarodylan5@gmail.com</div>
</div>
<div className='icon-div'>
  <div className='div-svl'>
<RiLinkedinFill  className='svl'/>
</div>

<div className='div-svl'>
<AiFillInstagram  className='svl'/>

</div>
</div>
         </div>
      </div>
     </div> 
     </Slide>
    </Wrapper>
  )
}

export default Footer