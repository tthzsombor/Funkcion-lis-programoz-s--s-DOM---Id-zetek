import idezetek from './quotes.json'

  function Osszes()
  {
    const osszesidezet = document.getElementById('osszesidezet');

    const idezet=Array.from(idezetek.quotes)
    .sort((a,b)=>{ 
    if(a.author<b.author)
    {
      return -1
    }
    else if(a.author>b.author)
    {
     return 1
    }
  })
    .map(i=>i.quote+" "+i.author)
    
    for(let i=0; i<idezet.length; i++)
    {
      var t=document.createElement('ul');
      t.textContent=idezet[i];
      document.getElementById("osszesidezet").appendChild(t);
    }


  }

  function The()
  {
    const the=document.getElementById('the');

    const csakidezet=Array.from(idezetek.quotes)
    .map(i=>i.quote)
    .filter(i=>i.includes("The", 0) || i.includes("the", 0));


     
    for(let i=0; i<csakidezet.length; i++)
    {
      var s=document.createElement('ol');
      s.textContent=csakidezet[i];
      document.getElementById('the').appendChild(s);
    }


    
  }

  function Hossz()
  {
    const p=document.getElementById('hossz');
    const hossz=Array.from(idezetek.quotes)
    .map(i=>i.quote.length)
    .join(', ')

    p.textContent=hossz;

  }

  function Darabszam()
  {
   const darabszaminput=document.getElementById('darabszam').value; 
   const darabszameredmeny=document.getElementById('darabszameredmeny')

   const darabszam=Array.from(idezetek.quotes)

  
    let db=0;
    for(let i=0; i<darabszam.length; i++)
    {
      if(darabszam[i].author==(darabszaminput))
      {
        db++;
      }

    }

    darabszameredmeny.value=db;
  }


function init()
{
  const gomb1=document.getElementById('osszesidezetbutton')
  const gomb2=document.getElementById('thebutton')
  const gomb3=document.getElementById('hosszbutton')
  const gomb4=document.getElementById('darabbutton')


  gomb1.addEventListener('click', Osszes);
  gomb2.addEventListener('click', The);
  gomb3.addEventListener('click', Hossz);
  gomb4.addEventListener('click', Darabszam);

}


document.addEventListener('DOMContentLoaded', init)



