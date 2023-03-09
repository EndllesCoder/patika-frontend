let username = prompt(`Adınız nedir?`);

let main = document.querySelector("#main");
const d = new Date();
document.getElementById(`clock`).innerHTML = d;
main.classList.add(`text-orange`)
if(username.length > 0){
    
    main.innerHTML = `KODLUYORUZ
 Merhaba ${username} ! Hoşgeldin ${d} tarihinde kodluyoruz
 Front End Web Development  Patikası'nın  Javascript bölümü
 1. Ödevindesiniz`;
  
    
 
}
else{
   main.innerHTML = `adınız boş bırakılmamalıdır.`;
}

