import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Events = new Mongo.Collection('events');

const EventsSchema = new SimpleSchema({
    name: {
        type: String,
        max: 20,
        label: 'Name'
    },
    description: {
        type: String,
        max: 160,
        label: 'Description'
    }
}, {tracker: Tracker});

Events.attachSchema(EventsSchema);

Events.allow({ 
    insert: function() { 
        return true; 
    }, 
    update: function() { 
        return true; 
    }, 
    remove: function() { 
        return true; 
    } 
});

export default Events;