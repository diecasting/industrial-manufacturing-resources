(function () {
  'use strict';
  var form = document.getElementById('rfq-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var btn = form.querySelector('.submit-btn');
    var original = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending…';
    }

    fetch(form.getAttribute('action'), {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        form.hidden = true;
        var ok = document.getElementById('rfq-success');
        if (ok) {
          ok.hidden = false;
          ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        throw new Error('Formspree returned status ' + res.status);
      }
    }).catch(function () {
      if (btn) {
        btn.disabled = false;
        btn.textContent = original;
      }
      window.alert('Sorry, something went wrong sending your request. Please try again.');
    });
  });
})();
