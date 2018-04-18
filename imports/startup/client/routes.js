const landing = FlowRouter.group();

landing.route('/', {
    name: 'Welcome',
    action() {
      BlazeLayout.render('WelcomeLayout', {content: 'WelcomePage'})
    }
});
