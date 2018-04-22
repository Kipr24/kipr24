import Events from "../events";

Meteor.publish('top4', function() {
    return Events.find({}, {limit: 4});
});