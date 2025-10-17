import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Шоколадное наслаждение',
    category: 'Классические торты',
    price: 2500,
    image: 'https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/2ad5badd-6757-43b5-8d8a-732026f6581b.jpg',
    description: 'Нежный шоколадный торт с кремовой начинкой и шоколадной стружкой'
  },
  {
    id: 2,
    name: 'Фруктовый рай',
    category: 'Праздничные торты',
    price: 3200,
    image: 'https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/7fac26b6-0942-4886-bdc9-f1faa319793d.jpg',
    description: 'Свежий чизкейк с апельсинами и киви'
  },
  {
    id: 3,
    name: 'Ягодная мечта',
    category: 'Праздничные торты',
    price: 2800,
    image: 'https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/c1cc298e-d26d-4266-a487-806314491deb.jpg',
    description: 'Белоснежный торт со свежей клубникой и малиной'
  },
  {
    id: 4,
    name: 'Грандиозное торжество',
    category: 'Праздничные торты',
    price: 4500,
    image: 'https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/25e0fc35-ba1f-4083-8730-ea738691baf5.jpg',
    description: 'Трехъярусный золотой торт с шоколадом и розами'
  }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<number[]>([]);

  const categories = ['Все', 'Классические торты', 'Праздничные торты', 'Капкейки'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Главная</Link>
              <Link to="/catalog" className="text-[#B76E79] font-semibold">Каталог</Link>
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">О нас</Link>
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Контакты</Link>
            </div>
            <div className="relative">
              <Link to="/checkout" className="flex items-center gap-2 text-gray-700 hover:text-[#B76E79] transition-colors">
                <Icon name="ShoppingCart" size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#B76E79] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-[#B76E79]">Наши </span>
            <span className="text-[#6B4E3D]">торты</span>
          </h1>
          <p className="text-gray-600 text-xl italic">Сделано с любовью из премиум ингредиентов</p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-[#B76E79] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-[#B76E79] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#E8B870] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B76E79]">{product.price} ₽</span>
                  <Button 
                    onClick={() => addToCart(product.id)}
                    className="bg-[#B76E79] hover:bg-[#A05F6A] text-white"
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Добавить
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>
              <span className="text-[#6B4E3D]">Why Choose </span>
              <span className="text-[#D4A574]">Best Cakes?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#F5D4A6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={40} className="text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Премиум качество</h3>
              <p className="text-gray-600">Только лучшие ингредиенты в каждом торте</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#F5D4A6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={40} className="text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставка в день заказа по всему городу</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#F5D4A6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={40} className="text-[#B76E79]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Сделано с любовью</h3>
              <p className="text-gray-600">Каждый торт — это произведение искусства</p>
            </div>
          </div>
        </div>

        <footer className="text-center py-8 border-t border-gray-300">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Home" size={16} className="text-[#B76E79] mr-2" />
            <p className="text-gray-600 text-sm">
              28 Jackson Blvd Ste 1020 Chicago IL 60604-2340
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            Best Cakes © 2013 • <a href="#" className="text-[#B76E79] hover:underline">Политика конфиденциальности</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Catalog;