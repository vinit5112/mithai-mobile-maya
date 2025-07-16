import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Upload, 
  Edit, 
  Trash2,
  Calendar,
  Image as ImageIcon
} from "lucide-react";

const AdminBanners = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const banners = [
    {
      id: 1,
      title: "Diwali Special Offer",
      description: "Get 20% off on all sweets",
      image: "diwali-banner.jpg",
      isActive: true,
      startDate: "2024-01-10",
      endDate: "2024-01-31",
      clickCount: 127
    },
    {
      id: 2,
      title: "New Year Sweet Boxes",
      description: "Premium gift boxes available",
      image: "newyear-banner.jpg", 
      isActive: true,
      startDate: "2024-01-01",
      endDate: "2024-01-15",
      clickCount: 89
    },
    {
      id: 3,
      title: "Rakhi Special",
      description: "Traditional sweets for Rakhi",
      image: "rakhi-banner.jpg",
      isActive: false,
      startDate: "2023-08-01",
      endDate: "2023-08-31",
      clickCount: 245
    }
  ];

  const isDateValid = (startDate: string, endDate: string) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return now >= start && now <= end;
  };

  const getStatusBadge = (banner: any) => {
    if (!banner.isActive) return <Badge variant="secondary">Inactive</Badge>;
    if (isDateValid(banner.startDate, banner.endDate)) {
      return <Badge variant="default">Active</Badge>;
    }
    return <Badge variant="destructive">Expired</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Banner Management</h1>
          <p className="text-muted-foreground">Manage promotional banners for your homepage</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Banner
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Banner</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="banner-title">Banner Title</Label>
                <Input id="banner-title" placeholder="Enter banner title" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="banner-description">Description</Label>
                <Input id="banner-description" placeholder="Enter banner description" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="banner-image">Banner Image</Label>
                <div className="flex items-center gap-2">
                  <Input id="banner-image" type="file" accept="image/*" />
                  <Button variant="outline" size="icon">
                    <Upload className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommended size: 1200x400px
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="banner-active" defaultChecked />
                <Label htmlFor="banner-active">Activate Banner</Label>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setIsAddDialogOpen(false)}>
                  Create Banner
                </Button>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Banner Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Banners</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{banners.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Banners</CardTitle>
            <Badge variant="default" className="text-xs">Live</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {banners.filter(b => b.isActive && isDateValid(b.startDate, b.endDate)).length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {banners.reduce((total, banner) => total + banner.clickCount, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Banners Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {banners.map((banner) => (
          <Card key={banner.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{banner.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{banner.description}</p>
                </div>
                {getStatusBadge(banner)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Banner Preview */}
              <div className="w-full h-32 bg-gradient-to-r from-saffron via-rose to-pista rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm opacity-75">Banner Preview</p>
                </div>
              </div>
              
              {/* Banner Details */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Start Date:</span>
                  <span>{banner.startDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">End Date:</span>
                  <span>{banner.endDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Clicks:</span>
                  <span className="font-medium">{banner.clickCount}</span>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="flex items-center">
                  <Switch 
                    checked={banner.isActive}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminBanners;