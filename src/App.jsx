import React, { useState } from "react";
import "./styles.css";  // Import the CSS file

const songs = [
  { name: "Aasa Kooda", file: "music/AasaKooda.mp3", cover: "covers/AasaKooda.jpg" },
  { name: "Adangaatha Asuran", file: "music/AdangaathaAsuran.mp3", cover: "covers/AdangaathaAsuran.jpg" },
  { name: "Chillanjirukkiye", file: "music/Chillanjirukkiye.mp3", cover: "covers/Chillanjirukkiye.jpg" },
  { name: "Hey Minnale", file: "music/HeyMinnale.mp3", cover: "covers/HeyMinnale.jpg" },
  { name: "Kanave", file: "music/Kanave.mp3", cover: "covers/Kanave.jpg" },
  { name: "Kanimaa", file: "music/Kanimaa.mp3", cover: "covers/Kanimaa.jpg" },
  { name: "Kannadi Poove", file: "music/KannadiPoove.mp3", cover: "covers/KannadiPoove.jpg" },
  { name: "Rise Of Dragon", file: "music/RiseOfDragon.mp3", cover: "covers/RiseOfDragon.jpg" },
  { name: "Thatha Vararu", file: "music/ThathaVasthaade.mp3", cover: "covers/ThathaVasthaade.jpg" },
  { name: "Uyirey", file: "music/Uyirey.mp3", cover: "covers/Uyirey.jpg" }
];

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [likedSongs, setLikedSongs] = useState([]);

  const playSong = (file) => setCurrentSong(file);
  const toggleLike = (song) => {
    setLikedSongs((prev) =>
      prev.includes(song) ? prev.filter((s) => s !== song) : [...prev, song]
    );
  };

  return (
    <div className="container">
      <h1 className="title">🎵 Music App</h1>
      <h2 className="section-title">All Songs</h2>
      <div className="grid">
        {songs.map((song, index) => (
          <div key={index} className="card">
            <img src={song.cover} alt={song.name} className="cover" />
            <h3 className="song-title">{song.name}</h3>
            <button onClick={() => playSong(song.file)} className="play-button">▶ Play</button>
            <button onClick={() => toggleLike(song)}
              className={likedSongs.includes(song) ? "unlike-button" : "like-button"}>
              {likedSongs.includes(song) ? "💔 Unlike" : "❤ Like"}
            </button>
          </div>
        ))}
      </div>
      
      {currentSong && (
        <div className="now-playing">
          <h2>Now Playing</h2>
          <audio controls autoPlay src={currentSong} className="audio"></audio>
        </div>
      )}
      
      <h2 className="section-title">❤ Liked Songs</h2>
      {likedSongs.length > 0 ? (
        <div className="liked-container">
          {likedSongs.map((song, index) => (
            <div key={index} className="liked-card">
              <h4>{song.name}</h4>
              <button onClick={() => toggleLike(song)} className="unlike-button">💔 Remove</button>
            </div>
          ))}
        </div>
      ) : <p className="no-liked">No liked songs yet.</p>}
    </div>
  );
}

export default App;
