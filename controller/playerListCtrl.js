/*
* FileName:teamListCtrl.js
* CreatedBy: Habeeb
* Purpose : Defining controller function for teamplayers based on teamName
* Date :6-09-2016
*/
/*Creating module of iplApp*/
/*Defining the controller playerController*/
angular.module('myApp').controller('playerListCtrl', playerList);
/*Defining the function retrieveData and passing required params*/
function playerList($scope, $firebaseObject,iplService,imageService,$stateParams) {
   /*replacing spaces in the teamname according to the database to retrieve information*/
       $scope.teamName=$stateParams.teamname.replace(/\s/g, '');
        /*Getting team info based on teamName*/
    var ref = firebase.database().ref($scope.teamName);
    var temp = $firebaseObject(ref);
    var fbref1 = firebase.database().ref("tean_info");
    /*Getting pirticular team information based on teamName*/
    fbref1.orderByChild("team_name").equalTo($stateParams.teamname).on("child_added", function(data) {
    //  console.log(data);
        $scope.data1 = data.val();
console.log("hiiii");
    });
/*loading data as a promise*/
    temp.$loaded().then(function(result) {
 /*Adding data to the scope object*/
        $scope.data = result;
                 $scope.images={};
               });
                /*function to retrieve image*/
        $scope.getImage = function(image) {

                  console.log('function called');
                  var url = imageService.getUrl(image).then(function(url) {
                      document.getElementById(image).src = url;
              //         console.log(url);
              //         // $scope.actualUrl(url);
              //         $scope.iUrl = url;
              //         console.log($scope.iUrl);
              //         return $scope.iUrl;
              //     });
              //     // return iUrl;
              // }
              // $scope.images = {};
              // angular.forEach(result, function(i) {
              //     imageService.getUrl(i.team_img_url).then(function(url) {
              //         $scope.images[i.team_img_url] = url;
              //     });
              });
          }
        };
            //  console.log($scope.images);
              // $scope.actualUrl = function(url){
        //       //   return url;
        //   var storage = firebase.storage();
        //   var storageRef = firebase.storage().ref();
        //   //console.log(storageRef);
        //   storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
        //       //console.log(url);
        //       // Get the download URL for 'images/stars.jpg'
        //       // This can be inserted into an <img> tag
        //       // This can also be downloaded directly
        //   }).catch(function(error) {
        //       console.log("Error" + error);
        //   });
        // };
