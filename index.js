document.getElementById("search-arrow").addEventListener('click',function() {
    console.log("clicked")
    var search = document.getElementById('search-input').value;
   alert(`you searched for: ${search}`);
})


fetch('data.json')
 .then(res =>res.json())
 .then(data =>{
    const container = document.querySelector('#container')

    data.images.forEach(image => {
        container.innerHTML +=`
        <div class ="content2">
        <h3 class="name">${image.name}</h3>
        <a href="${image.img}" class="images" >"${image.name}"</a>
       </div>
         <div class="picture">
        
          <p class="desc">"${image.desc}"</p>
       
        </div>
        `
        
    })
 })
 console.log('The rest of code')