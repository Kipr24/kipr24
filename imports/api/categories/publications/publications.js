import Categories from '/imports/api/categories/categories.js';

Meteor.publish('categories', function() {
    return Categories.find();
});
