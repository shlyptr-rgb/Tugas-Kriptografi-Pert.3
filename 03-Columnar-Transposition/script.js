function order(key){return [...key.toUpperCase()].map((c,i)=>({c,i})).sort((a,b)=>a.c.localeCompare(b.c)||a.i-b.i).map(x=>x.i);}
function encrypt(text,key){
 const clean=text.replace(/\s/g,''); if(!clean) return '';
 const k=key.toUpperCase().replace(/[^A-Z]/g,''); if(!k) throw Error('Kata kunci harus berisi huruf A-Z.');
 const n=k.length, rows=Math.ceil(clean.length/n), out=[]; 
 for(const col of order(k)){for(let r=0;r<rows;r++){const i=r*n+col;if(i<clean.length) out.push(clean[i]);}}
 return out.join('');
}
function decrypt(cipher,key){
 const c=cipher.replace(/\s/g,'').toUpperCase(), k=key.toUpperCase().replace(/[^A-Z]/g,'');
 if(!c) return ''; if(!k) throw Error('Kata kunci harus berisi huruf A-Z.');
 const n=k.length, rows=Math.ceil(c.length/n), rem=c.length%n;
 const lens=Array(n).fill(rows); if(rem) for(let col=rem;col<n;col++) lens[col]=rows-1;
 const cols=Array(n).fill(''), ord=order(k); let pos=0;
 for(const col of ord){cols[col]=c.slice(pos,pos+lens[col]);pos+=lens[col];}
 let out=''; for(let r=0;r<rows;r++) for(let col=0;col<n;col++) if(r<cols[col].length) out+=cols[col][r];
 return out;
}
function process(){
 const t=document.getElementById('text').value,k=document.getElementById('key').value,m=document.getElementById('mode').value;
 if(!t.trim()) return alert('Masukkan pesan terlebih dahulu.');
 try{document.getElementById('result').value=m==='enc'?encrypt(t,k):decrypt(t,k);}catch(e){alert(e.message);}
}
function clearAll(){document.getElementById('text').value='';document.getElementById('result').value='';document.getElementById('key').value='';}