/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getNum = function(input) {
    if(/\s/.test(input)) return 'invalid number'
    if(/\d+/.test(input) && /^[a-zA-Z]/.test(input)) return 'invalid number'
    if(/\d+/.test(input) && !/^\d/.test(input)) return 'invalid number'
    let result = input.split(/[a-zA-z]/)[0]
    if(result.includes('/')) {
      result = result.split('/')
      if(result.length > 2) return 'invalid number'
      result = result[0] / result [1]
      if(result === Infinity) return 'invalid number'
    }
    return result === '' ? 1 : result > 0 ? +result : 'invalid number'
  };
  
  this.getUnit = function(input) {
    if(!/[a-zA-Z]$/.test(input)) return 'invalid unit'
    const validUnits = ['gal', 'l', 'km', 'mi', 'lbs', 'kg']
    let result = input.match(/[a-zA-Z]+/)[0];
    if(!validUnits.includes(result.toLowerCase())) return 'invalid unit'
    return result.length > 1 ? result.toLowerCase() : result.toUpperCase()
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case 'gal':
        return 'L';
      case 'L':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km'
      case 'km':
        return 'mi';
    };
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case 'gal':
        return 'gallons'
      case 'L':
        return 'liters'
      case 'lbs':
        return 'pounds'
      case 'kg':
        return 'kilograms'
      case 'mi':
        return 'miles'
      case 'km':
        return 'kilometers'
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit) {
      case 'gal':
        return +(initNum * galToL).toFixed(5);
      case 'L':
        return +(initNum / galToL).toFixed(5);
      case 'lbs':
        return +(initNum * lbsToKg).toFixed(5);
      case 'kg':
        return +(initNum / lbsToKg).toFixed(5);
      case 'mi':
        return +(initNum * miToKm).toFixed(5);
      case 'km':
        return +(initNum / miToKm).toFixed(5);
    };
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  };
}

module.exports = ConvertHandler;
