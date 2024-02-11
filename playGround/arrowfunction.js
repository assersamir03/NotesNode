// const square = function(x){
//     return x*x
// }
// const square = (x)=>{
//     return x*x
// }
// const square = (x) => x * x
// console.log(square(2))

const eveent ={
    name: 'birthday party',
    guestList: ["asser","kaka"],
    pritGuestList(){
        console.log("guest list for " + this.name)
        this.guestList.forEach((guest)=>{
            console.log(`you invited ${guest}`)
        })
    }

}
eveent.pritGuestList()