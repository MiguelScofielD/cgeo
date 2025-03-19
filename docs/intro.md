---
sidebar_position: 1
---

# Introdução

A Cia Prod Geoinfo possui 3 serviços hospedados no servidor da DGEO:

- **SAP** 

  Sistema de Apoio a Produção utilizado para controle de atividades dos operadores na Cia Prod Geoinfo.

- **Tileserver-gl**

  Serviço para hospedar as imagens utilizados como insumos para a aquisição vetorial. As imagens são distribuídas via WMS dentro do SAP, dessa forma, o operador não precisa baixar a imagem para o seu computador.

- **Serviço de Autenticação**

  Serviço de Autenticação usado pelo SAP.

## Como Reiniciar os serviços

No caso de queda de Energia, é necessário reiniciar os serviços na seguinte ordem:

1 - Serviço de Autenticação

2 - SAP

3- Tileserver-gl

Os dois primeiros estão no contêiner 804(SAP) e podem ser acessados via **proxmox**.

#### 1. Acesse o Proxmox Web GUI

Primeiro, abra o navegador e acesse a interface web do Proxmox, geralmente no endereço https://`<IP_do_Proxmox>`
:8006.

#### 2. Faça login

Digite o nome de usuário e a senha para acessar o sistema Proxmox.

#### 3. Selecione o nó do Proxmox

Após o login, no painel da esquerda, você verá os nós do seu cluster Proxmox. Selecione o nó onde o contêiner está localizado.

#### 4. Acesse os contêineres

No painel esquerdo, clique na opção "CTs" (contêineres). Isso exibirá todos os contêineres disponíveis nesse nó.

#### 5. Inicie o contêiner

  - Selecione o contêiner que deseja iniciar.
  - No topo da interface, clique no botão "Start" (Iniciar).

O contêiner agora deve ser iniciado e você poderá acessá-lo.

#### 6. Acessando o contêiner via console

Se desejar acessar o terminal do contêiner após ele ser iniciado:

 - No painel do contêiner, clique na opção "Console".

 - Isso abrirá um terminal diretamente dentro do contêiner, permitindo que você interaja com ele.


## No terminal

Dentro do terminal, navegue até a pasta **servico_autenticacao**, conforme a seguir:

```bash
login:root
senha:4******t

```
```bash
#Entre na pasta
cd servico_autenticacao
```

Dentro da pasta **servico_autenticacao**, execute o código abaixo para iniciar o serviço:

```bash
npm run start
```

Para verificar se o serviço está funcionando entre em http://10.79.8.62:3013/. Caso o serviço tenha sido iniciado corretamente será aberto a página do serviço de autenticação.

Em caso de erro verifique via pm2 no prompt:


```bash
pm2 list
```


## Reiniciar o SAP

Após iniciar o serviço de autenticação deve-se iniciar o SAP. Retorne para home e depois vá para a pasta sap:

```bash
cd ..
cd sap2/sap
```
Após isso, execute:

```bash
npm run start
```
O comando `cd` altera o diretório com o qual você está trabalhando.

O comando `npm run start` constrói o seu site no IP `10.79.8.62` e na porta `3010`, pronto para você visualizar em http://10.79.8.62:3010/.

## Reiniciar o Tileserver-gl

Diferente dos outros serviços, o tileserver-gl não está no contêiner **804**. Ele está em uma máquina virtual **402**.

Ligue a máquina virtual via **proxmox**, entre com as credencias de acesso e abra o **prompt**.

No prompt será pedido novamente o login e senha:

```bash
login:root
senha:G3*****@
```
Após isso, execute o comando:

```bash
sudo su
```
O comando `sudo` permite que usuários com permissões adequadas executem comandos com privilégios de superusuário (root).

Feito isso, basta iniciar o sistema usando o comando tileserver-gl:

```bash
tileserver-gl
```
O serviço será iniciado e pode ser acessado em http://10.79.8.63:8080/.




