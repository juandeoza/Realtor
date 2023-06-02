import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  function onChange(e) {
    // console.log(e.target.value);
    setFormData((previus) => ({
      ...previus,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            src="https://media.istockphoto.com/id/1335296835/es/foto/de-cerca-se-centran-en-las-llaves-mujer-sonriente-agente-de-bienes-ra%C3%ADces-que-vende-apartamento.jpg?s=1024x1024&w=is&k=20&c=psonyxORJ6CsUayk0Yts7ELaYTPsFTvjMRjdxpG4Wwo="
            alt="llave"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="mb-6 w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="  w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-3 text-xl cursor-pointer  "
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="  flex justify-between flex-wrap  whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-1">
                Don't have a account ?
                <Link
                  to="/sign-up"
                  className="text-red-600  hover:text-green-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600  hover:text-green-700 transition duration-200 ease-in-out"
                >
                  Forgot password
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 text-sm rounded shadow-md hover:bg-blue-700 transition duration-150  hover:shadow-lg active:bg-blue-800"
            >
              SIGN IN
            </button>
          </form>
          <div className=' flex items-center my-2 before:border-t  before:flex-1  before:border-gray-400 after:border-t  after:flex-1  after:border-gray-400 '>
            <p
              className="text-center font-semibold mx-4"
            >
              OR
            </p>
          </div>
          <OAuth/>
        </div>
      </div>
    </section>
  );
}
