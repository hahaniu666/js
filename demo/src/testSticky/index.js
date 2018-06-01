var app = angular.module('myApp',
    ['ui.router', 'ct.ui.router.extras'])

    .config(function ($stateProvider, $urlRouterProvider) {
        // for any unmatched url, redirect to /overview
        $urlRouterProvider.otherwise("/overview");

        // set up the states
        $stateProvider.state('group', {
            'abstract': true,
            templateUrl: 'group.html',
            controller: 'timerController'
        }).state('group.overview', {
            url: "/overview",
            views: {
                'overview@group': {
                    controller: 'timerController',
                    templateUrl: 'Overview.html'
                }
            },
            sticky: true,
            deepStateRedirect: true
        }).state('group.projects', {
            url: "/projects",
            views: {
                'projects@group': {
                    controller: 'timerController',
                    template: '<h1>Projects</h1><div scope-age></div>'
                }
            },
            sticky: true,
            deepStateRedirect: true
        }).state('group.tasks', {
            url: "/tasks",
            views: {
                'tasks@group': {
                    controller: 'timerController',
                    template: '<h1>Tasks</h1><div scope-age></div>'
                }
            },
            sticky: true,
            deepStateRedirect: true
        }).state('group.discussions', {
            url: "/discussions",
            views: {
                'discussions@group': {
                    controller: 'timerController',
                    template: '<h1>Discussions</h1><div scope-age></div>'
                }
            },
            sticky: true,
            deepStateRedirect: true
        }).state('group.members', {
            url: "/members",
            views: {
                'members@group': {
                    controller: 'timerController',
                    template: '<h1>Members</h1><div scope-age></div>'
                }
            },
            sticky: true,
            deepStateRedirect: true
        });
    })


    .run(function ($rootScope, $state, $window, $timeout) {
        $rootScope.$state = $state;
    })

    // turn on debug logging

    .config(function ($stickyStateProvider) {
        $stickyStateProvider.enableDebug(true);
    })

    // utilities for scope age (see ui-router-extras examples)

    .directive("scopeAge", function () {
        return {
            template: '<div>This scope is {{age || 0}} seconds old</div>'
        }
    })

    .service("timerService", function ($interval) {
        return {
            instrument: function instrument($scope) {
                var scopeCreated = Date.now();
                var computeAge = function () {
                    var delta = Date.now() - scopeCreated;
                    $scope.ageMs = delta;
                    $scope.age = Math.floor(delta / 1000);
                };
                computeAge();
                var intervalPromise = $interval(computeAge, 1000);
                $scope.$on("$destroy", function () {
                    $interval.cancel(intervalPromise);
                })
            }
        }
    })

    .controller("timerController", function ($scope, $state, timerService) {
        timerService.instrument($scope);


        $scope.goOver = function () {
            console.log(1);
            $state.go('group.overview', {}, {reload: true})
        }


    });