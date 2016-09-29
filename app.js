/*
* FileName:app.js
* CreatedBy: Habeeb
* Date :07-08-2016
* Purpose : Main Routing application
*/
angular.module('myApp', ['ui.router', 'firebase'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/teamList');
        $stateProvider
            .state('playerList', {
                url: '/new?teamname',
                templateUrl: 'template/playerList.html',
                controller: 'playerListCtrl'
            })
            .state('teamDetails', {
                url: '/teamDetails',
                templateUrl: 'template/teamDetails.html',
                controller: 'teamDetailsCtrl'
            })

        .state('teamInfo', {
                url: '/teamInfo',
                templateUrl: 'template/teamInfo.html',
                controller: 'teamInfoCtrl'
            })
            .state('teamList', {
                url: '/teamList',
                templateUrl: 'template/teamList.html',
                controller: 'teamListCtrl'
            })
    });
