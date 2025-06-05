
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
      tag: "16 semanas",
      subtitle: "Tecnologia Contábil",
      title: "Automação Contábil com IA",
      linkText: "Ver Curso"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      tag: "12 semanas",
      subtitle: "Marketing Digital",
      title: "Marketing para Escritórios Contábeis",
      linkText: "Ver Curso"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      tag: "8 semanas",
      subtitle: "Gestão Empresarial",
      title: "Transformação Digital em Contabilidade",
      linkText: "Ver Curso"
    }
  ];

  return (
    <section className="bg-gray-50 flex items-center" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-left">
              Nossos Cursos
            </h2>
            
            <p className="text-lg text-gray-600 text-left max-w-2xl">
              Desenvolva suas habilidades com nossos cursos especializados em tecnologia e gestão contábil. Aprenda com especialistas e transforme sua carreira.
            </p>
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center">
            Veja todos os cursos
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              tag={course.tag}
              subtitle={course.subtitle}
              title={course.title}
              linkText={course.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
