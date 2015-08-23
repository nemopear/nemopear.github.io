// require('parse.js');

// Parse.initialize("D62So7GSAmpKrat7pk72fmJR0BEKFGIgvIR8LQ6t", "7J4ekHlMMSy0wBgh8ERaTzthK6T7WtFgz7hbRBnW");

var currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
    // console.log(currentUser);
    if (currentUser) {
      // Get the user from a non-authenticated method
        var query = new Parse.Query(Parse.User);
        // console.log(currentUser.id);
        query.get(currentUser.id, {
          success: function(userAgain) {
            // console.log(userAgain);
            if (userAgain.get("staff_id") !== null) {

            } else {
              alert("Your are not staff. Please contact administrator.");
              window.location.replace("/login");
            }
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            console.error(error);
            alert("Error authenication.");
            window.location.replace("/login");
          }
        });
    }
    $('#username-label').html(currentUser.get("first_name")+"<span class='caret'></span>");
} else {
    // show the signup or login page
    window.location.replace("/login");
}

$('#logout').click(function (e) {
    // custom handling here
    Parse.User.logOut();
    window.location.replace("/");
    e.preventDefault();
});
