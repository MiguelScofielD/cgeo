---
sidebar_position: 1
title: "Introdução"
description: ""
---

# Introdução

Serviço em Node.js para gerenciamento da Produção Cartográfica.

Algumas das funcionalidades são:

- Distribuição automática de atividades aos operadores;
- Configuração de camadas, estilos, menus, regras, rotinas que o operador irá receber no QGIS de acordo com a peculiaridade da subfase de produção;
- Distribuição de insumos para a atividade;
- Controle de permissões do banco de dados PostgreSQL;
- Possibilidade de configuração de uma fila de atividades conforme as necessidades do projeto e as habilitações do operador;
- Centralização das informações de produção, como data de ínicio, data de fim e quem realizou a atividade;
- Acompanhamento gráfico da produção;
- Monitoramento da produção por feição, apontamentos ou tela (microcontrole da produção);
- Possibilidade de trabalho em banco de dados geoespaciais contínuo, apresentando somente o subconjunto necessário dos dados para o operador;
- Geração de metadados compatíveis com a ET-PCDG;
- Integração com Gerenciador do FME;
- Integração com DSGTools.

## Dependências

Para sua utilização é necessário que o [Serviço de Autenticação] esteja configurado e em execução.

Devem estar instalados: [PostgreSQL com extensão PostGIS](https://www.postgresql.org/), [Node.JS](https://nodejs.org/en), [PM2](https://pm2.keymetrics.io/)

## Mais informações

Para a criação de um projeto via SAP no QGIS, veja [Criação de um Projeto].

Para acesso ao cliente QGIS do usuário, veja [SAP Operador].

Para acesso ao cliente QGIS do gerente, veja [SAP Gerente].

## Tutorial

Para maiores detalhes, veja o video abaixo, no qual consta: instalação do Serviço de Autenticação, instalação do SAP, explicação da estrutura básica do sistema e configuração inicial do projeto.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/rKjApuvC5fo?si=CSuiP9wlsdW66Bgl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>