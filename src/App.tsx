import React from 'react';
import { Scissors, Phone, MapPin, Clock, ThumbsUp, BedDouble as Needle, Ruler } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-rose-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Ateliê de Costura</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-rose-200 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-rose-200 transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-rose-200 transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-rose-200 transition-colors">Contato</a>
          </nav>
          <a href="tel:+5541996041406" className="flex items-center space-x-2 bg-rose-700 px-4 py-2 rounded-full hover:bg-rose-800 transition-colors">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">(41) 99604-1406</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Qualidade e Precisão em Cada Ponto</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Oferecemos serviços de costura profissional, ajustes, consertos e muito mais para deixar suas roupas perfeitas.</p>
          <a href="#contato" className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-rose-100 transition-colors inline-block">Agende um Serviço</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-rose-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Scissors className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Ajustes e Consertos</h3>
              <p className="text-gray-600">Ajustamos qualquer peça de roupa para se adequar perfeitamente ao seu corpo. Consertamos rasgos, buracos e costuras soltas.</p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-rose-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Needle className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Troca de Zíper</h3>
              <p className="text-gray-600">Substituímos zíperes quebrados ou desgastados em calças, vestidos, jaquetas e bolsas com materiais de alta qualidade.</p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-rose-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Ruler className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Barras e Bainhas</h3>
              <p className="text-gray-600">Fazemos e ajustamos barras de calças, saias e vestidos com acabamento profissional e preciso.</p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-rose-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Customização</h3>
              <p className="text-gray-600">Transformamos suas peças antigas em novas criações, adicionando detalhes, bordados ou alterando o modelo.</p>
            </div>
            
            {/* Service 5 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-rose-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Scissors className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Reparos em Geral</h3>
              <p className="text-gray-600">Realizamos todo tipo de reparo em roupas, desde botões soltos até rasgos complexos, devolvendo a vida útil às suas peças.</p>
            </div>
            
            {/* Service 6 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-rose-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Serviço Expresso</h3>
              <p className="text-gray-600">Para emergências, oferecemos serviço expresso com entrega no mesmo dia para pequenos ajustes e consertos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Ateliê de Costura" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre Nosso Ateliê</h2>
              <p className="text-gray-600 mb-4">
                Com mais de 15 anos de experiência, nosso ateliê de costura se dedica a oferecer serviços de alta qualidade para todos os tipos de roupas e tecidos.
              </p>
              <p className="text-gray-600 mb-4">
                Trabalhamos com uma equipe de profissionais qualificados que amam o que fazem e se preocupam com cada detalhe do seu trabalho.
              </p>
              <p className="text-gray-600 mb-6">
                Nosso compromisso é entregar peças impecáveis, respeitando prazos e utilizando materiais de primeira linha para garantir sua satisfação.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <ThumbsUp className="h-5 w-5 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Qualidade Garantida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Entrega Pontual</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Scissors className="h-5 w-5 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Profissionais Experientes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <ThumbsUp className="h-5 w-5 text-rose-600" />
                  </div>
                  <span className="text-gray-700">Clientes Satisfeitos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Entre em Contato</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full mt-1">
                    <Phone className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Telefone</h4>
                    <p className="text-gray-600">(41) 99604-1406</p>
                    <p className="text-sm text-gray-500 mt-1">Disponível de segunda a sábado, das 9h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full mt-1">
                    <MapPin className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Endereço</h4>
                    <p className="text-gray-600">Rua das Costuras, 123</p>
                    <p className="text-gray-600">Bairro Centro - Curitiba/PR</p>
                    <p className="text-sm text-gray-500 mt-1">Próximo ao Terminal Central</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-100 p-3 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 13h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Envie uma Mensagem</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço Desejado</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="ajustes">Ajustes e Consertos</option>
                    <option value="ziper">Troca de Zíper</option>
                    <option value="barras">Barras e Bainhas</option>
                    <option value="customizacao">Customização</option>
                    <option value="reparos">Reparos em Geral</option>
                    <option value="expresso">Serviço Expresso</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Descreva o serviço que você precisa..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-rose-600 text-white py-3 px-4 rounded-md hover:bg-rose-700 transition-colors font-medium"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Scissors className="h-6 w-6" />
              <h2 className="text-xl font-bold">Ateliê de Costura</h2>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 Ateliê de Costura. Todos os direitos reservados.</p>
              <p className="text-gray-400 mt-1">Desenvolvido com ❤️ para nossos clientes</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;