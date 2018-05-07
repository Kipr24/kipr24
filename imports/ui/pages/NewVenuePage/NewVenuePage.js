import { Template } from 'meteor/templating';
import '/imports/ui/pages/NewVenuePage/NewVenuePage.html';
import Venues from '/imports/api/venues/venues.js';

Template.NewVenuePage.helpers({
    data() {
        return Venues;
    }
})

Template.registerHelper('districtOption', function() {
    return [
        {label: 'Limassol', value: 'Limassol'},
        {label: 'Nicosia', value: 'Nicosia'},
        {label: 'Larnaka', value: 'Larnaka'},
        {label: 'Paphos', value: 'Paphos'},
        {label: 'Kyrenia', value: 'Kyrenia'},
        {label: 'Fanagusta', value: 'Fanagusta'}
    ]
});

AutoForm.hooks({
    insertVenueForm: {
        after: {
            insert: function (insertDoc, updateDoc, currentDoc) {
                FlowRouter.go('/venues')
            }
        }
    }
});
