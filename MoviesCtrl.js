app.controller('moviesCtrl', function ($scope, $http) {

    function Movie(name, length, producers, imdb, poster) {
        this.name = name;
        this.length = length;
        this.producers = producers;
        this.imdb = imdb;
        this.poster = poster;
    }

    

/*
  $http.get('actors.JSON').then(function(response) {
    response.data.forEach(function(plainObj) {
      var actor = new Actor (plainObj.name, plainObj.age, plainObj.imgURL, plainObj.url);
      $scope.actors.push(actor);
    })

}, function(error) {
    console.error(error);
  });
*/

  
    $scope.movies = [];
    $scope.query = "";

    var movie = new Movie ("The Rocky Horror Picture Show", 100,  "chunky productions", "https://www.themoviedb.org/movie/36685-the-rocky-horror-picture-show?language=en-US", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v2NC7o8f7AZvQbOAwrfRbe5Z106.jpg" );
    $scope.movies.push(movie);
    var movie = new Movie ("The Rocky Horror Picture Show", 100,  "chunky productions", "https://www.themoviedb.org/movie/36685-the-rocky-horror-picture-show?language=en-US", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v2NC7o8f7AZvQbOAwrfRbe5Z106.jpg" );
    $scope.movies.push(movie);
    var movie = new Movie ("The Rocky Horror Picture Show", 100,  "chunky productions", "https://www.themoviedb.org/movie/36685-the-rocky-horror-picture-show?language=en-US", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v2NC7o8f7AZvQbOAwrfRbe5Z106.jpg" );
    $scope.movies.push(movie);
    console.log($scope.movies);

    $scope.criteriaMatch = function (movie) {

        if (!$scope.query || movie.name.toLowerCase().includes($scope.query.toLowerCase())) { return true; }
        else { return false; }

    };

    $scope.sorts = [{label: 'Alphabetically', name: 'name'},{label: 'Birthday', name: 'age'}];


    $scope.movieSelected = null;
    $scope.setSelected = function (movieSelected) {
        $scope.movieSelected = movieSelected;
     };  

});

