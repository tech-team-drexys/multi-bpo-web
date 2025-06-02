
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Mic, ArrowUp } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import SuggestionButtons from './SuggestionButtons';

const NewHero = () => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Prompt submitted:', prompt);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  const placeholderSuggestions = [
    "O que pode me fazer cair na malha fina?",
    "O que eu preciso para abrir minha empresa?",
    "Qual a diferença de um regime tributário para o outro?",
    "Sou MEI, posso contratar funcionário?",
    "Tem como pagar menos impostos legalmente?"
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Container - Truly Centralized */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          {/* Heading + typewriter */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white leading-tight md:text-4xl">
              O seu escritório de contabilidade está preparado para{' '}
              <TypewriterEffect 
                words={['o futuro?', 'a digitalização?', 'a inovação?', 'a automação?']}
                className="text-green-400"
                typingSpeed={85}
                deletingSpeed={65}
                pauseDuration={3500}
                showCursor={true}
              />
            </h1>

            {/* Glassmorphism Prompt Box */}
            <div className="max-w-5xl mx-auto">
              <div className="backdrop-blur-md border border-white/20 p-6 shadow-2xl px-[24px] rounded-3xl transition-all duration-300 group bg-black/40 hover:bg-black/60 py-[20px]">
                <form onSubmit={handleSubmit} className="space-y-1">
                  <div className="relative">
                    <textarea 
                      value={prompt}
                      onChange={e => setPrompt(e.target.value)}
                      placeholder=""
                      className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 text-lg resize-none max-h-[150px] min-h-[80px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/50"
                      rows={2}
                      style={{
                        lineHeight: '1.5',
                        height: 'auto'
                      }}
                      onInput={e => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = Math.min(target.scrollHeight, 150) + 'px';
                      }}
                    />
                    {!prompt && (
                      <div className="absolute top-0 left-0 text-white/60 text-lg pointer-events-none">
                        <TypewriterEffect 
                          words={placeholderSuggestions}
                          typingSpeed={38}
                          deletingSpeed={30}
                          pauseDuration={4200}
                          showCursor={false}
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      className="w-10 h-10 rounded-full text-white transition-all bg-transparent hover:bg-white/20 hover:text-white text-base"
                    >
                      <Plus size={20} />
                    </Button>

                    <div className="flex gap-2">
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="icon" 
                        className="w-10 h-10 rounded-full text-white transition-all bg-transparent hover:bg-white/20 hover:text-white"
                      >
                        <Mic size={20} />
                      </Button>
                      
                      <Button 
                        type="submit" 
                        variant="ghost" 
                        size="icon" 
                        className="w-10 h-10 rounded-full text-white transition-all bg-transparent hover:bg-white/20 hover:text-white"
                      >
                        <ArrowUp size={20} />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Suggestion Buttons */}
            <div>
              <SuggestionButtons onSuggestionClick={handleSuggestionClick} />
            </div>
            
            {/* Heading 2 */}
            <h2 className="text-xl md:text-2xl font-semibold text-white/90">
              Conte com as soluções da MULTI BPO
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
