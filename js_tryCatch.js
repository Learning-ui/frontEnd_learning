try {
    console.log(a + b)
    // throw new ReferenceError();
} catch (err) {
    console.log(err);
    console.log("there was an error");
    console.log("the error was saved in the error log");
}

console.log("My program does not stop");