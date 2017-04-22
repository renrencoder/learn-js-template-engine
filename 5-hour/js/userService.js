(function() {
    var mockData = {
        body: {
            users: [{
                name: 'supershy',
                location: '西安'
            }, {
                name: 'little-white',
                location: '盐城'
            }]
        }
    }
    var userService = {
            getUser: getUser
        }
        // 对promise生疏的可以趁机学习下，这里就不解释了
    function getUser(url) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(mockData);
            }, 300)
        })
    }

    window.userService = userService;
})(window);
