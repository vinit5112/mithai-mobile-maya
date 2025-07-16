import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { 
  Plus, 
  Edit, 
  Trash2,
  Percent,
  IndianRupee,
  Calendar,
  Users
} from "lucide-react";

const AdminCoupons = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const coupons = [
    {
      id: 1,
      code: "DIWALI20",
      description: "Diwali Special - 20% off",
      type: "percentage",
      value: 20,
      minOrder: 500,
      maxDiscount: 200,
      usageLimit: 100,
      usedCount: 45,
      isActive: true,
      validFrom: "2024-01-10",
      validTill: "2024-01-31"
    },
    {
      id: 2,
      code: "FLAT100",
      description: "Flat ₹100 off on orders above ₹800",
      type: "fixed",
      value: 100,
      minOrder: 800,
      maxDiscount: 100,
      usageLimit: 50,
      usedCount: 23,
      isActive: true,
      validFrom: "2024-01-01",
      validTill: "2024-01-15"
    },
    {
      id: 3,
      code: "NEWUSER",
      description: "New User - 15% off first order",
      type: "percentage", 
      value: 15,
      minOrder: 300,
      maxDiscount: 150,
      usageLimit: 200,
      usedCount: 87,
      isActive: true,
      validFrom: "2024-01-01",
      validTill: "2024-12-31"
    },
    {
      id: 4,
      code: "RAKHI25",
      description: "Rakhi Special - 25% off",
      type: "percentage",
      value: 25,
      minOrder: 600,
      maxDiscount: 300,
      usageLimit: 75,
      usedCount: 75,
      isActive: false,
      validFrom: "2023-08-01",
      validTill: "2023-08-31"
    }
  ];

  const isDateValid = (validFrom: string, validTill: string) => {
    const now = new Date();
    const from = new Date(validFrom);
    const till = new Date(validTill);
    return now >= from && now <= till;
  };

  const getStatusBadge = (coupon: any) => {
    if (!coupon.isActive) return <Badge variant="secondary">Inactive</Badge>;
    if (coupon.usedCount >= coupon.usageLimit) return <Badge variant="destructive">Exhausted</Badge>;
    if (isDateValid(coupon.validFrom, coupon.validTill)) {
      return <Badge variant="default">Active</Badge>;
    }
    return <Badge variant="destructive">Expired</Badge>;
  };

  const getUsageProgress = (used: number, limit: number) => {
    const percentage = (used / limit) * 100;
    return {
      percentage: Math.min(percentage, 100),
      color: percentage >= 100 ? "bg-red-500" : percentage >= 80 ? "bg-yellow-500" : "bg-green-500"
    };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Coupon Management</h1>
          <p className="text-muted-foreground">Create and manage discount coupons</p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Coupon
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Coupon</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="coupon-code">Coupon Code</Label>
                <Input id="coupon-code" placeholder="e.g., DIWALI20" className="uppercase" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Brief description of the offer" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="discount-type">Discount Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select discount type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage (%)</SelectItem>
                    <SelectItem value="fixed">Fixed Amount (₹)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="discount-value">Discount Value</Label>
                  <Input id="discount-value" type="number" placeholder="0" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-discount">Max Discount (₹)</Label>
                  <Input id="max-discount" type="number" placeholder="0" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="min-order">Min Order (₹)</Label>
                  <Input id="min-order" type="number" placeholder="0" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="usage-limit">Usage Limit</Label>
                  <Input id="usage-limit" type="number" placeholder="0" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="valid-from">Valid From</Label>
                  <Input id="valid-from" type="date" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="valid-till">Valid Till</Label>
                  <Input id="valid-till" type="date" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="coupon-active" defaultChecked />
                <Label htmlFor="coupon-active">Activate Coupon</Label>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setIsAddDialogOpen(false)}>
                  Create Coupon
                </Button>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coupons.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
            <Badge variant="default" className="text-xs">Live</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {coupons.filter(c => c.isActive && isDateValid(c.validFrom, c.validTill)).length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Usage</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {coupons.reduce((total, coupon) => total + coupon.usedCount, 0)}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Est. Savings</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,450</div>
          </CardContent>
        </Card>
      </div>

      {/* Coupons Table */}
      <Card>
        <CardHeader>
          <CardTitle>Coupon List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Validity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.map((coupon) => {
                const usage = getUsageProgress(coupon.usedCount, coupon.usageLimit);
                return (
                  <TableRow key={coupon.id}>
                    <TableCell>
                      <div className="font-mono font-medium bg-muted px-2 py-1 rounded text-sm inline-block">
                        {coupon.code}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px]">{coupon.description}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {coupon.type === "percentage" ? (
                          <>
                            <Percent className="w-3 h-3" />
                            {coupon.value}%
                          </>
                        ) : (
                          <>
                            <IndianRupee className="w-3 h-3" />
                            {coupon.value}
                          </>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Min: ₹{coupon.minOrder}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{coupon.usedCount}</span>
                          <span>/{coupon.usageLimit}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${usage.color}`}
                            style={{ width: `${usage.percentage}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>From: {coupon.validFrom}</div>
                        <div>Till: {coupon.validTill}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(coupon)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCoupons;