import VenueTypes from '/imports/api/venue_types/venue_types.js';

Meteor.publish('venue_types', function() {
    return VenueTypes.find();
});
