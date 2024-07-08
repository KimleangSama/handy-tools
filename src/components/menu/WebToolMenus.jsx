import { useState } from "react";
import MenuItem from "./MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { ToolList } from "./ToolList.jsx";


const WebToolMenus = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return (
        <div className="cursor-pointer py-2">
            <div className="flex justify-between gap-3 items-center p-3"
                onClick={_ => setIsCollapsed(!isCollapsed)}>
                <h3 className="text-sm text-gray-300">Web</h3>
                {isCollapsed ? <IoIosArrowUp className="text-gray-300" /> : <IoIosArrowDown className="text-gray-300" />}
            </div>
            {isCollapsed &&
                <div className="border-l flex flex-col gap-0.5 border-gray-400 ml-3 pl-2">
                    {/* <MenuItem
                        leading={<IoIosLink size={18} />}
                        title={"URL parser"}
                        url={'url-parser'}
                    />
                    <MenuItem
                        leading={<IoIosKey className="text-gray-400" size={18} />}
                        title={"JWT parser"}
                        url={'jwt-parser'}
                    /> */}
                    {ToolList.map((tool, index) => {
                        if (tool.title === "Web") {
                            return tool.tools.map((item, index) => {
                                return (
                                    <MenuItem
                                        leading={item.leading}
                                        title={item.title}
                                        url={item.url}
                                        key={index}
                                    />
                                );
                            });
                        }
                    })}
                </div>
            }
        </div>
    );
}

export default WebToolMenus;