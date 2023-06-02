import { FcGoogle } from 'react-icons/fc';

export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white py-2 text-sm rounded shadow-md hover:bg-red-800 transition duration-150  hover:shadow-lg active:bg-red-900 uppercase">
      <FcGoogle className="mr-2  rounded-full text-2xl" />
      Continue with Google
    </button>
  );
}
