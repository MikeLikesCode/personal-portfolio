//Thanks To Lee Robinson for this way of fetching the data :))
require('dotenv').config();
import fetch from 'isomorphic-unfetch';
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;


const client_id = SPOTIFY_CLIENT_ID;
const client_secret = SPOTIFY_CLIENT_SECRET;
const refresh_token = SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(client_id + ':' + client_secret).toString('base64');

const getAccessToken = async () => {
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + basic,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'grant_type=refresh_token&refresh_token=' + refresh_token
	});
	
	return res.json();
};

export const getNowPlaying = async () => {
	const { access_token } = await getAccessToken();

	return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		headers: {
			Authorization: 'Bearer ' + access_token
		}});
};