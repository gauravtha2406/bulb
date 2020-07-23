

function bsetting() {
  let btext=document.getElementById('btext');
    console.log('hi')
    for (let x = 1; x < 5; x++) {
        let bulb = document.getElementById('bulbsetting'.concat(x));
        if (bulb.src.match('bulbon')) {
            bulb.src = "bulboff.jpg";
            btext.innerHTML=`BULB IS OFF`;
            btext.style.color='RED';
        }
        else {
           
            bulb.src = "bulbon.jpg";
            btext.innerHTML=`BULB IS ON`;
            btext.style.color='green';
        }
    }
}