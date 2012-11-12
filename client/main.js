Template.howmany.count = function() {
    var dumb = Idiots.findOne();
    if(dumb == undefined) {
        return 'Please wait, my monkeys are counting...';
    }
    return dumb.count;
}
