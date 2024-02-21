import { useState } from "react"

export default function From(){
    // let [fullName, setFullName] = useState("");

    // let getName = (event) => {
    //     setFullName(event.target.value);
    // }
    
    // return(
    //     <form action="">
    //         <label htmlFor = "name">Name: &nbsp;</label>
    //         <input type="text"                                    //This is when we want one form.
    //         placeholder="Enter Full Name"              
    //         value={fullName} 
    //         onChange={getName}
    //         id="name"/>

    //         <button>Submit</button>
    //     </form>
    // )

    // For multiple forms

    let[formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    })

    let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        
        setFormData((currData) => {
            return {...currData, [fieldName]:fieldValue}
        })
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName: "",     //To clear after submit
            userName: "",
            password: "",
        })
    }

    return(
            <form action="">

                <label htmlFor = "name">Name: &nbsp;</label>
                <input type="text"                                    
                placeholder="Enter Full Name"              
                value={formData.fullName} 
                onChange={handleInputChange}
                id="name"
                name = "fullName"/>
    
                <br />

                <label htmlFor = "userName">Username: &nbsp;</label>
                <input type="text"                                    
                placeholder="Enter User Name"              
                value={formData.userName} 
                onChange={handleInputChange}
                id="userName"
                name = "userName"/>
    
                <br />

                <label htmlFor = "password">Password: &nbsp;</label>
                <input type="text"                                    
                placeholder="Enter Password"              
                value={formData.password} 
                onChange={handleInputChange}
                id="password"
                name = "password"/>
                <br />

                <button onClick={handleSubmit}>Submit</button>
            </form>
        )
}