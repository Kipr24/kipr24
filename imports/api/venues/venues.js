import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Venues = new Mongo.Collection('venues');

const VenueSchema = new SimpleSchema({
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

Venues.attachSchema(VenueSchema);

Venues.allow({ 
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

export default Venues;