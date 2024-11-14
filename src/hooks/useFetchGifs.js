import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // Con este Hook logramos que no se llame a la funcion
  // cada vez que cambie el estado de la aplicacion.
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
