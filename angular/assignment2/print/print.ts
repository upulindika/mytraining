import {Friend} from "../friend/Friend";

let friennds: Friend[] = [new Friend("bob", 30, "abc@sss.com", false),
                            new Friend("john", 20, "john@sss.com", false),
                            new Friend("mary", 40, "mary@sss.com", false),
                            new Friend("doe", 32, "doe@sss.com", false),
                            new Friend("kevin", 30, "kevin@sss.com", true)];

   friennds.sort(compareFn).forEach(element => {
    console.log(element.name+" "+element.age+" "+element.email+" "+element.bestFriend);
});
console.log('Done...');

function compareFn(a,b){
    if(a === b ) return 0;
    return(a['age'] > b['age']) ? 1:-1; 
}