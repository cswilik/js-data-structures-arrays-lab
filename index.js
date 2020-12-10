// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.splice(-1)
}

function destructivelyRemoveFirstDriver() {
    drivers.splice(0, 1)
}

function  appendDriver(name) {
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers]
}


function removeFirstDriver () {
    return drivers.slice(1)
  }

// function removeFirstDriver() {
//     let newDrivers =  drivers.slice(1)
// }