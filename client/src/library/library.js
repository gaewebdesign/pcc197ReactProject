


function epoch( ){
    return new Date().getTime()
}

function epochdate(_epoch){
    let epoch = 0 + _epoch

    let t = new Date(0)
    t.setMilliseconds(epoch)

    let month = t.toLocaleString('default', { month: 'long' });
    let day = t.getUTCDate();
    let year = t.getUTCFullYear();

    console.log( month + " " + day + " " + year )

    return month + " " + day + " " + year 

}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export { epoch, epochdate, random}