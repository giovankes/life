"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _spotifyWebApiNode = _interopRequireDefault(require("spotify-web-api-node"));

var _consola = _interopRequireDefault(require("consola"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var spotify_api = new _spotifyWebApiNode["default"]({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET
}); //function spotify() {
//  try {
//    const credentials = {
//      clientId: process.env.SPOTIFY_ID,
//      clientSecret: process.env.SPOTIFY_SECRET,
//      redirectUri: 'http://localhost:3000/spotify',
//    };
//    const spotify_api = new SpotifyWebApi(credentials);
//    const code = process.env.SPOTIFY_CODE;
//
//    spotify_api.authorizationCodeGrant(code).then(function (data) {
//      spotify_api.setAccessToken(data.body['access_token']);
//      spotify_api.setRefreshToken(data.body['refresh_token']);
//    });
//    consola.info('successfully set access and refresh token');
//  } catch (e) {
//    throw new Error(e);
//  }

function spotify() {}

var _default = spotify;
exports["default"] = _default;