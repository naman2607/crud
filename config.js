const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const{

    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STROAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID

}=process.env;

assert(PORT,'PORT IS REQUIRED')
assert(HOST,'PORT IS REQUIRED')

module.exports={
    port : PORT,
    host: HOST,
    url : HOST_URL,
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig : {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL : DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STROAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  }
}