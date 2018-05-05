import Venues from '/imports/api/venues/venues.js';
import { Template } from 'meteor/templating';
import '/imports/ui/pages/VenuesPage/VenuesPage.html';

Template.VenuesPage.onCreated(function() {
    const tpl = this;
    tpl.autorun(function() { 
       tpl.subscribe('venues');  
    });
});

Template.VenuesPage.helpers({
    venues: function() {
        return Venues.find();
    }
});