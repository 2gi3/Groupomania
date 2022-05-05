const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserPost = require('../models/user-post');
const fs = require('fs');

exports.ceateUserPosts = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const userPost = new UserPost({
    userId: req.body.userId,
    postId:req.body.postId
  });
  userPost.save().then(
    () => {
      res.status(201).json({
        message: 'User-Post added successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
};