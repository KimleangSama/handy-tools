import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <div className="flex justify-start items-start">
            <Sidebar />
            <div className="flex flex-col w-full h-screen">
                <div className="flex flex-row">
                    <Navbar />
                </div>
                <div className="w-full h-full px-8 py-4 gap-12 flex justify-center">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default App