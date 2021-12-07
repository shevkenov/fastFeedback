async function fetcher(url){
    const parsedData = await fetch(url).then(data => data.json());

    return parsedData;
}

export default fetcher;