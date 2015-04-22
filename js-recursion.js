d3.csv("source/sample.csv", function (d) {
    return {
        parent: d.parent,
        child: d.child,
        value: d.value
    };
}, function (error, values) {

    var responseObj = {};

    function iterateArray (obj) {
        obj.forEach(function (element, index, array) {
            var iteratedVal = getParentValue(array[index].parent, obj, 1);

            responseObj[element['child']] = element['value'] * iteratedVal;
            console.log(array[index].child + " : " + responseObj[array[index].child]);
        });
    }

    function getParentValue (parent, source, returnVal) {

        source.forEach (function (element, index, array) {
            if (array[index].child === parent) {
                returnVal = returnVal * array[index].value;
            }
        });

        return returnVal;

    }

    iterateArray(values);
});
