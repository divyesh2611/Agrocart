import React,{useState,useEffect} from 'react';
import axios from "axios";
import styles from "./styles.module.css";
import {useNavigate} from 'react-router-dom'
// import { put } from "../../../../server/routes/uploadcrop";

const ForgotPassword = () => {
	// const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	
	const [user, setUser] = useState({
		email:"",
		password:""
	})
	const handlechange = e => {
		const {name,value } = e.target 
		setUser({
		  ...user,
		  [name]:value  
		})
	  } 
console.log(user)

const handleSubmit = () => {
	const{ email,password } = user
	console.log(JSON.stringify({email, password}))
	if(user.email && user.password )
	{
		// alert("valid")
		axios.post("http://localhost:9002/register/post",user)
		.then ( res => {
			alert(res.data.message)
			//navigate("/Login");
			console.log("hii")
		})
		.catch(error =>{
			console.log(error)
			console.log(user)
		})
	}else{
		alert("Fill up complete form")

	}
	console.log("passowrd")
};
	return (
		// <div className={styles.container}>
		// 	<form className={styles.form_container} onSubmit={handleSubmit} >
		// 		<h1>Email</h1>
		// 		<input
		// 			type="email"
		// 			placeholder="Email"
		// 			name="email"
		// 			onChange={handlechange}
		// 			value={user.email}
		// 			required
		// 			className={styles.input}
		// 		/>
		// 		<h1>Password</h1>
		// 		<input
		// 			type="password"
		// 			placeholder="password"
		// 			name="password"
		// 			onChange={handlechange}
		// 			value={user.password}
		// 			required
		// 			className={styles.input}
		// 		/>
		// 		{error && <div className={styles.error_msg}>{error}</div>}
		// 		{msg && <div className={styles.success_msg}>{msg}</div>}
		// 		<button type="submit" className={styles.green_btn} >
		// 			Submit
		// 		</button>
		// 	</form>
		// </div>
		<>
		
             <div className='container'>
              <div className="form-group1">
           <div className='hello'><label1 htmlFor="password">Email</label1></div>
              <input type="text" 
			  name="email" 
			  placeholder="email" 
			  onChange={handlechange} 
			  value={user.email} 
			  required
		 			className={styles.input}/>
            </div>
            <div className="form-group1">
            <div className='hello'>  <label1 htmlFor="password">New Password</label1></div>
			   		<input
					type="password"
					placeholder="password"
					name="password"
					onChange={handlechange}
					value={user.password}
					required
					className={styles.input}
				/>
            </div>
            
            <div className="btn6">
          <button type="button" className={styles.green_btn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
             </div>
          
		</>
	);
};

export default ForgotPassword;