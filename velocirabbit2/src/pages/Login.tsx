import { useState, ChangeEvent, FormEvent } from 'react'

type LoginFormData = {
  username: string
  password: string
}

const LoginPage: React.FC = () => {
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);

    console.log("wasSubmitted", wasSubmitted);
    console.log("formData", formData);

    try {
      const response = await fetch('http://localhost:80/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors', // Add this line to enable CORS
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log("Success:", data);
      // Handle success (e.g., navigate to another page, show a success message, etc.)
    } catch (error) {
      console.log('Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="username"
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password"
          onChange={handleFormChange}
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;