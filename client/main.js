Template.howmany.count = function () {
    if (People.find() != undefined) {
        return People.find().fetch().length;
    }
    return 'Well well well...';
}
