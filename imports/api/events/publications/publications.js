import Events from "../events";

Meteor.publish('top4', function() {
    return Events.find({}, {limit: 4});
});

Meteor.publish('singleEvent', function(eventId) {
    return Events.find({_id: eventId});
});

Meteor.publish('events', function() {
    return Events.find();
});