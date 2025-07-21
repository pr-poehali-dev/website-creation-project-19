import { useState } from 'react';
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
    description: 'Безумный ученый с межгалактическими амбициями',
    color: 'cosmic-blue'
  },
  {
    id: 2,
    name: 'Morty Smith',
    dimension: 'C-137',
    species: 'Human', 
    status: 'Alive',
    image: '/img/7a1d6321-2681-4dd2-a922-966836190671.jpg',
    description: 'Нервный внук, втянутый в безумные приключения',
    color: 'bright-yellow'
  },
  {
    id: 3,
    name: 'Summer Smith',
    dimension: 'C-137',
    species: 'Human',
    status: 'Alive', 
    image: '/img/b635edc9-b2b8-49a5-a0f0-bf0d8c8ce125.jpg',
    description: 'Умная и саркастичная старшая сестра',
    color: 'morty-orange'
  }
];

export default function Index() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
              onClick={() => setSelectedCharacter(character.id)}
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
                      setSelectedCharacter(character.id);
                    }}
                  >
                    <Icon name="Rocket" size={16} className="mr-2" />
                    Выбрать персонажа
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Character Panel */}
        {selectedCharacter && (
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
                <Button 
                  size="sm" 
                  className="bg-white/20 hover:bg-white/30 text-white"
                  onClick={() => setSelectedCharacter(null)}
                >
                  <Icon name="X" size={16} />
                </Button>
              </CardContent>
            </Card>
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

      {/* Footer */}
      <footer className="text-center py-12 mt-16">
        <p className="text-white/60 text-sm">
          🚀 Wubba Lubba Dub Dub! © 2024 Rick & Morty Portal
        </p>
      </footer>
    </div>
  );
}