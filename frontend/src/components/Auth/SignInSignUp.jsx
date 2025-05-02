
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useState } from 'react';

export default function SignInSignUp() {
  const [mode, setMode] = useState('signin');

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 pt-20">
      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setMode('signin')}
          className={`px-4 py-2 rounded ${
            mode === 'signin' ? 'bg-blue-500 text-white' : 'bg-white border'
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setMode('signup')}
          className={`px-4 py-2 rounded ${
            mode === 'signup' ? 'bg-blue-500 text-white' : 'bg-white border'
          }`}
        >
          Sign Up
        </button>
      </div>
      {mode === 'signin' ? (
        <SignIn routing="path" path="/signin" />
      ) : (
        <SignUp routing="path" path="/signin" />
      )}
    </div>
  );
}
