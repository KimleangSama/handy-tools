import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { ToolList } from "./ToolList";
import { useFavoriteToolStore } from "../../store/useFavoriteTool";

const countFavTools = () => {
    let count = 0;
    ToolList.map((tool, _) => {
        return tool.tools.map((item, index) => {
            if (localStorage.getItem(item.title) === 'true') {
                count++;
            }
        });
    });
    return count;
}

const FavToolMenus = () => {
    const [count, setCount] = useState(countFavTools())
    const [isCollapsed, setIsCollapsed] = useState(false)
    const { isFavoriteTriggered, setIsFavoriteTriggered } = useFavoriteToolStore();
    useEffect(() => {
        setCount(countFavTools());
    }, [isCollapsed, setIsCollapsed, isFavoriteTriggered, setIsFavoriteTriggered]);
    return (
        <div className="cursor-pointer py-2">
            <div className="flex justify-between gap-3 items-center p-3"
                onClick={_ => setIsCollapsed(!isCollapsed)}>
                <h3 className="text-sm text-gray-300">Fav Tools</h3>
                {isCollapsed ? <IoIosArrowUp className="text-gray-300" /> : <IoIosArrowDown className="text-gray-300" />}
            </div>
            {isCollapsed &&
                (
                    count > 0 ?
                        <div className="border-l flex flex-col gap-0.5 border-gray-400 ml-3 pl-2">
                            {ToolList.map((tool, _) => {
                                return tool.tools.map((item, index) => {
                                    if (localStorage.getItem(item.title) === 'true') {
                                        return (
                                            <MenuItem
                                                leading={item.leading}
                                                title={item.title}
                                                url={item.url}
                                                key={index}
                                            />
                                        );
                                    }
                                });
                            })}
                        </div>
                        :
                        <div>
                            <div className="flex justify-center gap-3 items-center">
                                <h3 className="text-xs text-gray-400">No Fav Tools</h3>
                            </div>
                        </div>
                )
            }
        </div>
    );
}

export default FavToolMenus;