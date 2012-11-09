Meteor.methods({
    idiotsOnline: function() {
        console.log(Meteor.default_server.stream_server.open_sockets.length)
        return Meteor.default_server.stream_server.open_sockets.length;
    }
})