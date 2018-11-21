function validateRequest(obj) {

    let validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    let validUriPattern = /^([A-Za-z\d.]+|\*)$/;
    let validVersionPattern = /^HTTP\/(0\.9|1\.0|1\.1|2\.0)$/;
    let validMsgPattern = /^[^<>\\&'"]+$/;

    let objProps = Object.keys(obj).map(p => p.toUpperCase());
    let validProps = ["Method", "URI", "Version", "Message"];

    for (let prop of validProps) {
        if (!objProps.includes(prop.toUpperCase())) {
            throw  new Error(`Invalid request header: Invalid ${prop}`);
        }
    }

    if (!validMethod.includes(obj["method"])) {
        throw  new Error("Invalid request header: Invalid Method");
    }

    if (!obj["uri"].match(validUriPattern)) {
        throw  new Error("Invalid request header: Invalid URI");
    }

    if (!obj["version"].match(validVersionPattern)) {
        throw  new Error("Invalid request header: Invalid Version");
    }

    if (!obj["message"].match(validMsgPattern)
        && obj["message"] !== "") {
        throw  new Error("Invalid request header: Invalid Message");
    }

    return obj;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
