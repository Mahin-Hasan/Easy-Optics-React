import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const {user, googleLogin, githubLogin} = useContext(AuthContext);
    
    const handleSocialLogin = (media) =>{
        media()
        .then(res=>console.log(res))
        .catch(err=>console.error(err))
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                onClick={()=>handleSocialLogin(googleLogin)}
                className="btn btn-neutral btn-sm btn-outline">Google</button>
                <button
                onClick={()=>handleSocialLogin(githubLogin)}
                className="btn btn-neutral btn-sm btn-outline">Github</button>
            </div>
        </>
    );
};

export default SocialLogin;