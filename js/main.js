import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import './ajax_setup';
import Router from './router';

// console.log('Hello, World');
// window.ajaxSetupObject = ajaxSetupObject;

let contactBlock = $('.contact-screen');
let topBlock     = $('.top-block');
let listBlock    = $('.list-block');

let router = new Router(contactBlock);
router.start();

window.router = router;






