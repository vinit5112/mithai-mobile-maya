import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Star, Plus, Minus, ShoppingCart, Heart, Share2, Truck, Shield, Clock } from 'lucide-react';
import ladduImage from '@/assets/laddu.jpg';
import gulabJamunImage from '@/assets/gulab-jamun.jpg';
import kajuKatliImage from '@/assets/kaju-katli.jpg';
import rasgullaImage from '@/assets/rasgulla.jpg';
import jalehiImage from '@/assets/jalebi.jpg';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, fetch based on id
  const product = {
    id: '1',
    name: 'Kesar Laddu',
    price: 450,
    image: ladduImage,
    images: [ladduImage, gulabJamunImage, kajuKatliImage],
    category: 'Traditional Mithai',
    rating: 4.8,
    reviews: 145,
    description: 'Our signature Kesar Laddu is a divine blend of premium cashews, almonds, and pure saffron. Each laddu is handcrafted by our expert halwais using traditional methods passed down through generations. The rich, melt-in-your-mouth texture combined with the aromatic essence of saffron makes this a perfect treat for any celebration.',
    ingredients: ['Premium Cashews', 'Almonds', 'Pure Saffron', 'Ghee', 'Sugar', 'Cardamom'],
    shelfLife: '7 days at room temperature, 15 days refrigerated',
    weight: '500g (approximately 20 pieces)',
    badge: 'Best Seller',
    nutritionalInfo: {
      calories: '180 per piece',
      protein: '4g',
      carbs: '22g',
      fat: '8g'
    }
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Gulab Jamun',
      price: 300,
      image: gulabJamunImage,
      rating: 4.9
    },
    {
      id: '3',
      name: 'Kaju Katli',
      price: 650,
      image: kajuKatliImage,
      rating: 4.7
    },
    {
      id: '4',
      name: 'Fresh Rasgulla',
      price: 250,
      image: rasgullaImage,
      rating: 4.6
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Amazing taste! Just like my grandmother used to make. The saffron flavor is perfect.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Raj Patel',
      rating: 5,
      comment: 'Ordered for Diwali celebration. Everyone loved these laddus. Fresh and delicious!',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 3,
      name: 'Meera Singh',
      rating: 4,
      comment: 'Very good quality. Packaging was excellent and delivery was on time.',
      date: '2024-01-08',
      verified: true
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout - in real app use router
    window.location.href = '/checkout';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-saffron">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-saffron">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-[var(--shadow-elegant)]"
              />
              <Badge className="absolute top-4 left-4 bg-rose text-white">
                {product.badge}
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.category}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-golden text-golden' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="text-3xl font-bold text-saffron">₹{product.price}</div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Shield className="w-6 h-6 text-saffron mx-auto mb-2" />
                <div className="text-sm font-medium">100% Pure</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Clock className="w-6 h-6 text-saffron mx-auto mb-2" />
                <div className="text-sm font-medium">Fresh Daily</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Truck className="w-6 h-6 text-saffron mx-auto mb-2" />
                <div className="text-sm font-medium">Fast Delivery</div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                variant="cart" 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="festive" 
                size="lg" 
                className="flex-1"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Product Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight:</span>
                  <span>{product.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shelf Life:</span>
                  <span>{product.shelfLife}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Calories:</span>
                  <span>{product.nutritionalInfo.calories}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <h4 className="font-medium mb-3">Ingredients:</h4>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <Badge key={ingredient} variant="secondary" className="bg-saffron/10 text-saffron">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Delivery & Returns</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-saffron mt-0.5" />
                  <div>
                    <div className="font-medium">Fast Delivery</div>
                    <div className="text-sm text-muted-foreground">Same day delivery available within city limits</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-saffron mt-0.5" />
                  <div>
                    <div className="font-medium">Quality Guarantee</div>
                    <div className="text-sm text-muted-foreground">Made fresh daily with premium ingredients</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-saffron mt-0.5" />
                  <div>
                    <div className="font-medium">Return Policy</div>
                    <div className="text-sm text-muted-foreground">Contact us within 24 hours for any quality issues</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Reviews */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-6">Customer Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-saffron to-golden rounded-full flex items-center justify-center text-white font-semibold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'fill-golden text-golden' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        <div>
          <h3 className="font-semibold text-2xl mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-[var(--shadow-sweet)] transition-all duration-300">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <CardContent className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="font-semibold mb-2 group-hover:text-saffron transition-colors">{product.name}</h4>
                  </Link>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-golden text-golden" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <span className="font-bold text-saffron">₹{product.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;