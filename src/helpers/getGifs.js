
export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=YrxRD0sRf7PV44sT1Yd2IKPIhD1UhxD8`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const imgs = data.map( gif => {
        return {
            title: gif.title,
            id: gif.id,
            url: gif.images.downsized_medium.url,
        }
    });
    return imgs;
}