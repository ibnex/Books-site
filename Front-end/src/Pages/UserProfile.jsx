import React from 'react';

function UserProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl shadow-gray-700 max-w-md w-full p-6">
        {/* User Profile Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-full ring-2 ring-purple-600"
              src="https://cdn.pixabay.com/photo/2014/04/02/14/11/male-306408_640.png"
              alt="User Profile"
            />
            <h1 className="text-2xl font-semibold text-gray-800">UserName</h1>
          </div>
        </div>

        <hr className="mb-6 border-gray-200" />

        {/* User Details */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">First Name:</span>
            <p className="text-lg text-gray-600">My First Name</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Last Name:</span>
            <p className="text-lg text-gray-600">My Last Name</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-700">Email:</span>
            <p className="text-lg text-gray-600">myemail@example.com</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-1/2 mr-2">
            Logout
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-1/2 ml-2">
            Switch Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;