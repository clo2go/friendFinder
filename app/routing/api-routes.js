'use strict';

const path = require('path'),
      data = require('../data/friends.js');

exports.get = function (req, res) {
  res.json(data);
};

exports.post = function (req, res) {
  let minDiff  = 50,
      matchArr = [];

  for (let i = 0; i < data.length; i++) {
    let thisDiff = 0;

    for (let j = 0; j < req.body.scores.length; j++) {
      thisDiff += Math.abs(data[i].scores[j] - req.body.scores[j]);
    }

    if (thisDiff < minDiff) {
      minDiff = thisDiff;
      matchArr = [i];
    } else if (thisDiff === minDiff) {
      matchArr.push(i);
    }
  }

  data.push(req.body);
  res.json(data[matchArr[Math.floor(Math.random() * matchArr.length)]]);
};
