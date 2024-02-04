import React from 'react'
import styled, { keyframes } from "styled-components";
import Roll from 'react-reveal/Roll';
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
background:url("./images/Rectangle 8.png");
color: #fff;

@media(min-width:768px){
    display: flex;
    gap: 5%;
    padding: 5%;
}
@media(min-width:1200px){
   height:490px;
}
.outer{
height: 45vh;
width: 90vw;
padding: 5% 5% 3% 5%;
    background-color:  #1B0B06 ;

    text-align: center;
     @media(min-width: 768px){
  display: grid;
  height: 35vh;
width: 60vw;
padding: 5% 5% 3% 5%;
    background-color: #1B0B06  ;
     }
     @media(min-width: 992px){
  display: flex;
  position: relative;
  height: 26vh;
  width: 100vw;
padding: 4% 2% 3% 3%;
gap: 9%;
     } 
     @media(min-width: 1200px){
        height: 50vh; 
        width: 120vw;
        text-align: left;
        margin-top:80px;
     }
}
.images{
    position: relative;
    width: 100px;
    @media(min-width:768px){}
    position: relative;
    width: 100px;
    @media(min-width:1200px){
       margin-left: 7%;
       @media(min-width:1200px){
        
       }
       .below{
        position:absolute;
        z-index:1;
        width: 40%;
        display: none;
       }  
       @media(min-width:768px){
        .below{
        position:absolute;
        z-index:1;
        width: 40%;
        display: none;
       }  
    }   
}
.below{
    display: none;
    @media(min-width:768px){
        position: absolute;
        top:5%;
        right: 0;
       height: 300px;
       width: 10vw;
       top: -330%;
      left: 90px;
        display: block;
       transform: rotate(90deg);
    }
    @media(min-width:992px){
        top: 0%;
        transform: rotate(180deg);
      left: 0%;
        height: 300px;
        width: 4vw;
    }
    @media(min-width:1200px){
        top: -15%;
        transform: rotate(180deg);
      left: 0%;
        height: 429px;
        width: 7vw;
    }
}
.up{
    position:relative;
    z-index:2;
    left: 100%; 
    display: flex;
    margin: 0 auto;
    @media(min-width:768px){
        top: -60%;
        width: 100%;
        height: auto;
        left: 80%;
        position: absolute;
    }
    @media(min-width:992px){
        top: 0%;
        width: 150px;
        left: -45px;
        top: 15%;
    }
    @media(min-width:1200px){
        width: 190px;
        left: -65px;
        top: 19%;
    }
    } 
}
h5{
    font-size: 22px;
    font-weight: 400;
    animation: ${slideIn} 4s ;
    @media(min-width:1200px){
        font-size: 35px;
        font-weight: 200;
        margin-left: 20px;
    }
}hr{
    width: 50%;
    margin-left: 26%;
    margin-top: 7px;
    margin-bottom: 10px;
    @media(min-width:1200px){
        width: 50%;
    margin-left: 24%;
    margin-top: 7px;
    margin-bottom: 10px;   
    }
    @media(min-width:1200px){
        width: 75%; 
        margin-left: 3%;
      
    }
}
h6{
font-size: 16px;
margin-bottom: 10px;
animation: ${slideIn} 4s ;
@media(min-width:1200px){
    font-size: 16px;
margin-bottom: 10px;   
}
@media(min-width:1200px){
    font-size: 18px; 
    font-weight :600 ;
    margin-left: 20px ;
}
}
p{
    animation: ${fadeIn} 4s forwards;
    @media(min-width:768px){
        line-height: 21px;
    } 
    @media(min-width:992px){
        line-height: 21px;
      
    } 
    @media(min-width:1200px){
        line-height: 25px;
        font-size: 21px;
        margin-left: 20px ;
      
    } 
}
img{
    width: 100%;
}
.text{
    margin-top:10%;
    @media(min-width:992px){
        margin-top:25%;  
    }
    @media(min-width:992px){
        margin-left: 50px;
    }
    @media(min-width:1200px){
        margin-top: 10px;
    }
}

`

function Third() {
    return (
        <Wrapper>
            <Roll ln>
            <div className='outer'>
                
                <div className='images'>
                    <img src='./images/Group 10 2.png' className='below' alt='' />
                    <img src='./images/Ellipse 2.png' className='up' alt='' />
                </div>
                <div className='text'>
                    <h5>Beyond Bechani <hr /></h5>
                    <h6>Head of Design || uncommon.org</h6>
                    <p>
                        His work ethic us pristine, and he is easily adjustable to a
                        given situation. His ability to go out of his way to help others
                        has made him stand out. He is one of the most dedicated people I’ve
                        worked with
                        and is willing to put that extra help.
                    </p>

                </div>
            </div>
            <div className='outer'>
               
                <div className='images'>
                    <img src='./images/Group 10 2.png' className='below' alt='' />
                    <img src='./images/Ellipse .png' className='up' alt='' />
                </div>
                <div className='text'>
                    <h5>Monalisa Matika<hr /></h5>
                    <h6>UI/UX Designer || Velocity Inc.</h6>
                    <p>
                        Having worked with Dylan for a couple of years, I must say he is an
                        excellent professional. He is passionate about his work and has an
                        incredible eye for design. I am
                        impressed by his work ethic and communication skills.
                    </p>

                </div>
            </div>
            </Roll>
        </Wrapper>
    )
}

export default Third