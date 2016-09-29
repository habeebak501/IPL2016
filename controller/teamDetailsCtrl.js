/**
* FileName:teamDetails.js
* CreatedBy: Habeeb
* Date :07-08-2016
* Purpose : Defining controller function for teaminformation  based on teamName
*/
angular.module('myApp').controller('teamDetailsCtrl', teamDetails);
function teamDetails($scope, $firebaseObject,iplService,imageService) {
  var ref = firebase.database().ref();
  var temp = $firebaseObject(ref);
  temp.$loaded().then(function(result) {
      console.log(result);
      $scope.data = result.tean_info;
      console.log( result.tean_info);
      /* Retrive the image from the function*/
$scope.getImage = function(image) {
            var url = imageService.getUrl(image).then(function(url) {
                document.getElementById(image).src = url;
                console.log(url);
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
      //  console.log($scope.images);
        // $scope.actualUrl = function(url){
        //   return url;
    // var storage = firebase.storage();
    // var storageRef = firebase.storage().ref();
    // //console.log(storageRef);
    // storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
    //     //console.log(url);
    //     // Get the download URL for 'images/stars.jpg'
    //     // This can be inserted into an <img> tag
    //     // This can also be downloaded directly
    // }).catch(function(error) {
    //     console.log("Error" + error);
    // });
};
