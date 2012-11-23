Template.howmany.count = function() {
    if(Dumbs.find() != undefined) {
        return Dumbs.find().fetch().length;
    }
    return 'Well well well...';
}