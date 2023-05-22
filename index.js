// Change document background color to silver
document.getElementById('body').style.backgroundColor ='silver';
document.getElementById('heading').style.fontSize = '35px'
document.getElementById('heading').style.textAlign = 'center'
document.getElementById('intro').style.fontSize = '30px'
document.getElementById('intro').style.color = 'green'
document.getElementById('fruits').style.fontSize = "25px"
document.getElementById('vegetables').style.fontSize = "25px"
document.getElementById('container').style.marginLeft= "10%"
document.getElementById('heading2').style.color ='green';
document.getElementById('heading3').style.color ='green';



// Change the font color for h1 title tag to green
document.getElementById('heading').style.color = 'green';

// Change the font case for h3 title tags to uppercase
document.getElementById('heading2').style.textTransform ='uppercase';
document.getElementById('heading3').style.textTransform ='uppercase';

// Add one more fruit to the fruits list
let fruits = document.createElement('li')
fruits.innerHTML = "Mangoes"
document.getElementById('fruits').appendChild(fruits)

// Add one more vegetable to the vegetables list
let vegetables = document.createElement('li')
vegetables.innerHTML = "Kales"
document.getElementById('vegetables').appendChild(vegetables)

let image = document.createElement("img");
image.src = "Images/fruits combined.jpg";
image.style.width = '50%';
image.style.marginLeft = '40%';
image.style.marginTop = '-28%'
document.body.appendChild(image);

