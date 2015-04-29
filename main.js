$(function() {
  var todaysCoffees = 0
  var cupHeight = 310
  var fillPerCup = 50
  var today = new Date().setHours(0,0,0,0)
  var fbRef = new Firebase("https://keathley-caffeine.firebaseio.com/")
  var coffeeRef = fbRef.child('coffees')

  $('.cup').click(function() {
    coffeeRef.push({
      createdAt: Firebase.ServerValue.TIMESTAMP
    });
  });

  coffeeRef
    .orderByChild('createdAt')
    .startAt(today)
    .on('child_added', function(snapshot) {
      todaysCoffees += 1

      $( '.js-coffee-fill' ).css('top', function(test) {
        return test + ( cupHeight - fillPerCup*todaysCoffees )
      });
    });
});
