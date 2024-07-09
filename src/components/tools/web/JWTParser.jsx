import { useEffect, useState } from "react"
import ToolTemplate from "../ToolTemplate"

const decodeJWT = (jwt) => {
    const [header, payload, signature] = jwt.split('.')
    const decodedHeader = JSON.parse(atob(header))
    const decodedPayload = JSON.parse(atob(payload))
    return {
        alg: decodedHeader.alg,
        typ: decodedHeader.typ,
        sub: decodedPayload.sub,
        name: decodedPayload.name,
        iat: decodedPayload.iat,
    }
}

const JWTParser = () => {
    const [jwtValue, setJWTValue] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    const [parsedJWT, setParsedJWT] = useState({})
    const [valid, setValid] = useState(true)
    const handleInputChange = (e) => {
        if (!e.target.value) return
        try {
            const jwt = e.target.value
            setJWTValue(jwt)
            setParsedJWT(decodeJWT(jwt))
            setValid(true)
        } catch (error) {
            setValid(false)
            return
        }
    }
    useEffect(() => {
        try {
            setParsedJWT(decodeJWT(jwtValue))
            setValid(true)
        } catch (error) {
            setValid(false)
            return
        }
    }, [jwtValue])
    return (
        <ToolTemplate
            title={"JWT Parser"}
            subtitle={"Parse and decode your JSON Web Token (jwt) and display its content. Invalid JWTs will be marked as such."}
        >
            <div className="flex flex-col gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-200">JWT to decode:</label>
                    <textarea type="text" className="block w-full p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm"
                        rows={4}
                        value={jwtValue}
                        onChange={handleInputChange}
                    />
                </div>
                <hr className="h-px border-0 bg-gray-500 mx-0.5" />
                <div>
                    {valid ?
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <th colSpan={2} className="text-gray-300 bg-[#333333] text-lg py-2">Header</th>
                                </tr>
                                <tr>
                                    <td className="text-gray-200 py-2">Algorithm</td>
                                    <td className="text-gray-200 py-2">{parsedJWT.alg}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-200 py-2">Type</td>
                                    <td className="text-gray-200 py-2">{parsedJWT.typ}</td>
                                </tr>
                                <tr>
                                    <th colSpan={2} className="text-gray-300 bg-[#333333] text-lg py-2">Payload</th>
                                </tr>
                                <tr>
                                    <td className="text-gray-200 py-2">Subject</td>
                                    <td className="text-gray-200 py-2">{parsedJWT.sub}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-200 py-2">Full Name</td>
                                    <td className="text-gray-200 py-2">{parsedJWT.name}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-200 py-2">Issued At</td>
                                    <td className="text-gray-200 py-2">{new Date(parsedJWT.iat * 1000).toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                        :
                        <div className="text-red-500">Invalid JWT
                        </div>
                    }
                </div>
            </div>
        </ToolTemplate>
    )
}

export default JWTParser