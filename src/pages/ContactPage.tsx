import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@mithaimaya.com', 'orders@mithaimaya.com'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Sweet Street, Andheri West', 'Mumbai, Maharashtra 400058'],
      description: 'Visit our store for fresh sweets'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Sunday: 9:00 AM - 9:00 PM', 'No holidays during festivals'],
      description: 'We are open all days of the week'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our sweets, 
            need help with an order, or want to share feedback, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-saffron" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-saffron to-golden rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                      <p className="text-xs text-saffron mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2 text-green-800">Quick WhatsApp Support</h3>
                <p className="text-sm text-green-600 mb-4">
                  Get instant help on WhatsApp for orders, delivery status, and queries
                </p>
                <Button 
                  variant="outline" 
                  className="bg-green-500 text-white border-green-500 hover:bg-green-600"
                  onClick={() => {
                    const phoneNumber = "919876543210";
                    const message = encodeURIComponent("Hi! I need help with my order from Mithai Maya.");
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-saffron" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button type="submit" variant="festive" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-saffron" />
              Find Our Store
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <h3 className="font-semibold mb-3">Visit Us Today</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>123 Sweet Street, Andheri West</p>
                  <p>Mumbai, Maharashtra 400058</p>
                  <p>Near Metro Station & Mall</p>
                </div>
                
                <div className="mt-4 p-4 bg-saffron/10 rounded-lg">
                  <h4 className="font-medium text-saffron mb-2">Store Highlights</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Fresh sweets made daily</li>
                    <li>• Free tasting available</li>
                    <li>• Ample parking space</li>
                    <li>• Gift wrapping services</li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-muted rounded-lg h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Google Maps integration would go here</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What are your delivery hours?</h3>
                <p className="text-muted-foreground text-sm">
                  We deliver from 10 AM to 8 PM daily. Same-day delivery is available for orders placed before 6 PM.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you take bulk orders?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We specialize in bulk orders for festivals, weddings, and corporate events. Contact us for special pricing.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Are your sweets preservative-free?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! All our sweets are made with natural ingredients and no artificial preservatives.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I customize gift boxes?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer custom gift boxes with your choice of sweets and personalized packaging for special occasions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;