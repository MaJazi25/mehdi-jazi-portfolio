(function(){
  const nav = document.querySelector('[data-nav]');
  const btn = document.querySelector('[data-hamburger]');
  if(btn && nav){
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if(!nav.contains(e.target) && !btn.contains(e.target)){
        nav.classList.remove('open');
      }
    });
  }

  const copyBtn = document.querySelector('[data-copy-email]');
  if(copyBtn){
    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email');
      try{
        await navigator.clipboard.writeText(email);
        const old = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(()=> copyBtn.textContent = old, 1200);
      }catch(err){
        window.prompt('Copy this email:', email);
      }
    });
  }
})();