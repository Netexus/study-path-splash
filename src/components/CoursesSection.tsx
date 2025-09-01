import { Clock, Users, Star, BookOpen, Code, Palette, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import courseWeb from '@/assets/course-web.png';
import courseDesign from '@/assets/course-design.png';
import courseMath from '@/assets/course-math.png';
import courseLiterature from '@/assets/course-literature.png';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: 'Desarrollo Web Completo',
      description: 'Aprende HTML, CSS, JavaScript y React desde cero hasta nivel profesional.',
      image: courseWeb,
      icon: <Code className="h-6 w-6" />,
      duration: '12 semanas',
      students: '2,341',
      rating: 4.8,
      level: 'Principiante',
      levelColor: 'bg-success/10 text-success border-success/20',
      category: 'Programación',
    },
    {
      id: 2,
      title: 'Diseño UI/UX Moderno',
      description: 'Domina las herramientas y principios del diseño de interfaces y experiencia de usuario.',
      image: courseDesign,
      icon: <Palette className="h-6 w-6" />,
      duration: '8 semanas',
      students: '1,892',
      rating: 4.9,
      level: 'Intermedio',
      levelColor: 'bg-warning/10 text-warning border-warning/20',
      category: 'Diseño',
    },
    {
      id: 3,
      title: 'Matemáticas Avanzadas',
      description: 'Cálculo, álgebra lineal y estadística para ciencias e ingeniería.',
      image: courseMath,
      icon: <Calculator className="h-6 w-6" />,
      duration: '16 semanas',
      students: '987',
      rating: 4.7,
      level: 'Avanzado',
      levelColor: 'bg-destructive/10 text-destructive border-destructive/20',
      category: 'Matemáticas',
    },
    {
      id: 4,
      title: 'Literatura Universal',
      description: 'Explora las grandes obras de la literatura mundial y su impacto cultural.',
      image: courseLiterature,
      icon: <BookOpen className="h-6 w-6" />,
      duration: '10 semanas',
      students: '1,234',
      rating: 4.6,
      level: 'Principiante',
      levelColor: 'bg-success/10 text-success border-success/20',
      category: 'Humanidades',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Cursos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-secondary">
              Destacados
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de cursos diseñados por expertos para impulsar tu carrera profesional
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-b from-card to-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-background/90 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                </div>
                <Badge className={`absolute top-3 right-3 ${course.levelColor}`}>
                  {course.level}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Course Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-medium text-foreground">{course.rating}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {course.category}
                  </Badge>
                </div>

                {/* Hover Action */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full py-2 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300">
                    Ver Detalles
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg transition-all duration-300 font-medium">
            Ver Todos los Cursos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;