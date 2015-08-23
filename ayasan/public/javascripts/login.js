// require("/parse.js");
// Parse.initialize("D62So7GSAmpKrat7pk72fmJR0BEKFGIgvIR8LQ6t", "7J4ekHlMMSy0wBgh8ERaTzthK6T7WtFgz7hbRBnW");


$('#submit').click(function (e) {
    // custom handling here
    $('.alert').hide();
    doLogin();
    e.preventDefault();
});

var currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
    var query = new Parse.Query(Parse.User);
    query.get(currentUser.objectId, {
      success: function(userAgain) {
        // console.log(userAgain);
        if (userAgain.get("staff_id") !== null) {
          window.location.replace("/dashboard");
        } else {
          // alert("Your are not staff. Please contact administrator.");
          // window.location.replace("/login");
        }
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        // alert("Your are not staff. Please contact administrator.");
        // window.location.replace("/login");
      }
    });

} else {
    // show the signup or login page
}

function doLogin() {
  var email = $( "#inputEmail" ).val();
  var password = $( "#inputPassword" ).val();
  console.log("doLogin",email, password);
  Parse.User.logIn(email, password, {
    success: function(user) {
      // Do stuff after successful login.
      console.log(user);
      if (user.get("staff_id")) {
        $('.alert').hide();
        window.location.replace("/dashboard");
      } else {
        $('.alert').show();
        $('.alert-text').html("Your are not staff. Please contact administrator.");
      }
    },
    error: function(user, error) {
      // The login failed. Check error to see why.
      console.log(error);
      $('.alert').show();
      $('.alert-text').html(error.message);
    }
  });
}
