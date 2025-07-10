
# 🧠 LogicCraft | Portfólio Profissional Full-Stack

Este repositório contém meu portfólio pessoal como desenvolvedor **Full-Stack**, estruturado para servir tanto como vitrine profissional quanto como base escalável para futuras evoluções. Desenvolvido com foco em **performance, responsividade, clareza de código e design atrativo**, o projeto é também um exercício de boas práticas, componentização e escalabilidade front-end.

---

## 📌 Objetivos

- Apresentar minhas **habilidades técnicas** com clareza e objetividade.
- Fornecer uma base sólida para **contato direto com recrutadores e clientes**.
- Demonstrar domínio em tecnologias modernas de front-end e organização de projetos.
- Criar um template reutilizável para apresentações profissionais, mentorias e branding pessoal.

---

## 🧱 Estrutura Geral do Projeto

```
📁 raiz do projeto/
├── MeuPortifolio.html         # HTML principal com estrutura semântica
├── /Images/                   # Imagens do site (logotipo, ilustrações de projetos/soluções)
├── /Style/style.css           # Estilos customizados além do Tailwind
├── /Scripts/script.js         # Script para interações e carregamento dinâmico
```

---

## 🖥️ Tecnologias Utilizadas

### 💡 Front-end

| Tecnologia | Descrição |
|------------|-----------|
| HTML5 | Estrutura semântica e acessível |
| TailwindCSS | Utilizado para estilização rápida, responsiva e utilitária |
| Font Awesome & DevIcons | Ícones sociais e de tecnologias |
| JavaScript Vanilla | Interações (modais, menus, carregamentos dinâmicos) |

### 🔌 Integrações Externas

- `LinkedIn`, `GitHub`, `WhatsApp API` e `formulário de contato` com tratamento JS.
- Scripts CDN otimizados para carregamento leve (Tailwind, FontAwesome, Devicons).

---

## 📂 Organização do HTML (index/MeuPortifolio.html)

### 1. **Header Fixo com Tema Dinâmico**
- Botão de alternância de **tema escuro/claro** com ícones (sol/lua).
- Menu responsivo com toggle para mobile.

### 2. **Seção Hero**
- Mensagem principal de branding pessoal.
- Botão CTA: "Vamos conversar".

### 3. **Seção Sobre Mim**
- Resumo técnico com destaque em:
  - C# e .NET
  - Clean Code / SOLID / TDD
  - Metodologias Ágeis (Scrum)
  - Cloud (Azure)

### 4. **Habilidades & Tecnologias**
- Grelha dinâmica de ícones (injetados via JS com base em um array configurável).
- Facilidade para expandir/adicionar novas techs.

### 5. **Projetos**
- Estrutura preparada para carregamento dinâmico de projetos via JS.
- Modal incluído na base do HTML para exibição individual de cada projeto.

### 6. **Seção “O que posso fazer por você?”**
- Apresentação em cards com imagens ilustrativas.
- 3 áreas de atuação: Back-end com APIs, Front-end moderno, DevOps/Nuvem.

### 7. **Contato**
- Formulário com feedback de envio.
- Ícones clicáveis com links externos.
- Exibição do campo de e-mail após clique.

---

## ⚙️ Detalhes Técnicos para Manutenção

### 🛠 Theme Toggle
```js
// O botão de tema alterna classes no body e nos ícones
// Armazena preferência no localStorage (verificar consistência em novos navegadores)
```

### 🛠 EmojiContainer
```html
<!-- Container vazio com classe emoji-container para futuras animações JS -->
<!-- Pode ser reaproveitado para efeitos sazonais ou gamificação -->
```

### 🛠 Modal de Projetos
```js
// Projetos são injetados dinamicamente no modal com ID #project-modal
// HTML pré-configurado no final do body
// Modal usa classes Tailwind + animação fade (visível ao remover 'hidden' e alterar opacity)
```

### 🛠 Carregamento de Habilidades (JS)
- Os ícones de tecnologias são definidos em um array JavaScript.
- Permite fácil manutenção e adição de novas stacks.

---

## 🧪 Sugestões de Evolução

- [ ] Conectar formulário a serviço real de envio (ex: Formspree, EmailJS, Back-end customizado).
- [ ] Adicionar animações com Framer Motion ou ScrollReveal.
- [ ] Melhorar acessibilidade com `aria-labels` e testes com leitores de tela.
- [ ] Criar arquivo `config.js` para separar dados dos projetos/habilidades.
- [ ] Internacionalizar com suporte multilíngue (PT-BR / EN).
- [ ] Adicionar integração com GitHub API para exibir repositórios em tempo real.

---

## 📈 SEO & Performance

| Item | Status |
|------|--------|
| Responsividade | ✅ |
| Lighthouse Score | 🟢 Aguardando testes |
| Favicon ativo | ✅ |
| Fontes otimizadas | ✅ (Google Fonts com `display=swap`) |
| Componentização JS | Parcial |
| Sem dependência de frameworks pesados | ✅ |

---

## 🧑‍💻 Sobre o Desenvolvedor

Sou **Alecsandro**, desenvolvedor Full-Stack com foco em soluções backend com C#/.NET e interface com front-end moderno. Tenho paixão por criar interfaces limpas, acessíveis e adaptadas às necessidades reais de negócio, sempre com ênfase em performance e organização de código.

- 💼 [LinkedIn](https://www.linkedin.com/in/alecsandrosilva2474/)
- 💻 [GitHub](https://github.com/alex247417)
- 📱 [WhatsApp Profissional](https://wa.me/5511940493007)

---

## 📄 Licença

Este projeto está sob a licença MIT — fique à vontade para utilizar e evoluir.

---

> _“Portfólios são mais do que uma vitrine – são uma extensão viva do nosso código, valores e forma de pensar.”_
>  
> — Alecsandro, LogicCraft
