import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/songs.css';
import { ApiUrl } from '../../Api/ApiUrl';


const Songs = () => {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioPlayer] = useState(new Audio());
    const [loop, setLoop] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [songsPerPage] = useState(5);

    const fetchSongs = async () => {
        try {
            const response = await axios.get(`${ApiUrl}/get/songs/3`);
            setSongs(response?.data?.data);
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    };

    const handleSongSelect = (song) => {
        setCurrentSong(song);
        playSong(song);
    };

    const playSong = (song) => {
        if (song && song.file_id) {
            if (isPlaying) {
                pauseSong();
            }
            audioPlayer.src = song.file_id;
            audioPlayer.play();
            setIsPlaying(true);
        }
    };
    const pauseSong = () => {
        audioPlayer.pause();
        setIsPlaying(false);
    };

    const stopSong = () => {
        if (!audioPlayer.paused || audioPlayer.currentTime > 0) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            audioPlayer.load(); 
            setIsPlaying(false);
        }
    };

    const playNextSong = () => {
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        let nextIndex = currentIndex + 1;
        if (nextIndex >= songs.length) {
            if (loop) {
                nextIndex = 0;
            } else {
                return;
            }
        }
        setCurrentSong(songs[nextIndex]);
        playSong(songs[nextIndex]);
    };

    const playPreviousSong = () => {
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            if (loop) {
                prevIndex = songs.length - 1;
            } else {
                return;
            }
        }
        setCurrentSong(songs[prevIndex]);
        playSong(songs[prevIndex]);
    };
    const handleDownload = (song) => {
        if (song && song.file_id) {
            const anchor = document.createElement('a');
            anchor.href = song.file_id;
            anchor.download = 'song';
            anchor.click();
        } else {
            console.error("Invalid song object or missing file_id");
        }
    };
    const toggleLoop = () => {
        setLoop(!loop);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handlePlay = (song) => {
        if (currentSong && currentSong?.id === song.id) {
            if (isPlaying) {
                pauseSong();
            } else {
                playSong(song);
            }
        } else {
            setCurrentSong(song);
            playSong(song);
        }
    };
    

    useEffect(() => {
        fetchSongs();
        return () => {
            audioPlayer.pause();
            audioPlayer.src = '';
        };
    }, [audioPlayer]);

    const indexOfLastSong = currentPage * songsPerPage;
    const indexOfFirstSong = indexOfLastSong - songsPerPage;
    const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);
    const pageNumbers = Math.ceil(filteredSongs.length / songsPerPage);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className='container mt-3'>
                <div id="viewport">
                    <div className="player-window">
                        <div className="sound-details">
                            <div className="sound-content">
                                <div className="sound-info">
                                    <h2 className="sound-title">{currentSong ? currentSong?.title : "No Sound Searched"}</h2>
                                    <p className="sound-artist">{currentSong ? currentSong?.created_date : "Date"}</p>
                                </div>
                                <img
                                    src="https://watermark.lovepik.com/photo/40022/6761.jpg_wh1200.jpg"
                                    className="sound-image"
                                    alt="Sound"
                                />
                                <div className="sound-controls">
                                    <div className="sound-buttons">
                                        <div className="misc-wrap repeat" onClick={toggleLoop}>
                                            <div className={`fas fa-circle-notch ${loop ? "repeat-icon" : ""}`}  title='Repeat'/>
                                        </div>
                                        <div id="change-wrap" className="back" onClick={playPreviousSong}>
                                            <div className="fas fa-backward" title='Previous' />
                                        </div>
                                        <div className="play-wrap" onClick={isPlaying ? pauseSong : () => playSong(currentSong)}>
                                            <div className={isPlaying ? "pause" : "play"} title='Play' />
                                        </div>
                                        <div id="change-wrap" className="front" onClick={playNextSong}>
                                            <div className="fas fa-forward" title='Next' />
                                        </div>
                                        <div className="misc-wrap stop" onClick={stopSong}>
                                            <div className="fas fa-stop" title='Stop' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-content mt-5">
                        <h2 className="app-title">DOWNLOAD SONGS</h2>
                        <div className="playlist-window">
                            <div className="playlist-header">
                                <form className="search-form">
                                    <div className="field">
                                        <input
                                            placeholder="Search for Songs..."
                                            className="sound-search"
                                            value={searchTerm}
                                            onChange={handleSearch}
                                            required=""
                                        />
                                        <button className="search-button">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <h2 className="playlist-title">Songs Playlist </h2>
                            <div className="playlist-body">
                                <table className="table" style={{ cursor: "pointer" }}>
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Song Name</th>
                                            <th>Currently Playing</th>
                                            <th colSpan={2}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentSongs?.map((song, index) => (
                                            <tr key={song?.id} className={currentSong && currentSong?.id === song?.id ? 'active-song' : ''}>
                                                <td>{index + 1}</td>
                                                <td onClick={() => handleSongSelect(song)}>{song?.title}</td>
                                                <td>{currentSong && currentSong?.id === song?.id ? 'Yes' : 'No'}</td>
                                                {/* <td>
                                                    {currentSong && currentSong?.id === song?.id && isPlaying ? (
                                                        <button onClick={stopSong} className='btn btn-priamry'>
                                                            <i className="fas fa-stop"></i>
                                                        </button>
                                                    ) : (
                                                        <button onClick={() => handlePlay(song)} className='btn btn-priamry' title='Play Song'>
                                                            <i className="fas fa-play"></i>
                                                        </button>
                                                    )}
                                                </td> */}
                                                <td>
                                                    <button onClick={() => handleDownload(song)} className='btn btn-priamry' title='Download Song'>
                                                        <i className="fas fa-download"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <nav>
                                <ul className="pagination">
                                    {Array?.from({ length: pageNumbers })?.map((_, index) => (
                                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                            <button onClick={() => paginate(index + 1)} className="page-link">
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Songs;