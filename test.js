describe("problem01", function () { 
    it("Дано дійсні числа x, y. Отримати max (x, y);", function () {           
        assert.equal(problem01(10, 20), 20);
        assert.equal(problem01(20, 10), 20);        
    });
});

describe("problem02", function () {

    it("Дано дійсні числа x, y, z. Отримати: max (x, y, z)", function () {        
        assert.equal(problem02(10, 20, 30), 30);
        assert.equal(problem02(20, 10, 30), 30);
        assert.equal(problem02(30, 20, 10), 30);                        
    });


});

describe("problem03", function () {

    it("Дано дійсні числа x, y, z. Обчислити max (x + y + z, xyz);", function () {        
        assert.equal(problem03(10, 2, 3), 60);
        assert.equal(problem03(10, -2, 3), 11);
        assert.equal(problem03(10, -2, 50), 58);                        
    });
});
describe("problem04", function () {

    it("Дано дійсні числа x, y, z. Обчислити min^2 (x + y + z/2, xyz) + 1;", function () {        
        assert.equal(problem04(2, 4, 6), 82);
        assert.equal(problem04(2, -4, 6), 2305);
        assert.equal(problem04(2, -4, 50), 160001);                        
    });
});

describe("problem05", function () {

    it("Дано дійсні числа a, b, c. Перевірити чи виконуються нерівності a<b<c;", function () {        
        assert.equal(problem05(2, 4, 6), true);
        assert.equal(problem05(2, -4, 6), false);
        assert.equal(problem05(2, -4, 50), false);                        
    });
});

describe("problem06", function () {

    it("Дано дійсні числа x, y. Обчислити z...", function () {        
        assert.equal(problem06(2, 4), 3);
        assert.equal(problem06(4, 2), 3);                
    });
});

describe("problem07", function () {

    it("Дано дійсні числа х, у. Замінити перше число нулем ...", function () {
        var res = problem07(10, 2);     
        assert.equal(res.x, 10);
        assert.equal(res.y, 2);

        res = problem07(2,10);     
        assert.equal(res.x, 0);
        assert.equal(res.y, 10); 
    });

});

describe("problem08", function () {

    it("Дано дійсні числа х, у (х ≠ у). Менше із цих двох чисел замінити їх пів сумою...", function () {
        var res = problem08(4, 10);     
        assert.equal(res.x, 7);
        assert.equal(res.y, 10);

        res = problem08(7,5);     
        assert.equal(res.x, 7);
        assert.equal(res.y, 6); 
    });

});

describe("problem09", function () {

    it("Дано три дійсні числа x,y,z. Піднести до квадрату ті, значення яких не від’ємні;", function () {
        var res=problem09(2,4,5);
        assert.equal(res.x, 4);
        assert.equal(res.y, 16); 
        assert.equal(res.z, 25); 
    });

    it("test2", function () {
        var res=problem09(2,4,-5);
        assert.equal(res.x, 4);
        assert.equal(res.y, 16); 
        assert.equal(res.z, -5); 
    });
    it("test3", function () {
        var res=problem09(2,-4,-5);
        assert.equal(res.x, 4);
        assert.equal(res.y, -4); 
        assert.equal(res.z, -5); 
    });

});

describe("problem10", function () {

    it("Дано дійсні числа a, b, c, d. Якщо a≤b≤c≤d, то кожне число замінити найбільшим із них...", function () {
        var res = problem10(2,4,6,8);     
        assert.equal(res.x, 8);
        assert.equal(res.y, 8);
        assert.equal(res.z, 8);
        assert.equal(res.w, 8);

        res = problem10(8,6,4,2);     
        assert.equal(res.x, 8);
        assert.equal(res.y, 6);
        assert.equal(res.z, 4);
        assert.equal(res.w, 2);

        res = problem10(6,2,4,8);     
        assert.equal(res.x, 6);
        assert.equal(res.y, 2);
        assert.equal(res.z, 4);
        assert.equal(res.w, 8);
    });

});

describe("problem11", function () {

    it("Дано дійсні числа х, у. Якщо х і у від’ємні, то кожне значення замінити його модулем...", function () {
        var res = problem11(-5,-8);     
        assert.equal(res.x, 5);
        assert.equal(res.y, 8);

        res = problem11(-5,8);     
        assert.equal(res.x, 5);
        assert.equal(res.y, 8);

        res = problem11(5,-8);     
        assert.equal(res.x, 5);
        assert.equal(res.y, 8);

        res = problem11(1.5,1.8);     
        assert.equal(res.x, 1.5);
        assert.equal(res.y, 1.8);
    });

});