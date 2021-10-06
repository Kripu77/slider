import React,{useEffect} from 'react'
import { GrFormPreviousLink,  GrFormNextLink } from "react-icons/gr";

const Review = ({id, name, job, text, image, setIndex, index, quotes}) => {
useEffect(()=>{
    //set interval on when the function  should trigger
 let test= setInterval(()=>{
  setIndex((index)=>checkFn(index-1))
}, 8000);
//use clean up function
return ()=> clearInterval(test)
},[])
    const checkFn = (index)=>{
        if(index>quotes.length-1){
           return 0
        }
        if(index<0){
            setIndex(quotes.length-1);
        }
        return index;
    }
    // we have done index based approach rather than mapping to every value
    return (
        <article>
        <div className="image-container">
      <img src={image} className="image"/>
        </div>

        <h2 className="title">{name}</h2>
        <h3> {job}</h3>
        <p className="text">{text}</p>
        <button className="btn" onClick={()=>setIndex(()=>checkFn(index-1))}> <GrFormPreviousLink/> </button>
        <button className="btn" onClick={()=>{setIndex(()=>checkFn(index+1))}}> <GrFormNextLink/> </button>
        </article>
    )
}

export default Review
