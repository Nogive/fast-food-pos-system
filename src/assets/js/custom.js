/*
 * expires:天
 * path:生效路径
 */
const setCookie = (key, value, expires, path, domain, secure) => {
  var cookieText = "";
  expires = expires * 1000 * 60 * 60 * 24;
  var expires_date = new Date(new Date().getTime() + expires);
  cookieText += encodeURIComponent(key) + "=" + encodeURIComponent(value);
  if (expires) {
    cookieText += "; expires=" + expires_date.toGMTString();
  }
  if (path) {
    cookieText += "; path=" + path;
  }
  if (domain) {
    cookieText += "; domain=" + domain;
  }
  if (secure) {
    cookieText += "; secure";
  }
  document.cookie = cookieText;
};
//get cookie
const getCookie = key => {
  var cookieName = encodeURIComponent(key) + "=";
  var cookieStart = document.cookie.indexOf(cookieName);
  var cookieValue = "";
  if (cookieStart > -1) {
    var cookieEnd = document.cookie.indexOf(";", cookieStart);
    if (cookieEnd == -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(
      document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
    );
  }
  return cookieValue;
};
//clear some cookie
const clearCookie = key => {
  setCookie(key, "", -1);
};
//check cookie exist
const checkCookie = key => {
  var value = getCookie(key);
  if (value == "" || value == null) {
    return false;
  } else {
    return true;
  }
};
//set local && set session
const setLocal = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
const setSession = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};
//get local && get session
const getLocal = key => {
  let value = window.localStorage.getItem(key);
  return JSON.parse(value);
};
const getSession = key => {
  let value = window.sessionStorage.getItem(key);
  return JSON.parse(value);
};
//clear one local && clear on session
const clearLocal = key => {
  window.localStorage.removeItem(key);
};
const clearSession = key => {
  window.sessionStorage.removeItem(key);
};
//clear all local && clear all session
const clearAllLocal = () => {
  window.localStorage.clear();
};
const clearAllSession = () => {
  window.sessionStorage.clear();
};
/****************************************************************************************/
export default {
  setCookie,
  getCookie,
  checkCookie,
  setSession,
  getSession
};
