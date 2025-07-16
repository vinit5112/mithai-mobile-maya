import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Plus } from 'lucide-react';
import ladduImage from '@/assets/laddu.jpg';
import gulabJamunImage from '@/assets/gulab-jamun.jpg';
import kajuKatliImage from '@/assets/kaju-katli.jpg';
import rasgullaImage from '@/assets/rasgulla.jpg';
import jalehiImage from '@/assets/jalebi.jpg';

const ProductsPage = () => {
  const { addItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const products = [
    {
      id: '1',
      name: 'Kesar Laddu',
      price: 450,
      image: ladduImage,
      category: 'mithai',
      rating: 4.8,
      reviews: 145,
      description: 'Premium saffron flavored laddu made with pure ghee',
      badge: 'Best Seller'
    },
    {
      id: '2',
      name: 'Gulab Jamun',
      price: 300,
      image: gulabJamunImage,
      category: 'mithai',
      rating: 4.9,
      reviews: 230,
      description: 'Soft and spongy gulab jamun in sugar syrup',
      badge: 'Premium'
    },
    {
      id: '3',
      name: 'Kaju Katli',
      price: 650,
      image: kajuKatliImage,
      category: 'mithai',
      rating: 4.7,
      reviews: 98,
      description: 'Silver coated cashew fudge, perfect for gifting',
      badge: 'Pure Silver'
    },
    {
      id: '4',
      name: 'Fresh Rasgulla',
      price: 250,
      image: rasgullaImage,
      category: 'mithai',
      rating: 4.6,
      reviews: 76,
      description: 'Fresh and spongy rasgulla made daily',
      badge: 'Fresh Daily'
    },
    {
      id: '5',
      name: 'Crispy Jalebi',
      price: 200,
      image: jalehiImage,
      category: 'mithai',
      rating: 4.5,
      reviews: 124,
      description: 'Crispy and syrupy jalebi, freshly made',
      badge: 'Hot & Fresh'
    },
    {
      id: '6',
      name: 'Mixed Mithai Box',
      price: 800,
      image: ladduImage,
      category: 'gift-packs',
      rating: 4.8,
      reviews: 89,
      description: 'Assorted sweets perfect for festivals',
      badge: 'Festival Special'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'mithai', label: 'Traditional Mithai' },
    { value: 'dry-fruits', label: 'Dry Fruits' },
    { value: 'gift-packs', label: 'Gift Packs' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-300', label: 'Under ₹300' },
    { value: '300-500', label: '₹300 - ₹500' },
    { value: '500-800', label: '₹500 - ₹800' },
    { value: '800+', label: 'Above ₹800' }
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
      if (max) {
        matchesPrice = product.price >= parseInt(min) && product.price <= parseInt(max);
      } else {
        matchesPrice = product.price >= parseInt(min);
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg">Discover our wide range of traditional sweets and delicacies</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-[var(--shadow-elegant)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-[var(--shadow-sweet)] transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <Badge className="absolute top-3 left-3 bg-rose text-white">
                  {product.badge}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-saffron transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-golden text-golden" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-saffron">₹{product.price}</span>
                  <Button 
                    variant="cart" 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No products found matching your criteria</p>
            <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setPriceRange('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;