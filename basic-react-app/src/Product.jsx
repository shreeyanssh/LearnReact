import Price from "./Price";

export default function Product({title, idx, description}){
    let styles = {
        border : "2px solid white", 
        borderRadius : "50px",
        padding: "0 2vw",
        background: "linear-gradient(160deg, rgba(228,44,125,1) 0%, rgba(182,9,95,1) 41%, rgba(3,56,119,1) 100%)"

    }
    let oldPrice = [12_495, 11_900,1_599,599];
    let newPrice = [8_999,9_199,899,278];
    let discription = [["8000 dpi","amet  elit"],["Lorem ipsum dolor sit","ullam nihil fuga vitae"],["consectetur  elit"," sint reprehenderit"],["Deserunt mollitia officiis vitae","asperiores ut consequuntur quaerat"]]
    return(
        <div style={styles}>
        <h4>{title}</h4>
        <ul>
            <li>{discription[idx][0]}</li>
            <li>{discription[idx][1]}</li>
        </ul>
        <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
        </div>
    )
} 