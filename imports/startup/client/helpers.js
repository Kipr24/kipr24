import { Template } from 'meteor/templating';

Template.registerHelper('truncate', function(text) {
    return text.substring(0, 120);
});