import React from 'react';

const VerificationPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div> {/* Background overlay with blur */}
      <div className="bg-white w-64 p-8 rounded-lg z-10">
        <h2 className="text-2xl font-bold mb-4">Email Verification Required</h2>
        <p className="text-lg">To complete the sign-up process, please check your email for the verification link. Once verified, you'll be ready to log in!</p>
      </div>
    </div>
  );
};

export default VerificationPopup;
