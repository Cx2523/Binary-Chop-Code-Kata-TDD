describe('Binary search function', function(){
  describe('Input data validation', function(){
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

  describe('Valid input cases', function(){
    it('should always return an integer greater than or equal to -1', function(){
    });

    it('should return -1 if the array is empty', function(){
      expect(chop(3, [])).toEqual(-1);
    });

    it('should return -1 if the target is not found', function(){
      expect(chop(12, [1, 2, 3, 5, 8, 9])).toEqual(-1);
      expect(chop(4, [1, 2, 3, 5, 8, 9])).toEqual(-1);
      expect(chop(-1, [1, 2, 3, 5, 8, 9])).toEqual(-1);
    });

    it('should return the index of the first occurence of the target', function(){
      expect(chop(3, [1, 2, 3, 5, 8, 9])).toEqual(2);
      expect(chop(9, [1, 2, 3, 5, 8, 9])).toEqual(5);
      expect(chop(1, [1, 2, 3, 5, 8, 9])).toEqual(0);
      expect(chop(2, [1, 2, 3, 5, 8, 9])).toEqual(1);
      expect(chop(5, [1, 2, 3, 5, 8, 9])).toEqual(3);
      expect(chop(8, [1, 2, 3, 5, 8, 9])).toEqual(4);

    });
  });

});
