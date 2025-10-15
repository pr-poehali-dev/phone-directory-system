import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Department {
  id: number;
  name: string;
  head_name: string;
  description: string;
}

interface Employee {
  id: number;
  phone: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  department_id: number;
  department_name?: string;
  position: string;
  office_number: string;
}

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [departments, setDepartments] = useState<Department[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/a34904d7-5ea4-48ec-a473-be3c1f9ecf6e');
      const data = await response.json();
      setDepartments(data.departments);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/6a91c806-1320-4758-a181-abe84650a1d8');
      const data = await response.json();
      setEmployees(data.employees);
      setFilteredEmployees(data.employees);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleLogin = async () => {
    if (!username || !password) return;
    
    try {
      const response = await fetch('https://functions.poehali.dev/f72e5acd-ab2e-4aae-b183-a268adf7b14a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setCurrentTab('directory');
        fetchEmployees();
      } else {
        alert('Неверный логин или пароль');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Ошибка при входе в систему');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setCurrentTab('home');
    setEmployees([]);
    setFilteredEmployees([]);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredEmployees(employees);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = employees.filter(emp => 
      emp.last_name.toLowerCase().includes(lowerQuery) ||
      emp.first_name.toLowerCase().includes(lowerQuery) ||
      emp.middle_name.toLowerCase().includes(lowerQuery) ||
      emp.phone.includes(query) ||
      emp.position.toLowerCase().includes(lowerQuery) ||
      emp.department_name?.toLowerCase().includes(lowerQuery) ||
      emp.office_number.includes(query)
    );
    setFilteredEmployees(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Building2" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Телефонный справочник</h1>
                <p className="text-sm text-gray-500">ООО "ТехноКомпания"</p>
              </div>
            </div>
            
            <nav className="flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" onClick={() => setCurrentTab('home')}>
                    <Icon name="Home" size={18} className="mr-2" />
                    Главная
                  </Button>
                  <Button variant="ghost" onClick={() => setCurrentTab('directory')}>
                    <Icon name="Users" size={18} className="mr-2" />
                    Справочник
                  </Button>
                  <Button variant="outline" onClick={handleLogout}>
                    <Icon name="LogOut" size={18} className="mr-2" />
                    Выход
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={() => setCurrentTab('home')}>
                    Главная
                  </Button>
                  <Button onClick={() => setCurrentTab('login')}>
                    Войти
                  </Button>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {currentTab === 'home' && (
          <div className="animate-fade-in space-y-8">
            <section className="text-center py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Добро пожаловать в корпоративный справочник
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Система для быстрого поиска контактной информации сотрудников организации
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Наши отделы</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {departments.map((dept) => (
                  <Card key={dept.id} className="hover-scale cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon name="Building" size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{dept.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Icon name="User" size={14} />
                            {dept.head_name}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{dept.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8 text-center">
              <Icon name="Info" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Для доступа к справочнику требуется авторизация
              </h3>
              <p className="text-gray-600 mb-6">
                Войдите в систему, чтобы получить доступ к полной базе контактов сотрудников
              </p>
              <Button size="lg" onClick={() => setCurrentTab('login')}>
                <Icon name="LogIn" size={20} className="mr-2" />
                Войти в систему
              </Button>
            </section>
          </div>
        )}

        {currentTab === 'login' && !isAuthenticated && (
          <div className="animate-fade-in max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Вход в систему</CardTitle>
                <CardDescription>
                  Введите ваши учетные данные для доступа к справочнику
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Имя пользователя</label>
                  <Input
                    placeholder="Введите логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Пароль</label>
                  <Input
                    type="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  />
                </div>
                <Button className="w-full" size="lg" onClick={handleLogin}>
                  <Icon name="LogIn" size={20} className="mr-2" />
                  Войти
                </Button>
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>Демо доступ: admin / admin123</p>
                  <p>или user / user123</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentTab === 'directory' && isAuthenticated && (
          <div className="animate-fade-in space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-2">
                <Icon name="Search" size={24} className="text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Справочник сотрудников</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Найдено сотрудников: <span className="font-semibold">{filteredEmployees.length}</span>
              </p>
              
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Поиск по ФИО, должности, телефону или отделу..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEmployees.map((emp) => (
                <Card key={emp.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="User" size={32} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg mb-1 truncate">
                          {emp.last_name} {emp.first_name}
                        </CardTitle>
                        <CardDescription className="truncate">
                          {emp.middle_name}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {emp.department_name}
                      </Badge>
                      <p className="text-sm font-medium text-gray-700">{emp.position}</p>
                    </div>
                    
                    <div className="space-y-2 pt-2 border-t">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Phone" size={16} className="text-gray-400" />
                        <a href={`tel:${emp.phone}`} className="text-primary hover:underline">
                          {emp.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="MapPin" size={16} className="text-gray-400" />
                        Кабинет {emp.office_number}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEmployees.length === 0 && (
              <div className="text-center py-12">
                <Icon name="SearchX" size={64} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Ничего не найдено
                </h3>
                <p className="text-gray-500">
                  Попробуйте изменить параметры поиска
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2024 ООО "ТехноКомпания". Все права защищены.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">
                О компании
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Контакты
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Поддержка
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;