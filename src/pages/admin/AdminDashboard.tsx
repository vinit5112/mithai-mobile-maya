import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ShoppingCart, 
  IndianRupee, 
  Package, 
  Clock,
  Plus,
  Eye,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const summaryData = [
    {
      title: "Total Orders",
      value: "142",
      change: "+12%",
      icon: ShoppingCart,
      color: "text-blue-600"
    },
    {
      title: "Total Revenue",
      value: "₹45,280",
      change: "+8%",
      icon: IndianRupee,
      color: "text-green-600"
    },
    {
      title: "Active Products",
      value: "28",
      change: "+3%",
      icon: Package,
      color: "text-purple-600"
    },
    {
      title: "Pending Orders",
      value: "8",
      change: "-2%",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    {
      id: "ORD001",
      customer: "Priya Sharma",
      items: "Kaju Katli, Gulab Jamun",
      amount: "₹850",
      status: "Processing",
      date: "2024-01-15"
    },
    {
      id: "ORD002", 
      customer: "Rajesh Kumar",
      items: "Laddu Box",
      amount: "₹1,200",
      status: "Shipped",
      date: "2024-01-15"
    },
    {
      id: "ORD003",
      customer: "Anita Patel",
      items: "Rasgulla, Jalebi",
      amount: "₹650",
      status: "Delivered",
      date: "2024-01-14"
    },
    {
      id: "ORD004",
      customer: "Suresh Singh",
      items: "Gift Pack",
      amount: "₹2,100",
      status: "Pending",
      date: "2024-01-14"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      "Pending": "secondary",
      "Processing": "default", 
      "Shipped": "outline",
      "Delivered": "default"
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants] || "secondary"}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening at Mithai Maya.</p>
        </div>
        
        <div className="flex gap-2">
          <Button asChild>
            <Link to="/admin/products">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/admin/banners">
              Manage Banners
            </Link>
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item) => (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span className="text-green-600">{item.change} from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <Button variant="outline" size="sm" asChild>
            <Link to="/admin/orders">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{order.items}</TableCell>
                  <TableCell className="font-medium">{order.amount}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Sales Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-muted-foreground">Sales chart would go here</p>
              <p className="text-sm text-muted-foreground mt-2">Integration with chart library needed</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Customer Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">New Customers</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Returning Customers</span>
                <span className="font-medium">118</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Active</span>
                <span className="font-medium">142</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;