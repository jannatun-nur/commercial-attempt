import { TfiEmail } from "react-icons/tfi";
import { FcGlobe } from "react-icons/fc";
import { SiMessenger } from "react-icons/si";

const Contact = () => {
    return (
        <div>
            

            {/*  */}
            <div className="lg:flex lg:justify-around grid grid-cols-1 ">
                <div className="bg-gray-200 shadow-2xl w-full  lg:w-3/12 text-black h-[300px] text-center p-2 rounded-md">
                    <p><TfiEmail /></p>
            </div>

            <div className="bg-gray-200 shadow-2xl w-full  lg:w-3/12 text-black h-[300px] text-center p-2 rounded-md">
                    <p><FcGlobe /></p>
            </div>

            <div className="bg-gray-200 shadow-2xl w-full  lg:w-3/12 text-black h-[300px] text-center p-2 rounded-md">
                   <p><SiMessenger /></p>
            </div>
            </div>
        </div>
    );
};

export default Contact;