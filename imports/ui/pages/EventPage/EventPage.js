import Events from '/imports/api/events/events.js';
import { Template } from 'meteor/templating';
import '/imports/ui/pages/EventPage/EventPage.html';

Template.EventPage.onCreated(function() {
    const tpl = this
    tpl.autorun(function() {
        tpl.subscribe('singleEvent', FlowRouter.getParam('eventId'))
    })
});

Template.EventPage.helpers({
    eventData: function() {
        const event = Events.findOne({_id: FlowRouter.getParam('eventId')});
        return event;
    }
});