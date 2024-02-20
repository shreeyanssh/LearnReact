export default function Price({oldPrice, newPrice}){
    let styles = {
        textDecorationLine : "line-through"
    };
    let styles2 = {
        fontWeight: "bold"
    };
    let back = {
        background: "#e0c367",
        borderRadius: "50px",
        color: "black",
        margin: "5px"
    }

    return(
        <div style={back}>
            <span style = {styles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;   
            <span style = {styles2}>{newPrice}</span>
        </div>
    )
}