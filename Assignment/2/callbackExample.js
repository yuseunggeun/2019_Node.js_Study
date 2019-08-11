const list=[1,2,3,4,5,6,7,8,9,10];
/*
function callbackExample(items,callback){
    setTimeout(function(){
        let sum=0;
        for(let i=0;i<items.length;i++){
            sum+=items[i];
        }
        callback(sum);
    },0);
};
*/

const callbackExample=(items,callback) =>{
    setTimeout(()=>{
        const sum = items.reduce((a,b)=>(a+b));
        callback(sum);
    },0);
};
callbackExample(list,result=>{console.log(result);});
console.log('first');

/*callback function 부분을 아예 빼버린것
const arrowExample = items =>{
    setTimeout(() =>{
        const sum = items.reduce((a,b)=>(a+b));
        console.log(sum);
    },0);
}
arrowExample(list);
console.log('first');
*/
