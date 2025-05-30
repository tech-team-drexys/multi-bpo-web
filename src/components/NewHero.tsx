import { useState } from 'react';
import { Button } from '@/components/ui/button';
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
          <div className="backdrop-blur-md bg-black/10 border border-white/20 p-6 shadow-2xl py-[18px] px-[18px] rounded-3xl hover:bg-white/15 transition-all duration-300 group">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Descreva os desafios do seu escritório contábil..." className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/70 text-lg resize-none max-h-[144px] min-h-[60px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/50" rows={1} style={{
                lineHeight: '1.5',
                height: 'auto'
              }} onInput={e => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 144) + 'px';
              }} />
              </div>
              
              <div className="flex justify-between items-center">
                <Button type="button" variant="ghost" size="icon" className="w-9 h-9 rounded-full border border-white text-white transition-all bg-transparent hover:bg-white/20">
                  <Plus size={20} />
                </Button>

                <div className="flex gap-2">
                  <Button type="button" variant="ghost" size="icon" className="w-9 h-9 rounded-full border border-white text-white transition-all bg-transparent hover:bg-white/20">
                    <Mic size={20} />
                  </Button>
                  
                  <Button type="submit" variant="ghost" size="icon" className="w-9 h-9 rounded-full border border-white text-white transition-all bg-transparent hover:bg-white/20">
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
        <Button onClick={scrollToNextSection} variant="ghost" size="icon" className="w-12 h-12 text-white transition-all animate-bounce-slow rounded-none bg-transparent hover:bg-white/10">
          <ChevronDown size={32} />
        </Button>
      </div>
    </section>;
};
export default NewHero;