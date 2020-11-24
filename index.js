const map = (arr, fnctn) => arr.map(e => fnctn(e))

const reduce = (src, cb, starting) => {
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
    
    for (; i < src.length; i++) {
        r = cb(src[i], r)
    }
    
    return r;
    }