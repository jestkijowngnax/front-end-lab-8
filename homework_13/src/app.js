var myApp = angular.module("myApp", []);

myApp.controller("myCtrl", [
    '$scope', function($scope) {
    $scope.posts = defaultPosts;
    $scope.layoutPosts = $scope.posts;
    $scope.addActive = false;
    $scope.showError = false;

    $scope.save = function(save) {
      $scope.editableTitle = save;
      $scope.disableEditor();
    };
    $scope.edit = function(post)  {
        post.editable = false;
        post.error = false;
    }

    $scope.createNavs = function() {
        let categories = ['All'];
        $scope.posts.forEach(item => {
            item.categories.forEach(category => {
                console.log(category)
                if (categories.indexOf(category) === -1) {
                    categories.push(category);
                }
            })
        });
        return categories;
    }
    $scope.categories = $scope.createNavs();

    $scope.filter = function(category) {
        if(category === 'All') { 
            $scope.layoutPosts = $scope.posts;
            return;
        } else {
            $scope.layoutPosts = [];
            $scope.posts.forEach(post => {
                if(post.categories.indexOf(category) !== -1) {
                    $scope.layoutPosts.push(post);
                }
            })
        }
    } 

    $scope.addPost = function(title, description, categories, photo) {
        $scope.showError = false;
        if (!photo) {
            photo = './assets/default.jpg';
        };
        newCategories = categories.split(/[ ,]+/);
        let newPost = {
            title: title,
            categories: newCategories,
            description: description,
            url: photo
        };
        $scope.posts.push(newPost);
        $scope.categories = $scope.createNavs();
        $scope.addActive = false;
    }
}]);
