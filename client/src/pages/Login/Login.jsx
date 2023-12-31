// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from '../Login/Login.module.css'
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();
    
//     try {
//         const response = await axios.post('http://localhost:3000/api/v1/adminLogin', { email, password }); // Replace '/login' with your actual backend API endpoint
//         if (response.data.success) {
//           // Authentication successful, redirect to admin page
//           console.log('Login successful:', response.data.authtoken);
//           localStorage.setItem('authtoken', response.data.authtoken);
//         //   window.location.href = '/admin';
//             if(response.ok)
//             {
//                 alert("admin hello")
//             }
//             else{
//                 alert("unsuccessful")
//             }
//         }
//       } catch (error) {
//         alert(error);
//         setError('An error occurred during login');
//       }
      
//   };

//   return (
//     <div className={styles.main}>
//     <form className={styles.loginForm} onSubmit={handleLogin}>
//       <div className={styles.formgroup}>
//         <label htmlFor="email">Email address</label>
//         <input type="email" className={styles.formcontrol} id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//       </div>
//       <div className={styles.formgroup}>
//         <label htmlFor="password">Password</label>
//         <input type="password" className={styles.formcontrol} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       {error && <p className={styles.error}>{error}</p>}
//       <button type="submit" className={styles.btn}>Submit</button>
//     </form>
//     </div>

//   );
// };

// export default Login;






//chatgpt
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/adminLogin', { email, password });

      if (response.status === 200) {
        // Assuming successful login returns a token or user information
        const { user } = response.data; // Adjust this based on the actual response structure

        // Store the token in localStorage or use it as needed for authentication
        localStorage.setItem('token', user.token);

        // Redirect to admin page or perform any necessary action upon successful login
        alert('Login successful!');
        //login to admin portal
        window.location.replace("http://localhost:3001/admin");
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className={styles.main}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.formgroup}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={styles.formcontrol}
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={styles.formcontrol}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;