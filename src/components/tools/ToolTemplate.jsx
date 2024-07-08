import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { useFavoriteToolStore } from "../../store/useFavoriteTool";

const ToolTemplate = ({ title, subtitle, children }) => {
    const [isFav, setIsFav] = useState(localStorage.getItem(title) === 'true' || false)
    const { setIsFavoriteTriggered } = useFavoriteToolStore();
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <h1 className="text-3xl text-gray-300 pr-1.5 py-1.5 border-b">{title}</h1>
                <button
                    className="text-white"
                    onClick={() => {
                        setIsFav(!isFav)
                        setIsFavoriteTriggered(true)
                        localStorage.setItem(title, !isFav)
                    }}
                >
                    {isFav ?
                        <div className="p-1.5 rounded-full hover:bg-[#24933a]">
                            <IoIosHeart
                                size={20}
                            />
                        </div>
                        :
                        <div className="p-1.5 rounded-full hover:bg-[#24933a]">
                            <IoIosHeartEmpty
                                size={20}
                            />
                        </div>
                    }
                </button>
            </div>
            <h3 className="text-sm text-gray-300">{subtitle}</h3>
            <div className="my-2 p-4 rounded-md bg-[#2e2e2e]">
                {children}
            </div>
        </div>
    )
}

export default ToolTemplate