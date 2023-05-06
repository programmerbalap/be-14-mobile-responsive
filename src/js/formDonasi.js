const jenisDonasi = localStorage.getItem('jenisDonasi');

if (jenisDonasi == 'pandemi') {
  document.getElementById('judul').innerHTML = 'Donasi Untuk Pasca Pandemi';
} else if (jenisDonasi == 'pendidikan') {
  document.getElementById('judul').innerHTML = 'Donasi Untuk Pendidikan';
} else {
  console.log('error');
}

function tombol(nilai) {
  const nominal = document.getElementById('nominal');
  nominal.value = `${nilai}`;
}

const nominalLain = document.getElementById('nL');
nominalLain.addEventListener('keyup', () => {
  let nl = document.getElementById('nL').value;
  const nominal = document.getElementById('nominal');
  nominal.value = `${nl}`;
});

const donasi = document.getElementById('donasi');
let detailDonasi = [];
donasi.addEventListener('click', () => {
  let nominal = document.getElementById('nominal').value;
  let harapan = document.getElementById('harapan').value;
  let namaLengkap = document.getElementById('namaLengkap').value;
  let email = document.getElementById('email').value;
  let telepon = document.getElementById('telepon').value;

  const donasi = { harapan, nominal, namaLengkap, email, telepon };
  const data = JSON.parse(localStorage.getItem(`${jenisDonasi}`));
  if (!data) {
    if (confirm('Apakah yakin?')) {
      detailDonasi.push(donasi);
      localStorage.setItem(`${jenisDonasi}`, JSON.stringify(detailDonasi));
      alert('Donasi berhasil!');

      document.getElementById('harapan').value = '';
      document.getElementById('namaLengkap').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telepon').value = '';
      document.getElementById('nominal').value = '0';
    }
  } else {
    if (confirm('Apakah yakin?')) {
      detailDonasi.length = 0;
      data.forEach((dta, index) => {
        detailDonasi.push(dta);
      });
      detailDonasi.push(donasi);
      localStorage.setItem(`${jenisDonasi}`, JSON.stringify(detailDonasi));

      alert('Donasi berhasil!');

      document.getElementById('harapan').value = '';
      document.getElementById('namaLengkap').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telepon').value = '';
      document.getElementById('nominal').value = '0';
    }
  }
});
