const Query = {
    dogs(parent, args, ctx, info) {
        return [{
            name: 'Sunny',
        }, {
            name: 'Dog',
        }];
    }
};

module.exports = Query;
