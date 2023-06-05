import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function onLogAuth() {
    auth.signOut();
    navigate('/')
  }

  return (
    <>
      <section className=" max-w-6xl mx-auto flex justify-center  items-center flex-col ">
        <h1 className="text-3xl text-center mt-6 font-bold">My profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3 ">
          <form>
            {/* nombre input */}
            <input
              type="text"
              name=""
              id="name"
              value={name}
              disabled
              className=" mb-6 w-full px-4 py-2 text-xl text-gray-700  bg-white
            border border-gray-300 rounded transition ease-in-out "
            />
            {/* email input */}

            <input
              type="email"
              name=""
              id="email"
              value={email}
              disabled
              className=" mb-6 w-full px-4 py-2 text-xl text-gray-700  bg-white
            border border-gray-300 rounded transition ease-in-out "
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb6">
              <p className="flex items-center ">
                ¿Quiere cambiar su nombre ?{' '}
                <span className="text-red-600  hover:text-green-700 transition duration-200 ease-in-out ml-2 cursor-pointer">
                  Edit
                </span>{' '}
              </p>
              <p
                onClick={onLogAuth}
                className="text-blue-600  hover:text-green-700 transition duration-200 ease-in-out cursor-pointer "
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
