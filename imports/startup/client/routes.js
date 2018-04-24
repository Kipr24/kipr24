const exposed = FlowRouter.group();

exposed.route('/', {
    name: 'Welcome',
    action() {
      BlazeLayout.render('WelcomeLayout', {
        content: 'WelcomePage'
      })
    }
});

exposed.route('/events/:eventId', {
  name: 'Event.Show',
  action(params) {
    BlazeLayout.render('MainLayout', {
      content: 'EventPage', eventId: params.eventId
    })
  }
});