import React, { useState } from 'react'



const MyForm = () => {

    const [formData, setFormData]= useState({
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    const submitForm = e =>{
        e.preventDefault()

        setFormData({
            firstName : "",
            lastName : "",
            email : "",
            password : "",
        })
        console.log(formData)
    }

    const [firstErr, setFirstErr] = useState("");
    const [lastErr, setLastErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordLenErr, setPasswordLenErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");


// 
    const handleChange = e => {
        const {name, value} = e.target
        setFormData( (currentData) => ({...currentData, [name]: value }))

        if (name == "firstName" && value.length < 2){
            setFirstErr(("First Name is too short"))
        } else{
            setFirstErr("")
        }
        // 
        if (name == "lastName" && value.length < 2){
            setLastErr(("Last Name is too short"))
        } else{
            setLastErr("")
        }
        // 
        if (name == "email" && value.length < 5){
            setEmailErr(("Email must be atleast 5 charaters"))
        } else{
            setEmailErr("")
        }
        // 
        if (name == "password" && value.length < 8){
            setPasswordLenErr(("Password must be atleast 8 charaters long"))
        } else{
            setPasswordLenErr("")
        }
        // 
        if (name == "confirmPassword" ) {
            if (value !== formData.password) {
                setPasswordErr(("Password must match"))
            } else { 
                setPasswordErr("")
            }
        }

        }
          

    const styleForm = {
        width: 400
    }
// 

    const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }

    const validStyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontWeight: "Bold"
    }

    return (
<>
    <div className="container" style={formStyle}>
    <form style={styleForm} onSubmit={submitForm}> 
        <fieldset>
            <legend>Sign Up!</legend>
            <p style={validStyle}>{firstErr}</p>
            <label>First Name: </label>
            <input name="firstName" type="text" value={formData.firstName} onChange={handleChange}></input>
            <br/>
            <p style={validStyle}>{lastErr}</p>
            <label>Last Name: </label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} type="text"></input>
            <br/>
            <p style={validStyle}>{emailErr}</p>
            <label>Email: </label>
            <input name="email" type="text" value={formData.email} onChange={handleChange}></input>
            <br/>
            <p style={validStyle}>{passwordLenErr}</p>
            <label>Password: </label>
            <input name="password" type="password" value={formData.password} onChange={handleChange}></input>
            <br/>

            <label>Confirm Password: </label>
            <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange}></input>
            <p style={validStyle}>{passwordErr}</p>
            <br/>
            <button>Register</button>
        </fieldset>
    </form>
    </div>
    
    <p>First Name : {formData.firstName}</p>
    <p>Last Name : {formData.lastName}</p>
    <p>Email : {formData.email}</p>
    <p>Password : {formData.password}</p>


</>
)
}

export default MyForm