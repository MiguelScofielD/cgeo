"use strict";(self.webpackChunkcgeo=self.webpackChunkcgeo||[]).push([[3072],{2748:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tileserver/servidor_dgeo","title":"Procedimentos no Servidor","description":"","source":"@site/docs/tileserver/servidor_dgeo.md","sourceDirName":"tileserver","slug":"/tileserver/servidor_dgeo","permalink":"/cgeo/docs/tileserver/servidor_dgeo","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tileserver/servidor_dgeo.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"","title":"Procedimentos no Servidor"},"sidebar":"tutorialSidebar","previous":{"title":"Introdu\xe7\xe3o","permalink":"/cgeo/docs/tileserver/intro"},"next":{"title":"Arquivo MBTile","permalink":"/cgeo/docs/tileserver/mbtile"}}');var n=r(4848),i=r(8453);const a={sidebar_position:2,description:"",title:"Procedimentos no Servidor"},t="Procedimento no Servi\xe7o de Disponibiliza\xe7\xe3o",d={},c=[];function l(e){const o={code:"code",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"procedimento-no-servi\xe7o-de-disponibiliza\xe7\xe3o",children:"Procedimento no Servi\xe7o de Disponibiliza\xe7\xe3o"})}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Ap\xf3s gerado o MBTile, entrar na pasta da rede onde o servi\xe7o encontra-se hospedado. Para isso, acesse a pasta usando o ",(0,n.jsx)(o.strong,{children:"WinSCP"})," que \xe9 um software de c\xf3digo aberto que permite transferir arquivos entre um computador com Windows e um servidor remoto usando protocolos como SFTP (SSH File Transfer Protocol), SCP (Secure Copy Protocol), FTP e WebDAV."]}),"\n",(0,n.jsxs)(o.p,{children:["A conex\xe3o deve ser feita no  ",(0,n.jsx)(o.code,{children:"IP: 10.79.8.63"}),". Acesse com login e senha:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"login:root\r\nsenha:G******@\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Copie o arquivo MBTile para essa pasta."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Abrir o arquivo ",(0,n.jsx)(o.em,{children:"config.json"})," e inserir, conforme o arquivo, a chave ",(0,n.jsx)(o.strong,{children:"data"})," e a chave ",(0,n.jsx)(o.strong,{children:"source"}),"."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Atualizar o campo data com os insumos a serem utilizados. Este campo dever\xe1 ser preenchido da seguinte maneira (valores dentro de par\xeanteses dever\xe3o ser modificados com as informa\xe7\xf5es sugeridas no seu interior):"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'"data": {\r\n "(nome a ser dado para a camada)": {\r\n "mbtiles": "(nome do arquivo com a extens\xe3o .mbtiles)"\r\n }\r\n// Inserir mais insumos de acordo com a necessidade, repetindo-se as tr\xeas linhas acima.\r\n}\r\n"sources": {\r\n "{nome do insumo. Pode ser o mesmo nome da camada}": {\r\n "url": "mbtiles://(nome do arquivo com a extens\xe3o .mbtiles)",\r\n "type": "(vector ou raster, dependendo do insumo utilizado)"\r\n }\r\n// Inserir mais insumos de acordo com a necessidade, repetindo-se as quatro linhas acima.\r\n}\n'})}),"\n",(0,n.jsxs)(o.ol,{start:"4",children:["\n",(0,n.jsx)(o.li,{children:"Ap\xf3s isso, no prompt de comando da m\xe1quina virtual, reinicie o tileserver-gl para atualizar a p\xe1gina com a nova imagem."}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"#Pare o servi\xe7o\r\nctrl+c\r\n\r\n#Reinicie o servi\xe7o\r\ntileserver-gl\n"})}),"\n",(0,n.jsxs)(o.ol,{start:"5",children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Note que a URL de acesso via QGIS \xe9 customizada para o coreto acesso ao tile. Ela \xe9 do formato (substituir par\xeanteses e seu conte\xfado interno por valores v\xe1lidos): http://(Endere\xe7o. Exemplo: ",(0,n.jsx)(o.strong,{children:"10.15.369.84"}),"):(Porta. Exemplo: ",(0,n.jsx)(o.strong,{children:"8080"}),")/data/(nome da camada)"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.code,{children:"http://10.79.8.63:8080/data/{id}/{z}/{x}/{y}"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>t});var s=r(6540);const n={},i=s.createContext(n);function a(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);