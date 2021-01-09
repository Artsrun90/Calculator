$(document).ready(function(){

    $('#9').click(function(){
        changeResault($(this).text());
    });
    $('#8').click(function(){
        changeResault($(this).text());
    });
    $('#7').click(function(){
        changeResault($(this).text());
    });
    $('#6').click(function(){
        changeResault($(this).text());
    });
    $('#5').click(function(){
        changeResault($(this).text());
    });
    $('#4').click(function(){
        changeResault($(this).text());
    });
    $('#3').click(function(){
        changeResault($(this).text());
    });
    $('#2').click(function(){
        changeResault($(this).text());
    });
    $('#1').click(function(){
        changeResault($(this).text());
    });
    $('#0').click(function(){
        changeResault($(this).text());
    });
    $('#dot').click(function(){
            changeResault($(this).text());      
    });

    $('#equal').click(function(){
        var resultarray = [];
        if (!($('#result').text() === '0')) {
        resultarray = $('#result').text().match(/-?\d+(?:\.\d+(?:[Ee][+-]?\d+)?)?|[-+×÷]/g); 
        console.log(resultarray);
        var index =1;
        var result = 0;
        var equalResulat = '';

        if ((resultarray.includes('+') || resultarray.includes('-')) && !(resultarray.includes('÷') || resultarray.includes('×'))) {
            while (resultarray.length !== 1) {
                if (resultarray[1] === "-") {
                    result = result + Number(resultarray[0]) - Number(resultarray[2]);                    
                } else {
                    result = result + Number(resultarray[0]) + Number(resultarray[2]);                     
                    console.log(Number(resultarray[2]))                   
                } 
                resultarray.splice(0, 3, `${result}`);
                console.log("++++++++++", resultarray)
                result = 0;

            }
        }

        if ((resultarray.includes('÷') || resultarray.includes('×')) && !(resultarray.includes('+') || resultarray.includes('-'))) {
            while (resultarray.length !== 1) {
                if (resultarray[1] === "÷") {
                    result = result + Number(resultarray[0]) / Number(resultarray[2]);                    
                } else {
                    result = result + Number(resultarray[0]) * Number(resultarray[2]);                     
                    console.log(Number(resultarray[2]))                   
                } 
                resultarray.splice(0, 3, `${result}`);
                result = 0;

            }
        }

        if ((resultarray.includes('÷') || resultarray.includes('×')) && (resultarray.includes('+') || resultarray.includes('-'))) {
            while (resultarray.includes('÷') || resultarray.includes('×')) {

                if (resultarray[index] === "÷") {
                    result = result + Number(resultarray[index - 1]) / Number(resultarray[index + 1]);
                    console.log("÷: ", result);
                } else if(resultarray[index] === "×") {
                    result = result + Number(resultarray[index - 1]) * Number(resultarray[index + 1]);
                    console.log("×: ", result);
                }else{
                    console.log("continue");
                    index += 2; 
                    continue;
                }
                resultarray.splice(index - 1, 3, `${result}`);
                console.log("resultarray-splice: ", resultarray);
                if (!(resultarray[index] === "÷" || resultarray[index] === "×")) {
                    index += 2;                    
                }
                result = 0;
                
            }
            
            console.log("else");
            while (resultarray.length !== 1) {
                if (resultarray[1] === "-") {
                    result = result + Number(resultarray[0]) - Number(resultarray[2]);                    
                } else {
                    result = result + Number(resultarray[0]) + Number(resultarray[2]);                     
                    console.log(Number(resultarray[2]))                   
                } 
                resultarray.splice(0, 3, `${result}`);
                console.log("++++++++++", resultarray)
                result = 0;

            }
        }

        }  
        equalResulat = $('#result').text() + ' =';
        $('#equalResulat').html(equalResulat);
        if (Number.isInteger(Number(resultarray[0]))) {
            resault(Number(resultarray[0]));            
        } else {
            resault(Number(resultarray[0]).toFixed(10));            
        }
    });
    
    function setBorderColor() {
        $(".result").css('border', '1px solid #4285F4');
            setTimeout( function(){
                $(".result").css('border', '1px solid #ccc');
            },1000);
    }

    $('#add').click(function(){
        if (checkLastElement()) {         
            if (!($('#result').text() === '0')) {
                var result = $('#result').text() + " + ".fontcolor('#4285F4');  
                $('#result').html(result); 
            }else{
                setBorderColor();
            }
        }else{
            setBorderColor();
        }
    });
    $('#subtract').click(function(){
        if (checkLastElement()) {
            if (!($('#result').text() === '0')) {
                var result = $('#result').text() + " - ".fontcolor('#4285F4');  
                $('#result').html(result); 
            }else{
                setBorderColor();
            }             
        }else{
            setBorderColor();
        }
    });

    $('#divide').click(function(){
        if (checkLastElement()) {
            if (!($('#result').text() === '0')) {
                var result = $('#result').text() + " ÷ ".fontcolor('#4285F4');  
                $('#result').html(result); 
            }else{
                setBorderColor();
            }             
        }else{
            setBorderColor();
        }
    });

    $('#multiply').click(function(){
        if (checkLastElement()) {
            if (!($('#result').text() === '0')) {
                var result = $('#result').text() + " × ".fontcolor('#4285F4');  
                $('#result').html(result); 
            }else{
                setBorderColor();
            }           
        }else{
            setBorderColor();
        }
    });
    
    function isFloat(element) {
        return element % 1 === 0;            
    }

   function checkLastElement() {
    var result = $('#result').text(); 
    var resultarray = result.match(/-?\d+(?:\.\d+(?:[Ee][+-]?\d+)?)?|[-+×÷.]/g); 
    var checkendevent = resultarray[resultarray.length - 1];
    if ((checkendevent === "÷") || (checkendevent === "×") || (checkendevent === "-") || (checkendevent === "+")) {
        return false;
    }else{
        return true;
    }
   }

    function changeResault(number) {
        var result = $('#result').text(); 
        var resultarray = result.match(/-?\d+(?:\.\d+(?:[Ee][+-]?\d+)?)?|[-+×÷.]/g); 
        var chsckentevent = resultarray[resultarray.length - 1];
        var checkdote = false;
        console.log("resultarray: ", resultarray);
        var allResult;
        if (result === '0') {
            if (number === '.') {
                $('#result').html(`0${number}`);
            } else {
                $('#result').html(number);                  
            }
        } else {

            if (number === '.') {
                if ((chsckentevent === "÷") || (chsckentevent === "×") || (chsckentevent === "-") || (chsckentevent === "+")) {
                    allResult = result + ' ' + '0.';
                    console.log("allResult: ", allResult)
                } else {
                    console.log("resultarray.length: ", resultarray.length)

                    for (let index = resultarray.length - 1; index > -1; index--) {
                        console.log("resultarray[index]: ", resultarray[index]);
                        if(resultarray[index] === '.' || !isFloat(resultarray[index])){
                            checkdote = true;
                            break;
                        }
                    }
                    
                    if (!checkdote) {
                        allResult = result + number;                    
                        console.log("resultarray: ", resultarray);
                        console.log("not included dote");
                    } else{
                        console.log("resultarray: ", resultarray);
                        console.log("included dote");
                        if (resultarray.includes('÷') || resultarray.includes('×') || resultarray.includes('-') || resultarray.includes('+')){
                            console.log("included operator");
                            var arrlen = resultarray.length-1;
                            var resaltPart =[];
                                while (resultarray[arrlen] !== '÷' || resultarray[arrlen] !== '×' || resultarray[arrlen] !== '-' || resultarray[arrlen] !== '+') {
                                            resaltPart.push(resultarray[arrlen]);
                                            arrlen--;
                                            console.log("while");
                                            console.log("while resaltPart: ", resaltPart);
                                            if (arrlen == 0) {
                                                break;
                                            }
                                }

                                console.log("resaltPart.some(isFloat)) ", resaltPart.some(isFloat))

                            if (!(resaltPart.includes('.') || !resaltPart.some(isFloat))) {
                                allResult = result + number;   
                                console.log("integer")                          
                            } else{
                                console.log("result: ", result);
                                allResult = result;
                                resaltPart =[];
                            }

                        }
                    }                    
                }

            }else{
                if ((chsckentevent === '.' || (typeof Number(chsckentevent) === "number" ) && !isNaN(number))) {
                    allResult = result + number;
                    console.log("number")
                }else{
                    allResult = result + " " + number;
                }
            }
            

            $('#result').html(allResult);             
            
        }
    }

    function resault(number) {
            $('#result').html(number);
    }

    $('#clearAll').click(function(){ 
            $('#result').html('0'); 
            $('#equalResulat').html('0'); 
    });
    $('#clear').click(function(){ 
        var res = '';
        var result = $('#result').text(); 
        console.log("result1 ", result);
        var resultarray = result.match(/-?\d+(?:\.\d+(?:[Ee][+-]?\d+)?)?|[-+×÷.]/g); 
        var lastElement = resultarray[resultarray.length-1];
        
       

            if ((lastElement === "÷") || (lastElement === "×") || (lastElement === "-") || (lastElement === "+")) {
                resultarray.pop();
                
            } else {
                var lastElementArray = lastElement.split("");
                var lastElementString = "";
                lastElementArray.pop();
                for (let index = 0; index < lastElementArray.length; index++) {
                    lastElementString = lastElementString + `${lastElementArray[index]}`;            
                }
                resultarray.pop();
                resultarray.push(lastElementString);
            }
            
            for (let index = 0; index < resultarray.length; index++) {
                res = res + `${resultarray[index]}` + ' ';            
            }
            
            if (resultarray[0] === "") {
                res = '0';
                $('#result').html(`${res}`); 
            } else {
                $('#result').html(`${res}`); 

            }
    });
});