import { useState } from "react"



export default function LikeButton(){
    let styles = {
        color: "red",
        fontSize: "5vw"
    }

    let[isliked, setIsLiked]= useState(false);
    let[count, setCount] = useState(0);
    
    let toogle = () => {
        setIsLiked(!isliked);
        setCount(count+1);
    }

    
    return(
        <div onClick={toogle}>
            {isliked ? (<i class="fa-solid fa-heart" style={styles}></i>
            ):(
            <i class="fa-regular fa-heart" style={styles}></i>)}

            <p>Clicks = {count}</p>
        </div>
    )
} 