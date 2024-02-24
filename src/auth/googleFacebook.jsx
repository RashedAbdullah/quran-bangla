import { FaFacebook, FaGoogle } from "react-icons/fa";
import { signInWithGoogle } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const GoogleFacebook = () => {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" mt-5 flex justify-center text-green-600 text-2xl gap-6">
      <div className="cursor-pointer">
        <button onClick={handleSignInWithGoogle}>
          <FaGoogle size="30px" />
        </button>
      </div>
      <div className="cursor-pointer">
        <button>
          <FaFacebook size="30px" />
        </button>
      </div>
    </div>
  );
};

export default GoogleFacebook;
