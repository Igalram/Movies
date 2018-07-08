app.controller('MoviesCtrl', function ($scope, $http) {

    function Movie(name, length, producers, imdb, poster) {
        this.name = name;
        this.length = length;
        this.producers = producers;
        this.imdb = imdb;
        this.poster = poster;
    }

    
  $scope.movies = [];

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

    $scope.criteriaMatch = function (actor) {

        if (!$scope.query || actor.name.toLowerCase().includes($scope.query.toLowerCase())) { return true; }
        else { return false; }

    };

    $scope.sorts = [{label: 'Alphabetically', name: 'name'},{label: 'Birthday', name: 'age'}];


    $scope.actorSelected = null;
    $scope.setSelected = function (actorSelected) {
        $scope.actorSelected = actorSelected;
     };

});

