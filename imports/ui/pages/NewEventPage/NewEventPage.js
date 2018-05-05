import { Template } from 'meteor/templating';
import '/imports/ui/pages/NewEventPage/NewEventPage.html';
import Events from '/imports/api/events/events.js';
import { AutoForm } from 'meteor/aldeed:autoform';

Template.NewEventPage.helpers({
    data() {
        return Events;
    }
});

AutoForm.hooks({
    insertEventForm: {
        after: {
            insert: function (insertDoc, updateDoc, currentDoc) {
                FlowRouter.go('/events')
            }
          }
    }
});
