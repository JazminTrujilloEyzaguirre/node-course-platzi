const express = require('express');
const { moviesMocks } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  router.get("/", async function(req, res, next) {
    try {
      const  movies = await Promise.resolve(moviesMocks);

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.get("/moviesId", async function(req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMocks[0]);

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.post("/", async function(req, res, next) {
    try {
      const createMoviesId = await Promise.resolve(moviesMocks[0].id);

      res.status(201).json({
        data: createMoviesId,
        message: 'movie create'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.put("/:movieId", async function(req, res, next) {
    try {
      const updateMovieId = await Promise.resolve(moviesMocks[0].id);

      res.status(200).json({
        data: updateMovieId,
        message: 'movie update'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.delete("/:movieId", async function(req, res, next) {
    try {
      const deletedMovieId = await Promise.resolve(moviesMocks[0].id);

      res.status(200).json({
        data: deletedMovieId,
        message: 'movies deleted'
      });
      
    } catch (err) {
      next(err);
    };
  });
};

module.exports = moviesApi;