import $ from 'jquery';

const APP_ID  = 'xBtUzYLPkoZlkgTubmjU80fvAvshhOcZ7t5EohrB'; 
const APP_KEY = 'BmdXmJ2goqIWTRe1WjrRm8fMw9L7d5NahJ96tZac';

let ajaxSetupObject = 
  $.ajaxSetup({
    headers: {
      'X-Parse-Application-Id' : APP_ID,
      'X-Parse-Application-Key': APP_KEY
    }
});

export default ajaxSetupObject;