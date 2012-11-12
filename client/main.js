Template.howmany.count = function() {
    var dumb = Idiots.findOne();
    if(dumb == undefined) {
        return 0;
    }
    return dumb.count;
}