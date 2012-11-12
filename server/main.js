Meteor.setInterval(function() {
    Idiots.update({}, {
        count: Meteor.default_server.stream_server.open_sockets.length
        })
}, 100);
Meteor.startup(function(){
    Idiots.remove({});
    Idiots.insert({
        count: 0
    });
})
