console.log("tabs");
console.log("modal");

function onClick(e) {
        e.preventDefault();
        grecaptcha.ready(function() {
          grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
              // Add your logic to submit to your backend server here.
          });
        });
      }
var allowSubmit = false;

function capcha_filled () {
    allowSubmit = true;
}

function capcha_expired () {
    allowSubmit = false;
}

function check_if_capcha_is_filled (e) {
    if(allowSubmit) return true;
    e.preventDefault();
    alert('Fill in the capcha!');
}

  var onloadCallback = function() {
    grecaptcha.render('cap', {
      'sitekey' : '6Le-fs0ZAAAAAMYNts0on_G1RvZgQECNjYY3MVsh',
      'callback': capcha_filled,
      'expired-callback': capcha_expired,
    });
  };