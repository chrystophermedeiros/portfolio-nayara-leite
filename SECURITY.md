# Segurança e privacidade

Este portfólio é um frontend estático. Não há backend, banco de dados, armazenamento de credenciais ou coleta de dados pessoais implementados no projeto.

## Baseline aplicado

- Nenhum segredo, token ou chave de API é enviado ao navegador.
- Não foi usado `dangerouslySetInnerHTML`.
- Links externos usam `noopener noreferrer` quando abertos em nova aba.
- O projeto não instala analytics/tracking de terceiros por padrão.
- O vídeo e as imagens são arquivos locais em `public/assets`.
- O código evita armazenar dados do visitante em `localStorage` ou cookies.
- `referrer` policy foi configurada no HTML.
- O build não publica sourcemaps por padrão.

## Deploy recomendado

No servidor/CDN, habilite HTTPS e configure headers como:

- `Content-Security-Policy` restritiva, liberando somente os próprios assets e conexões estritamente necessárias.
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` mínima para as APIs utilizadas.
- `frame-ancestors 'self'` (ou nenhum terceiro) caso não queira permitir que o portfólio seja embutido.

A implementação é uma base de hardening para um portfólio frontend; headers precisam ser aplicados no provedor de hospedagem para terem efeito além do navegador.
