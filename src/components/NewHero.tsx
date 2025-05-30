import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, Plus, Mic, ArrowUp } from 'lucide-react';
const NewHero = () => {
  const [prompt, setPrompt] = useState('');
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Prompt submitted:', prompt);
  };
  return <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=1080&fit=crop" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          O seu escritório de contabilidade está preparado para o futuro?
        </h1>

        {/* Glassmorphism Prompt Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-2xl py-[18px] px-[18px] rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Descreva os desafios do seu escritório contábil..." className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-xl px-4 py-3 text-lg backdrop-blur-sm focus:bg-white/25 focus:border-white/50 transition-all" />
              
              <div className="flex justify-between items-center">
                <Button type="button" variant="ghost" size="icon" className="w-9 h-9 rounded-full border border-white text-white transition-all bg-transparent">
                  <Plus size={20} />
                </Button>

                <div className="flex gap-2">
                  <Button type="button" variant="ghost" size="icon" className="w-9 h-9 rounded-full border border-white text-white transition-all bg-transparent">
                    <Mic size={20} />
                  </Button>
                  
                  <Button type="submit" variant="ghost" size="icon" className="w-9 h-9 rounded-full border border-white text-white transition-all bg-transparent">
                    <ArrowUp size={20} />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-12">
          Conte com as soluções da Multi BPO
        </h2>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Button onClick={scrollToNextSection} variant="ghost" size="icon" className="w-12 h-12 text-white text-base transition-all animate-bounce rounded-none bg-transparent">
          <ChevronDown size={24} />
        </Button>
      </div>
    </section>;
};
export default NewHero;