import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Главная</Link>
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">О нас</Link>
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Галерея</Link>
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Услуги</Link>
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Контакты</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="mb-4">
              <div className="inline-block bg-[#B76E79] text-white px-4 py-2 rounded mb-2">история</div>
              <div className="inline-block bg-[#B76E79] text-white px-4 py-2 rounded mb-2 ml-2">предложения</div>
              <div className="inline-block bg-[#B76E79] text-white px-4 py-2 rounded mb-2">новости</div>
              <div className="inline-block bg-[#9B7E6B] text-white px-4 py-2 rounded ml-2">свежее</div>
              <div className="inline-block bg-[#9B7E6B] text-white px-4 py-2 rounded ml-2">архив</div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#F5D4A6] rounded-t-full flex items-center justify-center mr-4">
                <div className="w-12 h-12 bg-[#E8B870] rounded-t-full"></div>
              </div>
              <div>
                <h1 className="text-6xl font-bold">
                  <span className="text-[#B76E79]">Best</span>
                  <span className="text-[#6B4E3D]">Cakes</span>
                </h1>
                <p className="text-gray-600 italic text-xl">Частная кондитерская</p>
              </div>
            </div>

            <div className="flex space-x-3 mb-8">
              <div className="w-8 h-8 border-2 border-[#D4A574] rounded-full flex items-center justify-center">
                <Icon name="Twitter" size={16} className="text-[#D4A574]" />
              </div>
              <div className="w-8 h-8 border-2 border-[#D4A574] rounded-full flex items-center justify-center">
                <Icon name="Facebook" size={16} className="text-[#D4A574]" />
              </div>
              <div className="w-8 h-8 border-2 border-[#D4A574] rounded-full flex items-center justify-center">
                <Icon name="Instagram" size={16} className="text-[#D4A574]" />
              </div>
              <div className="w-8 h-8 border-2 border-[#D4A574] rounded-full flex items-center justify-center">
                <Icon name="Rss" size={16} className="text-[#D4A574]" />
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/25e0fc35-ba1f-4083-8730-ea738691baf5.jpg" 
              alt="Main Cake"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link to="/catalog" className="block">
            <div className="bg-[#B76E79] hover:bg-[#A05F6A] transition-colors rounded-3xl p-8 text-center text-white h-64 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'cursive' }}>Классические торты</h3>
              <p className="text-lg italic mb-3">смотреть фото</p>
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                <Icon name="ChevronRight" size={20} />
              </div>
            </div>
          </Link>

          <Link to="/catalog" className="block">
            <div className="bg-[#C8956E] hover:bg-[#B8855E] transition-colors rounded-3xl p-8 text-center text-white h-64 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'cursive' }}>Новинка! Капкейки</h3>
              <p className="text-lg italic mb-3">смотреть галерею</p>
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                <Icon name="ChevronRight" size={20} />
              </div>
            </div>
          </Link>

          <Link to="/catalog" className="block">
            <div className="bg-[#E8B870] hover:bg-[#D8A860] transition-colors rounded-3xl p-8 text-center text-white h-64 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'cursive' }}>Праздничные торты</h3>
              <p className="text-lg italic mb-3">смотреть все</p>
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                <Icon name="ChevronRight" size={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl">🌸</div>
              <h2 className="text-4xl font-bold mx-4" style={{ fontFamily: 'cursive' }}>
                <span className="text-[#6B4E3D]">Популярные </span>
                <span className="text-[#D4A574]">торты</span>
              </h2>
              <div className="text-4xl">🌸</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/2ad5badd-6757-43b5-8d8a-732026f6581b.jpg"
                  alt="Murse Ktreas"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ШОКОЛАДНОЕ НАСЛАЖДЕНИЕ</h3>
              <p className="text-[#C8956E] italic mb-3" style={{ fontFamily: 'cursive' }}>изысканный шоколадный десерт</p>
              <p className="text-gray-600 text-sm mb-4">
                Нежный шоколадный торт с кремовой начинкой и шоколадной стружкой. Идеально для истинных ценителей.
              </p>
              <div className="text-4xl">🌼</div>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/7fac26b6-0942-4886-bdc9-f1faa319793d.jpg"
                  alt="Resas Vitrae"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ФРУКТОВЫЙ РАЙ</h3>
              <p className="text-[#C8956E] italic mb-3" style={{ fontFamily: 'cursive' }}>освежающий фруктовый десерт</p>
              <p className="text-gray-600 text-sm mb-4">
                Свежий чизкейк с апельсинами и киви. Легкий и воздушный десерт для любого праздника.
              </p>
              <div className="text-4xl">🌼</div>
            </div>

            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/c1cc298e-d26d-4266-a487-806314491deb.jpg"
                  alt="Lehose Miyas"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ЯГОДНАЯ МЕЧТА</h3>
              <p className="text-[#C8956E] italic mb-3" style={{ fontFamily: 'cursive' }}>нежный ягодный десерт</p>
              <p className="text-gray-600 text-sm mb-4">
                Белоснежный торт со свежей клубникой и малиной. Воздушный крем и сахарная пудра.
              </p>
              <div className="text-4xl">🌼</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>
              <span className="text-[#6B4E3D]">А вы </span>
              <span className="text-[#D4A574]">знали?</span>
            </h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">НАША ИСТОРИЯ</h4>
              <p className="text-gray-600 text-sm mb-3">
                Мы создаем торты с любовью уже более 10 лет, используя только натуральные ингредиенты.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">КАЧЕСТВО И СВЕЖЕСТЬ</h4>
              <p className="text-gray-600 text-sm mb-3">
                Все наши торты изготавливаются в день доставки из отборных продуктов высшего качества.
              </p>
              <button className="bg-[#B76E79] hover:bg-[#A05F6A] text-white px-6 py-2 rounded">
                Подробнее
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>
              <span className="text-[#6B4E3D]">Полезные </span>
              <span className="text-[#D4A574]">ссылки</span>
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Доставка и оплата
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Индивидуальный заказ
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Корпоративным клиентам
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Программа лояльности
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Мастер-классы
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Вакансии
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Сертификаты качества
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Политика конфиденциальности
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-[#D4A574] mr-2" />
                Публичная оферта
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>
              <span className="text-[#6B4E3D]">Быстрая </span>
              <span className="text-[#D4A574]">связь</span>
            </h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Ваше имя"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#B76E79]"
              />
              <textarea 
                placeholder="Сообщение"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#B76E79]"
              ></textarea>
              <button 
                type="submit"
                className="bg-[#B76E79] hover:bg-[#A05F6A] text-white px-6 py-2 rounded"
              >
                Отправить
              </button>
            </form>
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
          <div className="absolute bottom-4 right-4">
            <div className="text-4xl">🍂</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;