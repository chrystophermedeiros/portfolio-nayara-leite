# Nayara Leite — Portfólio

Portfólio em **React + TypeScript + Twind**, reproduzindo a estrutura visual do arquivo Figma enviado e os fluxos principais do protótipo.

## Rodar localmente

```bash
npm install
npm run typecheck
npm run dev
```

Para produção:

```bash
npm run build
npm run preview
```

### Correção do erro `ERESOLVE`

A versão anterior usava Twind 1.x junto de TypeScript 5.x. O Twind 1.x declara TypeScript `^4.8.4` como peer opcional, e o npm atual trata essa incompatibilidade como `ERESOLVE`.

A versão atual usa **React 18 + TypeScript 4.9.5 + `@twind/core`**, uma combinação compatível com esse peer do Twind. Não é necessário `--legacy-peer-deps`.

Agora o comando normal é:

```bash
npm install
```

Não é necessário `--legacy-peer-deps`.

## Rotas

- `/` — home do portfólio
- `/projetos/arena` — case Arena Sun7
- `/projetos/app-delivery` — case App Delivery
- `/projetos/splendore` — case Splendore

## Interações

As galerias de telas usam carrossel responsivo. No desktop, várias telas ficam visíveis lado a lado; no mobile, uma tela ocupa o foco e a navegação usa pontos. Cada tela abre em lightbox com anterior/próxima e suporte às setas do teclado.

O Splendore inclui o fluxo demonstrativo **Resumo da compra → Pedido confirmado**.

## Segurança

O projeto inclui headers de proteção em `vercel.json` e `public/_headers`, `referrerPolicy="no-referrer"` nos links externos e nenhuma coleta ou armazenamento de dados pessoais no frontend.

## Windows / PowerShell — primeira instalação

Caso esteja reaproveitando a pasta onde a versão antiga foi instalada e exista um `package-lock.json` antigo, limpe os módulos antes da nova instalação:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
npm run typecheck
npm run dev
```


## V5 — ajustes finais de responsividade
- Assets transparentes do hero do Arena e dos cards foram aparados pelo alpha para evitar cortes visuais.
- Foto principal da Home preserva a composição completa em desktop e mobile.
- Carrosséis possuem botões abaixo para avançar/voltar, além de arrastar, swipe e scroll horizontal.
