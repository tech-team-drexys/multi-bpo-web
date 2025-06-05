
import CourseCard from './CourseCard';

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-left">
          Nossos Cursos
        </h1>
        
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
