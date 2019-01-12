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

