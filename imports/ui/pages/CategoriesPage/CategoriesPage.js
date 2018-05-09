import Categories from '/imports/api/categories/categories.js';
import { Template } from 'meteor/templating';
import '/imports/ui/pages/CategoriesPage/CategoriesPage.html';

Template.CategoriesList.onCreated(function() {
    const tpl = this;
    tpl.autorun(function() { 
       tpl.subscribe('categories');  
    });
});

Template.AddCategoryForm.onRendered(function() {
    $('input').focus();
});

Template.AddCategoryForm.events({ 
    'submit .add-category': function(event, template) {
        event.preventDefault();
        const target = event.target;
        const value = target.text.value;
        Categories.insert({name: value});
        target.text.value = "";
    } 
});

Template.CategoriesList.helpers({
    categories: function() {
        return Categories.find({}, {sort: { name: 1}});
    }
});

Template.Category.events({
    'click .delete'(event, template) {
        Categories.remove({_id: this._id});
    },
    'click .category'(event, template) {
        template.editing.set(true);
    },
    'keypress input': function(event, template){
        if(event.keyCode === 13){
            event.preventDefault();
            const target = event.target;
            const value = target.value;
            Categories.update({_id: this._id}, {$set: {name: value}});
            template.editing.set(false);
        }
        else if(event.keyCode === 27){
            template.editing.set(false);
        }
      }
});
Template.Category.onCreated(function() {
    this.editing = new ReactiveVar(false);
});
Template.Category.helpers({
    editing: function() {
        return Template.instance().editing.get();
    }
});