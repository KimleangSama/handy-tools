import { useState } from "react"
import ToolTemplate from "../ToolTemplate"
import slugify from 'react-slugify';


const Slugify = () => {
    const [toSlug, setToSlug] = useState('Hello World');
    const [slugified, setSlugified] = useState('hello-world');
    const [isCopy, setIsCopy] = useState(false);
    const handleSlugify = (str) => {
        return slugify(str);
    }
    return (
        <ToolTemplate
            title={"Slugify"}
            subtitle={"Make a string url, filename and id safe."}
        >
            <div className="flex flex-col gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-200">Your string to slugify:</label>
                    <input type="text" className="block w-full p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm"
                        value={toSlug}
                        onChange={(e) => {
                            setToSlug(e.target.value);
                            setIsCopy(false);
                            setSlugified(handleSlugify(e.target.value));
                        }}
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-200">Your slug:</label>
                    <input type="text" className="block w-full p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm"
                        readOnly
                        value={slugified}
                    />
                </div>
                <div>
                    <button
                        className="px-4 py-2 text-sm font-medium text-gray-50 bg-[#333333] border border-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
                        onClick={() => {
                            navigator.clipboard.writeText(slugified);
                            setIsCopy(true);
                        }}>
                        {isCopy ? 'Copied!' : 'Copy Slug'}
                    </button>
                </div>
            </div>
        </ToolTemplate>
    )
}

export default Slugify