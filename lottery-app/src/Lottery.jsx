import { useState } from "react"
import Ticket from "./Ticket";
import {getTicket, sum} from "./helper";

export default function Lottery({n=3, winningSum=15}){
    let [ticket, setTicket] = useState(getTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () =>{
        setTicket(() => getTicket(n))
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}