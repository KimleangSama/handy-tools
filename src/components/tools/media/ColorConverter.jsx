import { ChromePicker } from "react-color"
import ToolTemplate from "../ToolTemplate"
import { useState } from "react"

const ColorConverter = () => {
    const [color, setColor] = useState("#FFFFFF")
    const [fullColor, setFullColor] = useState(null)
    return (
        <ToolTemplate
            title="Color Converter"
            subtitle="Convert color between the different formats (hex, rgb, hsl and css name)."
        >
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-200">Color Picker:</label>
                <div className={`my-2 text-center rounded-md text-md`} style={{ backgroundColor: color, color: color === "#FFFFFF" ? "#000000" : "#FFFFFF" }}>
                    Color
                </div>
                <div className="text-gray-200">
                    Hex: {color}
                </div>
                <div className="text-gray-200">
                    RGB: {fullColor ? `rgb(${fullColor.rgb.r}, ${fullColor.rgb.g}, ${fullColor.rgb.b})` : ""}
                </div>
                <div className="text-gray-200">
                    HSL: {fullColor ? `hsl(${fullColor.hsl.h}, ${fullColor.hsl.s}%, ${fullColor.hsl.l}%)` : ""}
                </div>
                <div className="text-gray-200 mb-2">
                </div>
                <ChromePicker
                    color={color}
                    onChange={(updatedColor) => {
                        setColor(updatedColor.hex)
                        setFullColor(updatedColor)
                    }}
                />
            </div>
        </ToolTemplate>
    )
}

export default ColorConverter