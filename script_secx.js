(() => {
    const IMAGE_URLS = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1U11Nz_Y-KVBu870wAapMhDQpbz3nriERcUi6tJjsvHCV7H8BFkNtbd898I&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtU1I4RS4DM9N4HjIKh8hU1GzXZAqsw-JytZEd7WZKv2uOS5cHC52N5UDbw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdM2GlrsEEMcQVX9Q-yVl31z4m2SYwfiEsJyGSsKs5S0r_srDs2M84yY7He0&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDPIm-36a3PYK_BRWhjcHzCzg41kRBQjK4bDUJt0_6YtbMHdwvLg9ZQAupOU&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAyO8GoSDDIffRnHFotq-OigMiwGea92ZXLBADTSyYFR4UDfBsOeleMtxguo&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoGCJrPMfa_Xy6TviL1vdjLuR1b82dQDIdqkJ1ZkIKM0-a5X5yDxuYMDmeQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1zwTgrf094npUv3wu0Q9QdrTm5a3uK966SFoZOyrV8tmXVg2kIscU_YRO8g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWMYkWQ60N6FgOuJnZ6FUvcJSutK0mu9YboRnjJrjcBPWAgoX3BOAnkse6BA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsOedfU7uzQb2qLvI61fuVcMlxb7VLxJOV2fom3xnwuNsnm0x6E4G3CfI3w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFt7YrnDj680FvxR3X2PSqKtBTXRviUbR_m3mkzgq5WJ7elXCDSMMEeNBMw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7u-D1ybZAEBnV6cgeGppgMuMC8efnJ4YbNg-pWzYUcNz3NO6jXyUMzpHSxQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAH2KCqVA7VIbECP9uKFtL39-m-6P14B9uIHP-1tWrASW2eMhAxDVTV1NmuDQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUaTMze_u6Vihydwu19BZ0WDMuuiiviX3mO_cFyInJG0yMyRzr1EYWR4rv_g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrskwd4KuULi0pOEUO92_VJGqIxDNyKwY8h30fdHb7ohYdxnSK71m0hBtPW0&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2-RLl6xLus4BXWVs_BcEpbbt56uMJIYLEPEM8gIsJ-R0D36caoMsASU4pA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiJ38oVooXBI0ChuBTSJl8Gpr-58fHIpjjtPv2A7XW3L1CuAyfUrptvvjEho&s"
    ];

    document.body.innerHTML = `
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { width: 100%; min-height: 100vh; background: #08080a; overflow-x: hidden; font-family: sans-serif; }
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 8px;
            padding: 8px;
            width: 100vw;
            min-height: 100vh;
        }
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 6px;
            aspect-ratio: 4/3;
            background: #121318;
        }
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .gallery-item img.loaded {
            opacity: 1;
        }
        .gallery-item:hover img {
            transform: scale(1.06);
        }
    </style>
    <div class="gallery-grid">
        ${IMAGE_URLS.map(url => `
            <div class="gallery-item">
                <img src="${url}" loading="lazy" onload="this.classList.add('loaded')" onerror="this.src='https://placehold.co/800x600/121318/ffffff?text=Image+Unavailable'">
            </div>
        `).join('')}
    </div>
    `;
})();
