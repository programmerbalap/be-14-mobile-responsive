function donasi(donasi) {
  localStorage.setItem('jenisDonasi', donasi);
  window.location.href = 'formDonasi.html';
}

const currencyFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

function nominalPendidikan() {
  const nominal = JSON.parse(localStorage.getItem('pendidikan'));
  let nominalPen = 0;
  nominal.map((nml, index) => {
    nominalPen += parseInt(nml.nominal);
  });
  return nominalPen;
}

document.getElementById('pendidikan').innerHTML = `Terkumpul ${currencyFormatter.format(nominalPendidikan())}`;

function nomPersenPendidikan() {
  let nomin = nominalPendidikan();
  return (nomin / 50000000) * 100;
}

if (nomPersenPendidikan() <= 50) {
  document.getElementById('nominalPendidikan').style.cssText = `height:10px; width:${nomPersenPendidikan()}%; background-color:red`;
} else if (nomPersenPendidikan() <= 80) {
  document.getElementById('nominalPendidikan').style.cssText = `height:10px; width:${nomPersenPendidikan()}%; background-color:green`;
} else {
  document.getElementById('nominalPendidikan').style.cssText = `height:10px; width:${nomPersenPendidikan()}%; background-color:blue`;
}

function nominalPandemi() {
  const nominal = JSON.parse(localStorage.getItem('pandemi'));
  let nominalPan = 0;
  nominal.map((nml, index) => {
    nominalPan += parseInt(nml.nominal);
  });
  return nominalPan;
}

document.getElementById('pandemi').innerHTML = `Terkumpul ${currencyFormatter.format(nominalPandemi())}`;

function nomPersenPandemi() {
  let nomin = nominalPandemi();
  return (nomin / 50000000) * 100;
}

if (nomPersenPandemi() <= 50) {
  document.getElementById('nominalPandemi').style.cssText = `height:10px; width:${nomPersenPandemi()}%; background-color:red`;
} else if (nomPersenPandemi() <= 80) {
  document.getElementById('nominalPandemi').style.cssText = `height:10px; width:${nomPersenPandemi()}%; background-color:green`;
} else {
  document.getElementById('nominalPandemi').style.cssText = `height:10px; width:${nomPersenPandemi()}%; background-color:blue`;
}
