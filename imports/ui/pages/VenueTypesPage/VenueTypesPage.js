import { Template } from 'meteor/templating';
import VenueTypes from '/imports/api/venue_types/venue_types.js';
import '/imports/ui/pages/VenueTypesPage/VenueTypesPage.html';

Template.VenueTypesList.onCreated(function() {
    const tpl = this;
    tpl.autorun(function() { 
       tpl.subscribe('venue_types');  
    });
});

Template.AddVenueTypeForm.onRendered(function() {
    $('input').focus();
});

Template.AddVenueTypeForm.events({ 
    'submit #add-venue-type': function(event, template) {
        event.preventDefault();
        const target = event.target;
        const value = target.text.value;
        VenueTypes.insert({name: value});
        target.text.value = "";
    } 
});

Template.VenueTypesList.helpers({
    venueTypes: function() {
        return VenueTypes.find({}, {sort: { name: 1}});
    }
});

Template.VenueType.events({
    'click .delete'(event, template) {
        VenueTypes.remove({_id: this._id});
    },
    'click .venue-type'(event, template) {
        template.editing.set(true);
    },
    'keypress input': function(event, template){
        if(event.keyCode === 13){
            event.preventDefault();
            const target = event.target;
            const value = target.value;
            VenueTypes.update({_id: this._id}, {$set: {name: value}});
            template.editing.set(false);
        }
        else if(event.keyCode === 27){
            template.editing.set(false);
        }
      }
});

Template.VenueType.onCreated(function() {
    this.editing = new ReactiveVar(false);
});

Template.VenueType.helpers({
    editing: function() {
        return Template.instance().editing.get();
    }
});
