# Para Rodar a aplicação é necessario ter instalado o docker 

A URL base da aplicação:
http://localhost/

---
##  Início Rápido

### Rodando docker

rode o docker com o comando:

```shell
docker-compose up
```
### Migrates 
para rodar a migrate é necessário entrar dentro do contâiner, depois rodar a migrate

```shell
docker exec -it miniprojeto-app_laravel.test_1 /bin/sh

php artisan migrate

```

# Turmas
## Post -  http://localhost/api/turmas/users
Essa rota é especifica para adicionar o aluno a turma
```shell
{
	"aluno_id": "9a300a11-4224-4a12-9c23-7f832bbcb9c5",
	"turma_id": "9a2fe2bb-0446-4184-ac80-5a20fcb08ead"
}
```
## Post -  http://localhost/api/turmas
```shell
{
		"codigo":"turma-03",
        "data_inicio":"2023-12-28",
        "data_fim":"2023-12-29",
        "quantidade_maxima_alunos":3
}
```
## Patch -  http://localhost/api/turmas/{id}
```shell
{
		"name":"teste07",
        "email":"teste07@gmail.com",
		"password":"stringzdffg",
        "cpf":"125125437",
        "sexo":"Masculino",
        "data_nascimento":"2001-03-29",
        "renda_mensal":0 (opcional)
}

```
## Get -  http://localhost/api/turmas/{id}
```shell
{
    não necessário passar request data
}

```
## Get -  http://localhost/api/turmas
```shell
{
    não necessário passar request data
}

```
## Delete -  http://localhost/api/turmas/{id}
```shell
{
    não necessário passar request data
}

```

# Criação de usuário

## Post -  http://localhost/api/users
```shell
{
		"name":"teste07",
        "email":"teste07@gmail.com",
		"password":"stringzdffg",
        "cpf":"125125437",
        "sexo":"Masculino",
        "data_nascimento":"2001-03-29",
        "renda_mensal":1 (opcional)
}
```
## Patch -  http://localhost/api/users/{id}
```shell
{
		"name":"teste07",
        "email":"teste07@gmail.com",
		"password":"stringzdffg",
        "cpf":"125125437",
        "sexo":"Masculino",
        "data_nascimento":"2001-03-29",
        "renda_mensal":0 (opcional)
}

```
## Get -  http://localhost/api/users/{id}
```shell
{
    não necessário passar request data
}

```
## Delete -  http://localhost/api/users/{id}
```shell
{
    não necessário passar request data
}

```