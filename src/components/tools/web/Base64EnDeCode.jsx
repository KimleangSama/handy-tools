import { useEffect, useState } from "react"
import ToolTemplate from "../ToolTemplate"

const Base64EnDeCode = () => {
    const [stringToEncode, setStringToEncode] = useState("")
    const [stringToDecode, setStringToDecode] = useState("")
    const [encodedString, setEncodedString] = useState("")
    const [decodedString, setDecodedString] = useState("")
    const handleStringToEncodeChange = (e) => {
        setStringToEncode(e.target.value)
        setEncodedString(btoa(e.target.value))
    }
    return (
        <ToolTemplate
            title={"Base64 Encoder/Decoder"}
            subtitle={"Simply encode and decode strings into their base64 representation."}
        >
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-300">String to base64</h3>
                    <p className="text-gray-300">Enter the string you want to encode into base64.</p>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded bg-gray-400"
                        value={stringToEncode}
                        onChange={handleStringToEncodeChange}
                        placeholder="Enter the string to encode..."
                    />
                    <textarea
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded bg-gray-400"
                        value={encodedString}
                        placeholder="Encoded string..."
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-300">Base64 to string</h3>
                    <p className="text-gray-300">Enter the base64 string you want to decode.</p>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded bg-gray-400"
                        value={stringToDecode}
                        onChange={(e) => {
                            setStringToDecode(e.target.value)
                            setDecodedString(atob(e.target.value))
                        }}
                        placeholder="Enter the base64 string to decode..."
                    />
                    <textarea
                        readOnly
                        className="w-full p-2 border border-gray-300 rounded bg-gray-400"
                        value={decodedString}
                        placeholder="Decoded string..."
                    />
                </div>
            </div>
        </ToolTemplate>
    )
}

export default Base64EnDeCode