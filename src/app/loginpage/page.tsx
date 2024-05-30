import React from 'react';
import Link from 'next/link';

const loginpage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: "url('/images/pic4.jpg')" }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign up to see all jobs and apply on the #1 remote job board</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="username"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="password"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className="text-white font-bold py-2 px-4 rounded-lg w-80 focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: '#3a4b9a' }}
              >
                Sign In
              </button>
              <p className="text-gray-700 mt-2">Not a member yet? <Link href="/signup" className="underline" style={{ color: '#3a4b9a' }}>Sign up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default loginpage