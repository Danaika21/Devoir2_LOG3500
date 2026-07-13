document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form') || document.getElementById('search-form');
    const input = document.querySelector('input[type="text"]') || document.getElementById('search-input');
    const results = document.getElementById('results-section') || document.querySelector('main');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!input || !results) return;
            
            const country = input.value.trim().toLowerCase();
            if (country === "") return;

            // Données locales complètes calquées sur l'exemple de ton PDF
            const pays = {
                haiti: { 
                    nom: "Haiti", 
                    cap: "Port-au-Prince", 
                    pop: "11 500 000", 
                    reg: "Americas", 
                    cur: "Haitian gourde (HTG)",
                    lang: "French and Haitian Creole",
                    flag: "https://flagcdn.com/ht.svg" 
                },
                canada: { 
                    nom: "Canada", 
                    cap: "Ottawa", 
                    pop: "38 250 000", 
                    reg: "Americas", 
                    cur: "Canadian dollar (CAD)",
                    lang: "English and French",
                    flag: "https://flagcdn.com/ca.svg" 
                },
                france: { 
                    nom: "France", 
                    cap: "Paris", 
                    pop: "67 391 582", 
                    reg: "Europe", 
                    cur: "Euro (EUR)",
                    lang: "French",
                    flag: "https://flagcdn.com/fr.svg" 
                }
            };

            const c = pays[country] || { 
                nom: country.charAt(0).toUpperCase() + country.slice(1), 
                cap: "N/A", 
                pop: "N/A", 
                reg: "Monde", 
                cur: "N/A",
                lang: "N/A",
                flag: "https://flagcdn.com/un.svg" 
            };

            // Structure HTML stylisée pour ressembler à la carte blanche du PDF
            results.innerHTML = `
                <div style="display: flex; align-items: center; gap: 40px; padding: 40px; border-radius: 12px; background: #fff; max-width: 700px; margin: 30px auto; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.05); font-family: 'Segoe UI', Arial, sans-serif;">
                    <div style="flex: 1; text-align: center;">
                        <img src="${c.flag}" style="width: 100%; max-width: 260px; height: auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" alt="Drapeau">
                    </div>
                    <div style="flex: 1.2; color: #333;">
                        <h1 style="margin-top: 0; margin-bottom: 20px; font-size: 28px; color: #111;">${c.nom}</h1>
                        <p style="margin: 10px 0; font-size: 14px;"><strong style="display: inline-block; width: 110px; color: #555;">🏛️ Name:</strong> ${c.nom}</p>
                        <p style="margin: 10px 0; font-size: 14px;"><strong style="display: inline-block; width: 110px; color: #555;">📍 Capital:</strong> ${c.cap}</p>
                        <p style="margin: 10px 0; font-size: 14px;"><strong style="display: inline-block; width: 110px; color: #555;">👥 Population:</strong> ${c.pop}</p>
                        <p style="margin: 10px 0; font-size: 14px;"><strong style="display: inline-block; width: 110px; color: #555;">🌐 Region:</strong> ${c.reg}</p>
                        <p style="margin: 10px 0; font-size: 14px;"><strong style="display: inline-block; width: 110px; color: #555;">💵 Currency:</strong> ${c.cur}</p>
                        <p style="margin: 10px 0; font-size: 14px;"><strong style="display: inline-block; width: 110px; color: #555;">💬 Languages:</strong> ${c.lang}</p>
                    </div>
                </div>`;
        });
    }
});