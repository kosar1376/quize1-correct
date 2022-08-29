import React,{useState} from 'react';
import '../styles/Start.css'


const Start = () => {
    const [input,setInput]=useState("")

    const inputHandeler=(event)=>{
        setInput(event.target.value)
    }



    return (
        <div className='start-container'>
            <div className='input-container'>
                <button>شروع کنید</button>
                <input type={"tel"} placeholder="تلفن یا ایمیل خود را وارد کنید" value={input} onChange={inputHandeler}/>
            </div>
          
        </div>
    );
};

export default Start;