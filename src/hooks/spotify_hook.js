import schedule from 'node-schedule';
import SpotifyWebApi from 'spotify-web-api-node';

const spotify_api = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

async function set_credential() {
  await spotify_api.clientCredentialsGrant().then(function (data) {
    spotify_api.setAccessToken(data.body['access_token']);
  });
}
async function spotify_hook() {
  await set_credential();
  spotify_api.getUser('5a8nm6qps7vqi89zxscwh4wz2').then(function (data) {
    console.log(data);
  });
}
export default spotify_hook;
