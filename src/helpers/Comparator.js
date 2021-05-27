/*----------------------------------------------------------
 |   Comparator
 *----------------------------------------------------------
 |
 |   Api
 |   -> defaultCompareFunction
 |      @param {(string|number)} a
 |      @param {(string|number)} b
 |      @returns {number}
 |   -> equal
 |      @param {*} a
 |      @param {*} b
 |      @return {boolean}
 |   -> lessThan
 |      @param {*} a
 |      @param {*} b
 |      @return {boolean}
 |   -> greaterThan
 |      @params {*} a
 |      @params {*} b 
 |      @returns {boolean}
 |   -> lessThanOrEqual
 |      @params {*} a
 |      @params {*} b
 |      @returns {boolean}
 |   -> greaterThanOrEqual
 |      @params {*} a
 |      @params {*} b
 |      @returns {boolean}
 |   -> reverse ("reverse comparison order")
 |
 */
 
class Comparator 
{
  static make(...parameters)
  {
    return new this(...parameters)
  }

  constructor(compareFunction) 
  {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(a, b) 
  {
    if (a === b) return 0
    
    return a < b ? -1 : 1
  }

  equal(a, b) 
  {
    return this.compare(a, b) === 0
  }

  lessThan(a, b) 
  {
    return this.compare(a, b) < 0
  }

  greaterThan(a, b) 
  {
    return this.compare(a, b) > 0
  }

  lessThanOrEqual(a, b) 
  {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThanOrEqual(a, b) 
  {
    return this.greaterThan(a, b) || this.equal(a, b)
  }

  reverse() 
  {
    const compareOriginal = this.compare
    this.compare = (a, b) => compareOriginal(b, a)
  }
}

module.exports = Comparator