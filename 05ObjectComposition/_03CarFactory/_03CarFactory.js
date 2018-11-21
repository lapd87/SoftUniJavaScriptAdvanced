function carFactory(order) {

    let engines = new Map();
    engines.set(90, {power: 90, volume: 1800});
    engines.set(120, {power: 120, volume: 2400});
    engines.set(200, {power: 200, volume: 3500});

    let carriages = new Map();
    carriages.set("hatchback", {type: 'hatchback', color: order.color});
    carriages.set("coupe", {type: 'coupe', color: order.color});

    let wheelSize = order.wheelsize % 2 === 0 ?
        --order.wheelsize : order.wheelsize;

    let enginePower;
    if (order.power <= 90) {
        enginePower = 90;
    } else if (order.power <= 120) {
        enginePower = 120;
    } else {
        enginePower = 200;
    }

    return {
        model: order.model,
        engine: engines.get(enginePower),
        carriage: carriages.get(order.carriage),
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize]
    };
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));