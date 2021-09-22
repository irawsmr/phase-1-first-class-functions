function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction(){
    const func = function(){};
    return func;
}

const returnsAnAnonymousFunction = () => {
    return function(){};
}