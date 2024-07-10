import { useEffect, useState } from "react"
import ToolTemplate from "../ToolTemplate"

const extractURLInfo = (url) => {
    const parser = document.createElement('a')
    parser.href = url
    return {
        protocol: parser.protocol,
        username: parser.username,
        password: parser.password,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
    }
}

const URLParser = () => {
    const [urlToParse, setURLToParse] = useState('https://me:pwd@handy.kkimleang.com:3000/url-parser?key1=value&key2=value2#the-hash');
    const [urlInfo, setURLInfo] = useState(extractURLInfo(urlToParse))
    const [urlSearchParams, setURLSearchParams] = useState([])
    const properties = [
        { title: 'Protocol', key: 'protocol' },
        { title: 'Username', key: 'username' },
        { title: 'Password', key: 'password' },
        { title: 'Hostname', key: 'hostname' },
        { title: 'Port', key: 'port' },
        { title: 'Path', key: 'pathname' },
        { title: 'Params', key: 'search' },
    ]
    const handleInputURLChange = (e) => {
        const url = e.target.value
        setURLToParse(url)
    }
    useEffect(() => {
        try {
            setURLInfo(extractURLInfo(urlToParse))
            setURLSearchParams(new URL(urlToParse).searchParams)
        } catch (error) {
            setURLSearchParams(null)
            return
        }
    }, [urlToParse])
    return (
        <ToolTemplate
            title={"URL Parser"}
            subtitle={"Parse a URL into its separate constituent parts (protocol, origin, params, port, username-password, ...)"}
        >
            <div className="flex flex-col gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-200">Your url to parse:</label>
                    <input type="text" className="block w-full p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm"
                        value={urlToParse}
                        onChange={handleInputURLChange}
                    />
                </div>
                <hr className="h-px border-0 bg-gray-500 mx-0.5" />
                {properties?.map(((property, index) => {
                    return (
                        <div key={index} className="flex items-center">
                            <label className="block w-[110px] text-sm font-medium text-gray-200">{property.title}</label>
                            <input type="text"
                                readOnly
                                className="block w-full p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm disabled"
                                value={urlInfo[property.key]}
                            />
                        </div>
                    )
                }))}
                {urlSearchParams != null && urlSearchParams != '' && (
                    <div className="flex items-center ml-2">
                        <label className="block w-[110px] text-sm font-medium text-gray-200">Detail</label>
                        <div className="block w-full p-2 text-gray-50 border border-gray-400 rounded-lg bg-[#333333] text-sm disabled">
                            {Array.from(urlSearchParams).map(([key, value], index) => {
                                return (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-gray-200">{key}</span>
                                        <span className="text-gray-400">=</span>
                                        <span className="text-gray-200">{value}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </ToolTemplate>
    )
}

export default URLParser