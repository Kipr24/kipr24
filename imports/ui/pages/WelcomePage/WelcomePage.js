import Events from '/imports/api/events/events';
import { Template } from 'meteor/templating';

import '/imports/ui/pages/WelcomePage/WelcomePage.html';

Template.WelcomePage.onCreated(function () {
  const tpl = this
  tpl.autorun(function() {
    tpl.subscribe('top4')
  });
});

Template.WelcomePage.helpers({
  events: function () {
    return Events.find();
  }
});
