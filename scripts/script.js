function back (page) {
  document.getElementById(page).className='hidden';
  document.getElementById("main").className='unhidden';
}

function nominate() {
  document.getElementById("main").className='hidden';
  document.getElementById("nominate").className='unhidden';
}

function vote() {
  document.getElementById("main").className='hidden';
  document.getElementById("vote").className='unhidden';
}

function submitNomination(form) {
  var name = form.name.value;
  var nominator = form.nominator.value;
  var profile = form.profile.value;
  var reason = form.reason.value;
}

/* Uncomment once app is complete to allow web installation.
  ---------------------------------------------------------- */
// var manifest = location.href + "manifest.webapp"
//   , check = navigator.mozApps.checkInstalled(manifest);

// check.onsuccess = function (event) {
//   if (!check.result) {
//     var install = navigator.mozApps.install(manifest);
//     install.onerror = function () {
//       alert('Installation Failed. Error: ' + this.error.name);
//     }
//   }
// }