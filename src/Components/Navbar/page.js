import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";




const Navbar = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return (
        <div className="bg-indigo-500 px-2 md:px-4">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-sky-500 text-white rounded-md z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            {
                                isUserAuthenticated ?
                                    <li><LogoutLink>Log out</LogoutLink></li>
                                    :
                                    <li><LoginLink>Login</LoginLink></li>
                            }
                        </ul>
                    </div>
                    <h1 className="text-2xl font-semibold text-white">Blog</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-4 font-medium px-1">
                        <Link href="/"><li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500">Home</li></Link>
                        <Link href="/profile"><li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500">Profile</li></Link>
                        {
                            !isUserAuthenticated && <li className="font-medium text-white px-4 py-[6px] rounded-md bg-sky-500"><LoginLink>Login</LoginLink></li>
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        isUserAuthenticated ?
                            <LogoutLink><button className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-md">Log out</button></LogoutLink>
                            :
                            <RegisterLink><button className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-md">Sign up</button></RegisterLink>
                    }
                </div>
            </div>
        </div>
    )
}
export default Navbar;