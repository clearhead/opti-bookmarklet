/*global $:true */
import css from '../style/modal.css';
import modalHtml from '../mods/modal-template.html';
import renderHtml from '../mods/render-html.js';
import bindEvents from '../mods/bind-events.js';
import returnOptiData from '../mods/opti-data.js';


window.$ = window.jQuery;
$(`head`).append(`<style>${css}</style>`);
const optiData = returnOptiData();
const $modal = renderHtml(modalHtml, optiData);
bindEvents($modal);
$('body').append($modal);