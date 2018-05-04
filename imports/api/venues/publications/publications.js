import Venues from '/imports/api/venues/venues.js';

Meteor.publish('venues', function() {
    return Venues.find();
});
