function myFunction(x, y) {
    console.log(x + ' multiplied by ' + y + ' is equal to: ' + x * y);
}

module.exports = {
  multiply: function(x, y) {
    myFunction(x, y);
  }
};