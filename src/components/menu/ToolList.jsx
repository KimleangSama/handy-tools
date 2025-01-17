import { IoIosKey, IoIosLink } from "react-icons/io";
import { IoQrCodeOutline } from "react-icons/io5";
import { VscSymbolString } from "react-icons/vsc";
import { IoIosColorPalette } from "react-icons/io";
import { LuFileCode } from "react-icons/lu";

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
            {
                leading: <VscSymbolString className="text-gray-400" size={18} />,
                title: "Slugify",
                url: "slugify",
            },
            {
                leading: <LuFileCode size={18} />,
                title: "Base64 Encoder/Decoder",
                url: "base64-encode-decode",
            }
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
            {
                leading: <IoIosColorPalette size={18} />,
                title: "Color Converter",
                url: "color-converter",
            }
        ],
    },
];