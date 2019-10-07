 export default function drawEquilateral(rows)
{
    for(let i=0;i<=rows;i++)
    {
       for(let j=0;j<=rows;j++)
       {
           if(j>=rows-i && j<rows)
           {process.stdout.write('* ');}
           else process.stdout.write(' ')
       }
       console.log();     
    }     
}





