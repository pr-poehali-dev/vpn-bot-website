import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      price: "299",
      period: "месяц",
      features: [
        "3 устройства",
        "Базовая защита",
        "10 GB трафика",
        "Техподдержка",
      ],
      popular: false,
    },
    {
      name: "Стандарт",
      price: "599",
      period: "месяц",
      features: [
        "5 устройств",
        "Продвинутая защита",
        "50 GB трафика",
        "Приоритетная поддержка",
        "Выбор сервера",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "999",
      period: "месяц",
      features: [
        "Безлимит устройств",
        "Максимальная защита",
        "Безлимитный трафик",
        "VIP поддержка 24/7",
        "Все серверы",
        "Выделенный IP",
      ],
      popular: false,
    },
  ];

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
              <Link to="/pricing" className="text-foreground font-medium">
                Тарифы
              </Link>
              <Link
                to="/news"
                className="text-muted-foreground hover:text-foreground"
              >
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
          <h1 className="text-4xl font-bold mb-4">💰 Тарифы и цены</h1>
          <p className="text-muted-foreground text-lg">
            Выберите подходящий план для защиты вашего интернет-соединения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}₽
                  <span className="text-sm text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  🚀 Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            💳 Принимаем карты всех банков • 🔒 Безопасные платежи • 📱
            Мгновенная активация
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Задать вопрос
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать приложение
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
