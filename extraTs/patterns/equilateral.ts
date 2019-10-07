 export default class DrawEquilateral
{
    public draw(rows:number)
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
}





