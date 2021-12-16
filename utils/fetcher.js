async function fetcher(url, {token}){
    const header = {
        "Content-Type": "application/json",
        token
    }
    
    const parsedData = await fetch(url, {
        method: "GET",
        headers: new Headers(header),
        credentials: 'same-origin'
    }).then(data => data.json());

    return parsedData;
}

export default fetcher;