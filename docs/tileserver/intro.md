---
sidebar_position: 1
description: ''
title: 'Introdução'
---

## Introdução

O uso de uma plataforma de alta performance, baixa latência e escalável que possa servir imagens utilizáveis para a visualização de insumos na produção de geoinformação, é uma necessidade nas linhas de produção das OMDS/DSG.

Insumos matriciais disponibilizados em arquivos (como na extensão .geotiff, por exemplo) não são a melhor alternativa para uso na produção cartográfica devido a perdas de tempo na transferência de arquivos, pela necessidade de pós processamentos (geração de pirâmides, por exemplo), além do rápido escalonamento do tamanho do arquivo baseado na sua cobertura geográfica e resolução.

O 4º CGEO possui uma plataforma web para disponibilização de imagens, por intermédio do seguinte link: http://10.79.8.63:8080/

Tal plataforma possibilita o carregamento das imagens dentro do QGIS, de forma mais rápida se comparado ao carregamento local da imagem, facilitando o acesso a imagens de boa resolução espacial e facilitando desta forma os processos de extração.

Além disso, o TileServer possui compatibilidade com o SAP, que permite que ocorra a associação de insumo utilizando o TileServer como fonte de informação.

## TileServer

|<img src = {require('./img/tileserver.png').default} style = {{width:1000}} />|
|:--:|
| *Tela Inicial* |

O TileServer é um software de código aberto utilizado para disponibilizar informações vetoriais/matriciais na internet de forma eficiente. Ele converte dados geoespaciais em pequenos blocos que podem ser visualizados em navegadores web ou em aplicativos que fazem solicitações de mapas pela internet. 

Isso permite a criação de aplicações de mapeamento personalizadas, bem como a incorporação de mapas em sites e aplicativos móveis. O TileServer é flexível e pode ser personalizado para atender às necessidades específicas de diferentes projetos de mapeamento. Ele desempenha um papel importante na disseminação de informações geoespaciais de forma interativa e acessível através da web.