## Primeira página (Catálogo)
- Assim que a página é carregada, o front executa uma requisição get na api, através de um useEffect, para assim resgatar os dados de todos os carros cadastrados no bando de dados(MongoDB);
- Após o sucesso da resposta à requisição feita, são listados, em cards, todos os carros cadastrados em ordem crescente de acordo com o preço;
- Ao lado esquerdo podemos verificar um filtro sofisticado, criado sem ajuda de bibliotecas externas, para facilitar a busca dos veículos;
- Navbar contendo botão de login para entrar no admin;

## Segunda página (Carro)
- Ao clicar em um card na primeira página, somos redirecionados para a página do carro específico;
- Tela adicionada para dar mais vida ao sistema;

## Terceira página (Login)

- Tela contendo formulário de login, uma imagem ao lado para melhorar a visualização e navbar no topo que permite o redirecionamento para a tela inicial, caso clique na logo da empresa;
- Formulário de login simples resgatando usuário(verzel) e senha(verzelaena100) através de useStates;
- Existe apenas um usuário com acesso para garantir a segurança (o usuário foi citado no ponto anterior);
- Assim que clicamos para logar, uma requisição POST é enviada para o back, contendo username e password. Caso o usuário não seja encontrado, uma mensagem de erro aparecerá na parte inferior ao formulário. Caso o usuário certo seja logado, um token jwt, o qual vem da api, é setado no local storage;
- Após logar, partimos para a quarta página;

## Quarta página (Admin)

- Página contendo os quatro cards das principais operações do nosso admin (CRUD cards);

## Quinta página (Read - Visualização dos cadastrados)

- A primeira função dessa página é listar todos os carros cadastrados no banco através de uma requisição GET, desde que o usuário atual esteja devidamente autenticado;
- Aqui apenas visualizaremos os carros;

## Sexta página (Create - Cadastro)

- Formulário de preenchimento dos dados obrigatórios;
- Adicionar campos de texto e números é fácil, mas a parte legal vem na hora de adicionar uma imagem;
- Assim que clicamos em nova imagem, a imagem escolhida é lançada direto para um bucket S3 criado diretamente na minha conta aws e com um usuário IAM específico da verzel. Dessa forma não deixo o projeto pesado com várias imagens e acelero até mesmo o carregamento de página;
- Caso todos os campos estejam devidamente preenchidos, o body é enviado para a api através de um POST e somos redirecionados para a página de ADMIN;

## Sétima página (Update - Atualizar dados)
- Formulário de preenchimento dos dados obrigatórios;
- Assim que um carro é selecionado, todos os campos do formulário são preenchidos de acordo com as informações do veículo escolhido. Facilitando assim o preenchimento dos dados;
- Caso todos os campos estejam devidamente preenchidos, o body é enviado para a api através de um PUT e somos redirecionados para a página de ADMIN;

## Oitava página (Delete - Remover carro)
- Apenas um select para selecionar o carro que deseja excluir;
- Esse select é preenchido de acordo com os dados quem vem do banco de todos os carros cadastrados;
- Após selecionar um carro, uma função é chamada com o ID daquele carro específico e após isso ela chama a rota da api responsável por buscar a informação daquele determinado veículo;
- Assim que a api retorna os dados, aparece na tela as informações básicas daquele veículo para uma melhor Visualização e entendimento do objeto a ser excluído;
- Clicando em excluir somos redirecionados para a página do ADMIN;

# OBSERVAÇÕES
- Site totalmente responsivo utilizando bootstrap;
- Rotas autenticadas tanto no front quanto no back;
- Usuário e senha para login: verzel verzelaena100;
- Projeto hospedado na Vercel: https://verzelcars.vercel.app/;
- Caso queira rodar localmente é só digitar npm start no seu terminal :)
- Variáveis de ambiente: 
    REACT_APP_S3_BUCKET="verzel"
    REACT_APP_REGION="sa-east-1"
    REACT_APP_ACCESS_KEY="AKIA2WI5EVDLQFHU3YBP"
    REACT_APP_SECRET_ACCESS_KEY="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"
    API_URL="https://verzel-backend.herokuapp.com"