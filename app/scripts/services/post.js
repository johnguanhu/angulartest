'use strict';
/* global app:true */
/* exported app */

app.factory('Post', function ($resource) {
  return $resource('https://popping-fire-4213.firebaseIO.com/posts/:id.json');
});