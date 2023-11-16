import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { user, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                toast.success('User logged in successfully');
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm btn-outline">Google</button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-neutral btn-sm btn-outline">Github</button>
            </div>
        </>
    );
};

export default SocialLogin;