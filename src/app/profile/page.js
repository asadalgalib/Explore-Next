import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();

    console.log(user, isUserAuthenticated);

    if (!isUserAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-5xl text-white uppercase">To continue</h1>
                    <p className="text-4xl text-white uppercase mt-2">You Have to login first</p>
                    <button className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-md mt-4"><LoginLink>Login</LoginLink></button>
                </div>
            </div>
        )
    }
    return (
        <div className="">
            <h1>This is profile</h1>
        </div>
    );
};

export default Profile;