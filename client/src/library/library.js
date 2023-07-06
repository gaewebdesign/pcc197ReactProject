


function epoch( ){
    return new Date().getTime()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export { epoch, random}