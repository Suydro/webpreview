// Rok vo footeri
document.getElementById('year').textContent = new Date().getFullYear();

// Mobilná navigácia
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle){
  toggle.addEventListener('click',()=>{
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true':'false');
  });
}

// Jednoduché odoslanie formulára (demo)
const form = document.getElementById('leadForm');
const formMsg = document.getElementById('formMsg');

function validate(formData){
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const consent = document.getElementById('consent').checked;
  if(!name || !email || !consent) return "Vyplňte meno, email a súhlas.";
  return null;
}

if (form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    formMsg.textContent = "Odosielam…";
    const data = new FormData(form);
    const err = validate(data);
    if (err){ formMsg.textContent = err; return; }

    try{
      console.log('Lead:', Object.fromEntries(data.entries()));
      form.reset();
      document.getElementById('consent').checked = false;
      formMsg.textContent = "Ďakujeme! Ozveme sa čoskoro.";
    }catch(ex){
      formMsg.textContent = "Ups, niečo sa pokazilo. Skúste znova.";
    }
  });
}
