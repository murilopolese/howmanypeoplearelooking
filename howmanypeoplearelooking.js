Idiots = new Meteor.Collection("idiots");
IdiotsOnline = new Meteor.Collection("idiotsOnline");

if (Meteor.isClient) {
    var myId = Math.random()*1000;
    Idiots.insert({
        id: myId
    });
    IdiotsOnline.insert({
        id: myId
    });
    Template.howmany.onlineIdiots = function() {
        return IdiotsOnline.find().count();
    };
    Template.howmany.position = function () {
        return Idiots.find().count();
    };
    window.onbeforeunload = function (e) {
        IdiotsOnline.find().fetch()[0].remove()
    };
}

if (Meteor.isServer) {
    Meteor.startup(function () {
            console.log('isServer');
        });
}
