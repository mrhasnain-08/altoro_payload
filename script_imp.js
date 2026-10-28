document.body.innerHTML = `
<style>
body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0b0f19; color: #f3f4f6; }
.glass { background: rgba(17, 24, 39, 0.6); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); }
.card { transition: transform 0.3s ease, border-color 0.3s; transform-style: preserve-3d; perspective: 1000px; }
.card:hover { border-color: rgba(168, 85, 247, 0.4); }
</style>
<div class="min-h-screen flex flex-col justify-between">
    <nav class="glass sticky top-0 z-40 px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-white/10">
        <h1 onclick="filterCat('All')" class="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer">AETHER</h1>
        <div class="flex gap-2 text-xs font-semibold overflow-x-auto py-1">
            <button onclick="filterCat('All')" class="tab px-4 py-1.5 rounded-full bg-purple-600/30 text-white border border-purple-500/50">All</button>
            <button onclick="filterCat('AI')" class="tab px-4 py-1.5 rounded-full text-gray-400 hover:text-white">AI</button>
            <button onclick="filterCat('Design')" class="tab px-4 py-1.5 rounded-full text-gray-400 hover:text-white">Design</button>
            <button onclick="filterCat('Web3')" class="tab px-4 py-1.5 rounded-full text-gray-400 hover:text-white">Web3</button>
        </div>
        <input type="text" id="srch" oninput="render()" placeholder="Search articles..." class="bg-slate-900/60 border border-white/10 rounded-full px-4 py-1.5 text-xs outline-none focus:border-purple-500 text-white">
    </nav>
    <main class="max-w-6xl mx-auto px-6 py-10 w-full flex-grow">
        <div id="grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </main>
    <div id="modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onclick="closeM()">
        <div class="glass max-w-2xl w-full max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto space-y-4 relative border border-white/10" onclick="event.stopPropagation()">
            <span id="mCat" class="text-[10px] font-bold text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"></span>
            <h2 id="mTitle" class="text-2xl font-bold text-white"></h2>
            <div id="mBody" class="text-xs text-gray-300 leading-relaxed space-y-3 font-light"></div>
            <button onclick="closeM()" class="mt-4 px-5 py-2 bg-purple-600 rounded-full text-xs font-semibold text-white hover:bg-purple-500 transition">Close Article</button>
        </div>
    </div>
    <footer class="glass border-t border-white/10 py-6 text-center text-xs text-gray-500">&copy; 2026 AETHER. All rights reserved.</footer>
</div>`;

const posts = [
    {id: 1, cat: "AI", t: "Next-Gen Neural Networks", desc: "Exploring deep neural architectures and transformer variants driving AI reasoning.", body: "Modern neural architectures progress beyond standard feedforward mechanisms into dynamic state-space models and spatial attention. Optimization enables complex cognition across edge networks.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"},
    {id: 2, cat: "Web3", t: "Decentralized State Machines", desc: "Zero-knowledge proofs and state synchronization scaling trustless networks.", body: "ZK-Rollups reduce execution bottlenecks on blockchain layer-1s by executing transaction batches off-chain while verifying validity through cryptographic proofs.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80"},
    {id: 3, cat: "Design", t: "Spatial Glassmorphic UI", desc: "Principles of visual depth, optical blur, and tactile lighting in digital interfaces.", body: "Glassmorphism integrates light diffusion, translucency, and spatial depth. This reduces visual noise while highlighting focal interactive components effortlessly.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"}
];

let cat = "All", bm = JSON.parse(localStorage.bm || '[]');

window.render = function() {
    const q = (document.getElementById('srch')?.value || '').toLowerCase();
    const filtered = posts.filter(p => (cat === "All" || p.cat === cat) && (p.t.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
    document.getElementById('grid').innerHTML = filtered.map(p => `
        <div class="glass card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer" onclick="openM(${p.id})">
            <div class="h-40 overflow-hidden relative">
                <img src="${p.img}" class="w-full h-full object-cover">
                <button onclick="event.stopPropagation();toggleBM(${p.id})" class="absolute top-3 right-3 glass p-2 rounded-full text-white text-xs">${bm.includes(p.id) ? '★' : '☆'}</button>
            </div>
            <div class="p-5 flex-grow">
                <span class="text-[10px] text-purple-400 font-bold tracking-wider">${p.cat}</span>
                <h3 class="text-base font-bold text-white my-1">${p.t}</h3>
                <p class="text-xs text-gray-400 leading-relaxed">${p.desc}</p>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.card').forEach(c => {
        c.onmousemove = e => {
            const r = c.getBoundingClientRect();
            c.style.transform = `perspective(1000px) rotateX(${((e.clientY - r.top - r.height/2)/r.height)*-8}deg) rotateY(${((e.clientX - r.left - r.width/2)/r.width)*8}deg) translateY(-4px)`;
        };
        c.onmouseleave = () => c.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
};

window.filterCat = function(c) {
    cat = c;
    document.querySelectorAll('.tab').forEach(b => b.className = `tab px-4 py-1.5 rounded-full ${b.innerText === c || (c === 'All' && b.innerText === 'All') ? 'bg-purple-600/30 text-white border border-purple-500/50' : 'text-gray-400 hover:text-white'}`);
    render();
};

window.toggleBM = function(id) {
    bm = bm.includes(id) ? bm.filter(x => x !== id) : [...bm, id];
    localStorage.bm = JSON.stringify(bm);
    render();
};

window.openM = function(id) {
    const p = posts.find(x => x.id === id);
    document.getElementById('mCat').innerText = p.cat;
    document.getElementById('mTitle').innerText = p.t;
    document.getElementById('mBody').innerText = p.body;
    document.getElementById('modal').classList.remove('hidden');
};

window.closeM = function() {
    document.getElementById('modal').classList.add('hidden');
};

render();
