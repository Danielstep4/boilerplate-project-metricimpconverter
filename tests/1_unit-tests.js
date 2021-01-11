/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
// DONE!
let convertHandler = new ConvertHandler();
// DONE!
suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '0.2L';
      assert.equal(convertHandler.getNum(input),0.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '1/2L';
      assert.equal(convertHandler.getNum(input),0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '1/5.2L';
      assert.equal(convertHandler.getNum(input),0.1923076923076923);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '1/5.2/3L';
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'L';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    // DONE!
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(element) {
          if(element === 'l' || element === 'L') {
            // expect(ConvertHandler.getUnit(element)).to.be(element.toUpperCase())
            assert.equal(convertHandler.getUnit(element), element.toUpperCase())
          }else {
            // expect(ConvertHandler.getUnit(element)).to.be(element.toLowerCase())
            assert.equal(convertHandler.getUnit(element), element.toLowerCase())
        }
      });
      done();
    });
    // DONE!
    test('Unknown Unit Input', function(done) {
      let input = 'whatever'
      let output = 'invalid unit'
      assert.equal(convertHandler.getUnit(input), output)
      done();
    });  
    
  });
  // DONE!
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','L','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  // DONE!
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','L','mi','km','lbs','kg'];
      let expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms']
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  //DONE!
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [5, 'L'];
      let expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [5, 'mi'];
      let expected = 8.04670;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [5, 'km'];
      let expected = 3.10686;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [5, 'lbs'];
      let expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [5, 'kg'];
      let expected = 11.02312;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});
