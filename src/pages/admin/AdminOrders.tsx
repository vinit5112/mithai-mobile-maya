import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Eye, 
  Filter,
  Package,
  Truck,
  CheckCircle
} from "lucide-react";

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const orders = [
    {
      id: "ORD001",
      customer: {
        name: "Priya Sharma",
        email: "priya@example.com",
        phone: "+91 98765 43210"
      },
      items: [
        { name: "Kaju Katli", quantity: 2, price: 450 },
        { name: "Gulab Jamun", quantity: 1, price: 280 }
      ],
      total: 1180,
      status: "Processing",
      paymentStatus: "Paid",
      paymentMethod: "UPI",
      date: "2024-01-15",
      address: "123 MG Road, Mumbai, 400001"
    },
    {
      id: "ORD002",
      customer: {
        name: "Rajesh Kumar", 
        email: "rajesh@example.com",
        phone: "+91 87654 32109"
      },
      items: [
        { name: "Laddu Box", quantity: 1, price: 1200 }
      ],
      total: 1200,
      status: "Shipped",
      paymentStatus: "Paid",
      paymentMethod: "Card",
      date: "2024-01-15",
      address: "456 Park Street, Delhi, 110001"
    },
    {
      id: "ORD003",
      customer: {
        name: "Anita Patel",
        email: "anita@example.com", 
        phone: "+91 76543 21098"
      },
      items: [
        { name: "Rasgulla", quantity: 2, price: 320 },
        { name: "Jalebi", quantity: 1, price: 250 }
      ],
      total: 890,
      status: "Delivered",
      paymentStatus: "Paid",
      paymentMethod: "COD",
      date: "2024-01-14",
      address: "789 Gandhi Road, Pune, 411001"
    },
    {
      id: "ORD004",
      customer: {
        name: "Suresh Singh",
        email: "suresh@example.com",
        phone: "+91 65432 10987"
      },
      items: [
        { name: "Gift Pack", quantity: 1, price: 2100 }
      ],
      total: 2100,
      status: "Pending",
      paymentStatus: "Pending",
      paymentMethod: "UPI",
      date: "2024-01-14",
      address: "321 Station Road, Bangalore, 560001"
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      "Pending": { variant: "secondary" as const, color: "bg-yellow-100 text-yellow-800" },
      "Processing": { variant: "default" as const, color: "bg-blue-100 text-blue-800" },
      "Shipped": { variant: "outline" as const, color: "bg-purple-100 text-purple-800" },
      "Delivered": { variant: "default" as const, color: "bg-green-100 text-green-800" }
    };
    
    return <Badge variant={variants[status as keyof typeof variants]?.variant || "secondary"}>{status}</Badge>;
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // In a real app, this would make an API call
    console.log(`Updating order ${orderId} to ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground">Manage customer orders and deliveries</p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by order ID or customer name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-[200px]">
                      {order.items.map((item, index) => (
                        <div key={index} className="text-sm">
                          {item.quantity}x {item.name}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">₹{order.total}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <div>
                      <Badge variant={order.paymentStatus === "Paid" ? "default" : "secondary"}>
                        {order.paymentStatus}
                      </Badge>
                      <div className="text-xs text-muted-foreground mt-1">{order.paymentMethod}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => setSelectedOrder(order)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Order Details - {order.id}</DialogTitle>
                          </DialogHeader>
                          {selectedOrder && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h3 className="font-medium mb-2">Customer Information</h3>
                                  <div className="space-y-1 text-sm">
                                    <div>{selectedOrder.customer.name}</div>
                                    <div>{selectedOrder.customer.email}</div>
                                    <div>{selectedOrder.customer.phone}</div>
                                  </div>
                                </div>
                                
                                <div>
                                  <h3 className="font-medium mb-2">Delivery Address</h3>
                                  <div className="text-sm">{selectedOrder.address}</div>
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="font-medium mb-2">Order Items</h3>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>Item</TableHead>
                                      <TableHead>Quantity</TableHead>
                                      <TableHead>Price</TableHead>
                                      <TableHead>Total</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    {selectedOrder.items.map((item: any, index: number) => (
                                      <TableRow key={index}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>₹{item.price}</TableCell>
                                        <TableCell>₹{item.quantity * item.price}</TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                                <div className="text-right font-medium mt-2">
                                  Total: ₹{selectedOrder.total}
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="font-medium mb-2">Update Status</h3>
                                <div className="flex gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => updateOrderStatus(selectedOrder.id, "Processing")}
                                  >
                                    <Package className="w-4 h-4 mr-2" />
                                    Processing
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => updateOrderStatus(selectedOrder.id, "Shipped")}
                                  >
                                    <Truck className="w-4 h-4 mr-2" />
                                    Shipped
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => updateOrderStatus(selectedOrder.id, "Delivered")}
                                  >
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Delivered
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrders;