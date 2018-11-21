function increment(selector) {

    let element = $(selector);

    let counter = $("<textarea class='counter' disabled='disabled'>0</textarea>");
    let incrementBtn = $("<button class='btn' id='incrementBtn'>Increment</button>");
    let addBtn = $("<button class='btn' id='addBtn'>Add</button>");
    let uList = $("<ul class='results'>");

    incrementBtn.on('click', increaseByOne);
    addBtn.on('click', addLi);

    element.append(counter);
    element.append(incrementBtn);
    element.append(addBtn);
    element.append(uList);

    function increaseByOne() {
        counter.val(+counter.val() + 1);
    }

    function addLi() {
        let li = $(`<li>${counter.val()}</li>`);
        uList.append(li);
    }
}