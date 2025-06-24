// const func1 = () => {
//     return new Promise((res,rej)=> {
//        const x = false; // rejection jahile ni last ma aaunxa
//        if(x){
//         res("I am resolve of func1")
//        }else{
//         rej("I am reject of func1")
//        }
//     })
// }
// const func2 = () => {
//     return new Promise((res,rej)=> {
//        const x = true ;
//        if(x){
//         res("I am resolve of func2")
//        }else{
//         rej("I am reject of func2")
//        }
//     })
// }

// const func3 = () => {
//     return new Promise((res,rej)=> {
//        const x = true ;
//        if(x){
//         res("I am resolve of func3")
//        }else{
//         rej("I am reject of func3")
//        }
//     })
// }

// func1()
//     .then((suc) => {
//         console.log(suc)
//         func2()
//     .then((suc) => {
//         console.log(suc)
//         func3()
//     .then((suc) => {
//         console.log(suc)
    
//     })
//     .catch((error) => {
//         console.log(error)
//     })
    
//     })
//     .catch((error) => {
//         console.log(error)
//     })

//     })
//     .catch((error) => {
//         console.log(error)
//     })


 const resolveData = async () => {   
let x = true;
if(x){
    return"I am resolved"
}else{
    throw"I am reject"
}
 }

 async functiom handleAsync(){
    try{
        const result = await resolveData()
        console.log(result)
    }catch(exceptiom){
        console.log(exceptiom)
    }
 }
 handleAsync()