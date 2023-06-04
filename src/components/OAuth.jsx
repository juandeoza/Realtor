import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export default function OAuth() {
  const navigate = useNavigate();
  function inWhithGoogle() {
    const auth = getAuth();
    const provider =  new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // console.log(user);
    // const docRef = doc( db , 'user' , user.uid );
    const docRef = doc ( db , 'users' , user.uid );
    const docSnap = getDoc(docRef).then((docu)=>{
      // console.log(docu.document.data.value.mapValue.fields.email);
      
    
    // console.log(docSnap);
    // if (!docSnap.exists()) {
      if(!docu._document) {
      setDoc( docRef , {
        name: user.displayName ,
        email: user.email ,
        timeStamp: serverTimestamp() ,
        
      } )

      .then(
        );
      }
    });
    navigate("/");
    // ...
  }).catch((error) => {
    console.log(error);
    // Handle Errors here.
   toast.error('No se ha podido logear con Google');
    // ...
  });
  }

  return (
    <button 
    onClick={inWhithGoogle}
    className="flex items-center justify-center w-full bg-red-700 text-white py-2 text-sm rounded shadow-md hover:bg-red-800 transition duration-150  hover:shadow-lg active:bg-red-900 uppercase">
      <FcGoogle className="mr-2  rounded-full text-2xl" />
      Continue with Google
    </button>
  );
}
