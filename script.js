document.getElementById('cekButton').addEventListener('click', function () {
  var bilangan = document.getElementById('bilangan').value.trim();

  if (bilangan === '') {
    document.getElementById('hasil').innerHTML = 'Masukkan angka dulu bos';
    return;
  }

  bilangan = parseInt(bilangan);
  var prima = true;

  if (bilangan < 2) {
    prima = false;
  } else {
    for (var i = 2; i < bilangan; i++) {
      if (bilangan % i === 0) {
        prima = false;
        break;
      }
    }
  }

  if (prima) {
    document.getElementById('hasil').innerHTML = bilangan + ' adalah bilangan prima.';
  } else {
    document.getElementById('hasil').innerHTML = bilangan + ' bukan bilangan prima.';
  }
});
