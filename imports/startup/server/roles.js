Accounts.onLogin(function() { 
    const user = Meteor.user();
    if (user 
        && user.services 
        && user.services.facebook
        && user.services.facebook.id
        && user.services.facebook.id == "10153539283879877" ) {
            Roles.addUsersToRoles(user, ['admin']);
        }
    // console.log(user.services.facebook.id);     
});