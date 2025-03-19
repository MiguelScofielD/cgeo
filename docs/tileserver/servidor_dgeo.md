---
sidebar_position: 2
description: ''
title: 'Procedimentos no Servidor'
---

# Procedimento no Serviço de Disponibilização

1. Após gerado o MBTile, entrar na pasta da rede onde o serviço encontra-se hospedado. Para isso, acesse a pasta usando o **WinSCP** que é um software de código aberto que permite transferir arquivos entre um computador com Windows e um servidor remoto usando protocolos como SFTP (SSH File Transfer Protocol), SCP (Secure Copy Protocol), FTP e WebDAV.

    A conexão deve ser feita no  `IP: 10.79.8.63`. Acesse com login e senha:
    ```bash
    login:root
    senha:G******@
    ```


2. Copie o arquivo MBTile para essa pasta.

3. Abrir o arquivo *config.json* e inserir, conforme o arquivo, a chave **data** e a chave **source**.
    * Atualizar o campo data com os insumos a serem utilizados. Este campo deverá ser preenchido da seguinte maneira (valores dentro de parênteses deverão ser modificados com as informações sugeridas no seu interior):

```
"data": {
 "(nome a ser dado para a camada)": {
 "mbtiles": "(nome do arquivo com a extensão .mbtiles)"
 }
// Inserir mais insumos de acordo com a necessidade, repetindo-se as três linhas acima.
}
"sources": {
 "{nome do insumo. Pode ser o mesmo nome da camada}": {
 "url": "mbtiles://(nome do arquivo com a extensão .mbtiles)",
 "type": "(vector ou raster, dependendo do insumo utilizado)"
 }
// Inserir mais insumos de acordo com a necessidade, repetindo-se as quatro linhas acima.
}
```

4. Após isso, no prompt de comando da máquina virtual, reinicie o tileserver-gl para atualizar a página com a nova imagem.

```bash
#Pare o serviço
ctrl+c

#Reinicie o serviço
tileserver-gl
```

5. Note que a URL de acesso via QGIS é customizada para o coreto acesso ao tile. Ela é do formato (substituir parênteses e seu conteúdo interno por valores válidos): http://(Endereço. Exemplo: **10.15.369.84**):(Porta. Exemplo: **8080**)/data/(nome da camada)

    `http://10.79.8.63:8080/data/{id}/{z}/{x}/{y}`
