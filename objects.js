var playlist = new Object({keys: '0'});

funciton updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}
