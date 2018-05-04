import { Template } from 'meteor/templating';
import '/imports/ui/pages/NewVenuePage/NewVenuePage.html';
import Venues from '/imports/api/venues/venues.js';

Template.NewVenuePage.helpers({
    data: function() {
        return Venues;
    }
})