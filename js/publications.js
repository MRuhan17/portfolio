document.addEventListener('DOMContentLoaded', () => {
    // Publications Database
    const publications = [
        {
            id: "prompt-injection-2026",
            title: "Evaluating Prompt Injection Vulnerabilities in AI Agents",
            authors: "Ruhulalemeen Mulla",
            year: 2026,
            type: "Research Paper",
            venue: "Zenodo",
            doi: "10.5281/zenodo.20631345",
            featured: true,
            status: "Published",
            url: "https://zenodo.org/records/20631345",
            tags: [
                "AI Security",
                "AI Safety",
                "LLMs",
                "Adversarial ML"
            ],
            abstract: "This research investigates prompt injection vulnerabilities in Large Language Models (LLMs) and AI agents, one of the most significant security challenges in modern AI systems. The paper introduces a structured taxonomy of prompt injection attacks, including direct instruction attacks, role override attempts, hidden text injections, multi-turn manipulation, and tool misuse exploits. It proposes a comprehensive evaluation framework that measures model resilience through metrics such as Attack Success Rate (ASR), severity, recovery capability, consistency, false positive rate, and task performance retention. The study also analyzes current defense mechanisms, including structured prompting, input validation, response verification, multi-layer security architectures, and human-in-the-loop oversight. The work aims to provide a reproducible evaluation benchmark and actionable recommendations for building more secure AI agents.",
            bibtex: `@article{mulla2026evaluating,
  title={Evaluating Prompt Injection Vulnerabilities in AI Agents},
  author={Mulla, Ruhulalemeen},
  journal={Zenodo},
  year={2026},
  doi={10.5281/zenodo.20631345},
  url={https://zenodo.org/records/20631345}
}`
        },
        {
            id: "agentshield-bench-2026",
            title: "AgentShield Bench: Evaluating the Security Resilience of OpenAI and Gemini LLM Agents Against Adversarial Agent Workflows",
            authors: "Ruhulalemeen Mulla",
            year: 2026,
            type: "Research Paper",
            venue: "Zenodo",
            doi: "10.5281/zenodo.20677149",
            featured: false,
            status: "Published",
            url: "https://zenodo.org/records/20677149",
            tags: [
                "AI Security",
                "LLM Security",
                "Agent Security",
                "Prompt Injection",
                "Benchmark Dataset",
                "Adversarial AI",
                "Autonomous Agents",
                "RAG Security",
                "Retrieval Poisoning",
                "Memory Manipulation",
                "Cybersecurity",
                "Large Language Models"
            ],
            abstract: "AgentShield Bench is a security benchmarking framework designed to evaluate the resilience of Large Language Model (LLM) agents against adversarial workflows. This work introduces a benchmark dataset containing 130 security-focused attack scenarios spanning prompt injection, role override, tool misuse, multi-turn manipulation, retrieval poisoning, memory manipulation, data exfiltration, and goal hijacking attacks.\n\nThe accompanying research paper presents the design of the AgentShield Bench framework, the AgentShield Security Score (ASSS), and an empirical evaluation of modern LLM agents under adversarial conditions. The benchmark aims to provide a reproducible methodology for assessing agent security beyond traditional conversational safety evaluations.\n\nThis release includes:\n• Research paper: \"AgentShield Bench: Evaluating the Security Resilience of OpenAI and Gemini LLM Agents Against Adversarial Agent Workflows\"\n• AgentShield Bench attack dataset (130 benchmark scenarios)\n\nThe dataset and paper are released to support reproducible research in AI security, agent safety, prompt injection resilience, retrieval-augmented generation security, and autonomous agent evaluation.",
            bibtex: `@article{mulla2026agentshield,
  title={AgentShield Bench: Evaluating the Security Resilience of OpenAI and Gemini LLM Agents Against Adversarial Agent Workflows},
  author={Mulla, Ruhulalemeen},
  journal={Zenodo},
  year={2026},
  doi={10.5281/zenodo.20677149},
  url={https://zenodo.org/records/20677149}
}`
        },
        {
            id: "agentshield-bench-v2-2026",
            title: "AgentShield Bench v2: Evaluating Memory Security, Persistent Jailbreaks, and Cross Session Compromise in Autonomous LLM Agents",
            authors: "Ruhulalemeen Mulla",
            year: 2026,
            type: "Research Paper",
            venue: "Zenodo",
            doi: "10.5281/zenodo.20756086",
            featured: false,
            status: "Published",
            url: "https://zenodo.org/records/20756086",
            tags: [
                "Large Language Models",
                "Autonomous AI Agents",
                "Agent Security",
                "Memory Security",
                "Memory Poisoning",
                "Persistent Jailbreaks",
                "Cross-Session Compromise",
                "Adversarial Machine Learning",
                "AI Safety",
                "Benchmarking",
                "AgentShield Bench",
                "Behavioral Compromise Rate"
            ],
            abstract: "AgentShield Bench v2 is a benchmark framework for evaluating persistent memory security vulnerabilities in autonomous Large Language Model (LLM) agents.\n\nUnlike traditional AI security benchmarks that primarily focus on prompt injection and single-session adversarial attacks, AgentShield Bench v2 investigates how malicious information can be stored in long-term memory, persist across conversational boundaries, and influence future agent behavior.\n\nThe benchmark introduces a dataset of 320 memory-security attack scenarios spanning eight threat categories: False Memory Injection, Memory Corruption, Persistent Jailbreaks, Goal Manipulation, Privilege Escalation, Cross-Session Persistence, Trust Exploitation, and Recovery Evaluation.\n\nAgentShield Bench v2 proposes a memory-focused evaluation methodology based on five metrics:\nMemory Integrity Score (MIS)\nPersistence Score (PS)\nBehavioral Compromise Rate (BCR)\nRecovery Effectiveness Score (RES)\nMemory Security Score (MSS)\n\nExperimental evaluation was conducted using GPT-4o-mini and Llama-3.1-8B-Instant, providing comparative analysis of memory poisoning resilience, defense effectiveness, and cross-session compromise behavior.\n\nA key finding of this work is the identification of the Key Mismatch Gap, an evaluation phenomenon in which behavioral compromise can occur despite memory-integrity metrics reporting near-perfect security. This highlights the limitations of exact-match memory evaluation techniques and motivates future research into semantic memory-security assessment.\n\nThis release contains the research paper associated with AgentShield Bench v2 and serves as a citable technical report from Evalyze Labs.",
            bibtex: `@article{mulla2026agentshieldv2,
  title={AgentShield Bench v2: Evaluating Memory Security, Persistent Jailbreaks, and Cross Session Compromise in Autonomous LLM Agents},
  author={Mulla, Ruhulalemeen},
  journal={Zenodo},
  year={2026},
  doi={10.5281/zenodo.20756086},
  url={https://zenodo.org/records/20756086}
}`
        }
    ];

    // State Management
    let searchQuery = "";
    let activeResearchArea = "All";
    let activePubType = "All";
    let sortBy = "newest";

    // DOM Elements
    const gridContainer = document.getElementById('publications-grid');
    const emptyState = document.getElementById('publications-empty-state');
    const searchInput = document.getElementById('pub-search');
    const sortSelect = document.getElementById('pub-sort');
    const researchFiltersContainer = document.getElementById('research-area-filters');
    const typeFiltersContainer = document.getElementById('publication-type-filters');
    
    // Stats Elements
    const statTotalPubs = document.getElementById('stat-total-publications');
    const statResearchAreas = document.getElementById('stat-research-areas');
    const statYearsActive = document.getElementById('stat-years-active');
    const statPublishedWorks = document.getElementById('stat-published-works');

    // Modal Elements
    const bibtexModal = document.getElementById('bibtex-modal');
    const modalCitationCode = document.getElementById('modal-citation-code');
    const closeModalBtn = document.getElementById('close-modal');
    const copyModalBtn = document.getElementById('copy-modal-bibtex');

    // Initialize the Publications section
    function init() {
        if (!gridContainer) return; // Prevent errors if not on the page
        
        calculateStats();
        renderFilters();
        filterAndRenderPublications();
        setupEventListeners();
    }

    // Dynamic Stats Calculation
    function calculateStats() {
        const total = publications.length;
        
        // Count unique tags
        const allTags = publications.flatMap(p => p.tags);
        const uniqueTags = new Set(allTags).size;
        
        // Calculate years range
        const years = publications.map(p => p.year);
        const minYear = years.length > 0 ? Math.min(...years) : 2026;
        const currentYear = new Date().getFullYear();
        const yearsActiveText = minYear === currentYear ? `${minYear}–Present` : `${minYear}–${currentYear}`;
        
        // Count published works
        const publishedCount = publications.filter(p => p.status === 'Published').length;

        // Update DOM
        if (statTotalPubs) statTotalPubs.textContent = total;
        if (statResearchAreas) statResearchAreas.textContent = uniqueTags;
        if (statYearsActive) statYearsActive.textContent = yearsActiveText;
        if (statPublishedWorks) statPublishedWorks.textContent = publishedCount;
    }

    // Dynamic Filters Rendering
    function renderFilters() {
        if (!researchFiltersContainer || !typeFiltersContainer) return;

        // Render Research Area tags
        const allTags = publications.flatMap(p => p.tags);
        const uniqueTags = ["All", ...new Set(allTags)];
        
        researchFiltersContainer.innerHTML = uniqueTags.map(tag => `
            <button class="filter-btn tag-pill ${tag === activeResearchArea ? 'active' : ''}" data-filter="${tag}">
                ${tag}
            </button>
        `).join('');

        // Render Publication Type tags
        const allTypes = publications.map(p => p.type);
        const uniqueTypes = ["All", ...new Set(allTypes)];
        
        typeFiltersContainer.innerHTML = uniqueTypes.map(type => `
            <button class="filter-btn tag-pill ${type === activePubType ? 'active' : ''}" data-filter="${type}">
                ${type}
            </button>
        `).join('');
    }

    // Filter, Sort and Render Grid
    function filterAndRenderPublications() {
        // Filter
        let filtered = publications.filter(pub => {
            const matchesSearch = searchQuery === "" || 
                pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesArea = activeResearchArea === "All" || pub.tags.includes(activeResearchArea);
            const matchesType = activePubType === "All" || pub.type === activePubType;

            return matchesSearch && matchesArea && matchesType;
        });

        // Sort
        filtered.sort((a, b) => {
            if (sortBy === "newest") {
                return b.year - a.year;
            } else if (sortBy === "oldest") {
                return a.year - b.year;
            } else if (sortBy === "title") {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        // Toggle Empty State
        if (filtered.length === 0) {
            gridContainer.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
        } else {
            gridContainer.style.display = 'grid';
            if (emptyState) emptyState.style.display = 'none';
            renderGrid(filtered);
        }
    }

    // Render Cards in Grid
    function renderGrid(items) {
        gridContainer.innerHTML = items.map(pub => {
            const tagsHTML = pub.tags.map(tag => `<span class="tag-pill mini-tag">${tag}</span>`).join('');
            
            return `
                <div class="pub-card reveal active" id="${pub.id}">
                    <div class="pub-card-header">
                        <div class="pub-badges">
                            <span class="badge type-badge">${pub.type}</span>
                            <span class="badge status-badge ${pub.status.toLowerCase()}">${pub.status}</span>
                        </div>
                        <span class="pub-year">${pub.year}</span>
                    </div>
                    
                    <h3 class="pub-title">${pub.title}</h3>
                    <div class="pub-authors">${pub.authors}</div>
                    
                    <div class="pub-venue-doi">
                        <span class="pub-venue">${pub.venue}</span>
                        ${pub.doi ? `<span class="pub-doi">• DOI: <a href="https://doi.org/${pub.doi}" target="_blank" class="doi-link">${pub.doi}</a></span>` : ''}
                    </div>

                    <div class="pub-abstract-container">
                        <button class="toggle-abstract-btn" aria-expanded="false">
                            <span class="toggle-text">Read Abstract</span>
                            <svg class="toggle-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <div class="pub-abstract" style="max-height: 0px; opacity: 0; overflow: hidden; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);">
                            <p>${pub.abstract}</p>
                        </div>
                    </div>

                    <div class="tags-container mini">
                        ${tagsHTML}
                    </div>

                    <div class="pub-actions">
                        <a href="${pub.url}" target="_blank" class="pub-btn primary-btn" aria-label="Read paper on Zenodo">
                            <span>Read Paper</span>
                            <svg class="icon-external" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 2H2C1.44772 2 1 2.44772 1 3V10C1 10.5523 1.44772 11 2 11H9C9.55228 11 10 10.5523 10 10V6"/>
                                <path d="M7 1H11V5"/>
                                <path d="M11 1L5 7"/>
                            </svg>
                        </a>
                        <button class="pub-btn secondary-btn view-bibtex-btn" data-id="${pub.id}">
                            View Citation
                        </button>
                        <button class="pub-btn secondary-btn copy-bibtex-btn" data-id="${pub.id}">
                            Copy BibTeX
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Bind events on the newly generated cards
        bindCardInteractiveEvents();
    }

    // Bind event listeners for card contents (toggles & buttons)
    function bindCardInteractiveEvents() {
        // Abstract Collapsible Toggle
        const toggleButtons = gridContainer.querySelectorAll('.toggle-abstract-btn');
        toggleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const abstractDiv = btn.nextElementSibling;
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                
                btn.setAttribute('aria-expanded', !isExpanded);
                
                if (isExpanded) {
                    abstractDiv.style.maxHeight = '0px';
                    abstractDiv.style.opacity = '0';
                    btn.querySelector('.toggle-text').textContent = 'Read Abstract';
                    btn.classList.remove('expanded');
                } else {
                    // Set scrollHeight to expand completely
                    abstractDiv.style.maxHeight = abstractDiv.scrollHeight + 'px';
                    abstractDiv.style.opacity = '1';
                    btn.querySelector('.toggle-text').textContent = 'Hide Abstract';
                    btn.classList.add('expanded');
                }
            });
        });

        // View Citation button
        const viewBibtexBtns = gridContainer.querySelectorAll('.view-bibtex-btn');
        viewBibtexBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const pubId = btn.getAttribute('data-id');
                const pub = publications.find(p => p.id === pubId);
                if (pub) {
                    showModal(pub);
                }
            });
        });

        // Copy BibTeX button
        const copyBibtexBtns = gridContainer.querySelectorAll('.copy-bibtex-btn');
        copyBibtexBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const pubId = btn.getAttribute('data-id');
                const pub = publications.find(p => p.id === pubId);
                if (pub) {
                    navigator.clipboard.writeText(pub.bibtex).then(() => {
                        const originalText = btn.textContent;
                        btn.textContent = "Copied!";
                        btn.classList.add('success');
                        setTimeout(() => {
                            btn.textContent = originalText;
                            btn.classList.remove('success');
                        }, 2000);
                    });
                }
            });
        });
    }

    // Set up General Search, Filtering and Sorting Events
    function setupEventListeners() {
        // Search Input
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                filterAndRenderPublications();
            });
        }

        // Sort Select
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                sortBy = e.target.value;
                filterAndRenderPublications();
            });
        }

        // Research Filters event delegation
        if (researchFiltersContainer) {
            researchFiltersContainer.addEventListener('click', (e) => {
                const target = e.target.closest('.filter-btn');
                if (!target) return;
                
                // Toggle active class in state
                activeResearchArea = target.getAttribute('data-filter');
                
                // Update UI active buttons
                researchFiltersContainer.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-filter') === activeResearchArea);
                });

                filterAndRenderPublications();
            });
        }

        // Publication Type Filters event delegation
        if (typeFiltersContainer) {
            typeFiltersContainer.addEventListener('click', (e) => {
                const target = e.target.closest('.filter-btn');
                if (!target) return;

                activePubType = target.getAttribute('data-filter');
                
                // Update UI active buttons
                typeFiltersContainer.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-filter') === activePubType);
                });

                filterAndRenderPublications();
            });
        }

        // Modal Close Button
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', hideModal);
        }

        // Modal Backdrop Click
        if (bibtexModal) {
            bibtexModal.addEventListener('click', (e) => {
                if (e.target === bibtexModal) {
                    hideModal();
                }
            });
        }

        // Escape key to close modal
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && bibtexModal && bibtexModal.classList.contains('active')) {
                hideModal();
            }
        });
    }

    // Modal Helpers
    function showModal(pub) {
        if (!bibtexModal || !modalCitationCode) return;
        
        modalCitationCode.textContent = pub.bibtex;
        bibtexModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scrolling
        
        // Setup modal copy button
        if (copyModalBtn) {
            // Remove previous event listeners
            const newCopyBtn = copyModalBtn.cloneNode(true);
            copyModalBtn.replaceWith(newCopyBtn);
            
            newCopyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(pub.bibtex).then(() => {
                    const originalText = newCopyBtn.textContent;
                    newCopyBtn.textContent = "Copied Citation!";
                    newCopyBtn.classList.add('success');
                    setTimeout(() => {
                        newCopyBtn.textContent = originalText;
                        newCopyBtn.classList.remove('success');
                    }, 2000);
                });
            });
        }
    }

    function hideModal() {
        if (!bibtexModal) return;
        bibtexModal.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scrolling
    }

    // Start everything
    init();
});
