import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  /*
  Escuchamos los eventos del usuario, en este caso, quedamos esperando
  lo que va a escribir, y lo vamos guardando en inputValue
  */
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Para que no se renderice cada que cambiamos el input
    if (inputValue.trim().length <= 1) return; // Si no hay valores o solo hay uno no enviar nada
    /* Tomamos las categories del comp padre y le agregamos el value que ingredamos
    desde el input hijo */

    //  setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue(""); // Resetamos el input luego de un enter
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
