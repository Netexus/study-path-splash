import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: 'Sobre Nosotros', href: '#about' },
      { label: 'Cursos', href: '#courses' },
      { label: 'Instructores', href: '#' },
      { label: 'Testimonios', href: '#' },
    ],
    support: [
      { label: 'Centro de Ayuda', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contacto', href: '#contact' },
      { label: 'Términos de Uso', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Recursos Gratuitos', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'Comunidad', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary-light" />
              <span className="text-xl font-heading font-bold">EduPath</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Transformando vidas a través de la educación de calidad. 
              Únete a miles de estudiantes que ya están construyendo su futuro.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-background/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Plataforma</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                Suscríbete a nuestro Newsletter
              </h3>
              <p className="text-background/70">
                Recibe las últimas novedades y recursos educativos directamente en tu correo
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded-lg focus:outline-none focus:border-primary-light transition-colors"
              />
              <button className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300">
                Suscribir
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © {currentYear} EduPath. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-primary-light transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-background/70 hover:text-primary-light transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-background/70 hover:text-primary-light transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;