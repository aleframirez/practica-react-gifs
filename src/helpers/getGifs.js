export const getGifs = async (category) => {
  // Tomamos la url
  const url = `https://api.giphy.com/v1/gifs/search?api_key="API_KEY"&q=${category}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  // Hacemos la peticion a dicha url
  const resp = await fetch(url);
  // Desestructuramos el data que nos llega y lo convertimos en JSON
  const { data = [] } = await resp.json();

  // Tomamos solo los datos que nos interesan
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_width_downsampled.url,
  }));

  console.log(gifs);
  return gifs;
};
