import React,{useState} from 'react';
import styles from './Signup.module.css'; // If using CSS modules
// import axios from 'axios';

const Signup = () => {
    const[name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    
    //   try {
    //     const response = await fetch.post('https://gdscbackend.vercel.app/authentication/login', { email, password }); // Replace '/login' with your actual backend API endpoint
    //     if (response.data.success) {
    //       // Authentication successful, redirect to admin page
    //       console.log('Login successful:', response.data.authtoken);
    //       localStorage.setItem('authtoken', response.data.authtoken);
    //       window.location.href = '/admin';
    //         if(email===process.env.REACT_APP_EMAIL)
    //             adminhandler();
    //     } else {
    //       setError('Invalid email or password');
    //     }
    //   } catch (error) {
    //     setError('An error occurred during login');
    //   }
      
    // };
    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
          const response = await fetch('http://localhost:3000/api/v1/createAdmin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });
    
          const data = await response.json();
          console.log(data)
    
          if (response.ok) {
            // Admin creation successful, you can redirect or perform further actions here
            console.log('Admin creation successful');
          } else {
            // Admin creation failed, display error message
            console.log(e);
            setError(data.error || 'Admin creation failed');
          }
        } catch (error) {
          console.error('Error during admin signup:', error);
        }
      };
      
       
    
    
    return (
      <div className={styles.main}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.formgroup}>
          <label htmlFor="Name">Name</label>
          <input type="name" className={styles.formcontrol} id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email">Email address</label>
          <input type="email" className={styles.formcontrol} id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password">Password</label>
          <input type="password" className={styles.formcontrol} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
      </div>
    );
  };

export default Signup
 