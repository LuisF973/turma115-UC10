const LivroModel = require('../models/livroModel');

class LivroController {

    static async criar(req, res){
        const generosLivros = [
            "Romance",
            "Ficção Científica",
            "Fantasia",
            "Mistério",
            "Suspense",
            "Terror",
            "Aventura",
            "Drama",
            "Histórico",
            "Biografia",
            "Autobiografia",
            "Poesia",
            "Humor",
            "Literatura Clássica",
            "Literatura Contemporânea",
            "Infantojuvenil",
            "Young Adult (YA)",
            "Distopia",
            "Realismo Mágico",
            "Crônicas",
            "Ensaios",
            "Autoajuda",
            "Espiritualidade",
            "Religião",
            "Filosofia",
            "Psicologia",
            "Ciências Sociais",
            "Política",
            "Economia",
            "Educação",
            "Tecnologia",
            "Negócios",
            "Direito",
            "Medicina",
            "Ecologia",
            "Viagens",
            "Gastronomia",
            "Arte",
            "Fotografia"
          ];
          const sqlInjectionPattern = /^[a-zA-Z0-9À-ÿ.,:!?()\- \s]+$/i;

          
        try {
            const{titulo, autor, ano_publicacao, genero, preco} = req.body
            console.log(typeof preco);
            

            if(!titulo || !autor || !ano_publicacao || !genero || !preco){
                return res.status(400).json({msg:"Todos os campos são obrigatórios"})
            }
            if(!Number.isInteger(ano_publicacao) || ano_publicacao<1000 || ano_publicacao>new Date().getFullYear()){
                return res.status(400).json({msg:"Ano de publicação deve ser um número"})
            }
            if(preco<=0){
                return res.status(400).json({msg:"Preço deve ser maior que zero"})
            }
            if(titulo.length<2){
                return res.status(400).json({msg:"Título deve ter pelo menos 2 caracteres"})
            }
            if(!generosLivros.includes(genero)){
                return res.status(400).json({msg:"Gênero inválido"})
            }
            if(typeof preco !== 'number' ){
                return res.status(400).json({msg:"Preço deve ser um número"})
            }
            if(sqlInjectionPattern.test(titulo)){
                return res.status(400).json({msg:"Título inválido"})
            }
            if(sqlInjectionPattern.test(autor)){
                return res.status(400).json({msg:"Autor inválido"})
            }
            if(sqlInjectionPattern.test(ano_publicacao)){
                return res.status(400).json({msg:"Ano de publicação deve ser um número"})
            }
            if(sqlInjectionPattern.test(preco)){
                return res.status(400).json({msg:"Preço deve ser um número"})
            }
            const livro = await LivroModel.create({titulo, autor, ano_publicacao, genero, preco})
            res.status(201).json({msg:"Livro criado com sucesso", livro})
        } catch (error) {
            res.status(500).json({msg:"Erro interno", error})
        }     
    }

    static async listar(req, res){
        try {
            const livros = await LivroModel.findAll();
            res.status(200).json(livros)

        } catch (error) {
             res.status(500).json({msg:"Erro interno", error})
        }

    }





}

module.exports = LivroController;