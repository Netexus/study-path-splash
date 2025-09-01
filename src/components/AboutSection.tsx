import { Award, Target, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excelencia Académica',
      description: 'Contenido curado por expertos y actualizado constantemente.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Aprendizaje Personalizado',
      description: 'Rutas de aprendizaje adaptadas a tus objetivos y ritmo.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Comunidad Global',
      description: 'Conecta con estudiantes y profesionales de todo el mundo.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Metodología Innovadora',
      description: 'Aprende haciendo con proyectos prácticos y casos reales.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Sobre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Nosotros
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              En EduPath, creemos que la educación de calidad debe ser accesible para todos. 
              Nuestra plataforma combina tecnología de vanguardia con pedagogía probada para 
              crear experiencias de aprendizaje transformadoras.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Desde 2020, hemos ayudado a más de 10,000 estudiantes a alcanzar sus metas 
              profesionales y personales a través de cursos interactivos, mentorías 
              personalizadas y una comunidad de apoyo incomparable.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Nuestra Misión
                </h3>
                <p className="text-muted-foreground">
                  Democratizar el acceso a educación de alta calidad, empoderando a cada 
                  estudiante para alcanzar su máximo potencial.
                </p>
              </div>
              
              <div className="p-6 bg-secondary/5 border-l-4 border-secondary rounded-lg">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  Nuestra Visión
                </h3>
                <p className="text-muted-foreground">
                  Ser la plataforma educativa líder que transforma vidas a través del 
                  aprendizaje continuo e innovador.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card hover:bg-card-hover border border-border/50 hover:border-primary/50 rounded-xl transition-all duration-300 animate-fade-in hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 p-8 bg-gradient-primary rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Tasa de Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Instructores Expertos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Soporte Disponible</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Países Alcanzados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;