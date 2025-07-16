import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Store, 
  Clock, 
  MapPin, 
  CreditCard, 
  Phone, 
  Mail,
  Instagram,
  Save,
  Plus,
  Trash2
} from "lucide-react";

const AdminSettings = () => {
  const [deliveryPincodes, setDeliveryPincodes] = useState([
    "400001", "400002", "400003", "400004", "400005"
  ]);
  const [newPincode, setNewPincode] = useState("");

  const addPincode = () => {
    if (newPincode && !deliveryPincodes.includes(newPincode)) {
      setDeliveryPincodes([...deliveryPincodes, newPincode]);
      setNewPincode("");
    }
  };

  const removePincode = (pincode: string) => {
    setDeliveryPincodes(deliveryPincodes.filter(p => p !== pincode));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your shop settings and preferences</p>
      </div>

      {/* Shop Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Store className="h-5 w-5" />
            Shop Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="shop-name">Shop Name</Label>
              <Input id="shop-name" defaultValue="Mithai Maya" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input id="tagline" defaultValue="Bringing Tradition to Your Doorstep" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              defaultValue="Premium traditional Indian sweets made with authentic recipes and finest ingredients. Experience the taste of tradition with our handcrafted mithai collection."
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Shop Address</Label>
            <Textarea 
              id="address" 
              defaultValue="123 Sweet Street, Traditional Market, Mumbai, Maharashtra - 400001"
              rows={2}
            />
          </div>
          
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Shop Info
          </Button>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+91 98765 43210" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp Number</Label>
              <Input id="whatsapp" defaultValue="+91 98765 43210" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="orders@mithaimaya.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram Handle</Label>
              <Input id="instagram" defaultValue="@mithaimaya_official" />
            </div>
          </div>
          
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Contact Info
          </Button>
        </CardContent>
      </Card>

      {/* Opening Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Opening Hours
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {[
              { day: "Monday", open: "09:00", close: "21:00", isOpen: true },
              { day: "Tuesday", open: "09:00", close: "21:00", isOpen: true },
              { day: "Wednesday", open: "09:00", close: "21:00", isOpen: true },
              { day: "Thursday", open: "09:00", close: "21:00", isOpen: true },
              { day: "Friday", open: "09:00", close: "21:00", isOpen: true },
              { day: "Saturday", open: "09:00", close: "22:00", isOpen: true },
              { day: "Sunday", open: "10:00", close: "20:00", isOpen: true }
            ].map((schedule) => (
              <div key={schedule.day} className="flex items-center gap-4">
                <div className="w-20 font-medium">{schedule.day}</div>
                <div className="flex items-center gap-2">
                  <Input type="time" defaultValue={schedule.open} className="w-32" />
                  <span>to</span>
                  <Input type="time" defaultValue={schedule.close} className="w-32" />
                </div>
                <Switch defaultChecked={schedule.isOpen} />
                <span className="text-sm text-muted-foreground">
                  {schedule.isOpen ? "Open" : "Closed"}
                </span>
              </div>
            ))}
          </div>
          
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Hours
          </Button>
        </CardContent>
      </Card>

      {/* Delivery Areas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Delivery Areas (Pincodes)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter pincode"
              value={newPincode}
              onChange={(e) => setNewPincode(e.target.value)}
              maxLength={6}
            />
            <Button onClick={addPincode}>
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {deliveryPincodes.map((pincode) => (
              <Badge key={pincode} variant="secondary" className="flex items-center gap-1">
                {pincode}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => removePincode(pincode)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Delivery Areas
          </Button>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Cash on Delivery (COD)</div>
                <div className="text-sm text-muted-foreground">Accept cash payments on delivery</div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">UPI Payments</div>
                <div className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm</div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Card Payments</div>
                <div className="text-sm text-muted-foreground">Credit/Debit cards via payment gateway</div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Net Banking</div>
                <div className="text-sm text-muted-foreground">Direct bank transfers</div>
              </div>
              <Switch />
            </div>
          </div>
          
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Payment Settings
          </Button>
        </CardContent>
      </Card>

      {/* Delivery Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Delivery Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="delivery-charge">Delivery Charge (₹)</Label>
              <Input id="delivery-charge" type="number" defaultValue="50" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="free-delivery">Free Delivery Above (₹)</Label>
              <Input id="free-delivery" type="number" defaultValue="500" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="delivery-time">Standard Delivery Time</Label>
              <Input id="delivery-time" defaultValue="2-3 hours" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="min-order">Minimum Order Amount (₹)</Label>
              <Input id="min-order" type="number" defaultValue="200" />
            </div>
          </div>
          
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Delivery Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;