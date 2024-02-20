export default function HelloMess({userName, textColor}){
    let colorChanger = {color:textColor};
    
    return(
        <h1 style={colorChanger}>Hello {userName}</h1>
    )
}



//At app.jsx
// import "./App.css";
// import HelloMess from "./HelloMess";

// function App() {
  
//   return (
//       <HelloMess userName={"Shreyansh"} textColor={"yellow"}/>
//   )
// }

// export default App
