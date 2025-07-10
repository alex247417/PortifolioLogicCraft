// File: Scripts/script.js
// This script handles the dynamic content and interactivity of the portfolio page, including skills display,
        document.addEventListener('DOMContentLoaded', function() {
            
            const skillsData = [
                { name: 'C#', icon: 'C#' }, { name: '.NET Core', icon: '.NET' }, { name: 'ASP.NET', icon: '🌐' },
                { name: 'Entity Framework', icon: '📚' }, { name: 'SQL Server', icon: '🗄️' }, { name: 'MySQL', icon: '🐬' },
                { name: 'JavaScript', icon: '📜' }, { name: 'React', icon: '⚛️' }, { name: 'HTML5', icon: '📄' },
                { name: 'CSS3', icon: '🎨' }, { name: 'Azure', icon: '☁️' }, { name: 'Docker', icon: '🐳' },
                { name: 'RabbitMQ', icon: '🐇' }, { name: 'PostgreSQL', icon: '🐘' }, { name: 'Git', icon: '🌿' },
                { name: 'DevOps', icon: '⚙️' }, { name: 'Scrum', icon: '🔄' }, { name: 'TDD', icon: '🧪' }
            ];

            const projectsData = [
                {
                    id: 'api-ecommerce',
                    title: 'API RESTful para E-commerce',
                    tags: ['.NET', 'EF Core', 'SQL Server', 'JWT', 'Docker'],
                    image: 'https://placehold.co/600x400/0d6efd/ffffff?text=API+E-commerce',
                    summary: 'Uma API robusta para gerenciar produtos, pedidos e usuários de uma plataforma de e-commerce, com foco em segurança e performance.',
                    problem: 'A necessidade de um back-end centralizado e seguro para uma aplicação de e-commerce, capaz de lidar com autenticação de usuários, gerenciamento de inventário e processamento de pedidos de forma eficiente e escalável.',
                    solution: `
                        <h4 class="text-xl font-bold mb-2 text-accent">Arquitetura e Endpoints</h4>
                        <p class="mb-4">Desenvolvi uma API RESTful utilizando ASP.NET Core e o padrão de arquitetura Limpa (Clean Architecture) para garantir a separação de responsabilidades e alta testabilidade. Os principais endpoints incluem:</p>
                        <ul class="list-disc list-inside space-y-2 mb-4">
                            <li><b>POST /api/auth/register:</b> Cadastro de novos usuários.</li>
                            <li><b>POST /api/auth/login:</b> Autenticação e geração de token JWT.</li>
                            <li><b>GET /api/products:</b> Listagem de produtos com filtros e paginação.</li>
                            <li><b>POST /api/orders:</b> Criação de novos pedidos (rota protegida).</li>
                        </ul>
                        <h4 class="text-xl font-bold mb-2 text-accent">Banco de Dados e ORM</h4>
                        <p class="mb-4">Utilizei o SQL Server como banco de dados, modelado e acessado através do Entity Framework Core (Code-First), o que permitiu um desenvolvimento ágil e a fácil manutenção do schema.</p>
                        <pre class="bg-gray-100 p-3 rounded-md text-sm"><code>
CREATE TABLE Products (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(100) NOT NULL,
    Price DECIMAL(18, 2) NOT NULL,
    Stock INT NOT NULL
);
                        </code></pre>
                        <h4 class="text-xl font-bold mb-2 mt-4 text-accent">Containerização</h4>
                        <p>A aplicação foi totalmente containerizada com Docker, facilitando o deploy em qualquer ambiente e garantindo consistência entre desenvolvimento e produção.</p>
                    `,
                    result: 'A API processa mais de 500 requisições por minuto com tempo de resposta médio inferior a 80ms. A implementação de autenticação com JWT e roles de autorização garantiu um ambiente seguro para transações. A arquitetura modular permitiu a fácil adição de novos módulos, como um sistema de avaliações de produtos.',
                    liveLink: '#',
                    repoLink: '#'
                },
                {
                    id: 'microsservico-pedidos',
                    title: 'Microsserviço de Processamento de Pedidos',
                    tags: ['.NET', 'RabbitMQ', 'Docker', 'Clean Code'],
                    image: 'https://placehold.co/600x400/198754/ffffff?text=Microsserviço',
                    summary: 'Um serviço desacoplado e resiliente para processar pedidos de forma assíncrona, utilizando mensageria.',
                    problem: 'O processo de criação de um pedido em um sistema monolítico estava causando lentidão e pontos de falha, pois envolvia múltiplas etapas síncronas (verificar estoque, processar pagamento, enviar e-mail). Era necessário desacoplar esse fluxo para aumentar a resiliência e a performance do sistema.',
                    solution: `
                        <h4 class="text-xl font-bold mb-2 text-accent">Fluxo Assíncrono com Mensageria</h4>
                        <p class="mb-4">A solução foi criar um microsserviço dedicado em .NET. Quando a API principal recebe uma requisição de pedido, ela apenas valida os dados e publica uma mensagem na fila do <strong>RabbitMQ</strong>. O microsserviço de pedidos, um consumidor dessa fila, processa a mensagem de forma assíncrona.</p>
                        <p class="mb-4">Este fluxo desacoplado garante que a API principal responda rapidamente ao usuário, enquanto o processamento pesado ocorre em segundo plano. O uso de uma Dead Letter Queue (DLQ) foi implementado para tratar falhas de processamento, garantindo que nenhum pedido seja perdido.</p>
                        <h4 class="text-xl font-bold mb-2 text-accent">Isolamento e Escalabilidade</h4>
                        <p>O serviço foi containerizado com Docker, permitindo que ele seja escalado de forma independente da aplicação principal, suportando picos de demanda sem impactar outras partes do sistema.</p>
                    `,
                    result: 'Redução de 90% no tempo de resposta da API de criação de pedidos. O sistema se tornou resiliente a falhas em serviços externos (como gateways de pagamento), pois as tentativas de reprocessamento são gerenciadas pela fila. A escalabilidade do serviço de pedidos permitiu um aumento de 300% na capacidade de processamento durante eventos de alta demanda.',
                    liveLink: '#',
                    repoLink: '#'
                },
                {
                    id: 'serverless-azure',
                    title: 'ETL com Azure Functions',
                    tags: ['Azure', 'Serverless', 'C#', 'SQL'],
                    image: 'https://placehold.co/600x400/ffc107/ffffff?text=Azure+ETL',
                    summary: 'Uma solução serverless para extrair, transformar e carregar dados de uma API externa para um banco de dados analítico.',
                    problem: 'A necessidade de coletar dados de vendas de uma API de terceiros diariamente e consolidá-los em um banco de dados interno para análise de BI, de forma automatizada, econômica e sem a necessidade de manter um servidor dedicado.',
                    solution: `
                        <h4 class="text-xl font-bold mb-2 text-accent">Arquitetura Serverless</h4>
                        <p class="mb-4">Desenvolvi uma <strong>Azure Function</strong> com um gatilho de tempo (Timer Trigger) configurado para executar todos os dias à meia-noite. A função, escrita em C#, executa o seguinte processo:</p>
                        <ol class="list-decimal list-inside space-y-2 mb-4">
                            <li><strong>Extração (E):</strong> Conecta-se à API externa, busca os dados do dia anterior e os desserializa.</li>
                            <li><strong>Transformação (T):</strong> Limpa e formata os dados, ajustando tipos e calculando novos campos derivados.</li>
                            <li><strong>Carga (L):</strong> Insere os dados transformados em uma tabela de um Azure SQL Database usando o Entity Framework Core para segurança e eficiência.</li>
                        </ol>
                        <h4 class="text-xl font-bold mb-2 text-accent">Monitoramento e Segurança</h4>
                        <p>As chaves da API e a string de conexão do banco de dados foram armazenadas de forma segura no Azure Key Vault, acessado pela função através de uma identidade gerenciada, eliminando a necessidade de armazenar segredos no código ou na configuração da aplicação.</p>
                    `,
                    result: 'A solução eliminou completamente a necessidade de intervenção manual no processo de ETL, garantindo que os dados estejam sempre atualizados para a equipe de BI. O custo operacional é extremamente baixo, pois o pagamento é baseado apenas no tempo de execução da função (poucos segundos por dia). O processo é confiável e monitorado através do Application Insights.',
                    liveLink: '#',
                    repoLink: '#'
                }
            ];

            // --- UI INJECTION ---
            const skillsGrid = document.getElementById('skills-grid');
            skillsData.forEach(skill => {
                const skillCard = document.createElement('div');
                skillCard.className = 'skill-card text-center p-4 card rounded-lg shadow-sm reveal-on-scroll';
                skillCard.innerHTML = `
                    <div class="skill-icon mb-2 flex justify-center items-center h-10">${skill.icon}</div>
                    <h3 class="font-medium card-title mt-2">${skill.name}</h3>
                `;
                skillsGrid.appendChild(skillCard);
            });

            const projectGrid = document.getElementById('project-grid');
            projectsData.forEach(p => {
                const card = document.createElement('div');
                card.className = 'reveal-on-scroll card rounded-lg shadow-lg overflow-hidden group cursor-pointer';
                card.setAttribute('data-id', p.id);
                card.innerHTML = `
                    <div class="relative">
                        <img src="${p.image}" alt="${p.title}" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 card-title">${p.title}</h3>
                        <p class="card-text mb-4 min-h-[3rem]">${p.summary}</p>
                        <div class="flex flex-wrap gap-2">
                            ${p.tags.map(tag => `<span class="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                projectGrid.appendChild(card);
            });

            // --- INTERACTIVITY ---
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Project Modal Logic
            const projectModal = document.getElementById('project-modal');
            const projectModalBody = document.getElementById('modal-body');

            projectGrid.addEventListener('click', (e) => {
                const card = e.target.closest('[data-id]');
                if (card) {
                    const projectId = card.getAttribute('data-id');
                    const project = projectsData.find(p => p.id === projectId);
                    
                    projectModalBody.innerHTML = `
                        <div class="flex justify-between items-start mb-4">
                            <h2 class="text-3xl font-bold">${project.title}</h2>
                            <button id="close-project-modal" class="text-4xl font-light leading-none">&times;</button>
                        </div>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.tags.map(tag => `<span class="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
                        </div>
                        <div class="space-y-6 leading-relaxed">
                            <div><h3 class="text-2xl font-bold mb-2 border-b-2 pb-1" style="border-color: var(--accent-color);">O Desafio</h3><p>${project.problem}</p></div>
                            <div><h3 class="text-2xl font-bold mb-2 border-b-2 pb-1" style="border-color: var(--accent-color);">A Solução Técnica</h3><div>${project.solution}</div></div>
                            <div><h3 class="text-2xl font-bold mb-2 border-b-2 pb-1" style="border-color: var(--accent-color);">Resultados e Impacto</h3><p>${project.result}</p></div>
                        </div>
                        <div class="mt-8 flex gap-4">
                             <a href="${project.liveLink}" target="_blank" class="btn-primary font-bold py-2 px-6 rounded-lg">Ver Demo ao vivo</a>
                             <a href="${project.repoLink}" target="_blank" class="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition">Ver Código no GitHub</a>
                        </div>
                    `;
                    
                    projectModal.classList.remove('hidden');
                    setTimeout(() => {
                        projectModal.classList.remove('opacity-0');
                        projectModal.querySelector('.modal-content').classList.remove('scale-95');
                    }, 10);

                    document.getElementById('close-project-modal').addEventListener('click', closeProjectModal);
                }
            });
            
            function closeProjectModal() {
                projectModal.classList.add('opacity-0');
                projectModal.querySelector('.modal-content').classList.add('scale-95');
                setTimeout(() => projectModal.classList.add('hidden'), 300);
            }

            projectModal.addEventListener('click', (e) => {
                if (e.target === projectModal) closeProjectModal();
            });

            // General Close on Escape Key
            document.addEventListener('keydown', (e) => {
                if (e.key === "Escape") {
                    if (!projectModal.classList.contains('hidden')) closeProjectModal();
                }
            });

            // Animation on Scroll
            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            revealElements.forEach(el => {
                observer.observe(el);
            });

            // Interactive Contact Form
            const emailToggleBtn = document.getElementById('email-toggle');
            const emailFormContainer = document.getElementById('email-form-container');
            const contactForm = document.getElementById('contact-form');
            const formStatus = document.getElementById('form-status');

            emailToggleBtn.addEventListener('click', () => {
                emailFormContainer.classList.toggle('active');
            });
            
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                formStatus.textContent = 'Enviando...';
                formStatus.className = 'mt-4 text-center text-accent';
                
                // Simula um envio de formulário
                setTimeout(() => {
                    formStatus.textContent = 'Mensagem enviada com sucesso!';
                    formStatus.className = 'mt-4 text-center text-green-600';
                    contactForm.reset();
                }, 1500);
            });

            // Theme Toggle Logic
            const themeToggleBtn = document.getElementById('theme-toggle');
            const sunIcon = document.getElementById('theme-icon-sun');
            const moonIcon = document.getElementById('theme-icon-moon');

            const applyTheme = (theme) => {
                if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    sunIcon.classList.add('hidden');
                    moonIcon.classList.remove('hidden');
                } else {
                    document.documentElement.classList.remove('dark');
                    moonIcon.classList.add('hidden');
                    sunIcon.classList.remove('hidden');
                }
            };

            themeToggleBtn.addEventListener('click', () => {
                const isDark = document.documentElement.classList.toggle('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                applyTheme(isDark ? 'dark' : 'light');
            });

            // Load saved theme
            const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            applyTheme(savedTheme);
        });
    