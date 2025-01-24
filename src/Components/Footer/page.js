import Link from "next/link"

const Footer = () => {
    return (
        <div className="bg-gray-900 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center ">
                <div className="mb-4 md:mb-0">
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-gray-400 link-hover">Home</Link></li>
                        <li><Link href="/blog" className="text-gray-400 link-hover">Blog</Link></li>
                        <li><Link href="/profile" className="text-gray-400 link-hover">Profile</Link></li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-6 text-gray-400">
                <p>Copyright 2025 - All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer