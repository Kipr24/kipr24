// /imports/api/venue_types/venue_types.js
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const VenueTypes = new Mongo.Collection('venue_types');

const VenueTypesSchema = new SimpleSchema({
    name: {
        type: String,
        max: 20,
        label: 'Name'
    }
}, {tracker: Tracker});

VenueTypes.attachSchema(VenueTypesSchema);

VenueTypes.allow({ 
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

export default VenueTypes;