let allHeroes = [];
let heroesStats = new Map();
let heroWins = new Map();
let heroPicks = new Map();
const heroFullRoles = {
    "Anti-Mage": ["Carry", "Escape"], "Axe": ["Initiator", "Carry"], "Bane": ["Support", "Disabler"],
    "Bloodseeker": ["Carry", "Escape"], "Crystal Maiden": ["Support", "Disabler"], "Drow Ranger": ["Carry", "Pusher"],
    "Earthshaker": ["Initiator", "Disabler"], "Faceless Void": ["Carry", "Escape"], "Invoker": ["Midlane", "Nuker", "Disabler"],
    "Juggernaut": ["Carry", "Escape"], "Lion": ["Support", "Disabler", "Nuker"], "Pudge": ["Initiator", "Nuker"],
    "Phantom Assassin": ["Carry"], "Rubick": ["Support", "Disabler"], "Snapfire": ["Support", "Nuker"],
    "Shadow Fiend": ["Midlane", "Nuker"], "Windranger": ["Midlane", "Escape", "Pusher"], "Zeus": ["Midlane", "Nuker"],
    "Mars": ["Initiator", "Carry"], "Silencer": ["Support", "Disabler"], "Io": ["Support", "Escape", "Nuker"],
    "Puck": ["Midlane", "Initiator", "Disabler", "Escape", "Nuker"], "Sniper": ["Carry", "Nuker"],
    "Necrophos": ["Carry", "Support"], "Venomancer": ["Support", "Nuker", "Pusher"], "Lina": ["Midlane", "Nuker"],
    "Storm Spirit": ["Midlane", "Escape", "Nuker"], "Ember Spirit": ["Midlane", "Escape", "Nuker"],
    "Void Spirit": ["Midlane", "Escape", "Nuker"], "Earth Spirit": ["Midlane", "Initiator", "Disabler"],
    "Kunkka": ["Midlane", "Initiator"], "Tiny": ["Carry", "Nuker", "Initiator"], "Techies": ["Support", "Nuker"],
    "Hoodwink": ["Support", "Escape", "Nuker"], "Mirana": ["Midlane", "Escape", "Nuker"], "Monkey King": ["Carry", "Midlane"],
    "Slark": ["Carry", "Escape"], "Ursa": ["Carry"], "Lifestealer": ["Carry", "Escape"], "Wraith King": ["Carry", "Initiator"],
    "Spectre": ["Carry", "Escape"], "Terrorblade": ["Carry", "Pusher"], "Morphling": ["Carry", "Escape"],
    "Medusa": ["Carry"], "Naga Siren": ["Carry", "Pusher"], "Phantom Lancer": ["Carry", "Pusher"],
    "Chaos Knight": ["Carry", "Initiator"], "Sven": ["Carry", "Initiator"], "Alchemist": ["Carry", "Midlane"],
    "Dragon Knight": ["Midlane", "Carry"], "Viper": ["Midlane", "Carry"], "Razor": ["Carry", "Midlane"],
    "Leshrac": ["Midlane", "Nuker", "Pusher"], "Queen of Pain": ["Midlane", "Nuker"], "Death Prophet": ["Midlane", "Pusher"],
    "Tinker": ["Midlane", "Nuker"], "Arc Warden": ["Carry", "Midlane"], "Lone Druid": ["Carry", "Pusher"],
    "Beastmaster": ["Initiator", "Pusher"], "Lycan": ["Carry", "Pusher"], "Broodmother": ["Carry", "Pusher"],
    "Chen": ["Support", "Pusher"], "Enchantress": ["Support", "Carry"], "Enigma": ["Initiator", "Pusher"],
    "Nature's Prophet": ["Carry", "Pusher"], "Pugna": ["Support", "Nuker", "Pusher"], "Winter Wyvern": ["Support", "Disabler"],
    "Oracle": ["Support"], "Dazzle": ["Support"], "Witch Doctor": ["Support", "Nuker"], "Shadow Shaman": ["Support", "Disabler", "Pusher"],
    "Jakiro": ["Support", "Pusher", "Disabler"], "Ogre Magi": ["Support", "Initiator"], "Undying": ["Support", "Initiator"],
    "Abaddon": ["Support", "Carry"], "Omniknight": ["Support"], "Treant Protector": ["Support", "Initiator"],
    "Centaur Warrunner": ["Initiator", "Carry"], "Tidehunter": ["Initiator"], "Bristleback": ["Carry", "Initiator"],
    "Timbersaw": ["Carry", "Initiator"], "Underlord": ["Initiator", "Carry"], "Slardar": ["Initiator", "Carry"],
    "Sand King": ["Initiator", "Disabler"], "Magnus": ["Initiator", "Disabler"], "Dark Seer": ["Initiator"],
    "Brewmaster": ["Initiator", "Carry"], "Elder Titan": ["Initiator", "Support"], "Phoenix": ["Support", "Initiator"],
    "Grimstroke": ["Support", "Disabler"], "Vengeful Spirit": ["Support", "Initiator"], "Skywrath Mage": ["Support", "Nuker"],
    "Ancient Apparition": ["Support", "Nuker"], "Disruptor": ["Support", "Disabler"], "Keeper of the Light": ["Support", "Nuker"],
    "Dark Willow": ["Support", "Disabler", "Nuker"], "Pangolier": ["Midlane", "Escape", "Disabler"], "Clinkz": ["Carry", "Escape"],
    "Weaver": ["Carry", "Escape"], "Riki": ["Carry", "Escape"], "Bounty Hunter": ["Support", "Escape"],
    "Nyx Assassin": ["Support", "Initiator", "Disabler"], "Spirit Breaker": ["Initiator", "Carry"], "Tusk": ["Initiator", "Support"],
    "Night Stalker": ["Initiator", "Carry"], "Doom": ["Initiator", "Carry"], "Batrider": ["Initiator", "Midlane"],
    "Huskar": ["Carry", "Midlane"], "Meepo": ["Carry", "Midlane"], "Visage": ["Carry", "Support"]
};
const heroAttr = {
    "Anti-Mage": "Ловкость", "Axe": "Сила", "Crystal Maiden": "Интеллект", "Drow Ranger": "Ловкость",
    "Invoker": "Интеллект", "Juggernaut": "Ловкость", "Lion": "Интеллект", "Pudge": "Сила",
    "Phantom Assassin": "Ловкость", "Puck": "Интеллект", "Io": "Сила", "Sniper": "Ловкость",
    "Windranger": "Интеллект", "Zeus": "Интеллект", "Mars": "Сила"
};
const heroComplexity = {
    "Invoker": "Высокий", "Puck": "Высокий", "Io": "Высокий", "Meepo": "Очень высокий",
    "Rubick": "Высокий", "Earth Spirit": "Высокий", "Visage": "Высокий"
};
async function fetchHeroes() {
    try {
        const [heroesRes, statsRes] = await Promise.all([
            fetch('https://api.opendota.com/api/heroes'),
            fetch('https://api.opendota.com/api/heroStats')
        ]);
        allHeroes = await heroesRes.json();
        const stats = await statsRes.json();
        stats.forEach(s => {
            heroesStats.set(s.id, s);
            heroWins.set(s.id, s.pro_win || 0);
            heroPicks.set(s.id, s.pro_pick || 0);
        });
        renderPopularHeroes();
        renderHeroSelects();
        renderBuildHeroList();
        renderMetaTableAll();
        renderTrends();
        setupFilters();
    } catch(e) {
        console.error(e);
        document.getElementById('popularHeroesList').innerHTML = '<p>Ошибка загрузки API</p>';
    }
}
function renderPopularHeroes() {
    const container = document.getElementById('popularHeroesList');
    if (!container) return;
    const topHeroes = allHeroes.slice(0, 40);
    updateHeroGrid(container, topHeroes);
}
function updateHeroGrid(container, heroesList) {
    if (!container) return;
    container.innerHTML = heroesList.map(h => {
        const wins = heroWins.get(h.id) || 0;
        const picks = heroPicks.get(h.id) || 0;
        return `<div class="hero-tag" data-hero="${h.localized_name}">
            ${h.localized_name}<br>
            <span style="font-size:0.7rem; color:#2ecc71;"> ${wins.toLocaleString()} побед</span>
            <span style="font-size:0.65rem; color:#8a8e9e;"> (${picks.toLocaleString()} пиков)</span>
        </div>`;
    }).join('');
    document.querySelectorAll('.hero-tag').forEach(el => {
        el.addEventListener('click', () => {
            const heroName = el.dataset.hero;
            document.getElementById('quickHeroSearch').value = heroName;
            const hero = allHeroes.find(h => h.localized_name === heroName);
            if (hero) {
                const wins = heroWins.get(hero.id) || 0;
                const picks = heroPicks.get(hero.id) || 0;
                alert(` ${heroName}\n Побед в патче: ${wins.toLocaleString()}\n Всего пиков: ${picks.toLocaleString()}\nРоли: ${(heroFullRoles[heroName] || ["Carry"]).join(", ")}`);
            }
        });
    });
    const countEl = document.getElementById('heroCount');
    if (countEl) countEl.textContent = `${heroesList.length} героев`;
}
function renderHeroSelects() {
    const select = document.getElementById('counterHeroSelect');
    if (!select) return;
    select.innerHTML = '<option value="">-- Выбери героя --</option>' + 
        allHeroes.map(h => `<option value="${h.localized_name}">${h.localized_name}</option>`).join('');
    select.addEventListener('change', async (e) => {
        const heroName = e.target.value;
        if (!heroName) return;
        const hero = allHeroes.find(h => h.localized_name === heroName);
        if (!hero) return;
        const winsTotal = heroWins.get(hero.id) || 0;
        const picksTotal = heroPicks.get(hero.id) || 0;
        const resultDiv = document.getElementById('counterResult');
        
        let countersHtml = `<div><strong> Контр-пики против ${heroName}:</strong></div><div class="counter-list-items">`;
        try {
            const res = await fetch(`https://api.opendota.com/api/heroes/${hero.id}/matchups`);
            const data = await res.json();
            const topCounters = data.sort((a,b) => b.wins - a.wins).slice(0, 5);
            for (let counter of topCounters) {
                const counterHero = allHeroes.find(h => h.id === counter.hero_id);
                if (counterHero) {
                    countersHtml += `<div class="counter-item"> ${counterHero.localized_name} — побед против ${heroName}: ${counter.wins} (всего игр: ${counter.games_played})</div>`;
                }
            }
        } catch(e) {
            countersHtml += `<div> Anti-Mage</div><div> Bloodseeker</div><div> Silencer</div>`;
        }
        countersHtml += `</div><div class="counter-stats"> Побед ${heroName} в патче: ${winsTotal.toLocaleString()} |  Всего пиков: ${picksTotal.toLocaleString()}</div>`;
        resultDiv.innerHTML = countersHtml;
    });
}
function setupHeroComparison() {
    const input1 = document.getElementById('hero1Search');
    const input2 = document.getElementById('hero2Search');
    if (!input1 || !input2) return;
    
    const showHeroCard = (heroName, cardId) => {
        const hero = allHeroes.find(h => h.localized_name?.toLowerCase() === heroName?.toLowerCase());
        const card = document.getElementById(cardId);
        if (!card) return;
        if (!hero) {
            card.innerHTML = `<div class="hero-compare-card empty"><p>Введите имя героя</p></div>`;
            return;
        }
        const wins = heroWins.get(hero.id) || 0;
        const picks = heroPicks.get(hero.id) || 0;
        const roles = heroFullRoles[hero.localized_name] || ["Carry"];
        const attr = heroAttr[hero.localized_name] || "Универсал";
        const complexity = heroComplexity[hero.localized_name] || "Средний";
        card.innerHTML = `
            <div class="hero-compare-card">
                <h3>${hero.localized_name}</h3>
                <div class="hero-attributes">
                    <span class="attr-badge">${attr}</span>
                    <span class="attr-badge">Сложность: ${complexity}</span>
                </div>
                <div class="hero-stats-grid">
                    <div class="stat-row"><span class="stat-label"> Побед в патче</span><span class="stat-value">${wins.toLocaleString()}</span></div>
                    <div class="stat-row"><span class="stat-label"> Всего пиков</span><span class="stat-value">${picks.toLocaleString()}</span></div>
                </div>
                <div><strong>Роли:</strong></div>
                <div class="role-list">${roles.map(r => `<span class="role-badge">${r}</span>`).join('')}</div>
            </div>
        `;
    };
    input1.addEventListener('input', () => showHeroCard(input1.value, 'hero1Card'));
    input2.addEventListener('input', () => showHeroCard(input2.value, 'hero2Card'));
}
function renderMetaTableAll() {
    const filter = document.getElementById('metaRoleFilter')?.value || 'all';
    const tbody = document.getElementById('metaTableBody');
    if (!tbody) return;
    let dataToShow = [];
    for (let hero of allHeroes) {
        const stat = heroesStats.get(hero.id);
        if (!stat) continue;
        const roles = heroFullRoles[hero.localized_name] || ["Carry"];
        if (filter === 'all' || roles.includes(filter)) {
            dataToShow.push({
                hero: hero,
                wins: stat.pro_win || 0,
                picks: stat.pro_pick || 0,
                roles: roles[0]
            });
        }
    }
    dataToShow.sort((a,b) => b.picks - a.picks);
    tbody.innerHTML = dataToShow.map((item, idx) => `
        <tr>
            <td>${idx+1}</td>
            <td><span class="hero-img-placeholder" style="background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${item.hero.name.replace('npc_dota_hero_', '')}.png'); background-size: cover; width: 32px; height: 32px; display: inline-block; vertical-align: middle; margin-right: 10px;"></span> ${item.hero.localized_name}</td>
            <td> ${item.wins.toLocaleString()}</td>
            <td> ${item.picks.toLocaleString()}</td>
            <td>${item.roles}</td>
        </tr>
    `).join('');
    const countEl = document.getElementById('metaHeroCount');
    if (countEl) countEl.textContent = `${dataToShow.length} героев`;
}
function renderTrends() {
    const upDiv = document.getElementById('trendingUp');
    const downDiv = document.getElementById('trendingDown');
    if (upDiv) upDiv.innerHTML = `<div>Mars: +3.2% WR</div><div>Dark Seer: +2.8% WR</div><div>Vengeful Spirit: +2.1% WR</div><div>Dawnbreaker: +1.9% WR</div>`;
    if (downDiv) downDiv.innerHTML = `<div>Meepo: -4.5% WR</div><div>Broodmother: -3.2% WR</div><div>Visage: -2.8% WR</div><div>Chen: -1.7% WR</div>`;
}
function setupFilters() {
    const metaFilter = document.getElementById('metaRoleFilter');
    if (metaFilter) metaFilter.addEventListener('change', () => renderMetaTableAll());
    const homeFilter = document.getElementById('roleFilterHome');
    const searchInput = document.getElementById('quickHeroSearch');
    if (!homeFilter || !searchInput) return;
    const applyHomeFilters = () => {
        const role = homeFilter.value;
        const query = searchInput.value.toLowerCase();
        let filtered = [...allHeroes];
        if (role !== 'all') {
            filtered = filtered.filter(h => {
                const roles = heroFullRoles[h.localized_name] || ["Carry"];
                return roles.includes(role);
            });
        }
        if (query) {
            filtered = filtered.filter(h => h.localized_name.toLowerCase().includes(query));
        }
        const container = document.getElementById('popularHeroesList');
        if (container) updateHeroGrid(container, filtered.slice(0, 60));
    };
    homeFilter.addEventListener('change', applyHomeFilters);
    searchInput.addEventListener('input', applyHomeFilters);
}
function renderBuildHeroList() {
    const buildHeroes = ["Juggernaut", "Pudge", "Invoker", "Crystal Maiden", "Anti-Mage", "Axe", "Phantom Assassin", "Lion"];
    const container = document.getElementById('buildHeroList');
    if (!container) return;
    container.innerHTML = buildHeroes.map(name => `<button class="hero-btn" data-hero="${name}">${name}</button>`).join('');
    document.querySelectorAll('.hero-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.hero-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showBuild(btn.dataset.hero);
        });
    });
}
function showBuild(heroName) {
    const builds = {
        "Juggernaut": { role: "Керри", early: ["Phase Boots (87%)", "Magic Wand (92%)", "Wraith Band (78%)"], mid: ["Battle Fury (45%)", "Manta Style (67%)", "Skull Basher (52%)"], late: ["Abyssal Blade (38%)", "Butterfly (29%)", "Swift Blink (41%)"], alternatives: [["Radiance + Manta", "45.3%", "12%", "Фарм + против иллюзий"], ["BKB + Abyssal Blade", "53.1%", "28%", "Против контроля"]] },
        "Pudge": { role: "Сапорт / Офлейн", early: ["Boots of Speed (95%)", "Magic Wand (88%)", "Bracer (76%)"], mid: ["Blink Dagger (61%)", "Hood of Defiance (44%)", "Aether Lens (39%)"], late: ["Aghanim's Scepter (33%)", "BKB (41%)", "Octarine Core (28%)"], alternatives: [["Blademail + BKB", "51%", "15%", "Против физ урона"], ["Dagger + Aghs", "48%", "35%", "Стандартный ганк"]] },
        "Invoker": { role: "Мидер", early: ["Null Talisman x2 (89%)", "Boots of Speed (91%)", "Bracer (72%)"], mid: ["Blink Dagger (58%)", "Witch Blade (43%)", "Aghanim's Shard (37%)"], late: ["Refresher Orb (31%)", "Octarine Core (44%)", "Scythe of Vyse (26%)"], alternatives: [["Quas-Wex (Extort)", "47%", "20%", "Форс-бут + нюк"], ["EMP Spam Build", "44%", "8%", "Мана дрейн"]] },
        "Crystal Maiden": { role: "Сапорт", early: ["Arcane Boots (91%)", "Clarity x3 (83%)", "Wind Lace (78%)"], mid: ["Glimmer Cape (55%)", "Force Staff (49%)", "Aether Lens (42%)"], late: ["Aghanim's Scepter (38%)", "Octarine Core (30%)", "Kaya (25%)"], alternatives: [["Black King Bar", "49%", "8%", "Против burst урона"], ["Dagon 5", "42%", "3%", "Мем-билд"]] },
        "Anti-Mage": { role: "Керри", early: ["Power Treads (88%)", "Wraith Band x2 (79%)", "Magic Wand (83%)"], mid: ["Battle Fury (71%)", "Manta Style (63%)", "Abyssal Blade (48%)"], late: ["Butterfly (42%)", "Heart of Tarrasque (35%)", "Eye of Skadi (29%)"], alternatives: [["Disperser + Manta", "52%", "18%", "Против магии"], ["Mjollnir rush", "46%", "6%", "Против иллюзий"]] },
        "Axe": { role: "Офлейн", early: ["Phase Boots (86%)", "Vanguard (74%)", "Magic Wand (82%)"], mid: ["Blade Mail (62%)", "Blink Dagger (71%)", "Crimson Guard (45%)"], late: ["Heart of Tarrasque (39%)", "Aghanim's Shard (55%)", "Lotus Orb (34%)"], alternatives: [["Radiance", "46%", "7%", "Через Spin фарм"], ["Blade Mail + BKB", "51%", "22%", "Агрессивный стиль"]] },
        "Phantom Assassin": { role: "Керри", early: ["Phase Boots (88%)", "Orb of Venom (65%)", "Wraith Band (79%)"], mid: ["Battle Fury (55%)", "Desolator (48%)", "Blink Dagger (61%)"], late: ["Abyssal Blade (42%)", "Butterfly (36%)", "Nullifier (28%)"], alternatives: [["Skull Basher rush", "50%", "22%", "Против мобильных"], ["Desolator + Daedalus", "54%", "31%", "Максимум урона"]] },
        "Lion": { role: "Сапорт", early: ["Arcane Boots (88%)", "Wind Lace (76%)", "Clarity x2 (81%)"], mid: ["Aether Lens (60%)", "Blink Dagger (52%)", "Force Staff (45%)"], late: ["Aghanim's Scepter (44%)", "Scythe of Vyse (31%)", "Octarine Core (26%)"], alternatives: [["Ethereal Blade + Dagon", "44%", "5%", "Burst нок"]] }
    };
    const build = builds[heroName];
    if (!build) return;
    const container = document.getElementById('buildDetail');
    if (!container) return;
    container.innerHTML = `
        <h3>Сборка предметов для ${heroName}</h3>
        <p><strong>Роль:</strong> ${build.role}</p>
        <div class="build-section"><h4>Ранняя игра</h4><div class="item-list">${build.early.map(i => `<span class="item-card">${i}</span>`).join('')}</div></div>
        <div class="build-section"><h4>Средняя игра</h4><div class="item-list">${build.mid.map(i => `<span class="item-card">${i}</span>`).join('')}</div></div>
        <div class="build-section"><h4>Поздняя игра</h4><div class="item-list">${build.late.map(i => `<span class="item-card">${i}</span>`).join('')}</div></div>
        <div class="build-section"><h4>Альтернативные сборки</h4>
            <table class="alternative-table"><thead><tr><th>Вариант сборки</th><th>Win Rate</th><th>Популярность</th><th>Для чего / против кого</th></tr></thead><tbody>
            ${build.alternatives.map(a => `<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td></tr>`).join('')}
            </tbody></table>
        </div>
    `;
}
function setupSteam() {
    const loginBtn = document.getElementById('steamLoginBtn');
    const loadBtn = document.getElementById('loadProfileBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const profileLink = document.querySelector('[data-page="profile"]');
            if (profileLink) profileLink.click();
        });
    }
    if (loadBtn) {
        loadBtn.addEventListener('click', async () => {
            const idInput = document.getElementById('steamIdInput');
            if (!idInput) return;
            const id = idInput.value.trim();
            if (!id) {
                alert('Введите Steam ID');
                return;
            }
            const container = document.getElementById('profileStats');
            if (!container) return;
            container.innerHTML = '<p> Загрузка...</p>';
            
            try {
                const res = await fetch(`https://api.opendota.com/api/players/${id}`);
                if (!res.ok) throw new Error('Игрок не найден');
                const data = await res.json();
                const profile = data.profile || {};
                const avatarFull = profile.avatarmedium || profile.avatar || '';
                const personaname = profile.personaname || 'Неизвестно';
                const leaderboardRank = data.rank_tier || 0;
                container.innerHTML = `
                    <div class="profile-result">
                        <div class="profile-header">
                            ${avatarFull ? `<img src="${avatarFull}" alt="Аватар" class="profile-avatar">` : '<div class="profile-avatar-placeholder">🎮</div>'}
                            <div class="profile-name">
                                <h3>${personaname}</h3>
                                <span class="profile-steamid">Steam ID: ${id}</span>
                            </div>
                        </div>
                        <div class="profile-details">
                            <div class="profile-detail-item full-width">
                                <span class="detail-label">🏆 Ранг в лидерборде</span>
                                <span class="detail-value rank-number">${leaderboardRank > 0 ? `#${leaderboardRank}` : 'Не в топе'}</span>
                            </div>
                        </div>
                    </div>
                `;
            } catch(error) {
                container.innerHTML = `
                    <div class="profile-error">
                        <p> Ошибка: ID не найден или профиль закрыт</p>
                        <p class="hint">Убедись, что профиль Steam открыт для публичного просмотра</p>
                    </div>
                `;
            }
        });
    }
}
function setupNavigation() {
    const links = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            pages.forEach(p => p.classList.remove('active-page'));
            const targetPage = document.getElementById(`${pageId}-page`);
            if (targetPage) targetPage.classList.add('active-page');
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}
function setupMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navbar = document.getElementById('mainNav');
    
    if (toggle && navbar) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbar.classList.toggle('open');
        });
        
        navbar.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                navbar.classList.remove('open');
            });
        });
    }
}
document.addEventListener('DOMContentLoaded', function() {
    fetchHeroes();
    setupNavigation();
    setupHeroComparison();
    setupSteam();
    setupMobileMenu();
});