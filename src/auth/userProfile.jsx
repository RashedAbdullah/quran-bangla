import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const hanldeSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading)
    return (
      <div className="h-screen pt-20 text-center text-textWhite text-3xl">
        <p>Loading your info</p>
      </div>
    );
  return (
    <div className="h-screen pt-20 text-center text-textWhite">
      <div>
        <div>Welcome, {user.email}</div>
        <button
          onClick={hanldeSignOut}
          className="text-textWhite text-2xl hover:bg-red-500 px-10 py-2 rounded transition duration-200 mt-5"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
