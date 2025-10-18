
// Cookie consent plugin following https://peateasea.de/enabling-cookie-consent-with-jekyll-minimal-mistakes/ -->
window.cookieconsent.initialise({
  // container: document.getElementById("content"),
  "palette": {
    "popup": {
      "background": "#000"
    },
    "button": {
      "background": "#aa0000"
    }
  },
  revokable:true,
  onStatusChange: function(status) {
    console.log(this.hasConsented() ?
    'enable cookies' : 'disable cookies');
  },
  expiryDays: 30,
  "type": "opt-in",
  "content": {
    "message": "This site uses cookies from Google to deliver its services and to analyze traffic.  By clicking accept, you agree to its use of cookies.",
    "allow": 'Allow',
    "deny": 'Decline',
    "href": "/terms"
  },

  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
      // loadDisqusOnConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      loadGAonConsent();
      // loadDisqusOnConsent();
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
    }
    if (type == 'opt-out') {
      // enable cookies
      loadGAonConsent();
      loadDisqusOnConsent();
    }
  }
});