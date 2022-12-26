const input = document.getElementById('input');
const output = document.getElementById('output');
const btn_1 = document.getElementById('btn_1');
const btn_2 = document.getElementById('btn_2');
const btn_3 = document.getElementById('btn_3');
const btn_4 = document.getElementById('btn_4');
const btn_5 = document.getElementById('btn_5');
const btn_6 = document.getElementById('btn_6');
const btn_7 = document.getElementById('btn_7');
const btn_8 = document.getElementById('btn_8');
const btn_9 = document.getElementById('btn_9');
const btn_0 = document.getElementById('btn_0');
const btn_ac = document.getElementById('btn_ac');
const btn_cross = document.getElementById('btn_cross');
const btn_dot = document.getElementById('btn_dot');
const btn_plus = document.getElementById('btn_plus');
const btn_substraction = document.getElementById('btn_substraction');
const btn_multiplication = document.getElementById('btn_multiplication');
const btn_division = document.getElementById('btn_division');
const btn_equal = document.getElementById('btn_equal');
//button function declaration
    btn_1.addEventListener('click',function(){
        input.value += 1;
    })
    btn_2.addEventListener('click',function(){
        input.value += 2;
    })
    btn_3.addEventListener('click',function(){
        input.value += 3;
    })
    btn_4.addEventListener('click',function(){
         input.value += 4;
    })
    btn_5.addEventListener('click',function(){
        input.value += 5;

    })
    btn_6.addEventListener('click',function(){
        input.value += 6;
    })
    btn_7.addEventListener('click',function(){
        input.value += 7;
    })
    btn_8.addEventListener('click',function(){
        input.value += 8;
    })
    btn_9.addEventListener('click',function(){
        input.value += 9;
    })
    btn_ac.addEventListener('click',function(){
        input.value = null;
        output.value = null;
    })
    btn_cross.addEventListener('click',function(){
        input.value= null
    })
    btn_dot.addEventListener('click',function(){
        input.value += '.';
    })
    btn_0.addEventListener('click',function(){
        input.value += '0';
    })
    //operator button declaration
    btn_plus.addEventListener('click',function(){
        input.value += '+';
    })
    btn_substraction.addEventListener('click',function(){
        input.value += '-';
    })
    btn_multiplication.addEventListener('click',function(){
        input.value += '*';
    })
    btn_division.addEventListener('click',function(){
    input.value += '/';
    })
    btn_equal.addEventListener('click',function(){
        total = eval(input.value);
        output.value = 'result : '+ total ;
    })
    

