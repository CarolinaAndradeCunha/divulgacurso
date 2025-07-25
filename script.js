document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetID);
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', e => {
    if (detail.open) {
      // Já abre normalmente
      detail.style.transition = 'max-height 0.3s ease';
      detail.style.maxHeight = detail.scrollHeight + 'px';
    } else {
      // Fecha com animação
      detail.style.maxHeight = '0';
      setTimeout(() => {
        detail.style.maxHeight = null;
      }, 300);
    }
  });
});
