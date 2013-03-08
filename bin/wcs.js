#!/usr/bin/env node
/**
 * Count lines sent over stdin and print
 * the frequency for a given interval
 *
 * ie: yes | wcs
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: 10/17/12
 * License: MIT
 */

var time = +process.argv[2] || 1000;
var body = '';

process.stdin.setEncoding('utf-8');
process.stdin.resume();
process.stdin.on('data', function(data) {
  body += data;
});

process.stdin.on('end', function() {
  clearInterval(interval);
  process_body();
});

// Start the frequency interval
var interval = setInterval(process_body, time);

function process_body() {
  var lines = (body.match(/\n/g) || '').length;
  var words = (body.split(/\s+/) || ' ').length - 1;
  var chars = body.length;
  console.log(lines, words, chars);
  body = '';
}
