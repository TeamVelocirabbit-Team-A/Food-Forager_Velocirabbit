import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { throttle } from 'lodash';

type RegisterFormData = {
		first_name: string
		last_name:  string
    username:  string
    email:     string
    password:  string
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterFormData>({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const throttledHandleFormChange = throttle(handleFormChange, 1000);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:80/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Success:", data);
      if (!data) {
        console.log("Error: ", data)
        throw new Error('Network response was not ok');
      } 
      navigate('/login');
    } catch (error) {
      console.log('Error:', error);
    }
  }


  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            placeholder="First Name"
            onChange={throttledHandleFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            placeholder="Last Name"
            onChange={throttledHandleFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={throttledHandleFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={throttledHandleFormChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;