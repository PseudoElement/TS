const p1 = new Promise(res=> setTimeout(()=>{
    res(("Promise 1 done"))
}, 1000))
const p2 = new Promise(res=> setTimeout(()=>{
    res(("Promise 2 done"))
}, 2000))
const p3 = new Promise((res, rej)=> setTimeout(()=>{
    rej(("Promise 3 done"))
}, 3000))
const p4 = new Promise(res=> setTimeout(()=>{
    res(("Promise 4 done"))
}, 4000))


function promiseAll(promises){
    const responses = [];
    return new Promise((res, rej)=>{
        promises.forEach( async (promise)=> {
            try{const resolve =  await promise;
            responses.push(resolve);
            if(responses.length === promises.length){
                res(responses)
            }}catch(e){
                rej(e)
            }
        })
    })
}
// promiseAll([p1,p2,p3,p4]).then(res => console.log(res)).catch(e=> console.log(e));
function promiseAllSettled(promises){
    const responses = [];
    return new Promise((res)=>{
        promises.forEach( async (promise)=> {
                    try{
                        const response = await promise;
                        responses.push({resolved: response});
                        if(responses.length === promises.length){
                        res(responses)
                        }
                    }catch(e){
                        responses.push({rejected: e});
                        if(responses.length === promises.length){
                            res(responses)
                        }
                    }
        })
    })
}
promiseAllSettled([p1,p2,p3,p4]).then(res => console.log(res))