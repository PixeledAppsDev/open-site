import React from 'react';
import { A } from 'components/Text';

const URL_REGEX =
  "((?:(http|https|Http|Https|rtsp|Rtsp):\\/\\/(?:(?:[a-zA-Z0-9\\$\\-\\_\\.\\+\\!\\*\\'\\(\\)" +
  '\\,\\;\\?\\&\\=]|(?:\\%[a-fA-F0-9]{2})){1,64}(?:\\:(?:[a-zA-Z0-9\\$\\-\\_' +
  "\\.\\+\\!\\*\\'\\(\\)\\,\\;\\?\\&\\=]|(?:\\%[a-fA-F0-9]{2})){1,25})?\\@)?)?" +
  '((?:(?:[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}\\.)+' + // named host
  '(?:' + // plus top level domain
  '(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])' +
  '|(?:biz|b[abdefghijmnorstvwyz])' +
  '|(?:cat|com|coop|c[acdfghiklmnoruvxyz])' +
  '|d[ejkmoz]' +
  '|(?:edu|e[cegrstu])' +
  '|f[ijkmor]' +
  '|(?:gov|g[abdefghilmnpqrstuwy])' +
  '|h[kmnrtu]' +
  '|(?:info|int|i[delmnoqrst])' +
  '|(?:jobs|j[emop])' +
  '|k[eghimnrwyz]' +
  '|l[abcikrstuvy]' +
  '|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])' +
  '|(?:name|net|n[acefgilopruz])' +
  '|(?:org|om)' +
  '|(?:pro|p[aefghklmnrstwy])' +
  '|qa' +
  '|r[eouw]' +
  '|s[abcdeghijklmnortuvyz]' +
  '|(?:tel|travel|t[cdfghjklmnoprtvwz])' +
  '|u[agkmsyz]' +
  '|v[aceginu]' +
  '|w[fs]' +
  '|y[etu]' +
  '|z[amw]))' +
  '|(?:(?:25[0-5]|2[0-4]' + // or ip address
  '[0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\\.(?:25[0-5]|2[0-4][0-9]' +
  '|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\\.(?:25[0-5]|2[0-4][0-9]|[0-1]' +
  '[0-9]{2}|[1-9][0-9]|[1-9]|0)\\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}' +
  '|[1-9][0-9]|[0-9])))' +
  '(?:\\:\\d{1,5})?)' + // plus option port number
  '(\\/(?:(?:[a-zA-Z0-9\\;\\/\\?\\:\\@\\&\\=\\#\\~' + // plus option query params
  "\\-\\.\\+\\!\\*\\'\\(\\)\\,\\_])|(?:\\%[a-fA-F0-9]{2}))*)?" +
  '(?:\\b|$)';

const renderContent = (sentence) => {
  return sentence.split(/(\s)+/).map((word, idx) => {
    // console.log(word);
    if (word.match(URL_REGEX)) {
      let url;
      if (!word.startsWith('http')) {
        url = 'http://' + word;
      }
      return (
        <A key={idx} to={{ pathname: url || word }} target="_blank">
          {word}
        </A>
      );
    }
    return word;
  });
};

export { renderContent as default };
