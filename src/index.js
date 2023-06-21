const   url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote'
const options = {
    method: 'GET',
  
    params: {
      token: 'ipworld.info'
    },
    headers: {
      'X-RapidAPI-Key': '6fa7c8a3aemsh2e28446aa91b427p16ca62jsnf223368d21b3',
      'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
  };

  const quoteElement = document.getElementById('quote')

  const fetchQuote = async()=>{
    const res = await fetch(url , options)
    const data = await res.json()
    // const quote = data.result
    

    console.log(data);

    quote.innerHTML=`
    <p>${data.author}</p>
    <p class='font-bold'>${data.text}</p>
    `

      


  }

  fetchQuote()


  
  const menu = document.getElementById("menu")
  const content = document.getElementById('content')
 const inner = document.getElementById('inner')
  console.log(content)

  menu.addEventListener('click',()=>{
      content.classList.toggle('right-[0]')
  })

  content.addEventListener("click", ()=>{
   
      content.classList.remove('right-[0]')
  })

  inner.addEventListener("click",(e)=>{
      e.stopPropagation()
  })