import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth,  sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: '',
    
  });
  const { email } = formData;

  const navigate = useNavigate();

 async function onSubmit(e) {
    e.preventDefault();
  try {

    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    
      
      toast.success('email enviado!')
       navigate('/sign-in');
    
  }
      catch(error)  {
        // console.log(error)
        toast.error('email incorrecto', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        // ..
      }
  }

  function onChange(e) {
    // console.log(e.target.value);
    setFormData((previus) => ({
      ...previus,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img
            src="https://media.istockphoto.com/id/1335296835/es/foto/de-cerca-se-centran-en-las-llaves-mujer-sonriente-agente-de-bienes-ra%C3%ADces-que-vende-apartamento.jpg?s=1024x1024&w=is&k=20&c=psonyxORJ6CsUayk0Yts7ELaYTPsFTvjMRjdxpG4Wwo="
            alt="llave"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit} >
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              className="mb-10 w-full px-4 py-2 text-lg text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            
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
                  to="/sign-in"
                  className="text-blue-600  hover:text-green-700 transition duration-200 ease-in-out"
                >
                  Sign In
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 text-sm rounded shadow-md hover:bg-blue-700 transition duration-150  hover:shadow-lg active:bg-blue-800"
            >
              SEND RESET EMAIL
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
