import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Registration() {
    const [allUsers, setAllUsers] = useState(
        () => {
            const storedData = localStorage.getItem("UserInfo");
            return storedData ? JSON.parse(storedData) : [];
        }
    );

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setAllUsers((prevUser) => {
            const updatedUser = [...(prevUser || []), userInfo];
            localStorage.setItem("UserInfo", JSON.stringify(updatedUser));

            setUserInfo({
                name: "",
                email: "",
                password: ""
            })

            navigate("/")

            //return updatedUser;
        })

    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input type="text" name="name" id="name" value={userInfo.name} placeholder="Enter Your Name Here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>


                                <button type="submit" className="bg-orange-700 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?
                                    <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );

}

export default Registration;