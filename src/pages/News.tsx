import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const News = () => {
  const [news] = useState([
    {
      id: 1,
      title: "🚀 Новый сервер в Германии",
      content:
        "Добавлен высокоскоростной сервер в Франкфурте для улучшения соединения с Европой.",
      date: "2024-07-01",
      category: "Обновления",
    },
    {
      id: 2,
      title: "🔒 Улучшенное шифрование",
      content:
        "Внедрено новое шифрование WireGuard для повышения безопасности и скорости.",
      date: "2024-06-28",
      category: "Безопасность",
    },
    {
      id: 3,
      title: "📱 Мобильное приложение 2.0",
      content:
        "Выпущена новая версия мобильного приложения с улучшенным интерфейсом.",
      date: "2024-06-25",
      category: "Приложения",
    },
    {
      id: 4,
      title: "🎉 Специальное предложение",
      content:
        "Скидка 50% на годовую подписку для новых пользователей до конца месяца.",
      date: "2024-06-20",
      category: "Акции",
    },
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Обновления":
        return "bg-blue-500";
      case "Безопасность":
        return "bg-green-500";
      case "Приложения":
        return "bg-purple-500";
      case "Акции":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">SecureVPN</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Главная
              </Link>
              <Link
                to="/pricing"
                className="text-muted-foreground hover:text-foreground"
              >
                Тарифы
              </Link>
              <Link to="/news" className="text-foreground font-medium">
                Новости
              </Link>
              <Link
                to="/admin"
                className="text-muted-foreground hover:text-foreground"
              >
                Админ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">📰 Новости и обновления</h1>
          <p className="text-muted-foreground text-lg">
            Последние новости о развитии нашего VPN-сервиса
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge
                      className={`${getCategoryColor(item.category)} text-white`}
                    >
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(item.date).toLocaleDateString("ru-RU")}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.content}</p>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Нравится
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>
            <Icon name="RefreshCw" size={16} className="mr-2" />
            Загрузить больше новостей
          </Button>
        </div>
      </main>
    </div>
  );
};

export default News;
