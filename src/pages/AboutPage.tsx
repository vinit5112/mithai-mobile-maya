import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Award, Users, Clock, Shield, Leaf, Star, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-sweets.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every sweet is crafted with passion and care, following traditional family recipes'
    },
    {
      icon: Shield,
      title: '100% Pure',
      description: 'We use only the finest ingredients with no artificial preservatives or colors'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Committed to delivering the highest quality sweets that exceed expectations'
    },
    {
      icon: Leaf,
      title: 'Fresh Daily',
      description: 'All our sweets are prepared fresh every day to ensure the best taste and quality'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '50,000+',
      label: 'Happy Customers'
    },
    {
      icon: Clock,
      number: '25+',
      label: 'Years of Excellence'
    },
    {
      icon: Trophy,
      number: '100+',
      label: 'Awards Won'
    },
    {
      icon: Star,
      number: '4.8/5',
      label: 'Customer Rating'
    }
  ];

  const hygieneStandards = [
    'FSSAI certified kitchen and production facility',
    'Daily sanitization of all equipment and surfaces',
    'Temperature-controlled storage for all ingredients',
    'Regular quality checks by certified food technologists',
    'Packaging in sterile, food-grade containers',
    'Trained staff following strict hygiene protocols'
  ];

  const timeline = [
    {
      year: '1999',
      title: 'The Beginning',
      description: 'Started as a small family business with a passion for traditional Indian sweets'
    },
    {
      year: '2005',
      title: 'First Store',
      description: 'Opened our first retail store in Mumbai, serving fresh sweets to the local community'
    },
    {
      year: '2012',
      title: 'Quality Recognition',
      description: 'Received FSSAI certification and multiple quality awards from food authorities'
    },
    {
      year: '2018',
      title: 'Digital Expansion',
      description: 'Launched online platform to serve customers across the city with home delivery'
    },
    {
      year: '2024',
      title: 'Modern Legacy',
      description: 'Celebrating 25 years of sweet tradition with over 50,000 satisfied customers'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sweet Story</h1>
          <p className="text-xl opacity-90">
            25 years of tradition, quality, and the sweetest memories
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Sweet Legacy of Mithai Maya</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1999 by Mr. Rajesh Sharma, Mithai Maya began as a humble dream to bring 
                  authentic Indian sweets to every household. What started as a small kitchen operation 
                  has grown into one of Mumbai's most trusted sweet shops.
                </p>
                <p>
                  Our journey has been guided by a simple philosophy: use the finest ingredients, 
                  follow traditional recipes, and never compromise on quality. Every sweet that leaves 
                  our kitchen carries with it the love and care of three generations of halwais 
                  (sweet makers).
                </p>
                <p>
                  Today, we proudly serve over 50,000 customers annually, but our commitment remains 
                  the same - to create moments of joy and sweetness in every family's celebration.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-saffron to-golden rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-saffron">25+</h3>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose to-pista rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-rose">50K+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pista to-golden rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-pista">100+</h3>
                <p className="text-sm text-muted-foreground">Awards Won</p>
              </Card>
              
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-golden to-saffron rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl text-golden">4.8/5</h3>
                <p className="text-sm text-muted-foreground">Customer Rating</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-[var(--shadow-sweet)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-saffron to-golden rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Hygiene Standards */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-saffron/10 to-golden/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Hygiene & Quality Standards</h2>
              <p className="text-muted-foreground text-lg">
                Your health and safety is our top priority
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hygieneStandards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">{standard}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Badge className="bg-green-100 text-green-800 text-sm px-4 py-2">
                FSSAI Certified • ISO 22000 Compliant • Halal Certified
              </Badge>
            </div>
          </div>
        </section>

        {/* Our Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Milestones that shaped our sweet legacy
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-saffron to-golden"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-[var(--shadow-sweet)] transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-saffron text-white mb-3">{item.year}</Badge>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-saffron to-golden rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Message */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-saffron/10 to-golden/10 border-none">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">A Message from Our Founder</h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    "When I started Mithai Maya 25 years ago, I had a simple dream - to share the joy 
                    of authentic Indian sweets with every family. Today, as I see the smiles on our 
                    customers' faces and the happiness our sweets bring to their celebrations, I know 
                    we're fulfilling that dream every single day."
                  </p>
                  <p>
                    "Our commitment to quality, tradition, and customer satisfaction will never change. 
                    Thank you for being part of our sweet journey."
                  </p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold text-saffron">- Rajesh Sharma</p>
                  <p className="text-sm text-muted-foreground">Founder & Master Halwai</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;