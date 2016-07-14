app.service('UserUtilities', function(){
    var self = {};
    self.list = [];
    self.saveUser = function(user){
        if (user) {
            this.list.push(user);
        }
    };

    self.getUserList = function() {
        return this.list;
    }

    return self;
});