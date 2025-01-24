import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import './Navbar.css'

const Navbar = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return (
        <div className="bg-indigo-500 px-4 md:px-8 lg:px-16 py-4">
            <div className=" flex items-center justify-between">
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold text-white">Blog</h1>
                </div>
                <div className="flex items-center gap-4 justify-end">
                    <div className="">
                        <ul className="flex items-center gap-4 font-medium">
                            <Link href="/"><li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500">Home</li></Link>
                            <Link href="/profile"><li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500">Profile</li></Link>
                            {
                                !isUserAuthenticated && <li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500"><LoginLink>Login</LoginLink></li>
                            }
                            {
                                isUserAuthenticated ?
                                    <LogoutLink><button className="px-4 py-[6px] bg-sky-500 text-white rounded-md">Log out</button></LogoutLink>
                                    :
                                    <RegisterLink><button className="px-4 py-[6px] bg-sky-500 text-white rounded-md">Sign up</button></RegisterLink>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;