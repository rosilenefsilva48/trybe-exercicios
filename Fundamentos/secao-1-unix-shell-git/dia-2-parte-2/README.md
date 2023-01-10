# comandos de input e output

1. Crie a pasta `unix_tests_skills` e navegue até ela.

2. Crie um arquivo texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet, Unix e Bash`, um em cada linha.

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

4. Conte quantas linhas tem o arquivo `skills2.txt`.

5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`, contendo as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.

7. Conte o número de linhas que contêm as letras `br`.

8. Conte o número de linhas que não contêm as letras `br`.

9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.

10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`.

11. Ordene o arquivo `bunch_of_things.txt`.


# Permissões

1. Crie a pasta `unix_tests_permissions` e navegue até ela.

2. Rode o comando `ls -l` e veja quais as permissões dos arquivos.

3. Crie o arquivo `arquivo_teste.txt`.

4. Mude a permissão do arquivo `arquivo_teste.txt` para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando `ls -l`;

5. Resultado esperado: `-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt`

6. Tire a permissão de escrita do arquivo `arquivo_teste.txt` para todas as pessoas usuárias, verifique se está correto com o comando `ls -l`;

7. Resultado esperado: `-r--r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt`

8. Volte à permissão do `arquivo arquivo_teste.txt` para a listada inicialmente utilizando o comando `chmod 644 arquivo_teste.txt`.

9. Resultado esperado: `-rw-r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt`.