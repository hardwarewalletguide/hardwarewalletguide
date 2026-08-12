HARDWARE WALLET GUIDE — DEPLOY SEM TERMINAL

URL PRINCIPAL
https://hardwarewalletguide.vercel.app

O ZIP JÁ ESTÁ PRONTO COM TODAS AS PASTAS.
Você NÃO precisa criar app/, components/, lib/ ou public/ manualmente.

PASSO A PASSO — GITHUB + VERCEL

1) Baixe o ZIP e extraia no seu computador.
2) Abra o repositório GitHub que já está conectado ao projeto hardwarewalletguide da Vercel.
3) Apague os arquivos do boilerplate antigo do Next.js para não misturar dois projetos.
4) No GitHub, clique em Add file > Upload files.
5) Arraste TODOS os arquivos e pastas de dentro da pasta extraída para a área de upload.
   IMPORTANTE: envie o CONTEÚDO da pasta, não o arquivo ZIP.
6) Confirme que aparecem package.json, next.config.mjs, app/, components/, lib/ e public/.
7) Clique em Commit changes e faça o commit direto na branch main.
8) A Vercel está conectada ao GitHub: o push/commit na main dispara um novo Production Deployment automaticamente.
9) Abra Vercel > hardwarewalletguide > Deployments e aguarde o status Ready.
10) Teste:
    https://hardwarewalletguide.vercel.app/
    https://hardwarewalletguide.vercel.app/ledger/
    https://hardwarewalletguide.vercel.app/ledger-live/
    https://hardwarewalletguide.vercel.app/sitemap.xml
    https://hardwarewalletguide.vercel.app/robots.txt

SE O GITHUB NÃO DEIXAR APAGAR TUDO DE UMA VEZ
Você pode abrir as pastas/arquivos antigos e usar Delete file/Delete directory, ou simplesmente enviar o novo conteúdo sobrescrevendo os arquivos com os mesmos nomes. Evite manter páginas antigas que não pertencem ao novo projeto.

SEO INCLUÍDO
- Canonical em todas as páginas
- Sitemap automático
- robots.txt automático
- Metadata e Open Graph
- WebSite/WebPage/Breadcrumb JSON-LD
- 16 páginas temáticas + home
- Links internos
- Aviso claro de independência
- Links de download/suporte somente para recursos oficiais Ledger

SEGURANÇA
Este projeto não imita login, não coleta seed/recovery phrase e não distribui executáveis. Downloads, firmware e suporte apontam para canais oficiais Ledger.
Deploy trigger
