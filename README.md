# Velas Lignum - Linktree Style Website

Site estilo Linktree para a loja de velas artesanais Velas Lignum, com design inspirado em Art Déco.

## 🎨 Características

- Design Art Déco elegante com paleta de cores quentes (dourado, creme, marrom)
- Animações suaves e efeitos de hover
- Totalmente responsivo
- Espaço preparado para adicionar sua logo
- Cards de links editáveis
- Padrões geométricos decorativos
- Fonte Playfair Display (display) e Cormorant Garamond (body)

## 🚀 Como Usar

### Instalação

1. Extraia o arquivo ZIP
2. Abra o terminal na pasta do projeto
3. Instale as dependências:

```bash
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## ✏️ Personalização

### Adicionar sua Logo

No arquivo `src/App.jsx`, localize a seção "Logo Space" (linha ~40) e substitua o placeholder pela sua logo:

```jsx
<div className="w-32 h-32 mx-auto mb-6 relative group">
  <img src="/caminho-para-sua-logo.png" alt="Velas Lignum" className="w-full h-full object-contain" />
</div>
```

### Editar Links

No arquivo `src/App.jsx`, encontre o array `links` (linha ~5) e adicione suas URLs:

```jsx
const [links] = useState([
  { id: 1, title: 'Catálogo de Produtos', icon: ShoppingBag, url: 'https://seu-catalogo.com', active: true },
  { id: 2, title: 'Faça seu Pedido', icon: Phone, url: 'https://wa.me/seu-numero', active: true },
  // ... adicione mais links conforme necessário
])
```

### Adicionar/Remover Links

Para adicionar um novo link, adicione um novo objeto no array:

```jsx
{ id: 7, title: 'WhatsApp', icon: Phone, url: 'https://wa.me/5511999999999', active: true }
```

Para remover, simplesmente delete a linha correspondente ou mude `active: false`.

### Alterar Cores

As cores estão definidas em `tailwind.config.js`:

```js
colors: {
  'lignum-dark': '#1a1410',    // Fundo escuro
  'lignum-brown': '#3d2817',   // Marrom médio
  'lignum-gold': '#d4a574',    // Dourado principal
  'lignum-cream': '#f4e4d0',   // Creme/bege claro
  'lignum-accent': '#e8b86d',  // Acento dourado
}
```

## 📱 Deploy

### Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Importe o projeto do GitHub ou faça upload da pasta
3. Deploy automático!

### Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` após executar `npm run build`
3. Site no ar!

## 🛠️ Tecnologias

- React 18
- Vite
- Tailwind CSS
- Lucide React (ícones)

## 📄 Estrutura do Projeto

```
velas-lignum/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js   # Configuração do Tailwind
├── vite.config.js       # Configuração do Vite
└── postcss.config.js
```

## 💡 Dicas

- Use imagens otimizadas para web (WebP, PNG)
- Coloque sua logo na pasta `public/` para fácil acesso
- Teste em diferentes dispositivos e navegadores
- Adicione seu domínio personalizado nas configurações do deploy

## 📞 Suporte

Para dúvidas sobre customização, consulte a documentação:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)

---

Desenvolvido com ❤️ para Velas Lignum
