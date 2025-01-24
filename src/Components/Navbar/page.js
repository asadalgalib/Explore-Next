import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import './Navbar.css'

const Navbar = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return (
        <div className="bg-indigo-500 px-4 md:px-8 lg:px-20 par">
            <div className="flex flex-col gap-[16px] lg:flex-row items-center justify-between">
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold text-white">Blog</h1>
                </div>
                <div className="flex items-center justify-end">
                    <div className="">
                        <ul className="">
                            <Link href="/"><li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500">Home</li></Link>
                            <Link href="/profile"><li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500">Profile</li></Link>
                            {
                                !isUserAuthenticated && <li className="font-medium text-white px-4 py-2 rounded-md bg-sky-500"><LoginLink>Login</LoginLink></li>
                            }
                            {
                                isUserAuthenticated ?
                                    <LogoutLink><li className="px-4 py-2 bg-sky-500 text-white rounded-md">Log out</li></LogoutLink>
                                    :
                                    <RegisterLink><li className="px-4 py-2 bg-sky-500 text-white rounded-md">Sign up</li></RegisterLink>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;