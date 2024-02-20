import Product from "./Product"

export default function ProductTab(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        gap: "3vw",
    };

    return(
        <div style = {styles}>
        <Product title = "Logitech" idx = "0"/>
        <Product title = "Apple" idx = "1"/>
        <Product title = "Zebronics" idx = "2"/>
        <Product title = "Petronics" idx = "3"/>
        </div>
    )
}