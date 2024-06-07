import { useState } from "react";
import toast from "react-hot-toast";

const Taginput = () => {
    const [textInput, setTextInput] = useState("");
    const [skill, setSkill] = useState([]);


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

    //handledelete
    const handleDelete = (i) => {
        const newSkill = skill.filter((skill, index) => index !== i);
        setSkill(newSkill);

    }





    return (
        <div className="wrapper">
            <div className="skills-wrapper">

                <input type="text"
                
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    onKeyDown={addSkill}
                    className="border"
                    
                    id="" />

            </div>
            {/* skills */}
            <div className="skills-wrapper">
                {
                    skill?.map((s, index) => <main key={index} className="skills flex">
                        <div onClick={() => handleDelete(index)} className="remove-skills bg-red-600 px-2 text-white mt-2 cursor-pointer">
                            x
                        </div>

                        <div className="skill-tag">
                            {s}
                        </div>
                    </main>)
                }

            </div>


        </div>
    );
};

export default Taginput;