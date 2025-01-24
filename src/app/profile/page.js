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
                    <h1 className="md:text-5xl text-3xl text-white uppercase">To continue</h1>
                    <p className="md:text-4xl text-2xl text-white uppercase mt-2">You Have to login first</p>
                    <button className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-md mt-4"><LoginLink>Login</LoginLink></button>
                </div>
            </div>
        )
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="max-w-lg bg-white mx-auto rounded-md text-center p-10 md:p-16">
                <h1 className="text-2xl md:text-3xl font-semibold">Welcome <span className="text-sky-500">{user?.family_name}</span></h1>
                <p>{user?.email}</p>
            </div>
        </div>
    );
};

export default Profile;