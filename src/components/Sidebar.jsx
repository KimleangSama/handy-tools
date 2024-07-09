import Logo from "./Logo"
import FavToolMenus from "./menu/FavToolMenus"
import MediaToolMenus from "./menu/MediaToolMenus"
import WebToolMenus from "./menu/WebToolMenus"

const Sidebar = () => {
    return (
        <div className="w-72 bg-[#282828]">
            <Logo />
            <div className="h-full">
                <FavToolMenus />
                <WebToolMenus />
                <MediaToolMenus />
            </div>
        </div>
    )
}

export default Sidebar