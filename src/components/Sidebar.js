import React,{useState,useEffect} from 'react';
import '../styles/Sidebar.css'
import{AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import {sliderData} from'./sliderData'

const Sidebar = () => {

    const [currentSlide,setCurrentSlide]=useState(0)
    const length=sliderData.length;

    const autoScroll=true;
    let slideChange;
    let changeTime=3000

    useEffect(()=>{
        setCurrentSlide(0)

    },[])

 useEffect(
     ()=>{
         if(autoScroll){
             auto()

         }
         return()=>clearInterval(slideChange)

     },[currentSlide]
 )

    const nextSlide=()=>{
        setCurrentSlide(currentSlide===length-1 ? 0 : currentSlide+1)
    }

    const prevSlide=()=>{
        setCurrentSlide(currentSlide===0 ? length-1 : currentSlide-1)
    }

    function auto(){
        slideChange=setInterval(nextSlide,changeTime)
    }


    return (
        <div className='slider'>
                <AiOutlineArrowRight className='arrow-right' onClick={nextSlide}/>
            <AiOutlineArrowLeft className='arrow-left' onClick={prevSlide}/>


            {sliderData.map((slide,index)=>{
                return(
                    <div className={index===currentSlide ?"slide current" :"slide"}>
                        {index===currentSlide &&(
                            <>
                                <img src={slide.image} alt='slide'/>
                                <div className='content'>
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.des}</p>

                                </div>
                            </>
                        )}

                    </div>
                )

            })} 
        </div>
    );
};

export default Sidebar;