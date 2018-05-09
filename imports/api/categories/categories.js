// /imports/api/categories/categories.js
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

const Categories = new Mongo.Collection('categories');

const CategoriesSchema = new SimpleSchema({
    name: {
        type: String,
        max: 20,
        label: 'Name'
    }
}, {tracker: Tracker});

Categories.attachSchema(CategoriesSchema);

Categories.allow({ 
    insert: function() { 
        return true; 
    }, 
    update: function() { 
        return true; 
    }, 
    remove: function() { 
        return true; 
    } 
});

export default Categories;