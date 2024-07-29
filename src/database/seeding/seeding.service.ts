import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Produto } from '../../produto/entities/produto.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class SeedingService {
  constructor(private readonly dataSource: DataSource) {}
  async seed() {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // data seed
      const usuariosRepository = queryRunner.manager.getRepository(Usuario);
      const categoriasRepository = queryRunner.manager.getRepository(Categoria);
      const produtosRepository = queryRunner.manager.getRepository(Produto);

      const usuarios = await usuariosRepository.find();
      await usuariosRepository.remove(usuarios);

      const categorias = await categoriasRepository.find();
      await categoriasRepository.remove(categorias);

      const produtos = await produtosRepository.find();
      await produtosRepository.remove(produtos);

      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

      const usuarioAdministrador = usuariosRepository.create({
        nome: process.env.ADMIN_USERNAME,
        usuario: process.env.ADMIN_EMAIL,
        senha: hashedPassword,
        funcao: process.env.ADMIN_FUNCTION,
      });

      await usuariosRepository.save([usuarioAdministrador]);

      const categoria1 = categoriasRepository.create({
        tipo: 'Vestuário',
        slug: 'vestuario',
        icone: 'vestuario',
      });
      const categoria2 = categoriasRepository.create({
        tipo: 'Alimento',
        slug: 'alimento',
        icone: 'alimento',
      });
      const categoria3 = categoriasRepository.create({
        tipo: 'Artesanal',
        slug: 'artesanal',
        icone: 'artesanal',
      });
      const categoria4 = categoriasRepository.create({
        tipo: 'Pets',
        slug: 'pets',
        icone: 'pets',
      });
      const categoria5 = categoriasRepository.create({
        tipo: 'Casa',
        slug: 'casa',
        icone: 'casa',
      });
      const categoria6 = categoriasRepository.create({
        tipo: 'Papelaria',
        slug: 'papelaria',
        icone: 'papelaria',
      });
      const categoria7 = categoriasRepository.create({
        tipo: 'Higiene',
        slug: 'higiene',
        icone: 'higiene',
      });
      const categoria8 = categoriasRepository.create({
        tipo: 'Utensílios',
        slug: 'utensilios',
        icone: 'utensilios',
      });
      const categoria9 = categoriasRepository.create({
        tipo: 'Ofertas',
        slug: 'ofertas',
        icone: 'ofertas',
      });

      await categoriasRepository.save([
        categoria1,
        categoria2,
        categoria3,
        categoria4,
        categoria5,
        categoria6,
        categoria7,
        categoria8,
        categoria9,
      ]);

      const produto1 = produtosRepository.create({
        nome: 'Linho EcoFresh',
        slug: 'linho-ecofresh',
        basePreco: 119.99,
        porcentagemDesconto: 20,
        descricao:
          'O Vestido Linho EcoBreeze combina a elegância atemporal do linho com um toque moderno de sustentabilidade. Fabricado com linho orgânico de alta qualidade, este vestido oferece conforto e frescor em dias quentes, enquanto promove práticas ambientais responsáveis. Seu design fluido e versátil permite uma transição perfeita do dia para a noite, adaptando-se a diversas ocasiões com charme natural. Escolha o Vestido Linho EcoBreeze para um estilo consciente e elegante que faz você se sentir bem por dentro e por fora',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/LinhoEcoFresh.jpg?updatedAt=1718851782186',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria1,
        usuario: usuarioAdministrador,
      });
      const produto2 = produtosRepository.create({
        nome: 'EcoBreeze',
        slug: 'linho-ecofresh',
        basePreco: 119.99,
        porcentagemDesconto: 20,
        descricao:
          'A Jaqueta Corta Vento EcoBreeze é sua companheira confiável para enfrentar os elementos com estilo e consciência ambiental. Feita com materiais reciclados e tecnologia corta-vento, esta jaqueta oferece proteção contra vento e chuva leve, mantendo você confortável em qualquer clima. Seu design leve e compacto permite fácil transporte e versatilidade para atividades ao ar livre ou uso diário. Escolha a Jaqueta Corta Vento EcoBreeze para uma solução funcional e sustentável em seu guarda-roupa.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/EcoBreeze2.jpeg?updatedAt=1718851779877',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria1,
        usuario: usuarioAdministrador,
      });
      const produto3 = produtosRepository.create({
        nome: 'Meia Earth Threads',
        slug: 'meia-earth-threads',
        basePreco: 18.99,
        porcentagemDesconto: 5,
        descricao:
          'As Meias Earth Threads são mais do que simples acessórios de vestuário; são uma declaração de compromisso com o planeta. Feitas com algodão orgânico cultivado de forma sustentável e tingidas com corantes naturais, estas meias proporcionam conforto excepcional aos pés enquanto minimizam o impacto ambiental. Com um design moderno e estampas inspiradas na natureza, as Earth Threads adicionam um toque de estilo e consciência ambiental ao seu dia a dia. Deslize os pés nelas e sinta-se bem, sabendo que está dando um passo em direção a um mundo mais sustentável.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/MeiaEarthThreads.jpg?updatedAt=1718851782759',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria1,
        usuario: usuarioAdministrador,
      });
      const produto4 = produtosRepository.create({
        nome: 'Camiseta Eco Bamboo',
        slug: 'camiseta-eco-bamboo',
        basePreco: 99.9,
        porcentagemDesconto: 0,
        descricao:
          'A Camiseta Eco Bamboo é feita de fibra de bambu sustentável, oferecendo uma opção ecológica e confortável para o seu guarda-roupa. Esta camiseta é macia ao toque, respirável e naturalmente antibacteriana, garantindo frescor e conforto ao longo do dia. Ideal para quem busca estilo e sustentabilidade, a Eco Bamboo se destaca por seu design moderno e responsabilidade ambiental.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/camisa_Preta.png?updatedAt=1715010279468',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria1,
        usuario: usuarioAdministrador,
      });
      const produto5 = produtosRepository.create({
        nome: 'Polo GreenLeaf',
        slug: 'polo-greenleaf',
        basePreco: 179.99,
        porcentagemDesconto: 0,
        descricao:
          'A Polo GreenLeaf é mais do que uma simples peça de vestuário; é um símbolo de comprometimento com o meio ambiente. Feita com algodão orgânico de alta qualidade e processos de produção sustentáveis, esta polo oferece conforto excepcional e durabilidade enquanto reduz o impacto ambiental. Com um design clássico e elegante, a Polo GreenLeaf é a escolha perfeita para quem busca estilo sem abrir mão da responsabilidade ambiental. Use-a com orgulho, sabendo que cada peça contribui para um futuro mais verde.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/PoloGreenLeaf.png?updatedAt=1716562503346',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria1,
        usuario: usuarioAdministrador,
      });
      const produto6 = produtosRepository.create({
        nome: 'T-Shirt Pure Cotton',
        slug: 't-shirt-pure-cotton',
        basePreco: 97.49,
        porcentagemDesconto: 23,
        descricao:
          'A T-Shirt Pure Cotton EcoEssence é a união perfeita entre conforto e sustentabilidade. Feita com algodão orgânico cultivado de forma responsável, esta camiseta oferece uma sensação suave e natural ao toque. Com um design versátil e minimalista, a EcoEssence é ideal para combinar com qualquer look, seja casual ou sofisticado. Ao escolher a T-Shirt Pure Cotton EcoEssence, você não apenas investe em qualidade, mas também apoia práticas de produção que respeitam o meio ambiente e os trabalhadores envolvidos em sua fabricação.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%201%20-%20Vestu%C3%A1rio/T-ShirtPureCotton.jpg?updatedAt=1716562502783',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria1,
        usuario: usuarioAdministrador,
      });
      const produto7 = produtosRepository.create({
        nome: 'Fatias de queijo original cremoso Chao 200g',
        slug: 'fatias-de-queijo-original-cremoso-chao-200g',
        basePreco: 29.99,
        porcentagemDesconto: 0,
        descricao:
          'Nossas fatias de queijo são uma deliciosa alternativa vegana ao queijo lácteo. Feitas com tofu e misturadas com coco para obter uma textura cremosa, essas fatias de queijo são cuidadosamente elaboradas por um mestre queijeiro grego em colaboração com uma tradicional família taiwanesa. Use-as em sanduíches, biscoitos ou em todos os tipos de pratos para adicionar um toque gourmet e saudável às suas refeições.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%202%20-%20Alimentos/Fatias%20de%20queijo%20original%20cremoso%20Chao%20200g.png?updatedAt=1716766614715',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria2,
        usuario: usuarioAdministrador,
      });
      const produto8 = produtosRepository.create({
        nome: 'Queijo Gouda Vegano 200g',
        slug: 'queijo-gouda-vegano-200g',
        basePreco: 26.99,
        porcentagemDesconto: 0,
        descricao:
          'Apresentamos o Queijo Gouda Vegano, o substituto perfeito para o queijo tradicional, especialmente em suas receitas de pizza favoritas. Feito com ingredientes de alta qualidade e sem produtos de origem animal, este queijo vegano oferece o sabor autêntico do queijo Gouda e derrete perfeitamente, proporcionando uma experiência gourmet sem lactose.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%202%20-%20Alimentos/Queijo%20Gouda%20Vegano%20200g.png?updatedAt=1716766614426',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria2,
        usuario: usuarioAdministrador,
      });
      const produto9 = produtosRepository.create({
        nome: 'Salsicha Vegana para Cachorro-Quente 160g',
        slug: 'salsicha-vegana-para-cachorro-quente-160g',
        basePreco: 20.99,
        porcentagemDesconto: 10,
        descricao:
          'Leve o sabor e a diversão das refeições ao próximo nível com nossa Salsicha Vegana para Cachorro-Quente. Ideal para adeptos do veganismo e amantes de uma alimentação saudável, esta salsicha é feita com ingredientes naturais, proporcionando uma textura e sabor irresistíveis. Seja para montar o clássico cachorro-quente ou criar hambúrgueres vegetarianos inovadores, nossas salsichas são a escolha perfeita para qualquer receita.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%202%20-%20Alimentos/Salsicha%20Vegana%20para%20Cachorro-Quente%20160g.png?updatedAt=1716766614671',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria2,
        usuario: usuarioAdministrador,
      });
      const produto10 = produtosRepository.create({
        nome: 'Biscoito de Chocolate Vegano',
        slug: 'biscoito-de-chocolate-vegano',
        basePreco: 6.99,
        porcentagemDesconto: 0,
        descricao:
          'Descubra o Biscoito de Chocolate Vegano, uma indulgência perfeita para quem segue o veganismo. Feita com leite de amêndoas e coberta com uma generosa camada de chocolate vegano, este biscoito oferece um sabor rico e uma textura irresistivelmente crocante. Além disso, é totalmente sem lactose, garantindo que todos possam desfrutar dessa delícia sem preocupações.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%202%20-%20Alimentos/Biscoito%20de%20Chocolate%20Vegano.png?updatedAt=1716766614588',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria2,
        usuario: usuarioAdministrador,
      });
      const produto11 = produtosRepository.create({
        nome: 'Queijo Vegano Almond 226g',
        slug: 'queijo-vegano-almond-226g',
        basePreco: 30.99,
        porcentagemDesconto: 5,
        descricao:
          'Descubra o Queijo Vegano Almond, uma deliciosa e inovadora alternativa ao queijo tradicional. Feito com leite de amêndoa, este queijo vegano oferece uma textura cremosa e um sabor incrível, perfeito para quem busca uma opção sem laticínios. Ideal para uma variedade de receitas, desde sanduíches até pratos elaborados, o Queijo Vegano Almond é uma escolha saudável e saborosa.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%202%20-%20Alimentos/Queijo%20Vegano%20Almond%20226g.png?updatedAt=1716766614962',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria2,
        usuario: usuarioAdministrador,
      });
      const produto12 = produtosRepository.create({
        nome: 'Saboneteira de Cerâmica Artesanal',
        slug: 'saboneteira-de-ceramica-artesanal',
        basePreco: 39.99,
        porcentagemDesconto: 10,
        descricao:
          'Saboneteira feita à mão por artesãos locais, usando técnicas tradicionais e materiais naturais.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%208%20-%20ARTESANAL/SaboneteiraCer%C3%A2micaArtesanal.jpeg?updatedAt=1717618530493',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria3,
        usuario: usuarioAdministrador,
      });
      const produto13 = produtosRepository.create({
        nome: 'Vela artesanal cera de abelha',
        slug: 'vela-artesanal-cera-de-abelha',
        basePreco: 29.99,
        porcentagemDesconto: 5,
        descricao:
          'Vela feita à mão com cera de abelha pura, pavio de algodão e aroma natural, criando um ambiente acolhedor.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%208%20-%20ARTESANAL/velaartesanalabelha.jpeg?updatedAt=1717765068785',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria3,
        usuario: usuarioAdministrador,
      });
      const produto14 = produtosRepository.create({
        nome: 'Cama Pet de Vime',
        slug: 'cama-de-pet-de-vime',
        basePreco: 189.99,
        porcentagemDesconto: 20,
        descricao:
          'Proporcione ao seu fiel companheiro um lugar aconchegante para descansar com a nossa Cama Pet de Vime de Animal de Estimação. Feita com vime de alta qualidade, esta cesta oferece conforto e durabilidade, enquanto adiciona um toque de estilo natural ao ambiente. Perfeita para cães e gatos de todos os tamanhos, esta cama vai se tornar o lugar favorito do seu pet para relaxar e tirar uma soneca.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%204%20-%20Pets/Cesta%20de%20Vime%20para%20Cama%20de%20Animal%20de%20Estima%C3%A7%C3%A3o.png?updatedAt=1716772941997',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria4,
        usuario: usuarioAdministrador,
      });
      const produto15 = produtosRepository.create({
        nome: 'Cadeira de bambu mobília para sala e ar livre',
        slug: 'cadeira-de-bambu-mobilia-para-sala-e-ar-livre',
        basePreco: 299.99,
        porcentagemDesconto: 10,
        descricao:
          'Feito com bambu de alta qualidade, esta cadeira combina o charme natural do bambu com o conforto moderno, proporcionando um ambiente convidativo para refeições e momentos de convívio. A cadeira oferece assentos acolhedores, enquanto a mesa complementa o conjunto, oferecendo espaço para refeições deliciosas e conversas animadas.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%205%20-%20Casa/Cadeira%20de%20bambu%20mob%C3%ADlia%20para%20sala%20e%20ar%20livre.png?updatedAt=1716774498128',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria5,
        usuario: usuarioAdministrador,
      });
      const produto16 = produtosRepository.create({
        nome: 'Mesa redonda de vime com cesto ',
        slug: 'mesa-redonda-de-vime-com-cesto',
        basePreco: 539.99,
        porcentagemDesconto: 30,
        descricao:
          'Adicione um toque de charme rústico à sua decoração com nossa Mesa Redonda de Vime com Cesto. Feita com vime de alta qualidade, esta mesa combina elegância e funcionalidade de maneira única. Além de servir como uma mesa de apoio ou centro, o cesto embutido oferece espaço adicional para armazenamento, perfeito para revistas, mantas ou outros itens essenciais do seu ambiente.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%205%20-%20Casa/Mesa%20redonda%20de%20vime%20com%20cesto.png?updatedAt=1716775128765',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria5,
        usuario: usuarioAdministrador,
      });
      const produto17 = produtosRepository.create({
        nome: 'Cesta de Roupa Feita com Bambu',
        slug: 'cesta-de-roupa-feita-com-bambu',
        basePreco: 59.99,
        porcentagemDesconto: 0,
        descricao:
          'Leve estilo e sustentabilidade para sua casa com a nossa Cesta de Roupa Feita com Bambu. Feita a partir de bambu de origem sustentável, esta cesta oferece uma solução ecológica e elegante para organizar suas roupas. Perfeita para qualquer ambiente, desde o quarto até a lavanderia, ela combina funcionalidade e design moderno.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%205%20-%20Casa/Cesta%20de%20Roupa%20Feita%20com%20Bambu.png?updatedAt=1716767039817',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria5,
        usuario: usuarioAdministrador,
      });
      const produto18 = produtosRepository.create({
        nome: 'Cadeira em Rattan de Vime',
        slug: 'cadeira-em-rattan-de-vime',
        basePreco: 279.99,
        porcentagemDesconto: 15,
        descricao:
          'Aprimore sua área de refeições com a nossa Cadeira em Rattan de Vime, uma peça de mobiliário que combina estilo e conforto. Feita com vime de alta qualidade e design elegante, esta cadeira é perfeita para dar um toque de sofisticação à sua sala de jantar, varanda ou área de café da manhã. Com um assento acolchoado em branco, proporciona não apenas elegância, mas também conforto excepcional para longas refeições e conversas animadas.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%205%20-%20Casa/Cadeira%20em%20Rattan%20de%20Vime.png?updatedAt=1716774154050',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria5,
        usuario: usuarioAdministrador,
      });
      const produto19 = produtosRepository.create({
        nome: 'Cestas de Piquenique com Forro de Vime',
        slug: 'cestas-de-piquenique-com-forro-de-vime',
        basePreco: 167.99,
        porcentagemDesconto: 10,
        descricao:
          'Desfrute de dias ensolarados ao ar livre com nossas Cestas de Piquenique com Forro de Vime. Com um toque de charme rústico, estas cestas são perfeitas para levar seus alimentos favoritos em grande estilo para um dia no parque, na praia ou em qualquer lugar onde a natureza chame. O forro azul adiciona um toque de elegância, enquanto mantém seus itens seguros e protegidos durante o transporte.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%205%20-%20Casa/Cestas%20de%20Piquenique%20com%20Forro%20de%20Vime.png?updatedAt=1716774153792',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria5,
        usuario: usuarioAdministrador,
      });
      const produto20 = produtosRepository.create({
        nome: 'Caderno Post-it e Canetas de Papel ',
        slug: 'caderno-postit-e-canetas-de-papel',
        basePreco: 18.5,
        porcentagemDesconto: 0,
        descricao:
          'Apresentamos o Caderno Post-it e Canetas de Papel, o companheiro perfeito para suas tarefas diárias, ideias brilhantes e momentos de inspiração. Este caderno possui uma capa elegante e funcional, repleta de post-its para destacar informações importantes e canetas de papel que escrevem suavemente em suas páginas recicladas. Seja para fazer listas, esboçar ideias ou simplesmente fazer anotações, este conjunto é uma adição essencial à sua rotina, ajudando você a se manter organizado de maneira criativa.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%206%20-%20Papelaria/Caderno%20Post-it%20e%20Canetas%20de%20papel.png?updatedAt=1716773601462',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria6,
        usuario: usuarioAdministrador,
      });
      const produto21 = produtosRepository.create({
        nome: 'Esponja Vegetal Biodegradável',
        slug: 'esponja-vegetal-biodegradavel',
        basePreco: 8.99,
        porcentagemDesconto: 0,
        descricao:
          'Descubra a eficiência e sustentabilidade da nossa Esponja Vegetal Biodegradável. Feita com materiais naturais, esta esponja é a escolha perfeita para uma limpeza eficaz e amiga do ambiente. Ideal para lavar louças, superfícies e até mesmo para cuidados pessoais, a esponja vegetal combina desempenho superior com a consciência ecológica, ajudando a reduzir o uso de plásticos em sua rotina diária.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%203%20-%20Higiene/Esponja%20Vegetal%20Biodegrad%C3%A1vel.jpg?updatedAt=1716822699193',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria7,
        usuario: usuarioAdministrador,
      });
      const produto22 = produtosRepository.create({
        nome: 'Escova de Dentes de Bambu',
        slug: 'escova-de-dentes-de-bambu',
        basePreco: 15.29,
        porcentagemDesconto: 10,
        descricao:
          'Faça a transição para uma rotina de higiene oral mais ecológica com a nossa Escova de Dentes de Bambu. Fabricada com bambu renovável e cerdas de nylon biodegradáveis, esta escova oferece uma alternativa sustentável às escovas de dentes convencionais. Além de ajudar a reduzir o uso de plástico, o bambu é naturalmente antimicrobiano, proporcionando uma limpeza eficaz e respeitosa com o meio ambiente.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%203%20-%20Higiene/Escova%20de%20dentes%20de%20bambu.png?updatedAt=1716773254524',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria7,
        usuario: usuarioAdministrador,
      });
      const produto23 = produtosRepository.create({
        nome: 'Condicionador de crescimento resiliente de extrato de bambu 384 ml',
        slug: 'condicionador-de-crescimento-resiliente-de-extrato-de-bambu-384ml',
        basePreco: 34.99,
        porcentagemDesconto: 25,
        descricao:
          'Dê aos seus cabelos o cuidado que eles merecem com o nosso Condicionador de Crescimento Resiliente. Enriquecido com extrato de bambu, este condicionador proporciona nutrição profunda e fortalecimento para cabelos frágeis e danificados. Sua fórmula avançada ajuda a promover o crescimento saudável dos fios, deixando-os mais fortes, brilhantes e resistentes.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%203%20-%20Higiene/Condicionador%20de%20crescimento%20resiliente%20de%20extrato%20de%20bambu%20384%20ml.png?updatedAt=1716774765489',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria7,
        usuario: usuarioAdministrador,
      });
      const produto24 = produtosRepository.create({
        nome: 'Sabonete Artesanal de Amêndoa 100g',
        slug: 'sabonete-artesanal-de-amendoa-100g',
        basePreco: 21.99,
        porcentagemDesconto: 0,
        descricao:
          'Experimente o luxo natural com nosso Sabonete Artesanal de Amêndoa, cuidadosamente formulado para proporcionar uma limpeza suave e uma hidratação profunda. Feito com ingredientes naturais de alta qualidade, este sabonete é perfeito para todos os tipos de pele, oferecendo uma experiência de banho revigorante e nutritiva.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%203%20-%20Higiene/Sabonete%20Artesanal%20de%20Am%C3%AAndoa.jpg?updatedAt=1716766113703',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria7,
        usuario: usuarioAdministrador,
      });
      const produto25 = produtosRepository.create({
        nome: 'Sabonete Artesanal de Lavanda 90g',
        slug: 'sabonete-artesanal-de-lavanda-90g',
        basePreco: 17.99,
        porcentagemDesconto: 0,
        descricao:
          'Mime-se com o luxo e o cuidado natural do nosso Sabonete Artesanal de Lavanda. Feito à mão com ingredientes de alta qualidade, este sabonete oferece uma experiência de banho indulgente e relaxante. O aroma calmante da lavanda proporciona uma sensação de tranquilidade, enquanto os óleos essenciais nutrem e hidratam a pele, deixando-a suave, macia e perfumada após cada uso.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIA%203%20-%20Higiene/sabonete%20artesanal.jpg?updatedAt=1716775605166',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria7,
        usuario: usuarioAdministrador,
      });
      const produto26 = produtosRepository.create({
        nome: 'Kit festa sustentável ecológicos descartáveis',
        slug: 'kit-festa-sustentavel-ecologicos-descartaveis',
        basePreco: 19.99,
        porcentagemDesconto: 0,
        descricao:
          'Apresentamos o Kit festa sustentável ecológicos descartáveis, a escolha perfeita para quem busca conveniência sem abrir mão da sustentabilidade. Feito com materiais biodegradáveis e compostáveis, este conjunto inclui garfos, facas, colheres, pratos e copos que são ideais para piqueniques, festas, eventos e até mesmo para uso diário. Desfrute de praticidade enquanto cuida do meio ambiente.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIAS%207%20-%20Utens%C3%ADlios/Conjunto%20de%20utens%C3%ADlios%20ecol%C3%B3gicos%20descartaveis.jpg?updatedAt=1716767902953',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria8,
        usuario: usuarioAdministrador,
      });
      const produto27 = produtosRepository.create({
        nome: 'Tigela de Madeira',
        slug: 'tigela-de-madeira',
        basePreco: 38.99,
        porcentagemDesconto: 0,
        descricao:
          'Apresentamos a Tigela de Madeira, uma adição encantadora e funcional para sua cozinha. Feita à mão com madeira de alta qualidade, esta tigela combina a beleza natural da madeira com a praticidade do design moderno. Ideal para servir saladas, frutas ou qualquer outra delícia, esta tigela adiciona um toque de elegância rústica a qualquer mesa.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIAS%207%20-%20Utens%C3%ADlios/Tigela%20de%20madeira.jpg?updatedAt=1716770657957',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria8,
        usuario: usuarioAdministrador,
      });
      const produto28 = produtosRepository.create({
        nome: 'Cesto de Vime Natural',
        slug: 'cesto-de-vime-natural',
        basePreco: 49.99,
        porcentagemDesconto: 5,
        descricao:
          'Apresentamos o Cesto de Vime Natural, uma solução elegante e prática para organizar e decorar sua casa. Feito à mão com vime de alta qualidade, este cesto oferece durabilidade e um toque rústico que complementa qualquer ambiente. Ideal para armazenar roupas, brinquedos, mantas ou qualquer outro item, este cesto combina funcionalidade e estilo de maneira perfeita.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIAS%207%20-%20Utens%C3%ADlios/Cesto%20de%20vime%20natural.jpg?updatedAt=1716770314432',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria8,
        usuario: usuarioAdministrador,
      });
      const produto29 = produtosRepository.create({
        nome: 'Copo de Papel Ecológico',
        slug: 'copo-de-papel-ecologico',
        basePreco: 1.5,
        porcentagemDesconto: 0,
        descricao:
          'Apresentamos o Copo de Papel Ecológico, a escolha perfeita para quem busca uma alternativa sustentável aos copos descartáveis tradicionais. Feito com papel de fontes renováveis e revestido com um material biodegradável, este copo é ideal para bebidas quentes e frias, proporcionando conveniência e cuidado com o meio ambiente.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIAS%207%20-%20Utens%C3%ADlios/copo%20de%20papel.jpg?updatedAt=1716769997580',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria8,
        usuario: usuarioAdministrador,
      });
      const produto30 = produtosRepository.create({
        nome: 'Canudo de Metal Reutilizável ',
        slug: 'canudo-de-metal-reutilizavel',
        basePreco: 8.99,
        porcentagemDesconto: 0,
        descricao:
          'Adote um estilo de vida mais sustentável com o nosso Canudo de Metal Reutilizável. Feito de aço inoxidável de alta qualidade, este canudo é uma alternativa ecológica aos canudos de plástico descartáveis. Perfeito para bebidas quentes e frias, ele é durável, fácil de limpar e leva elegância a qualquer ocasião.',
        foto: 'https://ik.imagekit.io/GreenEconomy/CATEGORIAS%207%20-%20Utens%C3%ADlios/Canudo%20de%20metal%20reutiliz%C3%A1vel.jpg?updatedAt=1716768277606',
        notaMedia: 0,
        numeroDeAvaliacoes: 0,
        categoria: categoria8,
        usuario: usuarioAdministrador,
      });

      await produtosRepository.save([
        produto1,
        produto2,
        produto3,
        produto4,
        produto5,
        produto6,
        produto7,
        produto8,
        produto9,
        produto10,
        produto11,
        produto12,
        produto13,
        produto14,
        produto15,
        produto16,
        produto17,
        produto18,
        produto19,
        produto20,
        produto21,
        produto22,
        produto23,
        produto24,
        produto25,
        produto26,
        produto27,
        produto28,
        produto29,
        produto30,
      ]);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
