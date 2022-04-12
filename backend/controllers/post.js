const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
   
//   const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    UserName: req.body.UserName,
    title: req.body.title,
    // imageUrl: url + '/images/' + req.file.filename,
    content: req.body.content
  });
  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post added successfully!'
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

  exports.getAllPosts = (req, res, next) => {
    Post.findAll().then(
      (post) => {
        res.status(200).json(post);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };