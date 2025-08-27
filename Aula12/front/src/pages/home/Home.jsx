import { useEffect, useState } from "react";
import LivroService from "../../services/livroService";
import BookCard from "../../components/bookcard/BookCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const data = await LivroService.getAllLivros();
        setLivros(data);
       
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    try {
      await LivroService.deleteLivro(id);
      setLivros(livros.filter((livro) => livro.id !== id));
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">📚 Biblioteca</h1>
        <button
          onClick={() => navigate("/livro/adicionar")}
          className="p-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          ➕ Adicionar Livro
        </button>
      </div>

      {/* Carregamento */}
      {loading && <p className="text-gray-600">Carregando livros...</p>}

      {/* Lista de livros */}
      {!loading && livros.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {livros.map((livro) => (
            <BookCard key={livro.id} livro={livro} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-gray-500 text-lg mt-10 text-center">
            Nenhum livro encontrado. Adicione um novo para começar! 🚀
          </p>
        )
      )}
    </div>
  );
};

export default Home;
