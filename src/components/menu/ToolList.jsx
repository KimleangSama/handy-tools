import { IoIosKey, IoIosLink } from "react-icons/io";

export const ToolList = [
    {
        title: "Web",
        tools: [
            {
                leading: <IoIosLink size={18} />,
                title: "URL Parser",
                url: "url-parser",
            },
            {
                leading: <IoIosKey className="text-gray-400" size={18} />,
                title: "JWT Parser",
                url: "jwt-parser",
            },
        ],
    },
    {
        title: "Text",
        tools: [
            {
                title: "Text Parser",
                url: "text-parser",
            },
        ],
    },
];