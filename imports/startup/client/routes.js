const authenticated = FlowRouter.group({});

authenticated.route('/events/new', {
  name: 'Event.Add',
  action() {
    BlazeLayout.render('MainLayout', {
      content: 'NewEventPage'
    })
  }
})

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

