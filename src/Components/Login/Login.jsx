
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageFb from '../../assets/icons8-facebook-logo-64.png';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [emailOrPhoneError, setEmailOrPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Email validation using regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone number validation (simple 10-digit validation)
  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleLogin = () => {
    let valid = true;

    // Check if email or phone number is valid
    if (!emailOrPhone.trim()) {
      setEmailOrPhoneError('Please enter your email or phone number.');
      valid = false;
    } else if (!isValidEmail(emailOrPhone) && !isValidPhone(emailOrPhone)) {
      setEmailOrPhoneError('Please enter a valid email or phone number.');
      valid = false;
    } else {
      setEmailOrPhoneError('');
    }

    // Check if password is provided
    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      navigate('/home');
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      {/* Logo */}
      <div className="lg:mb-16 mb-24">
        <img src={ImageFb} alt="Facebook Logo" className="lg:w-16 lg:h-16 w-20 h-20 mx-auto" />
      </div>

      {/* Login Box */}
      <div className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Email or phone number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="font-medium border border-solid border-gray-400 px-4 py-4 rounded-xl bg-white w-full mb-3"
        />
        {emailOrPhoneError && <p className="text-red-600 text-sm mb-2">{emailOrPhoneError}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="font-medium border border-solid border-gray-400 px-4 py-4 rounded-xl bg-white w-full mb-3"
        />
        {passwordError && <p className="text-red-600 text-sm mb-2">{passwordError}</p>}

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white text-md font-medium rounded-full py-3 w-full mt-2"
        >
          Log in
        </button>

        <p className="text-center text-md font-semibold mt-3">Forgot Password?</p>

        <button className="text-md font-medium text-blue-600 text-center py-3 rounded-full border border-solid border-blue-700 w-full mt-20 sm:mt-28">
          Create new account
        </button>
      </div>
    </div>
  );
};

export default Login;
