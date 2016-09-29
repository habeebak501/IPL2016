/*
* FileName:teamListCtrl.js
* CreatedBy: Habeeb
* Purpose : Creating a Controller for teams information
* Date :6-09-2016
*/
/*Creating module of iplApp*/
/*team controller for fetching teams information*/
angular.module('myApp').controller('teamListCtrl', teamList);
/*function to retrieve data from firebase*/
function teamList($scope, $firebaseObject,iplService,imageService) {
  /*passing the reference to firebase to get data*/
    var ref = firebase.database().ref('tean_info');

    var syncObject = $firebaseObject(ref);
     /*loading data as a promise*/
    syncObject.$loaded().then(function(result) {
      /*Adding the data to the scope object*/
     $scope.data = result;
     /*function to retrieve the image*/
    $scope.getImage = function(image) {
     console.log('function called');
              var url = imageService.getUrl(image).then(function(url) {
                  document.getElementById(image).src = url;
                  console.log(url);
                  $scope.iUrl = url;
                  console.log($scope.iUrl);
                  return $scope.iUrl;
              });
          }
        })
      //    $scope.images = {};
      //    angular.forEach(result, function(i) {
      //        imageService.getUrl(i.team_img_url).then(function(url) {
      //            $scope.images[i.team_img_url] = url;
      //        });
      //     });
      //   });
      // var storage = firebase.storage();
      // var storageRef = firebase.storage().ref();
      // storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
      // }).catch(function(error) {
      //     console.log("Error" + error);
      // });
  };
