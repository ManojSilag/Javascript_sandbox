// Regular expressions - Evaluation Functions
//12-1-2019

    let re;
    re = /hello/;
    re = /hello/i; //i = case insensitive
    //re = /hello/g; //i = GLobal search


    console.log(re);
    console.log(re.source);

    //exec() - return result in an array or null
        //const result = re.exec('    ello world hello');
        const result = re.exec('hellooo world');

        console.log(result);
        console.log(result[0]);
        console.log(result.index);
        console.log(result.input);

    // test() - Returns true or false
        const result1 = re.test('Hello');
        console.log(result1);

    //match()- Return result array or null
        const str = 'Hello There';
        const result2 = str.match(re);
        console.log(result2);

    //search() -Returns index of the first match & if not found returns -1
        const str1 = 'Manoj Hello There';
        const result3 = str1.search(re);
        console.log(result3);

    //replace() - Return new string with some or al matches of a pattern
        const str2 = 'Hello There';
        const newStr = str2.replace(re, 'Hi');
        console.log(newStr);

/Regular expression- Metacharacter symbols
//                  - character Sets and Quantifiers
//13-1-2019

    let re;
    //Literal characters
    re = /hello/;
    re = /hello/i;

    //Metacharacter symbols
    re=/^h/i;  //Must start with
    re=/world$/i;  //Must end with
    re=/^hello$/i;  //Must begin and end with
    re=/h.llo/i;  //Matches any ONe character
    re=/h*llo/i;  //Matches any character 0 or more times
    re=/gre?a?y/i;  //Optional charater here if e or a
    re=/gre?a?y\?/i;  //Escape charater 

    //Brackets [] - character Sets
    re =/gr[ae]y/i; //Must be an a or e
    re =/[GF]ray/i; //Must be an G or F
    re =/[^GF]ray/i; //Match anything except a G or F
    re =/[A-Z]ray/; //Match any UpperCase letter
    re =/[a-z]ray/; //Match any lowerCase letter
    re =/[A-Za-z]ray/; //Match any  letter
    re = /[0-9][0-9]ray/; //Match any digit

    //Braces {} - Quantifiers
    re = /Hel{2}o/i;  //ust occur exactly {m} amount times
    re = /Hel{2,4}o/i;  //ust occur exactly {m} amount times
    re = /Hel{2,}o/i;  //ust occur at least {m} times

    //Parenthesis () - grouping
    re = /^([0-9]x){3}$/

    //String to match
    const str = '0x1x3x';

    //exec() result
    const result = re.exec(str);
    console.log(result);


    function reTest(re,str){
        if(re.test(str)){
            console.log(`${str} matched ${re.source}`);
        } else{
            console.log(`${str} does not match ${re.source}`);
        }
    }
    reTest(re, str);
