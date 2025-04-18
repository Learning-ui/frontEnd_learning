let work = prompt('what you want to do (calci / nothing): ');

if (typeof(work) === 'string') {
    console.log('OMG');
    if (work == 'calci') {
        var h1 = document.createElement('h1');
        h1.innerText = work;
        document.body.innerText = '';
        document.body.append(h1);

        let num1 = +prompt('enter number 1: ');
        var b1 = document.createElement('p');
        b1.innerText = `first number is : ${num1}`;
        document.body.append(b1);

        let op = prompt('enter the operation(+ , -): ');
        var b2 = document.createElement('p');
        b2.innerText = `operation is : ${op}`;
        document.body.append(b2);

        let num2 = Number(prompt('enter number 2: '));
        var b3 = document.createElement('p');
        b3.innerText = `first number is : ${num2}`;
        document.body.append(b3);

        var ans = document.createElement('p');
        if (op == '+') {
            ans.innerText = `answer for ${num1} + ${num2} = ${num1 + num2}`;
            document.body.append(ans);
        }
        else {
            ans.innerText = `answer for ${num1} - ${num2} = ${num1 - num2}`;
            document.body.append(ans);
        }
    }
    else if (work == 'nothing') {
        var h1 = document.createElement('h1');
        h1.innerText = work;
        document.body.innerText = '';
        document.body.append(h1);

        var b1 = document.createElement('p');
        b1.innerText = 'eat 5 star do nothing';
        b1.innerHTML += '<br>eat 5 star do nothing * twice';
        document.body.append(b1);

        var b2 = document.createElement('p');
        b2.innerText = 'Also... take a nap!';
        document.body.append(b2);
    }
    else {
        console.log ('can\'t even do a simple task. dumb!')
    }
}
// else {  // no need. everything string.
//     console.log ('can\'t even do a simple task. dumb!')
// }