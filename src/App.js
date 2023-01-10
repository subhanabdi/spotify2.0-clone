import React, { useEffect } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';

import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayerContext';
import Login from './components/Login/Login';
import Player from './components/Player/Player';


import { initializeApp } from "firebase/app";



const firebaseConfig = {

  apiKey: "AIzaSyB4TMTBa0Wcp4ZrkAO-c2iE0jfKUU1sHQs",

  authDomain: "spotify-clone-b73ea.firebaseapp.com",

  projectId: "spotify-clone-b73ea",

  storageBucket: "spotify-clone-b73ea.appspot.com",

  messagingSenderId: "23043582562",

  appId: "1:23043582562:web:15cba109234df73ea0bf3b"

};

const app = initializeApp(firebaseConfig);

import './App.css';

// Creating a new instance of Spotify
// It will allow the application to communicate back and forth with Spotify
const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {

    const hash = getTokenFromUrl();

    window.location.hash = ""; // Clear the token from the URL

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      // Get user details
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })

      // Get user playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      })

      // Discover weekly
      spotify.getPlaylist('37i9dQZEVXcLaYCDaGlrd4').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
