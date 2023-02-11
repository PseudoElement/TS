

function setCookie(name, value, expirationTerm){
    const date = new Date();
    date.setDate(date.getDate() + expirationTerm)
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}

setCookie("name", "Me", 360)
deleteCookie("name")

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const arrCookie = cDecoded.split("; ");

    ////-------1 variant -----//////
    let result = "";
    arrCookie.forEach(el=>{
        if(el.indexOf(name) !== -1){
            result = el.slice(name.length + 1);
        }
    })
    return result;

////------2 variant------////
    // const newArr = arrCookie.reduce((acc, mainSym)=>{
    //     let key = "";
    //     let value = "";
    //     let isDivision = false;
    //     mainSym.split("").forEach((subSym)=>{
    //         if(subSym === "=") return isDivision = true;
    //         isDivision ?  value += (subSym) : key += (subSym);
    //     });
    //     acc.push({key, value})
    //     return acc;
    // }, [])
    // return newArr.find(el=> el.key === name)?.value;
    /////////////--------------////////
}

function deleteCookie(name){
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
}


var startOfDay = new Date();
startOfDay.setDate(0, 0, 0, 0);
console.log(startOfDay.toUTCString())
