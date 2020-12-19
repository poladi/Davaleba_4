    // Exercise - Closure and the Sandwich Calculator
    (function() {

        const addBread = function() {
            console.log('Now Adding Bread')
        }
    
        const spreadSoyaMargarine = function() {
            console.log('Now spreading the soya marganine')
        }
    
        const addJam = function(){
            console.log('Now Adding Jam')
        }
    
    
        window.makeSandwich = function() {
            addBread();
            spreadSoyaMargarine();
            addJam()
        }
    
    })();
    
    makeSandwich()

    
    // Exercise - Guess the output
// 1. output: 12
var a = 12;
(function() {
  alert(a);
})();


//2. output: 12
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();

//3. output: 12
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();

//4. output: 10
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();

//5. output: 12
var a = 10;
var x = (function() {
  (function() {
    a = 12; // <<< look carefully at this line.
  })();
  return (function() {
    alert(a);
  });
})();
x(); 

//6. output: 15
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();

