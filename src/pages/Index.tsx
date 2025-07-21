import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const characters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    dimension: 'C-137',
    species: 'Human',
    status: 'Alive',
    image: '/img/b96501fe-6f5a-47ca-b230-72c49c3fcfbb.jpg',
    gallery: [
      '/img/b96501fe-6f5a-47ca-b230-72c49c3fcfbb.jpg',
      '/img/b4b54a2e-4910-4790-8059-0a88fc339acf.jpg'
    ],
    description: 'Безумный ученый с межгалактическими амбициями',
    fullDescription: 'Рик Санчез - гениальный, но алкоголик-ученый и дедушка Морти Смита. Он является самым умным человеком во вселенной и изобретателем портального пистолета, позволяющего путешествовать между измерениями.',
    personality: ['Циничный', 'Гениальный', 'Саркастичный', 'Безрассудный'],
    occupation: 'Безумный ученый',
    age: '70+',
    firstAppearance: 'Pilot (Season 1)',
    color: 'cosmic-blue',
    quotes: [
      'Поехали, Морти! Авантюра ждёт!',
      'Наука, Морти! Это всё, что нам нужно!',
      'Я самый умный человек в мультивселенной!',
      'Огурцы - это серьёзно!'
    ],
    facts: [
      'IQ превышает 300',
      'Изобрел межизмерительные путешествия',
      'Самый разыскиваемый преступник в галактике',
      'Превратил себя в огурец'
    ]
  },
  {
    id: 2,
    name: 'Morty Smith',
    dimension: 'C-137',
    species: 'Human', 
    status: 'Alive',
    image: '/img/7a1d6321-2681-4dd2-a922-966836190671.jpg',
    gallery: [
      '/img/7a1d6321-2681-4dd2-a922-966836190671.jpg',
      '/img/1c36e1d5-4998-4a56-ab20-489b2b32d03f.jpg'
    ],
    description: 'Нервный внук, втянутый в безумные приключения',
    fullDescription: 'Морти Смит - 14-летний внук Рика, который неохотно сопровождает его в опасных межизмерительных приключениях. Несмотря на свою неуверенность, он часто становится голосом морали.',
    personality: ['Нервный', 'Добрый', 'Неуверенный', 'Моральный'],
    occupation: 'Школьник',
    age: '14',
    firstAppearance: 'Pilot (Season 1)',
    color: 'bright-yellow',
    quotes: [
      'Обоже, Рик, я не знаю...',
      'Аах! Это небезопасно, Рик!',
      'Мне страшно... Может, лучше не надо?',
      'Почему я всегда должен спасать мир?'
    ],
    facts: [
      'Учится в школе Гарри Хэрпендейла',
      'Влюблен в Джессику',
      'Имеет травматический опыт приключений',
      'Временно был гением в одной из серий'
    ]
  },
  {
    id: 3,
    name: 'Summer Smith',
    dimension: 'C-137',
    species: 'Human',
    status: 'Alive', 
    image: '/img/b635edc9-b2b8-49a5-a0f0-bf0d8c8ce125.jpg',
    gallery: [
      '/img/b635edc9-b2b8-49a5-a0f0-bf0d8c8ce125.jpg',
      '/img/958f48fb-9e5d-4411-84ea-35a2658b6576.jpg'
    ],
    description: 'Умная и саркастичная старшая сестра',
    fullDescription: 'Саммер Смит - 17-летняя старшая сестра Морти. Поначалу не участвовала в приключениях деда, но позже стала активным участником, проявив смекалку и решительность.',
    personality: ['Саркастичная', 'Умная', 'Решительная', 'Популярная'],
    occupation: 'Школьница',
    age: '17',
    firstAppearance: 'Pilot (Season 1)',
    color: 'morty-orange',
    quotes: [
      'Окей, это становится интересно...',
      'Я могу справиться сама!',
      'Серьёзно? Мы опять это делаем?',
      'Морти, тебе нужно взрослеть!'
    ],
    facts: [
      'Была случайностью (нежелательной беременностью)',
      'Спасла семью от кронербергов',
      'Работала в магазине проклятий',
      'Более жестокая чем Морти в приключениях'
    ]
  }
];

