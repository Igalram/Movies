app.controller('actorsCtrl', function ($scope, $http) {

    function Actor(name, birthday, imgURL, url) {
        this.name = name;
        this.age = new Date(birthday);
        this.imgURL = imgURL;
        this.url = url;
    }

    
  $scope.actors = [];
  $http.get('actors.JSON').then(function(response) {
    response.data.forEach(function(plainObj) {
      var actor = new Actor (plainObj.name, plainObj.age, plainObj.imgURL, plainObj.url);
      $scope.actors.push(actor);
    })

}, function(error) {
    console.error(error);
  });

  /*  $scope.actors = [

        new Actor("Anne Hathaway", "1982-11-12", "https://m.media-amazon.com/images/M/MV5BNjQ5MTAxMDc5OF5BMl5BanBnXkFtZTcwOTI0OTE4OA@@._V1_SY1000_CR0,0,684,1000_AL_.jpg", "https://www.imdb.com/name/nm0004266/"),

        new Actor("Daniel Radcliffe", "1989-7-23", "https://m.media-amazon.com/images/M/MV5BMTg4NTExODc3Nl5BMl5BanBnXkFtZTgwODUyMDEzMDE@._V1_UY317_CR11,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0705356/"),

        new Actor("Abigail Breslin", "1996-4-14", "https://m.media-amazon.com/images/M/MV5BMzU5MTA5MzYzOF5BMl5BanBnXkFtZTcwODc4OTIxNw@@._V1_UY317_CR4,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm1113550/?ref_=nv_sr_5"),

        new Actor("Bryce Dallas Howard", "1981-3-2", "https://m.media-amazon.com/images/M/MV5BODEzNzBhODYtOWEzNi00Y2I3LWFjMGEtNzAxNzU5ZjZiMDRiXkEyXkFqcGdeQXVyMjQ0MTg4Nw@@._V1_UY317_CR15,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0397171/?ref_=nv_sr_8"),

        new Actor("Emilia Clarke", "1986-10-23", "https://m.media-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm3592338/?ref_=nv_sr_2"),

        new Actor("Peter Dinklage", "1969-6-11", "https://m.media-amazon.com/images/M/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_UY317_CR20,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0227759/?ref_=tt_cl_t3"),

        new Actor("Hugh Jackman", "1968-10-12", "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0413168/?ref_=tt_cl_t1"),

        new Actor("Allison Janney", "1959-11-19", "https://m.media-amazon.com/images/M/MV5BMjAyNjc2NzgxM15BMl5BanBnXkFtZTgwODQyMjM1MjE@._V1_UY317_CR9,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0005049/?ref_=tt_cl_t2"),

        new Actor("Amanda Seyfried", "1985-12-3", "https://m.media-amazon.com/images/M/MV5BMjUyODkwODUyMF5BMl5BanBnXkFtZTcwMzU3MjYxMw@@._V1_UY317_CR33,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm1086543/?ref_=tt_cl_t4"),

        new Actor("Helena Bonham Carter", "1966-5-26", "https://m.media-amazon.com/images/M/MV5BMTUzMzUzMDg5MV5BMl5BanBnXkFtZTcwMDA5NDMwNA@@._V1_UY317_CR4,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000307/?ref_=tt_cl_t6"),

        new Actor("Tim Blake Nelson", "1964-5-11", "https://m.media-amazon.com/images/M/MV5BMTk0ODkwNjM5M15BMl5BanBnXkFtZTcwNzQ3NjgyMw@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0625789/?ref_=tt_cl_t4"),


        new Actor("Johnny Depp", "1963-6-9", "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY317_CR4,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000136/?ref_=tt_cl_t1")]

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

