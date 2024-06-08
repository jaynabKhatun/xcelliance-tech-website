// import { useState } from "react";
// import toast from "react-hot-toast";
// import propTypes from "prop-types";

// const Taginput = () => {
//     const [textInput, setTextInput] = useState("");
//     const [skill, setSkill] = useState([]);


//     // add new tag
//     const addSkill = (e) => {
//         if (e.key === "Enter") {
//             if (skill.length < 5) {
//                 setSkill([...skill, textInput]);
//                 setTextInput("");

//             } else {
//                 toast.error("You can add only 5 skills");
//                 setTextInput("");
//             }

//         }

//     }

//     //handledelete
//     const handleDelete = (i) => {
//         const newSkill = skill.filter((skill, index) => index !== i);
//         setSkill(newSkill);

//     }





//     return (
//         <div className="wrapper">
//             <div className="skills-wrapper">

//                 <input type="text"
//                     name="tags"
//                     value={textInput}
//                     onChange={(e) => setTextInput(e.target.value)}
//                     onKeyDown={addSkill}
//                     className="border"

//                     id="" />

//             </div>
//             {/* skills */}
//             <div className="skills-wrapper  w-2/12   flex gap-4">
//                 {
//                     skill?.map((s, index) => <main key={index} className="skills flex">
//                         <div onClick={() => handleDelete(index)} className="remove-skills  bg-red-600 px-2 text-white mt-2 cursor-pointer">
//                             x
//                         </div>

//                         <div className="skill-tag mt-2 border   px-4 flex justify-center items-center   ">
//                             {s}
//                         </div>
//                     </main>)
//                 }

//             </div>


//         </div>
//     );
// };

// Taginput.propTypes = {
//     skill: propTypes.array.isRequired,
//     setSkill: propTypes.func.isRequired,
// };

// export default Taginput;
import { useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const Taginput = ({ skill, setSkill }) => {
    const [textInput, setTextInput] = useState("");

    // add new tag
    const addSkill = (e) => {
        if (e.key === "Enter") {
            if (skill.length < 5) {
                setSkill([...skill, textInput]);
                setTextInput("");
            } else {
                toast.error("You can add only 5 skills");
                setTextInput("");
            }
        }
    }

    // handle delete
    const handleDelete = (i) => {
        const newSkill = skill.filter((_, index) => index !== i);
        setSkill(newSkill);
    }

    return (
        <div className="wrapper">
            <div className="skills-wrapper">
                <input
                    type="text"
                    name="tags"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    onKeyDown={addSkill}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
            </div>
            {/* skills */}
            <div className="skills-wrapper w-2/12 flex gap-4">
                {
                    skill?.map((s, index) => (
                        <main key={index} className="skills flex">
                            <div
                                onClick={() => handleDelete(index)}
                                className="remove-skills bg-red-600 px-2 text-white mt-2 cursor-pointer"
                            >
                                x
                            </div>
                            <div className="skill-tag mt-2 border px-4 flex justify-center items-center">
                                {s}
                            </div>
                        </main>
                    ))
                }
            </div>
        </div>
    );
};

Taginput.propTypes = {
    skill: PropTypes.array.isRequired,
    setSkill: PropTypes.func.isRequired,
};

export default Taginput;
