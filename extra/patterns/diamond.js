function drawDiamond(rows)
{
    for(let i=0;i<=rows;i++)
    {
       for(let j=0;j<rows;j++)
       {
           if(j>=rows-i && j<rows)
           {process.stdout.write('* ');}
           else process.stdout.write(' ')
       }
       console.log();     
    } 
    for(let i=0;i<=rows;i++)
    {
       for(let j=0;j<rows;j++)
       {
           if(j>=i && j<rows)process.stdout.write('* ');
           else process.stdout.write(' ');
       }
       console.log();     
    } 
}
let rows =process.argv[2]
if(rows<11 && rows>2)
{
    drawDiamond(rows);
}
else
{
 console.error('Rows should be in between 2 to 10');
 
}
