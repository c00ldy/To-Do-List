var app = angular.module('todoApp', []);

app.controller('Todocontroller', function ($scope) {

    $scope.todo = JSON.parse(localStorage.getItem('todo')) || [];
    $scope.addnewtask = function () {
        if ($scope.addTask.trim() !== '')
            $scope.todo.push({ text: $scope.addTask, completed: false });
        $scope.addTask = '';
        localStorage.setItem('todo', JSON.stringify($scope.todo));
        $scope.todo = JSON.parse(localStorage.getItem('todo'))
    }


    $scope.remainingTask = function () {
        return $scope.todo.filter(function (task) {
            return !task.completed;
        }).length;
    }

    $scope.totalTask = function () {
        return $scope.todo.length;
    }

    $scope.clearAll = function () {
        $scope.todo = [];
        localStorage.removeItem('todo');
    };

    $scope.deleteTask = function (index) {
        $scope.todo.splice(index, 1);
        localStorage.setItem('todo', JSON.stringify($scope.todo));
    };

    $scope.updateRemaining = function () {
        localStorage.setItem('todo', JSON.stringify($scope.todo));
    };

    $scope.clearCompleted = function () {
        $scope.todo = $scope.todo.filter(function (task) {
            return !task.completed;
        });
        localStorage.setItem('todo', JSON.stringify($scope.todo));
    };
});