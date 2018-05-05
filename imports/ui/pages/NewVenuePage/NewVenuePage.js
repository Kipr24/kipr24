import { Template } from 'meteor/templating';
import '/imports/ui/pages/NewVenuePage/NewVenuePage.html';
import Venues from '/imports/api/venues/venues.js';

Template.NewVenuePage.helpers({
    data() {
        return Venues;
    }
})

AutoForm.hooks({
    insertVenueForm: {
        after: {
            insert: function (insertDoc, updateDoc, currentDoc) {
                FlowRouter.go('/venues')
            }
          }
    }
});
