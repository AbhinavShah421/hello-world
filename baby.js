

var sum=0;
// console.log(process.argv);
for(var i=2;i<=4;i++)
{
    sum+=Number(process.argv[i]);
}
console.log(sum);