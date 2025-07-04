import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [news, setNews] = useState([
    {
      id: 1,
      title: "🚀 Новые серверы в Европе",
      content:
        "Добавили 10 новых серверов в Германии и Нидерландах для лучшей скорости",
      date: "2025-01-03",
    },
    {
      id: 2,
      title: "🔒 Обновление безопасности",
      content:
        "Внедрили новый протокол шифрования для максимальной защиты данных",
      date: "2025-01-01",
    },
  ]);
  const [newNewsTitle, setNewNewsTitle] = useState("");
  const [newNewsContent, setNewNewsContent] = useState("");

  const addNews = () => {
    if (newNewsTitle && newNewsContent) {
      setNews([
        {
          id: Date.now(),
          title: newNewsTitle,
          content: newNewsContent,
          date: new Date().toISOString().split("T")[0],
        },
        ...news,
      ]);
      setNewNewsTitle("");
      setNewNewsContent("");
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      {/* Header */}
      <header className="bg-[#2B2B2B] p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Shield" className="text-[#0088CC]" size={32} />
            <h1 className="text-2xl font-bold">SecureVPN 🛡️</h1>
          </Link>
          <nav className="flex space-x-6">
            <Link to="/" className="hover:text-[#0088CC] transition-colors">
              Главная
            </Link>
            <Link
              to="/pricing"
              className="hover:text-[#0088CC] transition-colors"
            >
              Тарифы
            </Link>
            <Link to="/news" className="hover:text-[#0088CC] transition-colors">
              Новости
            </Link>
            <Link
              to="/admin"
              className="hover:text-[#0088CC] transition-colors"
            >
              Админ
            </Link>
            <Button
              onClick={() => setIsAdmin(!isAdmin)}
              variant={isAdmin ? "default" : "outline"}
              className="bg-[#0088CC] hover:bg-[#0066AA]"
            >
              <Icon name="Settings" size={16} className="mr-2" />
              Админ
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Безопасный VPN 🔒</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Защитите свои данные и получите доступ к любому контенту в интернете
            с помощью нашего надежного VPN-сервиса
          </p>
          <Button className="bg-[#0088CC] hover:bg-[#0066AA] text-white px-8 py-3 text-lg">
            <Icon name="Play" size={20} className="mr-2" />
            Подключиться сейчас ⚡
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-[#2B2B2B]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Возможности 🚀
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1E1E1E] border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon
                    name="Shield"
                    className="text-[#0088CC] mr-2"
                    size={24}
                  />
                  Защита данных 🛡️
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Военное шифрование AES-256 защищает ваши данные от перехвата
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Zap" className="text-[#0088CC] mr-2" size={24} />
                  Высокая скорость ⚡
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Более 100 серверов по всему миру для максимальной скорости
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Icon name="Eye" className="text-[#0088CC] mr-2" size={24} />
                  Анонимность 👁️
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Полная анонимность в сети без логирования активности
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Тарифы 💰</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#2B2B2B] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Базовый 🌟</CardTitle>
                <p className="text-2xl font-bold text-[#0088CC]">₽299/мес</p>
              </CardHeader>
              <CardContent className="text-gray-400">
                <ul className="space-y-2">
                  <li>• 1 устройство</li>
                  <li>• 50+ серверов</li>
                  <li>• Стандартная поддержка</li>
                </ul>
                <Button className="w-full mt-4 bg-[#0088CC] hover:bg-[#0066AA]">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#2B2B2B] border-gray-700 border-[#0088CC]">
              <CardHeader>
                <Badge className="w-fit bg-[#0088CC] mb-2">Популярный</Badge>
                <CardTitle className="text-white">Премиум 👑</CardTitle>
                <p className="text-2xl font-bold text-[#0088CC]">₽599/мес</p>
              </CardHeader>
              <CardContent className="text-gray-400">
                <ul className="space-y-2">
                  <li>• 5 устройств</li>
                  <li>• 100+ серверов</li>
                  <li>• Приоритетная поддержка</li>
                </ul>
                <Button className="w-full mt-4 bg-[#0088CC] hover:bg-[#0066AA]">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#2B2B2B] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Бизнес 🚀</CardTitle>
                <p className="text-2xl font-bold text-[#0088CC]">₽999/мес</p>
              </CardHeader>
              <CardContent className="text-gray-400">
                <ul className="space-y-2">
                  <li>• Неограниченно устройств</li>
                  <li>• Все серверы</li>
                  <li>• 24/7 поддержка</li>
                </ul>
                <Button className="w-full mt-4 bg-[#0088CC] hover:bg-[#0066AA]">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 bg-[#2B2B2B]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Новости 📰</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="bg-[#1E1E1E] border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </CardHeader>
                <CardContent className="text-gray-400">
                  {item.content}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      {isAdmin && (
        <section className="py-16 px-4 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Админка 🛠️</h3>
            <Card className="bg-[#2B2B2B] border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Добавить новость</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Заголовок
                  </Label>
                  <Input
                    id="title"
                    value={newNewsTitle}
                    onChange={(e) => setNewNewsTitle(e.target.value)}
                    placeholder="🚀 Заголовок новости"
                    className="bg-[#1E1E1E] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="content" className="text-white">
                    Содержание
                  </Label>
                  <Textarea
                    id="content"
                    value={newNewsContent}
                    onChange={(e) => setNewNewsContent(e.target.value)}
                    placeholder="Текст новости..."
                    className="bg-[#1E1E1E] border-gray-700 text-white"
                    rows={4}
                  />
                </div>
                <Button
                  onClick={addNews}
                  className="bg-[#0088CC] hover:bg-[#0066AA]"
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить новость
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 VPN BOT. Все права защищены 🛡️
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[#0088CC] transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#0088CC] transition-colors"
            >
              <Icon name="Send" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
