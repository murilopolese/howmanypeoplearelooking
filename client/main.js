console.log(Idiots.findOne({id: 1}).count)
Idiots.update({id: 1}, {count: 10});
console.log(Idiots.findOne({id: 1}).count)
Template.howmany.count = function() {
    Meteor.call('idiotsOnline', 
        function(error, value) {
            
        });
    return;
}