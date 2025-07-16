import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-sweets.jpg';
import ladduImage from '@/assets/laddu.jpg';
import gulabJamunImage from '@/assets/gulab-jamun.jpg';
import kajuKatliImage from '@/assets/kaju-katli.jpg';
import rasgullaImage from '@/assets/rasgulla.jpg';
import jalehiImage from '@/assets/jalebi.jpg';

const HomePage = () => {
  const categories = [
    {
      id: 'mithai',
      name: 'Traditional Mithai',
      description: 'Authentic sweets made with love',
      image: ladduImage,
      count: '25+ varieties'
    },
    {
      id: 'dry-fruits',
      name: 'Premium Dry Fruits',
      description: 'Fresh and premium quality',
      image: kajuKatliImage,
      count: '15+ varieties'
    },
    {
      id: 'gift-packs',
      name: 'Festival Gift Packs',
      description: 'Beautiful boxes for celebrations',
      image: gulabJamunImage,
      count: '10+ designs'
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Kesar Laddu',
      price: 450,
      image: ladduImage,
      rating: 4.8,
      badge: 'Best Seller'
    },
    {
      id: '2',
      name: 'Gulab Jamun',
      price: 300,
      image: gulabJamunImage,
      rating: 4.9,
      badge: 'Premium'
    },
    {
      id: '3',
      name: 'Kaju Katli',
      price: 650,
      image: kajuKatliImage,
      rating: 4.7,
      badge: 'Pure Silver'
    },
    {
      id: '4',
      name: 'Fresh Rasgulla',
      price: 250,
      image: rasgullaImage,
      rating: 4.6,
      badge: 'Fresh Daily'
    }
  ];

  const offers = [
    {
      title: 'Diwali Special',
      description: 'Up to 30% off on all gift packs',
      color: 'from-saffron to-golden'
    },
    {
      title: 'Rakhi Combo',
      description: 'Buy 2 Get 1 Free on selected items',
      color: 'from-rose to-pista'
    },
    {
      title: 'Free Delivery',
      description: 'On orders above ₹500',
      color: 'from-golden to-saffron'
    }
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: '100% Pure',
      description: 'No artificial preservatives'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Made fresh every morning'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same day delivery available'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bringing Tradition to Your Doorstep
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Authentic Indian sweets made with love, delivered fresh to your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="festive" size="lg" asChild>
              <Link to="/products">
                Order Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              View Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gradient-to-r from-saffron/5 to-golden/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-saffron to-golden rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <badge.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
                <p className="text-muted-foreground">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Discover our wide range of traditional sweets and treats</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-[var(--shadow-sweet)] transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-saffron text-white">
                    {category.count}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="ghost" className="w-full group-hover:bg-saffron/10 group-hover:text-saffron">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Our most loved sweets, handpicked for you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-[var(--shadow-sweet)] transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3 bg-rose text-white">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-golden text-golden" />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-saffron">₹{product.price}</span>
                    <Button variant="cart" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Festive Offers Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Festive Offers</h2>
            <p className="text-muted-foreground text-lg">Limited time offers for your celebrations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className={`bg-gradient-to-r ${offer.color} text-white overflow-hidden group hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                  <p className="text-white/90 mb-6">{offer.description}</p>
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-saffron">
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;