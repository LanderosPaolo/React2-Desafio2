import Context from '../Context';
import { useContext } from 'react';
import '../assets/css/galeria.css';
import Deleted from '../components/Delete';

export default function Favoritos() {
  const { fotografias, setFotografias } = useContext(Context);

  const eliminarFavoritos = (id) => {
    const fotoIndex = fotografias.findIndex((foto) => foto.id === id);
    fotografias[fotoIndex].liked = !fotografias[fotoIndex].liked;
    setFotografias([...fotografias]);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-5">
        {fotografias.filter((foto) => foto.liked).map((fotos) => (
          <div key={fotos.id} className='foto' style={{backgroundImage:`url(${fotos.src.tiny})`}} >
            <Deleted filled={(fotos.liked).toString()} onClick={() => eliminarFavoritos(fotos.id)} />
          <p>{fotos.alt}</p>
        </div>
        ))}
      </div>
    </div>
  );
}
