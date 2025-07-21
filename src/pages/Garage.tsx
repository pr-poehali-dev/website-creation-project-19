import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const characters = [
  {
    id: 1,
    name: "Рик Санчез",
    image: "/api/placeholder/300/300",
    description: "Гениальный учёный-алкоголик с межгалактическими приключениями",
    dimension: "C-137",
    status: "Живой",
    species: "Человек",
    quotes: [
      "Наука, Морти! Это всё, что нам нужно!",
      "Я самый умный человек в мультивселенной!",
      "Поехали, Морти! Авантюра ждёт!",
      "Всё возможно, когда у тебя есть портальный пистолет!",
      "Бёрп! Я Рик Санчез!"
    ]
  },
  {
    id: 2,
    name: "Морти Смит",
    image: "/api/placeholder/280/280",
    description: "Внук Рика, неуверенный подросток в безумных приключениях",
    dimension: "C-137", 
    status: "Живой",
    species: "Человек",
    quotes: [
      "Ох, чёрт, Рик!",
      "Я не знаю об этом, Рик...",
      "Это плохая идея!",
      "Рик, мы все умрём!",
      "Aww geez..."
    ]
  },
  {
    id: 3,
    name: "Саммер Смит", 
    image: "/api/placeholder/290/290",
    description: "Старшая сестра Морти, популярная девочка-подросток",
    dimension: "C-137",
    status: "Живая", 
    species: "Человек",
    quotes: [
      "Дедушка Рик самый крутой!",
      "Я хочу в приключения!",
      "Это так круто!",
      "Морти такой тупой",
      "Я круче всех!"
    ]
  }
];

