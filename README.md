# DEVinPhilips-M1S05
DEVinPhilips-M1S04
--
## [M1S05] Ex 1 - Classe Funcionário
Em um arquivo app.js incluído em index.html de tipo módulo type="module":

Crie uma classe Funcionario para representar um(a) empregado(a) de uma empresa, contendo os atributos cpf, nomeCompleto e salario.

Implemente também um método promover(percentual) que recebe como parâmetro um percentual, devendo o salário ser aumentado pelo percentual indicado no argumento do método.

Crie e utilize um objeto desta classe para testar a implementação.

## [M1S05] Ex 2 - Classe Fatura
Em três arquivos (index.html, app.js, Fatura.js) resolva o seguinte exercício:

Inclua o arquivo app.js em index.html como type="module".

Em Fatura.js, crie uma classe chamada Fatura que possa ser utilizada por uma fábrica, representando um item vendido e a exporte como padrão (export default).

Uma fatura deve incluir as seguintes informações como atributos :
• id: number identificador do item faturado (código do produto)
• descricao: string com a descrição do item
• quantia: number com a quantidade comprada do item
• preco: number com o preço unitário do item

Sua classe deve ter um construtor que inicialize todos os atributos.
Se a quantidade não for positiva, ela deve ser indicada como 0 (zero).
Se o preço por item não for positivo ele deve ser indicado como 0.

Implemente um método chamado obterValorTotal() que calcula o valor da fatura (isso é, multiplica a quantidade pelo preço do item).

Importe a classe Fatura em app.js e crie pelo menos uma instância desta classe para testar a implementação.

## [M1S05] Ex 3 - Classe Personagem
Em três arquivos (index.html, app.js, Personagem.js) resolva o seguinte exercício:

Inclua o arquivo app.js em index.html como type="module".

Para modelar um jogo de ação, em Personajem.js, crie a classe Personagem que possua os atributos nome e percentualVida e a exporte como padrão (export default).

O nome deve ser indicado no construtor da classe, e o percentual de vida é iniciado com 100.

Crie o método sofreuDano(percentualDano) cuja implementação diminua o valor de percentualDano do percentual de vida do personagem
(até o limite de zero).

Crie também o método usouKitMedico() que adiciona 10 pontos ao percentual de vida do personagem (até o limite de 100).

Importe a classe Personagem em app.js e crie pelo menos uma instância de personagem para testar.

## [M1S05] Ex 4 - Subclasses Animal
Em três arquivos (index.html, app.js, Animal.js) resolva o seguinte exercício:

Inclua o arquivo app.js em index.html como type="module".

No arquivo Animal.js, crie a classe Animal com os atributos nome, idade e som.

Depois crie as subclasses (de Animal) Cachorro e Gato com os atributos nome e idade, inicializando o atributo som da superclasse com "latido" e "miado", respectivamente e exporte ambas com export comuns.

Importe as classes Cahorro e Gato para app.js, crie uma instância de cada subclasse para testar, conforme abaixo.

Exemplos:

const snoopy = new Cachorro('snoopy', 10);
console.log( snoopy.som );   // "latido"     
const frajola = new Gato('frajola', 8);
console.log( frajola.som );   // "miado"