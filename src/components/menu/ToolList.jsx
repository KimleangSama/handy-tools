import { IoIosKey, IoIosLink } from "react-icons/io";
import { IoQrCodeOutline } from "react-icons/io5";

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
        title: "Images & Videos",
        tools: [
            {
                leading: <IoQrCodeOutline size={18} />,
                title: "QR Code Generator",
                url: "qr-code",
            },
        ],
    },
];