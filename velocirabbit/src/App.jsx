import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function App() {
  // const navigate = useNavigate();
    const [wasSubmitted, setWasSubmitted] = useState(false)
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
      user: '',
      password: '',
    })
   
    const handleFormChange = (e) => { // may need to debounce/throttle to reduce the frequency of state changes
      setFormData({
        ...formData, // should refactor to may what we;re spreading more clear
        [e.target.name]: e.target.value
      })
      console.log ("formData is", formData)
    }

    function ErrorComponent () {
      if (error && wasSubmitted) {
        return (
          <strong className='loginError'>
            Error. Invalid Login Credentials
          </strong>
          )}
      else if (wasSubmitted) {
        return(
        <strong className='loginSuccess'>
          SuckSess, mothafucka
        </strong>
      )}
    }
    const handleLogin = (e) => {
        e.preventDefault();
        setWasSubmitted(true)
    }

    const handleRegister = () => {
      // navigate('/register');
    };

  return (
    <>
      <h1>Login</h1>
      <ErrorComponent />
      <form onSubmit={handleLogin}>
        <input
          type='text'
          name='user'
          value={formData.user}
          placeholder='username'
          onChange={handleFormChange}
        />
        <input
          type='password'
          name='password'
          value={formData.password}
          placeholder='password'
          onChange={handleFormChange}
        />
        <button type='submit' className='button'>
          Login
        </button>
      </form>
      <br />
      <a onClick={handleRegister}> Register</a>
    </>
  )
}

export default App