export default function Index() {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [speechBubble, setSpeechBubble] = useState<{text: string, characterId: number} | null>(null);
  const [portalAnimation, setPortalAnimation] = useState<number | null>(null);

  const playCharacterQuote = (character: typeof characters[0]) => {
    const randomQuote = character.quotes[Math.floor(Math.random() * character.quotes.length)];
    setSpeechBubble({ text: randomQuote, characterId: character.id });
    
    setTimeout(() => {
      setSpeechBubble(null);
    }, 3000);
  };

  const goToGarage = (characterId: number) => {
    setPortalAnimation(characterId);
    
    setTimeout(() => {
      navigate(`/garage/${characterId}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rick-blue via-cosmic-blue to-dimension-purple overflow-hidden relative">
      {/* Background Portal Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-portal-green rounded-full animate-portal-spin"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-toxic-green rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-bright-yellow rounded-full animate-portal-spin"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-12">
        <h1 className="text-6xl font-bold text-white mb-4 animate-glitch"
            style={{
              textShadow: '3px 3px 0px #47CE4D, -3px -3px 0px #00A8CC',
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '4px'
            }}>
          RICK AND MORTY
        </h1>
        <h2 className="text-3xl font-bold text-portal-green mb-2"
            style={{ 
              textShadow: '2px 2px 0px #000000',
              fontFamily: 'Arial, sans-serif' 
            }}>
          ПОРТАЛ
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto px-4">
          Выбери персонажа и отправляйся в безумные приключения по мультивселенной!
        </p>
      </header>

      {/* Navigation Pills */}
      <div className="flex justify-center mb-12 gap-4 px-4">
        <Button 
          variant="outline" 
          className="bg-portal-green/20 border-portal-green text-white hover:bg-portal-green/30 font-bold px-6"
        >
          <Icon name="Home" size={16} className="mr-2" />
          Главная
        </Button>
        <Button 
          variant="outline"
          className="bg-toxic-green/20 border-toxic-green text-white hover:bg-toxic-green/30 font-bold px-6"
        >
          <Icon name="Users" size={16} className="mr-2" />
          Персонажи  
        </Button>
        <Button 
          variant="outline"
          className="bg-bright-yellow/20 border-bright-yellow text-white hover:bg-bright-yellow/30 font-bold px-6"
        >
          <Icon name="Plus" size={16} className="mr-2" />
          Измерения
        </Button>
      </div>

      {/* Character Feed */}
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          🛸 Лента персонажей
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <Card 
              key={character.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-300 transform
                ${hoveredCard === character.id ? 'scale-105 rotate-1' : ''}
                ${selectedCharacter === character.id ? 'ring-4 ring-portal-green' : ''}
                bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20
                animate-slide-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(character.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                setSelectedCharacter(character.id);
                playCharacterQuote(character);
              }}
            >
              <CardContent className="p-6">
                {/* Character Image */}
                <div className="relative mb-4">
                  <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cosmic-blue
                    ${hoveredCard === character.id ? 'animate-float' : ''}`}>
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {selectedCharacter === character.id && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-portal-green rounded-full flex items-center justify-center animate-portal-spin">
                      <Icon name="Zap" size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Character Info */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    {character.name}
                  </h4>
                  <p className="text-portal-green font-semibold mb-2">
                    📍 {character.dimension}
                  </p>
                  <p className="text-white/80 text-sm mb-4">
                    {character.description}
                  </p>
                  
                  {/* Status Badge */}
                  <div className="flex justify-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-portal-green/20 border border-portal-green rounded-full text-portal-green text-xs font-bold">
                      {character.species}
                    </span>
                    <span className="px-3 py-1 bg-bright-yellow/20 border border-bright-yellow rounded-full text-bright-yellow text-xs font-bold">
                      {character.status}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-cosmic-blue/80 hover:bg-cosmic-blue text-white font-bold transform transition-all duration-200 hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToGarage(character.id);
                    }}
                  >
                    <Icon name="Rocket" size={16} className="mr-2" />
                    Войти в гараж
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Character Detail View */}
        {selectedCharacter && viewMode === 'detail' && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 overflow-y-auto">
            <div className="min-h-screen py-8">
              <div className="max-w-6xl mx-auto px-4">
                {(() => {
                  const character = characters.find(c => c.id === selectedCharacter);
                  if (!character) return null;
                  
                  return (
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/20 rounded-3xl overflow-hidden animate-slide-in">
                      {/* Header */}
                      <div className="relative p-8 bg-gradient-to-r from-cosmic-blue/20 to-dimension-purple/20">
                        <Button
                          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
                          onClick={() => {
                            setViewMode('grid');
                            setSelectedCharacter(null);
                          }}
                        >
                          <Icon name="X" size={20} />
                        </Button>
                        
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-portal-green animate-float">
                            <img
                              src={character.image}
                              alt={character.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="text-center md:text-left">
                            <h1 className="text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                              {character.name}
                            </h1>
                            <p className="text-2xl text-portal-green font-semibold mb-2">
                              📍 {character.dimension}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                              <span className="px-4 py-2 bg-portal-green/20 border border-portal-green rounded-full text-portal-green font-bold">
                                {character.species}
                              </span>
                              <span className="px-4 py-2 bg-bright-yellow/20 border border-bright-yellow rounded-full text-bright-yellow font-bold">
                                {character.status}
                              </span>
                              <span className="px-4 py-2 bg-morty-orange/20 border border-morty-orange rounded-full text-morty-orange font-bold">
                                {character.age} лет
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Left Column - Description & Facts */}
                          <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20">
                              <CardContent className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                  <Icon name="User" size={24} className="mr-2 text-portal-green" />
                                  Описание
                                </h3>
                                <p className="text-white/90 text-lg leading-relaxed">
                                  {character.fullDescription}
                                </p>
                              </CardContent>
                            </Card>

                            {/* Facts */}
                            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20">
                              <CardContent className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                  <Icon name="Zap" size={24} className="mr-2 text-bright-yellow" />
                                  Интересные факты
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {character.facts.map((fact, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                                      <div className="w-2 h-2 bg-portal-green rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-white/90">{fact}</span>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Right Column - Details & Gallery */}
                          <div className="space-y-8">
                            {/* Character Stats */}
                            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-white mb-4">Характеристики</h3>
                                <div className="space-y-4">
                                  <div>
                                    <span className="text-portal-green font-semibold">Профессия:</span>
                                    <span className="text-white/90 ml-2">{character.occupation}</span>
                                  </div>
                                  <div>
                                    <span className="text-portal-green font-semibold">Первое появление:</span>
                                    <span className="text-white/90 ml-2">{character.firstAppearance}</span>
                                  </div>
                                  <div>
                                    <span className="text-portal-green font-semibold">Личность:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                      {character.personality.map((trait, index) => (
                                        <span key={index} className="px-3 py-1 bg-dimension-purple/20 border border-dimension-purple rounded-full text-dimension-purple text-sm">
                                          {trait}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Photo Gallery */}
                            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20">
                              <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                  <Icon name="Images" size={20} className="mr-2 text-morty-orange" />
                                  Галерея
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                  {character.gallery.map((image, index) => (
                                    <div
                                      key={index}
                                      className="aspect-square rounded-lg overflow-hidden border-2 border-white/20 cursor-pointer transition-all hover:scale-105 hover:border-portal-green"
                                      onClick={() => setSelectedImage(image)}
                                    >
                                      <img
                                        src={image}
                                        alt={`${character.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-60 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Selected Character Panel */}
        {selectedCharacter && viewMode === 'grid' && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-slide-in">
            <Card className="bg-gradient-to-r from-portal-green/90 to-toxic-green/90 backdrop-blur-md border-2 border-white/30">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src={characters.find(c => c.id === selectedCharacter)?.image}
                    alt="Selected character"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white">
                  <p className="font-bold">
                    {characters.find(c => c.id === selectedCharacter)?.name}
                  </p>
                  <p className="text-sm opacity-90">Готов к приключениям!</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => setViewMode('detail')}
                  >
                    <Icon name="Eye" size={16} />
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => setSelectedCharacter(null)}
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Speech Bubble */}
        {speechBubble && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 animate-scale-in">
            <div className="relative bg-gradient-to-br from-white to-white/90 backdrop-blur-md border-4 border-portal-green rounded-3xl px-8 py-6 max-w-md mx-4 shadow-2xl">
              {/* Speech bubble tail */}
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

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8">
          <Button 
            size="lg"
            className="w-16 h-16 rounded-full bg-dimension-purple hover:bg-dimension-purple/80 text-white shadow-2xl animate-float"
          >
            <Icon name="Plus" size={24} />
          </Button>
        </div>
      </div>

      {/* Portal Animation Overlay */}
      {portalAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-portal-green/90">
          <div className="relative">
            <div className="w-64 h-64 border-8 border-portal-green rounded-full animate-spin-slow relative">
              <div className="absolute inset-4 border-4 border-toxic-green rounded-full animate-spin-reverse">
                <div className="absolute inset-4 border-2 border-white rounded-full animate-pulse">
                  <div className="absolute inset-2 bg-gradient-radial from-portal-green/50 to-transparent rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white animate-pulse">
                  <img
                    src={characters.find(c => c.id === portalAnimation)?.image}
                    alt="Portal traveler"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-3xl font-bold text-white animate-glitch mb-2">
                  ОТКРЫВАЮ ПОРТАЛ
                </div>
                <div className="text-lg text-white/80 animate-pulse">
                  {characters.find(c => c.id === portalAnimation)?.name} входит в гараж...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-12 mt-16">
        <p className="text-white/60 text-sm">
          🚀 Wubba Lubba Dub Dub! © 2024 Rick & Morty Portal
        </p>
      </footer>
    </div>
  );
}