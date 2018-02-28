

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var MyObj = {
        H : 50,
        Q : 25,
        D : 10,
        N : 5,
        P : 1,
    };
    var EmptyObj = {};
    var RichObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if ( currency <= 0 )
        return  EmptyObj;
    else
    {
        if (currency > 10000)
            return RichObj;
    };
    var ReturnObj = {
        H : 0,
        Q : 0,
        D : 0,
        N : 0,
        P : 0,
    };
    var tempNum = 0;
    
    tempNum = currency % MyObj.H;
    ReturnObj.H = ((currency - tempNum) / MyObj.H);
    currency = tempNum;
    tempNum = currency % MyObj.Q;
    ReturnObj.Q = ((currency - tempNum) / MyObj.Q);
    currency = tempNum;
    tempNum = currency % MyObj.D;
    ReturnObj.D = ((currency - tempNum) / MyObj.D);
    currency = tempNum;
    tempNum = currency % MyObj.N;
    ReturnObj.N = ((currency - tempNum) / MyObj.N);
    currency = tempNum;
    tempNum = currency % MyObj.P;
    ReturnObj.P = ((currency - tempNum) / MyObj.P);
    currency = tempNum;
    var obj = {};
    for ( var key in ReturnObj)
    {
        if (ReturnObj[key] <= 0)
            delete ReturnObj[key];
    }

    return ReturnObj;

}
