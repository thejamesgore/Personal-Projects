export const authEndpoint = "https://accounts.spotify.com/authorize";
export const redirectUri = "http://localhost:3000/";
export const clientId = "6949ff5463d648b5adc4aaf83e84c1d5";
export const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`

export const getTokenFromUrl = () => {
    const baseHash = window.location.hash
    const stringParse = baseHash.substring(1)
    const splitParse = stringParse.split('&')
    const accessToken = splitParse.reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },  {})
    
    return accessToken
}

