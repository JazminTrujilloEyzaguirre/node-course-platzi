const express = require('express');
const MovieService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const movieService = new MovieService();

  router.get("/", async function(req, res, next) {
    const { tags } = req.query;

    try {
      const  movies = await movieService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.get("/moviesId", async function(req, res, next) {
    const { moviesId } = req.params;

    try {
      const movies = await movieService.getMovie({ moviesId });

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.post("/", async function(req, res, next) {
    const { body: movie } = req;

    try {
      const createMoviesId = await movieService.createMovie({ movie });

      res.status(201).json({
        data: createMoviesId,
        message: 'movie create'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.put("/:movieId", async function(req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;

    try {
      const updateMovieId = await movieService.updateMovie({ movieId, movie });

      res.status(200).json({
        data: updateMovieId,
        message: 'movie update'
      });
      
    } catch (err) {
      next(err);
    };
  });

  router.delete("/:movieId", async function(req, res, next) {
    const { moviesId } = req.params;
    
    try {
      const deletedMovieId = await movieService.deleteMovie({ moviesId });

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