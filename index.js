function receivesAFunction(callback) {
    callback(); 
}

function returnsANamedFunction() {
    function newFunction() {}
    return newFunction;
}

function returnsAnAnonymousFunction() {
    return () => ""
}