import { NavLink } from "react-router-dom";

const MenuItem = ({ leading, title, url }) => {
    return (
        <NavLink to={url} className="navlink rounded flex items-center justify-start gap-2 p-2 mr-2.5 hover:bg-[#353535]">
            {leading}
            <div className="text-sm">
                {title}
            </div>
        </NavLink>
    )
}

export default MenuItem;