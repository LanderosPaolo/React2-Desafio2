import "../assets/css/galeria.css";
import React, { useContext } from "react";
import Context from "../Context";
import Heart from "./Heart";

export default function Home() {
  const {fotografias, setFotografias} = useContext(Context);

  const favoritosClick = (id) => {
    const fotoIndex = fotografias.findIndex((foto) => foto.id === id);
    fotografias[fotoIndex].liked = !fotografias[fotoIndex].liked;
    setFotografias([...fotografias]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotografias.map(fotos => (
        <div key={fotos.id} className='foto' style={{backgroundImage:`url(${fotos.src.tiny})`}} >
          <Heart filled={(fotos.liked)} onClick={() => favoritosClick(fotos.id)} />
          <p>{fotos.alt}</p>
        </div>
      ))}
    </div>
  );
}
