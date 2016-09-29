/**
* FileName:teamInfo.js
* CreatedBy: Habeeb
* Date :07-08-2016
* Purpose : Defining controller function for teaminformation and teamImages
*/
angular.module('myApp').controller('teamInfoCtrl', teamInfo);

function teamInfo($scope, $firebaseObject,imageService) {
    var ref = firebase.database().ref();

    var temp = $firebaseObject(ref);

    temp.$loaded().then(function(result) {
        console.log(result);
        $scope.data = result.tean_info;
        console.log( result.tean_info);
        // var temp = result.tean_info;
        //$scope.data = temp[0];
  $scope.getImage = function(image) {

          //    console.log('function called');
              var url = imageService.getUrl(image).then(function(url) {
                  document.getElementById(image).src = url;
                  console.log(url);
                  // $scope.actualUrl(url);
                  $scope.iUrl = url;
                  console.log($scope.iUrl);
                  return $scope.iUrl;
              });
              // return iUrl;
          }
          // $scope.images = {};
          // console.log("images");
          // angular.forEach(result.tean_info, function(i) {
          //     imageService.getUrl(i.team_img_url).then(function(url) {
          //         $scope.images[i.team_img_url] = url;
          //     });
          // });
        });
  };
