let btn =document.getElementById('btn')
console.log(btn);
btn.onclick=function(){
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>
        {
            let users='';
      data.forEach(user=>{
        users+=
        `
        <div class="card col-lg-3 img-fluid g-5" style="width: 18rem;">
  <img src="${user.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${user.description}</p>
  </div>
</div>
     
        `

      })
document.getElementById('list').innerHTML=users
        })

}