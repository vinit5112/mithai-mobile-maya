import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { CreditCard, Smartphone, Banknote, MapPin, Clock, Shield } from 'lucide-react';

const CheckoutPage = () => {
  const { state, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  });

  const subtotal = state.total;
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    // Mock order placement
    alert('Order placed successfully! You will receive a confirmation SMS shortly.');
    clearCart();
    window.location.href = '/';
  };

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI Payment',
      description: 'Pay using GooglePay, PhonePe, Paytm',
      icon: Smartphone,
      popular: true
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when your order arrives',
      icon: Banknote,
      popular: false
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: CreditCard,
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order in just a few steps</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-saffron" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={deliveryAddress.name}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="10-digit mobile number"
                      value={deliveryAddress.phone}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Complete Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="House/Flat no., Building name, Area, Landmark"
                    value={deliveryAddress.address}
                    onChange={(e) => setDeliveryAddress(prev => ({ ...prev, address: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      placeholder="6-digit pincode"
                      value={deliveryAddress.pincode}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, pincode: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={deliveryAddress.city}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, city: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      placeholder="State"
                      value={deliveryAddress.state}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, state: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="bg-saffron/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-saffron" />
                    <span className="font-medium text-saffron">Delivery Information</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Same day delivery available for orders placed before 6 PM. 
                    Free delivery on orders above ₹500.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-saffron" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center">
                            <method.icon className="w-5 h-5 text-saffron" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Label htmlFor={method.id} className="font-medium cursor-pointer">
                                {method.name}
                              </Label>
                              {method.popular && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                  Recommended
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Secure Payment</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Qty: {item.quantity}</span>
                          <span className="font-medium">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-2">
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
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-saffron">₹{total}</span>
                    </div>
                  </div>

                  <Button 
                    variant="festive" 
                    size="lg" 
                    className="w-full"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>100% Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-saffron" />
                    <span>Same Day Delivery Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-saffron" />
                    <span>Free Delivery Above ₹500</span>
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

export default CheckoutPage;