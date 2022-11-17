/* Function to show the results when writing a Madrid postal code */
function cPostal(){
    let CPostal = document.getElementById('codigoPostal').value
    if((CPostal>=28000) && (CPostal<=28991)){
        document.getElementById('h3RotuloCP').innerHTML=`Results from postal code ${CPostal}`
        document.getElementById('SeccionResultados').style.display='flex'
        document.getElementById('SeccionMapa').style.display='none'
    }
    else{     
        alert('The postal codes of Madrid province are in the range from 28000 to 28991')
        }
}

/* Function to reset the zip code after writing it in the text field and pressing the search button */
 function reset(){
    document.getElementById('codigoPostal').value =''
}

/* Functions to change color and add link to footer icons */

/* Access the icon's DOM through its id */
let logoTwitter = document.getElementById('logoTwitter')

/* Insert an event listener so that when the mouse passes the image changes and the cursor has a pointer */
logoTwitter.addEventListener('mouseenter', event=>{
   event.target.src='img/twitter-circled-green.gif'
   logoTwitter.style.cursor='pointer'
}) 

/* Insert another event listener so that when clicked it takes me to the desired link in a new tab */
logoTwitter.addEventListener('click', event=>{
   window.open('https://www.twitter.com', '_blank');
}) 

/* Insert another event listener so that when you remove the mouse from the icon it returns to the previous image */
logoTwitter.addEventListener('mouseleave', event=>{
   event.target.src='img/twitter-circled-azul.svg'
}) 

/* Access the icon's DOM through its id */
 let logoFace = document.getElementById('logoFacebook')

 /* Insert an event listener so that when the mouse passes the image changes and the cursor has a pointer */
 logoFace.addEventListener('mouseenter', event=>{
    event.target.src='img/facebook-circulo-green.gif'
    logoFace.style.cursor='pointer'
}) 

/* Insert another event listener so that when clicked it takes me to the desired link in a new tab */
logoFace.addEventListener('click', event=>{
    window.open('https://www.facebook.com', '_blank');
}) 

/* Insert another event listener so that when you remove the mouse from the icon it returns to the previous image */
logoFace.addEventListener('mouseleave', event=>{
    event.target.src='img/facebook-circulo-azul.svg' 
}) 

/* Access the icon's DOM through its id */
let logoInstagram = document.getElementById('logoInstagram')

/* Insert an event listener so that when the mouse passes the image changes and the cursor has a pointer */
logoInstagram.addEventListener('mouseenter', event=>{
   event.target.src='img/icons-instagram-green.gif'
   logoInstagram.style.cursor='pointer'
}) 

/* Insert another event listener so that when clicked it takes me to the desired link in a new tab */
logoInstagram.addEventListener('click', event=>{
   window.open('https://www.instagram.com', '_blank');
}) 

/* Insert another event listener so that when you remove the mouse from the icon it returns to the previous image */
logoInstagram.addEventListener('mouseleave', event=>{
   event.target.src='img/icons-instagram-azul.svg'
}) 

