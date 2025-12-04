---
sidebar_position: 2

---

# Reprojetar banco aquisição para banco edição
Para realizar a etapa de Edição é necessário reprojetar o banco de aquisição para UTM.

## Reprojeção

Abra o **FME** e selecione os bancos de aquisição e edição conforme o workflow a seguir:

![worflow](./img/reprojetar.png)

Na lateral direita, acesse em **Navigator** os parâmetros de conexão dos bancos:

![Navigator](./img/navigator.png)

Selecione o banco de aquisição e pressione o botão direito do mouse para editar a conexão:

![Conexão](./img/edit_connection.png)

Será aberta uma aba com os parâmetros de conexão: `HOST`, `Port`, `Database`, `Username`, `Password`.

No exemplo abaixo o `Host` inserido foi localhost pois o banco utilizado estava hospedado localmente e não no servidor. 

No caso em que for usado o servidor, deve-se usar o `Host:10.x.x.x` e `Port:5432`:


![Conexão](./img/edit.png)

Após isso, selecione o banco de edição e pressione o botão direito do mouse para editar a conexão:

![Conexão](./img/edicao_connection.png)

Proceda de forma análoga ao banco de aquisição e configure os parâmetros do banco de edição:

![Conexão](./img/edicao.png)

Antes de realizar o worflow, garanta que o EPSG do banco de edição esteja configurado corretamente:

![Conexão](./img/dynamic.png) ![Conexão](./img/ferramentas.png)

Será aberta o aba a seguir:

![Conexão](./img/ferramentas2.png)

Finalizado isso, basta rodar o workflow para reprojetar o banco de dados.
