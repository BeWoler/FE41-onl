import React from 'react';

const SignPage = () => {
  return (
    <div>
      <h2>Sign In / Sign Up</h2>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="button">Sign In</button>
        <button type="button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignPage;