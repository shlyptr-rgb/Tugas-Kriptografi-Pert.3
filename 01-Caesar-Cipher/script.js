function caesar(text,k,dec=false){
  k=((Number(k)%26)+26)%26; if(dec) k=(26-k)%26;
  return [...text].map(ch=>{
    const code=ch.charCodeAt(0);
    if(code>=65&&code<=90) return String.fromCharCode((code-65+k)%26+65);
    if(code>=97&&code<=122) return String.fromCharCode((code-97+k)%26+97);
    return ch;
  }).join('');
}
function process(){
 const t=document.getElementById('text').value,k=document.getElementById('key').value,m=document.getElementById('mode').value;
 if(!t.trim()) return alert('Masukkan pesan terlebih dahulu.');
 document.getElementById('result').value=caesar(t,k,m==='dec');
}
function clearAll(){document.getElementById('text').value='';document.getElementById('result').value='';}