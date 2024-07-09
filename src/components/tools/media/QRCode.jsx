import { useState, useRef } from "react"
import ToolTemplate from "../ToolTemplate"
import { ChromePicker } from "react-color"
import QRCode from "react-qr-code"

const downloadSVG = () => {
    const svg = document.getElementById('qrCodeSVG');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngFile;
        downloadLink.download = 'downloaded_image.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
};

const QRCodeGen = () => {
    const [value, setValue] = useState('https://www.google.com')
    const [level, setLevel] = useState('L') // ['L', 'M', 'Q', 'H'
    const [foreground, setForeground] = useState('#000000')
    const [background, setBackground] = useState('#ffffff')
    return (
        <ToolTemplate
            title="QR Code Generator"
            subtitle="Generate and download a QR code for a URL (or just plain text), and customize the background and foreground colors."
        >
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-200">Text:</label>
                <input
                    type="text"
                    className="block w-full p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="my-3 flex justify-start gap-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-200">Foreground Color:</label>
                    <ChromePicker
                        styles={{ default: { picker: { boxShadow: 'none' } } }}
                        color={foreground}
                        onChange={(color) => setForeground(color.hex)}
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-200">Background Color:</label>
                    <ChromePicker
                        color={background}
                        onChange={(color) => setBackground(color.hex)}
                    />
                </div>
            </div>
            <div className="my-3 grid grid-cols-3 items-center">
                <label className="w-[200px] text-sm font-medium text-gray-200">Level (Error resistance):</label>
                <select
                    className="w-full cols-span-2 p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="Q">Q</option>
                    <option value="H">H</option>
                </select>
            </div>
            <div className="my-3 mt-5 flex justify-center">
                <span className="p-4 bg-white flex justify-center">
                    <QRCode
                        id="qrCodeSVG"
                        value={value}
                        size={224}
                        bgColor={background}
                        fgColor={foreground}
                        level={level}
                    />
                </span>
            </div>
            <div className="text-center">
                <button onClick={() => { downloadSVG() }}
                    className="px-4 py-2 text-sm font-medium text-gray-50 bg-gray-800 rounded-lg">
                    Download QR Code
                </button>
            </div>
        </ToolTemplate>
    )
}

export default QRCodeGen