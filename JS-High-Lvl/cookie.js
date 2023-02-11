

function setCookie(name, value, expirationTerm){
    const date = new Date();
    date.setDate(date.getDate() + expirationTerm * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`
}
setCookie("name", "Pavel", 365)
setCookie("lastName", "Davidsovich", 365)
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const arrCookie = cDecoded.split("; ");

    ////-------1 variant -----//////
    let result = "";
    arrCookie.forEach(el=>{
        if(el.indexOf(name) !== -1){
            result = el.substring(name.length +   1);
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
    setCookie(name, null, null)
}
deleteCookie("im")
deleteCookie("ima")
deleteCookie("work")

console.log(document.cookie)
console.log(getCookie("lastName"))  
