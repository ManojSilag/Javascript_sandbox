// Template Literls
// 16-12-2018

        const name = 'John';
        const age = 30;
        const job = 'Web Developer';
        const city = 'Pune';
        let html

        // Without templete String (es5)

        html = '<ul><li>Name: '+ name + '</li><li>Age: '+ age    +'<li>Job: '+job+'<li>City: '+ city+' </ul>';

        html='<ul>'+
            '<li>Name: '+ name + '</li>'+
            '<li>Age: '+ age + '</li>'+
            '<li>Job: '+ job + '</li>'+
            '<li>City: '+ city + '</li>'+
            '</ul>'

        document.body.innerHTML = html;

        function hello(){
            return 'hello';
        }

        //With template literal/strings (es5)
        html = `
            <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${2+4}</li>            //evaluating expression
            <li>${hello()}</li>         //calling function
            <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
            </ul>
        `;
        document.body.innerHTML = html;