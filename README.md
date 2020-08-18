#Descrição
App de Cadastro de Cliente desenvolvida com Laravel(Backend) e Angula(Forntend);
#Instalação
Clonar o projeto do git usando o link: git clone git@github.com:IgorPAS/Cadastro_de_CLientes.git


#Bankend
Dentro da pasta Backend
-Criar e Configurar arquivo .env com:
	--Banco de Dados Local;
	--Email do gmail(testar email de recuperação de senha);
-executar comando:  composer update
-executar comando:  npm install
-executar comando:  composer dump-autoload
-executar comando:  php artisan key:generate
-executar comando:  php artisan jwt:secret
-executar comando:  php artisan migrate
-executar comando:  php artisan db:seed
 (Perfil: Cliente e Admin|
 Usuario Cliente | Email: usuario@email.com| Senha: 12345678
 Usuario Admin 	 | Email: admin@email.com  | Senha: 12345678

-executar comando:  php artisan serve (localhost:8000)

#Forntend
-executar comando:  npm install

#Relacionamentos:
Perfil(Profile) tem muitos Usuarios(Users)
Usuarios(Users) tem um Perfil(Profile)
Usuarios(Users) tem um Cliente(Client)
Cliente(Client) tem um Usuario(Users)

Campos Perfil    : ID; Descrição ; Nivel
Campos Usuários  : ID; Nome, Perfil_ID, Email, Senha, Data de Criação
Cliente          : ID, Usuario_ID, Nome, email, Logradouro, Numero, Complemento, CEP, Bairro, Cidade, UF

 