const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

function addAndPrint() {
    const result = 1 + 100;
    console.log(result);
}

function square(num) {
    result = num * num;
    console.log(result);
}

module.exports = {addAndPrint, sayHi, square}

// module.exports = sayHi