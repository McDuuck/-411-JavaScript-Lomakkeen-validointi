const kayttaja = document.querySelector('#kayttaja');
const salasana = document.querySelector('#salasana');
const nimi = document.querySelector('#nimi');
const osoite = document.querySelector('#osoite');
const maat = document.getElementById('maat');
const posti = document.querySelector('#posti');
const sposti = document.querySelector('#sposti');
const laheta = document.getElementById('send');
const radios = document.getElementsByName('sukupuoli');

let genrevalue = '';



laheta.addEventListener('click', function(e) {
    const errors = [];
    const pituus = kayttaja.value.length;
    
    if (pituus <= 5){
        errors.push('ID:n pitää olla vähintään 6 merkkiä');
        e.preventDefault();
    }
    
    const nimenpituus = nimi.value.length;
    if (nimenpituus < 1){
        errors.push('Nimi on pakollinen');
        e.preventDefault();
    }
    
    const salapituus = salasana.value.length;
    if (salapituus < 5){
        errors.push('Salasanan on oltava vähintään 6 merkkiä');
    }

    const osoitepituus = osoite.value.length;
    if (osoitepituus < 1){
        errors.push('Osoite pakollinen')
    }

    const postinumero = posti.value.length;
    if (postinumero != 5){
        errors.push('Postinumero ei ole oikein!')
    }

    const spostiValue = sposti.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(spostiValue)) {
        errors.push('Sähköpostiosoite ei ole oikeassa muodossa');
    }

    const maatvalue = maat.value;
    if (maatvalue === 'valitse') {
        errors.push('Valitse maa!');
    }

    for (const radio of radios) {
        if (radio.checked) {
          genrevalue = radio.value;
          break; 
        }
      }
      
      if (genrevalue === '') {
        errors.push('Sukupuoli on pakollinen!')
      }

      const checkboxes = document.querySelectorAll('input[name="kieli"]:checked');

      if (checkboxes.length === 0) {
        errors.push('Kieli on pakollinen!')
    }

    const msg = document.querySelector('.msg');
    if (errors.length > 0) {
        msg.classList.add('error');
        msg.innerHTML = errors.join('<br>');
        document.body.appendChild(msg);
    } else {
        msg.innerHTML = '';
    }
    
});