export default function Garage() {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [portalAnimation, setPortalAnimation] = useState(true);
  const [speechBubble, setSpeechBubble] = useState(null);

  useEffect(() => {
    if (characterId) {
      const character = characters.find(c => c.id === parseInt(characterId));
      if (character) {
        setSelectedCharacter(character);
      }
    }
    
    // Portal animation timeout
    const timer = setTimeout(() => {
      setPortalAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [characterId]);

  const playCharacterQuote = (character) => {
    if (character && character.quotes) {
      const randomQuote = character.quotes[Math.floor(Math.random() * character.quotes.length)];
      setSpeechBubble({
        characterId: character.id,
        text: randomQuote
      });

      setTimeout(() => {
        setSpeechBubble(null);
      }, 3000);
    }
  };

  const goBack = () => {
    setPortalAnimation(true);
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-black via-rick-blue/20 to-dimension-purple/30 relative overflow-hidden">
      {/* Portal Entry Animation */}
      {portalAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-portal-green/90">
          <div className="relative">
            {/* Portal Ring */}
            <div className="w-64 h-64 border-8 border-portal-green rounded-full animate-spin-slow relative">
              <div className="absolute inset-4 border-4 border-toxic-green rounded-full animate-spin-reverse">
                <div className="absolute inset-4 border-2 border-white rounded-full animate-pulse">
                  <div className="absolute inset-2 bg-gradient-radial from-portal-green/50 to-transparent rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            
            {/* Portal Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white animate-glitch mb-2">
                  ПОРТАЛ АКТИВИРОВАН
                </div>
                <div className="text-lg text-white/80 animate-pulse">
                  Добро пожаловать в гараж Рика
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Garage Environment */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
        
        {/* Floating Science Equipment */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-portal-green/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-toxic-green/40 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-dimension-purple/30 rounded-full animate-bounce-slow"></div>
        
        {/* Portal Gun on Wall */}
        <div className="absolute top-32 right-20 transform rotate-12">
          <div className="w-24 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full relative">
            <div className="absolute right-0 w-8 h-8 bg-portal-green rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-portal-green to-toxic-green animate-glitch mb-4">
            ГАРАЖ РИКА
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Добро пожаловать в секретную лабораторию самого умного учёного мультивселенной
          </p>
        </div>

        {/* Selected Character Display */}
        {selectedCharacter && (
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-space-black/80 to-rick-blue/20 backdrop-blur-md border-2 border-portal-green/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Character Image */}
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-portal-green/30 to-toxic-green/30 rounded-full animate-pulse"></div>
                      <img
                        src={selectedCharacter.image}
                        alt={selectedCharacter.name}
                        className="relative z-10 w-full h-full object-cover rounded-full border-4 border-portal-green animate-float"
                      />
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-4 -right-4 w-4 h-4 bg-portal-green rounded-full animate-ping"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-toxic-green rounded-full animate-bounce"></div>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="text-center md:text-left">
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-portal-green to-white mb-4 animate-glitch">
                      {selectedCharacter.name}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Icon name="MapPin" className="text-portal-green" size={20} />
                        <span className="text-white font-semibold">Измерение: {selectedCharacter.dimension}</span>
                      </div>
                      
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Icon name="Heart" className="text-red-400" size={20} />
                        <span className="text-white font-semibold">Статус: {selectedCharacter.status}</span>
                      </div>
                      
                      <div className="flex items-center justify-center md:justify-start gap-3">
                        <Icon name="User" className="text-toxic-green" size={20} />
                        <span className="text-white font-semibold">Вид: {selectedCharacter.species}</span>
                      </div>
                    </div>

                    <p className="text-lg text-white/80 mb-6 leading-relaxed">
                      {selectedCharacter.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <Button
                        onClick={() => playCharacterQuote(selectedCharacter)}
                        className="bg-gradient-to-r from-portal-green to-toxic-green hover:from-toxic-green hover:to-portal-green text-white font-bold px-8 py-3 transform transition-all duration-200 hover:scale-105"
                      >
                        <Icon name="MessageCircle" className="mr-2" size={20} />
                        Произнести фразу
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={goBack}
                        className="border-2 border-portal-green text-portal-green hover:bg-portal-green hover:text-white font-bold px-8 py-3 transform transition-all duration-200 hover:scale-105"
                      >
                        <Icon name="ArrowLeft" className="mr-2" size={20} />
                        Вернуться через портал
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other Characters in Garage */}
        {!selectedCharacter && (
          <div className="text-center">
            <div className="text-2xl text-white/60 mb-8">
              Выберите персонажа на главной странице, чтобы попасть сюда через портал
            </div>
            <Button
              onClick={goBack}
              className="bg-gradient-to-r from-portal-green to-toxic-green hover:from-toxic-green hover:to-portal-green text-white font-bold px-8 py-3 transform transition-all duration-200 hover:scale-105"
            >
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Вернуться на главную
            </Button>
          </div>
        )}
      </div>

      {/* Speech Bubble */}
      {speechBubble && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 animate-scale-in">
          <div className="relative bg-gradient-to-br from-white to-white/90 backdrop-blur-md border-4 border-portal-green rounded-3xl px-8 py-6 max-w-md mx-4 shadow-2xl">
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-portal-green"></div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-4 border-portal-green animate-pulse">
                <img
                  src={characters.find(c => c.id === speechBubble.characterId)?.image}
                  alt="Speaking character"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-bold text-rick-blue mb-2 animate-glitch" style={{ textShadow: '1px 1px 0px #47CE4D' }}>
                {characters.find(c => c.id === speechBubble.characterId)?.name}
              </p>
              <p className="text-lg text-rick-blue font-semibold leading-relaxed">
                "{speechBubble.text}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Science Equipment UI */}
      <div className="fixed bottom-8 left-8">
        <div className="flex items-center gap-4 bg-space-black/80 backdrop-blur-md border-2 border-portal-green/30 rounded-2xl px-4 py-2">
          <div className="w-3 h-3 bg-portal-green rounded-full animate-pulse"></div>
          <span className="text-portal-green font-mono text-sm">DIMENSION TRACKER ONLINE</span>
        </div>
      </div>
    </div>
  );
}