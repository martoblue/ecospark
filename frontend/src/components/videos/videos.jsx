import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';

function VideosComponent() {
  const [videos, setVideos] = useState([]);
  const [loadedFromStorage, setLoadedFromStorage] = useState(false);
  const API_KEY = 'AIzaSyCbMCGYRSpW41hFTJllSvn31GnAFwbVUME'; // Reemplaza con tu propia API Key
  const searchTerms = 'clean energy project home-project proyecto solar eolica';

  useEffect(() => {
    const fetchCustomEcoVideos = async () => {
      try {
        const storedVideos = localStorage.getItem('ecoVideos');
        
        if (storedVideos) {
          setVideos(JSON.parse(storedVideos));
          setLoadedFromStorage(true); // Indica que los videos se cargaron desde el almacenamiento local
        } else {
          if (!loadedFromStorage) { // Evita hacer más solicitudes si ya se cargaron los videos desde el almacenamiento local
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerms}&key=${API_KEY}`);
            
            if (!response.ok) {
              throw new Error('Error al obtener datos de los videos desde la API');
            }

            const data = await response.json();

            console.log('Datos de los videos ecológicos:', data); // Mostrar datos de los videos en consola

            if (data.items && data.items.length > 0) {
              setVideos(data.items);
              localStorage.setItem('ecoVideos', JSON.stringify(data.items));
            } else {
              console.log('No se encontraron videos ecológicos');
            }
          }
        }
      } catch (error) {
        console.error('Error fetching videos data:', error);
      }
    };

    fetchCustomEcoVideos();
  }, [API_KEY, loadedFromStorage, searchTerms]);

  return (
    <div style={{ paddingTop: '4em' }}>
      <Navbar /> {/* Esta línea agrega tu Navbar */}
      <div className="youtube-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, calc(31.111% - 20px))', gap: '30px', backgroundColor: 'white', padding: '20px', margin: '0 auto !important', justifyContent: 'space-around' }}>
        {/* Resto de tu código... */}
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id.videoId} style={{ position: 'relative', width: '100%', paddingBottom: '50.625%' }}>
              <iframe
                title={video.snippet.title}
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3 style={{ margin: '0', fontSize: '14px' }}>{video.snippet.title}</h3>
            </div>
          ))
        ) : (
          <p>Cargando videos...</p>
        )}
      </div>
    </div>
  );
}

export default VideosComponent;