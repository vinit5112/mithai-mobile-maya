import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react';

const CartPage = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);

  const subtotal = state.total;
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const total = subtotal + deliveryFee - discount;

  const handleApplyCoupon = () => {
    // Mock coupon validation
    const validCoupons = {
      'SWEET10': 10,
      'DIWALI20': 20,
      'FIRST50': 50
    };

    if (validCoupons[couponCode as keyof typeof validCoupons]) {
      setAppliedCoupon({
        code: couponCode,
        discount: validCoupons[couponCode as keyof typeof validCoupons]
      });
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any delicious sweets to your cart yet.
            </p>
            <Button variant="festive" size="lg" asChild>
              <Link to="/products">
                Start Shopping <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">Review your items and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Cart Items ({state.items.length})</h2>
                  <Button variant="ghost" onClick={clearCart} className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>

                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-saffron font-bold text-lg">₹{item.price}</p>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>

                        <div className="flex items-center border rounded-lg">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        <div className="text-sm font-medium">
                          Total: ₹{item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon Code */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-saffron" />
                  Apply Coupon
                </h3>
                
                {appliedCoupon ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-green-800">Coupon Applied!</div>
                        <div className="text-sm text-green-600">{appliedCoupon.code} - ₹{appliedCoupon.discount} off</div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={handleRemoveCoupon}>
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    />
                    <Button variant="outline" onClick={handleApplyCoupon}>
                      Apply
                    </Button>
                  </div>
                )}

                <div className="mt-4 text-sm text-muted-foreground">
                  Available coupons: SWEET10, DIWALI20, FIRST50
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                  
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.code})</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-saffron">₹{total}</span>
                  </div>
                </div>

                {deliveryFee > 0 && (
                  <div className="mt-4 p-3 bg-saffron/10 rounded-lg text-sm text-saffron">
                    Add ₹{500 - subtotal} more for free delivery!
                  </div>
                )}

                <Button variant="festive" size="lg" className="w-full mt-6" asChild>
                  <Link to="/checkout">
                    Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <div className="mt-4 text-sm text-muted-foreground text-center">
                  Secure checkout with multiple payment options
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Delivery Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-saffron rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Same Day Delivery</div>
                      <div className="text-muted-foreground">Order before 6 PM for same day delivery</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-saffron rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Fresh & Hygienic</div>
                      <div className="text-muted-foreground">All items are prepared fresh daily</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-saffron rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Quality Guaranteed</div>
                      <div className="text-muted-foreground">100% satisfaction or money back</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;