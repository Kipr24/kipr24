import Events from '/imports/api/events/events.js';
import { Template } from 'meteor/templating';
import '/imports/ui/pages/EventsPage/EventsPage.html';

Template.EventsPage.onCreated(function() {
    const tpl = this;
    tpl.autorun(function() { 
       tpl.subscribe('events');  
    });
})

Template.EventsPage.helpers({
    events: function() {
        return Events.find();
    }
});