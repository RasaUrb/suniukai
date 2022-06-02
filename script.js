const myBtn = document.querySelector('button');
const myPlace = document.getElementById('myPlace');    
const myImg = document.createElement('img');  myPlace.appendChild(myImg); 
myImg.className="img-thumbnail"; 

const getCatImg = () => {
   fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => { 
      console.log(data);       
    myImg.src = data.message;
  });   

}
myBtn.addEventListener('click', getCatImg)
