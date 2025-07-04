import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Admin = () => {
  const [newsForm, setNewsForm] = useState({
    title: "",
    content: "",
    category: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsForm.title || !newsForm.content || !newsForm.category) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }

    // Здесь будет интеграция с базой данных
    toast({
      title: "Новость добавлена",
      description: "Новость успешно опубликована",
    });

    setNewsForm({ title: "", content: "", category: "" });
  };

  const stats = [
    { label: "Всего пользователей", value: "12,847", icon: "Users" },
    { label: "Активных подключений", value: "8,432", icon: "Wifi" },
    { label: "Серверов онлайн", value: "156", icon: "Server" },
    { label: "Средняя скорость", value: "87 Мбит/с", icon: "Zap" },
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
              <Link
                to="/pricing"
                className="text-muted-foreground hover:text-foreground"
              >
                Тарифы
              </Link>
              <Link
                to="/news"
                className="text-muted-foreground hover:text-foreground"
              >
                Новости
              </Link>
              <Link to="/admin" className="text-foreground font-medium">
                Админ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🛠️ Панель администратора</h1>
          <p className="text-muted-foreground text-lg">
            Управление VPN-сервисом и контентом
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon
                      name={stat.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Plus" size={20} />
                Добавить новость
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Заголовок
                  </label>
                  <Input
                    value={newsForm.title}
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, title: e.target.value })
                    }
                    placeholder="Введите заголовок новости"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Категория
                  </label>
                  <Select
                    value={newsForm.category}
                    onValueChange={(value) =>
                      setNewsForm({ ...newsForm, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Обновления">Обновления</SelectItem>
                      <SelectItem value="Безопасность">Безопасность</SelectItem>
                      <SelectItem value="Приложения">Приложения</SelectItem>
                      <SelectItem value="Акции">Акции</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Содержание
                  </label>
                  <Textarea
                    value={newsForm.content}
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, content: e.target.value })
                    }
                    placeholder="Введите текст новости"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Icon name="Send" size={16} className="mr-2" />
                  Опубликовать новость
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" size={20} />
                Управление сервером
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <Icon name="Server" size={20} className="mx-auto mb-1" />
                    <div className="text-sm">Серверы</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <Icon name="Users" size={20} className="mx-auto mb-1" />
                    <div className="text-sm">Пользователи</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <Icon name="BarChart3" size={20} className="mx-auto mb-1" />
                    <div className="text-sm">Аналитика</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-16">
                  <div className="text-center">
                    <Icon name="Shield" size={20} className="mx-auto mb-1" />
                    <div className="text-sm">Безопасность</div>
                  </div>
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">⚠️ База данных</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Для подключения MySQL базы данных требуется backend-сервер.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    to="https://docs.poehali.dev/deploy/github"
                    target="_blank"
                  >
                    <Icon name="Github" size={16} className="mr-2" />
                    Подключить GitHub
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
