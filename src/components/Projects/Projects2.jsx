import "./Projects.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Projects2 = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="flex items-center lg:flex-row flex-col-reverse justify-between gap-10 my-10">
            <div data-aos="fade-right">
                <div className="img-container img2 rounded-lg">

                </div>
            </div>
            <div className="text-white" data-aos="fade-left">
                <div className="mt-4">
                    <div className="flex items-center">
                        <hr className="inline-block w-6 mr-1 border-[#f3004b]" />
                        <p className="text-lg text-[#bebebe] font-semibold">Full Stack</p>
                    </div>
                    <h1 className="text-3xl font-semibold mt-3">TOY HOUSE FOR KIDS</h1>
                    <p className="font-semibold text-lg mt-2">It has a number of private routes, including displaying all data from the database,
                        loading user-specific data, the ability to modify that specific data.</p>
                    <p className="font-semibold mt-2 text-[#f3004b] text-xl underline">Used Technologies Are:</p>
                    <div className="flex mt-1 gap-3 flex-wrap mb-5">
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">HTML</p>
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">CSS</p>
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">Tailwind</p>
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">Javascript</p>
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">ReactJs</p>
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">NodeJS</p>
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">ExpressJs</p>
                        <p className="bg-[#38383838] py-1 px-6 rounded-full">MongoDB</p>
                    </div>
                    <div className="flex lg:gap-5 gap-2">
                        <a href="https://toy-house-open.web.app/" className="bg-[#f3004b] lg:w-auto text-center w-1/3 py-1 lg:px-4 font-semibold hover:bg-white lg:py-2 hover:text-[#f3004b] hover:scale-105 duration-100">Live Site</a>
                        <a href="https://github.com/A2N426/online-shopping-client" className="bg-[#f3004b] lg:w-auto text-center w-1/3 py-1 lg:px-4 font-semibold hover:bg-white lg:py-2 hover:text-[#f3004b] hover:scale-105 duration-100">Github Client</a>
                        <a href="https://github.com/A2N426/online-shopping-server" className="bg-[#f3004b] lg:w-auto text-center w-1/3 py-1 lg:px-4 font-semibold hover:bg-white lg:py-2 hover:text-[#f3004b] hover:scale-105 duration-100">Github Server</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects2;