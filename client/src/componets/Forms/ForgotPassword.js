import React,{useState} from 'react';
import axios from "axios";
import styles from "./styles.module.css";
// import { put } from "../../../../server/routes/uploadcrop";

const ForgotPassword = () => {
	// const [email, setEmail] = useState("");
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
	if(user.email && user.password )
	{
		// alert("valid")
		axios.put("http://localhost:9002/register/",user)
		.then ( res => {
			alert(res.data.message)
			
		})
	}else{
		alert("Fill up complete form")

	}
};
	return (
		<div className={styles.container}>
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Email</h1>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={handlechange}
					value={user.email}
					required
					className={styles.input}
				/>
				<h1>Password</h1>
				<input
					type="password"
					placeholder="password"
					name="password"
					onChange={handlechange}
					value={user.password}
					required
					className={styles.input}
				/>
				{error && <div className={styles.error_msg}>{error}</div>}
				{msg && <div className={styles.success_msg}>{msg}</div>}
				<button type="submit" className={styles.green_btn}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ForgotPassword;