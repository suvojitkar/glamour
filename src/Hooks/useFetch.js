import { useEffect, useState } from "react"

const useFetch = (props) => {
    const { url, defaultValue = [] } = props;
    const [apiResp, setApiResp] = useState(defaultValue);

    useEffect(() => {
        const getApiResponse = async () => {
            let resp = defaultValue;
            try {
                const respPromise = await fetch(url);
                resp = await respPromise.json();
            } catch {
                resp = defaultValue;
            } finally {
                setApiResp(resp);
            }
        }
        getApiResponse(url);
    }, [url])

    return {apiResp}
}

export default useFetch;
