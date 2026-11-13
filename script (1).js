const products=[
 {name:'Samsung Galaxy A16',desc:'128GB • اختيار عملي وأنيق',price:1790,kind:'phone',symbol:'▯',tag:'SMART CHOICE'},
 {name:'Samsung Galaxy A17',desc:'128GB • تصميم عصري',price:1990,kind:'phone',symbol:'▯',tag:'NEW STYLE'},
 {name:'Xiaomi Redmi Note 15',desc:'128GB • أداء يومي مميز',price:2390,kind:'phone',symbol:'▯',tag:'POPULAR'},
 {name:'Samsung Galaxy A35',desc:'128GB • تجربة متوازنة',price:2690,kind:'phone',symbol:'▯',tag:'PREMIUM'},
 {name:'iPhone 13',desc:'128GB • مستعمل بحالة جيدة',price:3290,kind:'phone',symbol:'▯',tag:'SELECTED'},
 {name:'سماعات Bluetooth',desc:'صوت لاسلكي للاستعمال اليومي',price:149,kind:'accessory',symbol:'♫',tag:'ACCESSORY'},
 {name:'Smart Watch',desc:'ساعة ذكية بتصميم أنيق',price:299,kind:'accessory',symbol:'◷',tag:'ACCESSORY'},
 {name:'Chargeur USB-C 25W',desc:'شاحن USB-C بقوة 25W',price:129,kind:'accessory',symbol:'ϟ',tag:'ACCESSORY'},
 {name:'Power Bank 10,000 mAh',desc:'طاقة إضافية في التنقل',price:229,kind:'accessory',symbol:'▰',tag:'ACCESSORY'},
 {name:'Câble USB-C',desc:'كابل للشحن والاستعمال اليومي',price:49,kind:'accessory',symbol:'⌁',tag:'ACCESSORY'}
];
const grid=document.getElementById('productGrid');
function render(filter='all'){grid.innerHTML=products.filter(p=>filter==='all'||p.kind===filter).map(p=>`<article class="product"><div class="product-visual"><span class="tag">${p.tag}</span><span class="symbol">${p.symbol}</span></div><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="product-bottom"><span class="price">${p.price.toLocaleString('fr-FR')} DH</span><button class="order" data-name="${p.name}" data-price="${p.price}">طلب عبر واتساب ↗</button></div></article>`).join('');}
render();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');render(btn.dataset.filter)}));
grid.addEventListener('click',e=>{const btn=e.target.closest('.order');if(!btn)return;const msg=`السلام عليكم، بغيت نسول على التوفر ديال ${btn.dataset.name} بثمن ${Number(btn.dataset.price).toLocaleString('fr-FR')} درهم. واش متوفر؟`;window.open(`https://wa.me/212630849944?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
