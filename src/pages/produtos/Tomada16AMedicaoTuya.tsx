import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tomada16AMedicaoTuya = () => {
  return (
    <>
      <Helmet><title>Tomada 16A Medição Tuya | Minha Casa Nova</title></Helmet>
      <div className="min-h-screen bg-background"><Navbar /><div className="container mx-auto px-4 py-8"><h1 className="text-4xl font-bold">Tomada 16A com Medição</h1><p>Review em breve</p></div><Footer /></div>
    </>
  );
};

export default Tomada16AMedicaoTuya;