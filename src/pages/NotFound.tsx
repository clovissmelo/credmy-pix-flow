
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-credmy-blue">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! Página não encontrada
        </p>
        <p className="text-gray-500 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/">
          <Button className="bg-credmy-lightBlue hover:bg-opacity-90">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
