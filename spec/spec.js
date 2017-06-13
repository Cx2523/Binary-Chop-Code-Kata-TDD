describe('Binary search function', function(){
  describe('should receive two parameters else', function(){
    it('should throw an error', function(){
      expect(function(){ chop(); }).toThrow();
      expect(function(){ chop(1); }).toThrow();
      expect(function(){ chop(1, [], 1); }).toThrow();
    });
  });

  describe('should throw an error if the first argument', function(){
    it('is not a number', function(){
      expect(function(){ chop('a', []); }).toThrow();
      expect(function(){ chop([], []); }).toThrow();
      expect(function(){ chop({}, []); }).toThrow();
      expect(function(){ chop(true, []); }).toThrow();
    });
    it('is not an integer', function(){
      expect(function(){ chop(1.2, []) }).toThrow()
    });
  });

  describe('should throw an error if the second argument', function(){
    it('is not an array', function(){
      expect(function(){ chop(1, 1)}).toThrow();
      expect(function(){ chop(1, 'a')}).toThrow();
      expect(function(){ chop(1, {})}).toThrow();
    });
    it('is not an array of numbers', function(){
      expect(function(){ chop(1, [1, 2, 'a'])}).toThrow();
      expect(function(){ chop(1, [{}, 2, 'a'])}).toThrow();
      expect(function(){ chop(1, [[], 2, 'a'])}).toThrow();
      expect(function(){ chop(1, [null, 2, 'a'])}).toThrow();
    });
    it('is not an array of integers',function(){
      expect(function(){ chop(1, [1, 2, 2.5])}).toThrow();
    });
    it('is not sorted', function(){
      expect(function(){ chop(1, [1, 3, 2])}).toThrow();
      expect(function(){ chop(1, [4, 3, 2, 1])}).toThrow();
    });
  });

});


// var inputSpy = spyOn(window, 'chop');
// expect(chop).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(String));
// // expect(chop.calls.argsFor(0)[0]).toEqual(jasmine.any(Number));



//expect(chop).not.toHaveBeenCalledWith(jasmine.any(Number)).toThrow();
