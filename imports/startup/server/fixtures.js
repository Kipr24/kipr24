import Events from '/imports/api/events/events';
import {Fake} from 'meteor/anti:fake';

Meteor.startup(function () {
	if (Events.find().count() === 0) {
		for (i = 0; i <= 20; i++) {
			Events.insert({
				name: Fake.sentence(3),
				description: Fake.paragraph(3)
			});
		}
	}
});