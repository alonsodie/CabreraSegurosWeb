// CONFIGURACIÓN: agregá el WhatsApp comercial con código de país, sin + ni espacios.
// Ejemplo para Uruguay: '59899123456'. Hasta configurarlo, se copia el mensaje.
const WHATSAPP_NUMBER = '59898033929';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => { const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));menu.textContent=opened?'✕':'☰'; });
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
document.querySelectorAll('[data-insurance]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('insurance').value=a.dataset.insurance;}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit',async e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const type=document.getElementById('insurance').value;const details=document.getElementById('message').value.trim();const help=document.getElementById('form-help');if(!name||!type)return;const message=`Hola, soy ${name}. Quisiera asesoramiento de Cabrera Seguros sobre: ${type}.${details?'\nDetalle: '+details:''}`;if(/^\d{10,15}$/.test(WHATSAPP_NUMBER)){window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');help.textContent='Se abrió WhatsApp con tu mensaje listo para revisar y enviar.';}else{try{await navigator.clipboard.writeText(message);help.textContent='Mensaje copiado. Falta configurar el número de WhatsApp de la empresa en script.js.';}catch{help.textContent='WhatsApp pendiente de configurar. Tu mensaje: '+message;}}});
