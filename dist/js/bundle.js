(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyApp = function () {
  function MyApp() {
    _classCallCheck(this, MyApp);

    this.start();
  }

  _createClass(MyApp, [{
    key: "start",
    value: function start() {
      new HomePage();
    }
  }]);

  return MyApp;
}();

var HomePage = function () {
  function HomePage() {
    _classCallCheck(this, HomePage);

    this.initUI();
  }

  _createClass(HomePage, [{
    key: "initUI",
    value: function initUI() {
      document.write("<h1>Hello World</h1>");
      document.body.innerHTML += "<form>\n    Mail <br>\n    <input type=\"text\"><br><br>\n\n    Password <br>\n    <input type=\"text\"><br><br>\n    <button id=\"boutton\">Valider</button>\n    </form>";
    }
  }]);

  return HomePage;
}();

new MyApp();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYXBwL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0NNLEs7QUFFRixtQkFBZTtBQUFBOztBQUNiLFNBQUssS0FBTDtBQUNEOzs7OzRCQUVRO0FBQ1AsVUFBSSxRQUFKO0FBQ0Q7Ozs7OztJQUdDLFE7QUFFSixzQkFBZTtBQUFBOztBQUNiLFNBQUssTUFBTDtBQUNEOzs7OzZCQUVTO0FBQ1IsZUFBUyxLQUFULENBQWUsc0JBQWY7QUFDQSxlQUFTLElBQVQsQ0FBYyxTQUFkO0FBUUQ7Ozs7OztBQUlILElBQUksS0FBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmNsYXNzIE15QXBwIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICBuZXcgSG9tZVBhZ2UoKTtcbiAgICB9XG59XG5cbmNsYXNzIEhvbWVQYWdlIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pbml0VUkoKTtcbiAgfVxuXG4gIGluaXRVSSAoKSB7XG4gICAgZG9jdW1lbnQud3JpdGUoXCI8aDE+SGVsbG8gV29ybGQ8L2gxPlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBgPGZvcm0+XG4gICAgTWFpbCA8YnI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PGJyPjxicj5cblxuICAgIFBhc3N3b3JkIDxicj5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48YnI+PGJyPlxuICAgIDxidXR0b24gaWQ9XCJib3V0dG9uXCI+VmFsaWRlcjwvYnV0dG9uPlxuICAgIDwvZm9ybT5gXG4gIH1cblxufVxuXG5uZXcgTXlBcHAoKTtcbiJdfQ==
