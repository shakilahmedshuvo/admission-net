"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    // const { user, userLogOut } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // handleLogOut function
    const handleLogOut = () => {
        userLogOut()
            .then(result => {
            })
            .catch(error => {
                // console.log(error);
            })
    };

    return (
        <div>

            {/* lg device start */}
            <div className="w-full fixed z-30 top-0 bg-white bg-opacity-95">
                <div className="container mx-auto hidden lg:block ">

                    {/* lg navbar section start */}
                    <div
                        className="grid grid-cols-12 py-1">

                        <div className="col-span-2 flex items-center  justify-center">
                            <Link
                                href={"/"}
                                className="w-[150px] py-2 px-4 rounded-lg">
                                {/* <img
                                    src={logo}
                                    alt="" /> */}
                            </Link>
                        </div>

                        <div
                            className="col-span-10 flex items-center justify-end text-gray-500 font-black">

                            <p
                                className="mx-5 flex items-center">
                                Solutions
                                {/* <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" /> */}
                            </p>
                            <p
                                className="mx-5 flex items-center">
                                Features
                                {/* <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" /> */}
                            </p>
                            <p
                                className="mx-5 flex items-center">
                                Blogs
                                {/* <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" /> */}
                            </p>
                            <p
                                className="mx-5 flex items-center">
                                About
                                {/* <IoIosArrowDown className="ms-2 text-yellow-500 font-extrabold" /> */}
                            </p>

                            {/* conditional rendering for user and login start */}
                            {/* {
                                user ? */}
                            <>
                                {/* dropdown start */}
                                <div
                                    className="dropdown dropdown-end dropdown-hover mx-2">
                                    {/* <img
                                                className="w-12 h-12 rounded-full"
                                                src=
                                                {
                                                    user?.photoURL || defaultImg
                                                }
                                                alt="" /> */}
                                    <ul
                                        tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 flex items-center justify-center font-black bg-slate-50">

                                        <li className="bg-yellow-400 px-3 py-1 text-white rounded-lg mb-1">
                                            Welcome
                                            {/* {user?.displayName} */}
                                        </li>

                                        <li>
                                            <p
                                                onClick={handleLogOut}
                                                className="flex items-center text-base">
                                                Log Out
                                                {/* <FiLogOut
                                                            className="text-xl">
                                                        </FiLogOut> */}
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                                {/* dropdown end */}

                            </>
                            {/* : */}
                            <Link
                                href="/login"
                                className="text-yellow-400 font-bold rounded-lg border-2 border-yellow-400 px-5 py-2 mr-4 hover:text-white hover:bg-yellow-400 cursor-pointer duration-500">
                                Log In
                            </Link>
                            {/* } */}
                        </div>
                        {/* conditional rendering for user and login end */}

                    </div>
                </div>
            </div >
            {/* lg navbar section end */}

            {/* sm device start */}

            <div
                className="lg:hidden block">
                <div
                    className="cursor-pointer grid grid-cols-12 items-center py-1 fixed z-30 bg-white w-full bg-opacity-95">
                    <div
                        onClick={toggleMenu}
                        className="col-span-2 flex items-starts justify-center">
                        {/* <HiMenuAlt2 className="w-9 h-9 text-black ms-1" /> */}
                    </div>
                    <Link
                        href={"/"}
                        className="col-span-8 flex items-center justify-center">
                        {/* <img
                            className="w-[140px]"
                            src={logo}
                            alt="" /> */}
                    </Link>
                    <div className="col-span-2 mr-1">
                        {/* {
                            user ? */}
                        <>
                            {/* dropdown start */}
                            <div
                                className="dropdown dropdown-end dropdown-hover mx-2">
                                {/* <img
                                            className="w-12 h-12 rounded-full"
                                            src=
                                            {
                                                user?.photoURL || defaultImg
                                            }
                                            alt="" /> */}
                                <ul
                                    tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 flex items-center justify-center font-black bg-slate-50">

                                    <li className="bg-yellow-400 px-3 py-1 text-white rounded-lg mb-1">
                                        Welcome
                                        {/* {user?.displayName} */}
                                    </li>

                                    <li>
                                        <p
                                            onClick={handleLogOut}
                                            className="flex items-center text-base">
                                            Log Out
                                            {/* <FiLogOut
                                                        className="text-xl">
                                                    </FiLogOut> */}
                                        </p>
                                    </li>

                                </ul>
                            </div>
                            {/* dropdown end */}

                        </>
                        {/* : */}
                        <> </>
                        {/* } */}
                    </div>
                    <div
                        className={
                            menuOpen ?
                                "fixed top-0 left-0 w-[75%] sm:hidden h-screen p-10 ease-in-out duration-500 bg-gray-800"
                                :
                                "fixed left-[-100%] top-0 p-10 sm:hidden h-screen ease-in-out duration-500"
                        }>
                        {/* cross sine */}
                        <div
                            className="flex w-full items-center justify-between">
                            <div>
                                {/* <Link className="/">
                                    <img
                                        className="w-[138px]"
                                        src={logo}
                                        alt="" />
                                </Link> */}
                            </div>
                            <div
                                onClick={toggleMenu}
                                className="cursor-pointer">
                                {/* <IoMdCloseCircleOutline className="h-6 w-6 text-white" /> */}
                            </div>
                        </div>

                        {/* mobile device menu */}
                        <div
                            className="flex-col py-3 font-medium text-white mt-4">
                            <ul>
                                <li
                                    className="py-3 hover:underline">
                                    <Link
                                        href="/">
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <p>
                                        Solutions
                                    </p>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <p>
                                        Features
                                    </p>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <p>
                                        Blogs
                                    </p>
                                </li>
                                <li
                                    className="py-3 hover:underline">
                                    <p>
                                        About
                                    </p>
                                </li>

                                <div className="mt-6 grid grid-rows-2 gap-4">
                                    <Link
                                        href={"/login"}
                                        className="border-2 border-white rounded-md text-center font-medium py-2 text-sm">
                                        Login
                                    </Link>
                                    <Link
                                        href={"/register"}
                                        className="border-2 border-white rounded-md text-center font-medium py-2 text-sm bg-white text-black">
                                        Register
                                    </Link>
                                </div>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* sm device end */}

        </div >
    );
};

export default Navbar;