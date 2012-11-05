window.onbeforeunload = function (e) {
    // TODO: Remove one element from IdiotsOnline when left the page
    var idiot = IdiotsOnline.findOne();
    IdiotsOnline.remove({name: idiot.name});
};

Template.howmany.idiots = function() {
    return Idiots.find().count();
}

Template.howmany.idiotsOnline = function() {
    return IdiotsOnline.find().count();
}

var myFuckingId = Math.random()*1000;
Idiots.insert({name: myFuckingId});
IdiotsOnline.insert({name: myFuckingId});