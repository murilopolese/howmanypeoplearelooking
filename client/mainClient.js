window.onbeforeunload = function (e) {
//    IdiotsOnline.find().fetch()[0].remove()
};

Template.howmany.idiots = function() {
    return Idiots.find().count();
}

Template.howmany.idiotsOnline = function() {
    return 1;
}

Template.howmany.insertIdiot = function() {
    Idiots.insert({id: Math.random()*1000});
}