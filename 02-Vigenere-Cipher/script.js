function vigenere(text,key,dec=false){
 key=key.toUpperCase().replace(/[^A-Z]/g,''); if(!key) throw Error('Kata kunci harus berisi huruf A-Z.');
 let j=0;
 return [...text].map(ch=>{
  const u=ch.toUpperCase(), code=u.charCodeAt(0);
  if(code<65||code>90) return ch;
  const k=key.charCodeAt(j%key.length)-65, p=code-65;
  const x=dec?(p-k+26)%26:(p+k)%26; j++;
  const out=String.fromCharCode(x+65);
  return ch===ch.toLowerCase()?out.toLowerCase():out;
 }).join('');
}
function process(){
 const t=document.getElementById('text').value,k=document.getElementById('key').value,m=document.getElementById('mode').value;
 if(!t.trim()) return alert('Masukkan pesan terlebih dahulu.');
 try{document.getElementById('result').value=vigenere(t,k,m==='dec');}catch(e){alert(e.message);}
}
function clearAll(){document.getElementById('text').value='';document.getElementById('result').value='';document.getElementById('key').value='';}