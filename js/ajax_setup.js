import $ from 'jquery';

const APP_ID  = 'xBtUzYLPkoZlkgTubmjU80fvAvshhOcZ7t5EohrB'; 
const APP_KEY = 'BmdXmJ2goqIWTRe1WjrRm8fMw9L7d5NahJ96tZac';


$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id' : APP_ID,
    'X-Parse-REST-API-Key': APP_KEY
  }
});