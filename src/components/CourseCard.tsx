
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  image: string;
  tag: string;
  subtitle: string;
  title: string;
  linkText: string;
}

const CourseCard = ({ image, tag, subtitle, title, linkText }: CourseCardProps) => {
  return (
    <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            {tag}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600 text-sm font-medium">
          {subtitle}
        </p>
        <h3 className="text-xl font-bold text-gray-900">
          {title}
        </h3>
        <div className="flex items-center text-blue-600 font-medium group">
          <span className="transition-transform duration-200">{linkText}</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
