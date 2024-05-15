// utils/auth.js
import queryString from 'query-string';

const CLIENT_ID = process.env.NEXT_PUBLIC_OWNER_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPES = ['user-read-private', 'user-read-email', 'user-top-read']; // Add any additional scopes you need

const authorizeSpotify = () => {
    const queryParams = queryString.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: SCOPES.join(' '),
        show_dialog: true
    });

    window.location.href = `https://accounts.spotify.com/authorize?${queryParams}`;
    console.log('authorizeSpotify');
};

export { authorizeSpotify };