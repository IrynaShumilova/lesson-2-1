describe("problem01", function () {

    it("Дано дійсні числа x, y. Отримати max (x, y);", function () {        
      var a = 10;
      var b = 20;
      var max;
      if  (a<b) {
          max = b;
      }  else {
          max = a;
      }  
    });

});

describe("problem02", function () {

    it("Дано дійсні числа x, y, z. Отримати: max (x, y, z)", function () {     
        var a = 10;
        var b= 20;
        var c= 30;  
        var max;
        if (a > b > c){
            max  = a;
        } if (b > a > c){
            max  = b;
        } else{
            max = c;
        }
        });                           
    });

describe("problem03", function () {

    it("Дано дійсні числа x, y, z. Обчислити max (x + y + z, xyz);", function () {        
     var x = 10;
     var y = 2;
     var z = 3;
     var max;
     var res;
     var res1;
     res = (x+y+z);
     res1 = (x*y*z);
     if (res>res1){
         max = res;
     } else{
         max = res1;
     }

    });
});
describe("problem04", function () {

    it("Дано дійсні числа x, y, z. Обчислити min^2 (x + y + z/2, xyz) + 1;", function () {        
     var x = 2;
     var y = 4;
     var z = 6;
     var min, min2, res, res1;  
     res = (x+ y+ z/2);
     res1 = (x*y*z);
     if (res>res1){
         min = res1;
     } else{
         min = res;
     }
     min2 = res^2;
    });
});

describe("problem05", function () {

    it("Дано дійсні числа a, b, c. Перевірити чи виконуються нерівності a<b<c;", function () {        
       var a = 2;
       var b = 4;
       var c = 6;
       var res;
       if(a<b<c){
           res = true;
       } if(b<a<c){
           res= false;
       } else{
           res=false;
       }                      
    });
});

describe("problem06", function () {

    it("Дано дійсні числа x, y. Обчислити z...", function () {  
        var x = 2;
        var y = 3;
        var z;
        z = (x+y)/2;              
    });
});

describe("problem07", function () {

    it("Дано дійсні числа х, у. Замінити перше число нулем ...", function () {
     var x = 2;
     var y = 10;
     var res;
     if(x<y){
         x=0;
     } if(x>y){
         x = 0;
     }
     res=(x,y);

    });

});

describe("problem08", function () {

    it("Дано дійсні числа х, у (х ≠ у). Менше із цих двох чисел замінити їх пів сумою...", function () {
     var x = 5;
     var y = 10;
     var res;
     var sum;
     sum = (x+y)/2;
     if(x<y){
         x = sum;
     } else{
         y = sum;
     }
    });

});

describe("problem09", function () {

    it("Дано три дійсні числа x,y,z. Піднести до квадрату ті, значення яких не від’ємні;", function () {
     var x = 2;
     var y = 4;
     var z = 6;
     var res;
     if(x>=0, y>=0, z>=0) {
        x = x^2;
        y = y^2;
        z = z^2;
     } 
     res = (x,y,z);
    });

    it("test2", function () {
       var x = 2;
       var y = -4;
       var z = 5;
       var res;
       if(x>=0, y<0, z>=0){
           x = x^2;
           z = z^2;
       } 
       res = (x,y,z);
    });
    it("test3", function () {
     var x = 2;
     var y = -4;
     var z =-5;
     var res;
     if(x>=0, y<0, z<0){
         x = x^2;
     }
     res = (x,y,z);
    });

});

describe("problem10", function () {

    it("Дано дійсні числа a, b, c, d. Якщо a≤b≤c≤d, то кожне число замінити найбільшим із них...", function () {
       var a = 2;
       var b = 4;
       var c = 6;
       var d = 8;
       var res;
       if(d>=c>=b>=a){
         a=d;
         b=d;
         c=d;
       }
       res = (a,b,c,d);

       var a = 8;
       var b = 6;
       var c = 4;
       var d = 2;
       var res;
       if(a>=b>=c>=d){
        res = (a, b, c, d);
      }
      var a = 6;
      var b = 2;
      var c = 4;
      var d = 8;
      var res;
      if(a>=b>=c<=d){
       res = (a, b, c, d);
     }
    });

});

describe("problem11", function () {

    it("Дано дійсні числа х, у. Якщо х і у від’ємні, то кожне значення замінити його модулем...", function () {
       var x = 5;
       var y = -8
       if (x>=0, y<=0){
      return Math.abs(y);
    }
       var x = -5;
       var y = -8
       if (x<=0, y<=0){
       return Math.abs(x, y);
 }
      var x = -5;
      var y = 8;
      if (x<=0, y>=0){
      return Math.abs(x);
}
    });

});