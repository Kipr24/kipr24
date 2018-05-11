const authenticated = FlowRouter.group({});

authenticated.route('/venue-types', {
  name: 'VenueTypes',
  action() {
    BlazeLayout.render('MainLayout', {
      content: 'VenueTypesPage'
    });
  }
});

authenticated.route('/events/new', {
  name: 'Event.Add',
  action() {
    BlazeLayout.render('MainLayout', {
      content: 'NewEventPage'
    });
  }
});

authenticated.route('/venues/new', {
  name: 'Venue.Add',
  action() {
    BlazeLayout.render('MainLayout', {
      content: 'NewVenuePage'
    })
  }
});

const exposed = FlowRouter.group();

exposed.route('/', {
    name: 'Welcome',
    action() {
      BlazeLayout.render('WelcomeLayout', {
        content: 'WelcomePage'
      })
    }
});

exposed.route('/events', {
  name: 'Event.List',
  action() {
    BlazeLayout.render('MainLayout', {
      content: 'EventsPage'
    })
  }
})

exposed.route('/events/:eventId', {
  name: 'Event.Show',
  action(params) {
    BlazeLayout.render('MainLayout', {
      content: 'EventPage', eventId: params.eventId
    })
  }
});

exposed.route('/venues', {
  name: 'Venue.List',
  action() {
    BlazeLayout.render('MainLayout', {
      content: 'VenuesPage'
    })
  }
});
