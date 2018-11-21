function orderRectangles(input) {

    let rectangles = [];

    for (let [width, height] of input) {
        rectangles.push(createRectangle(width, height));
    }

    return sortRectangles(rectangles);

    function createRectangle(width, height) {
        let rectangle = {
            width,
            height,
            area: function () {
                return rectangle.width * rectangle.height;
            },
            compareTo: function (other) {
                return other.area() - rectangle.area()
                    || other.width - rectangle.width;
            }
        };

        return rectangle;
    }

    function sortRectangles(rectangles) {
      return  rectangles.sort((a, b) => a.compareTo(b));
    }
}

console.log(orderRectangles([[10, 5], [5, 12]]));