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
  UserX, 
  UserCheck,
  Filter,
  Users,
  ShoppingCart,
  IndianRupee,
  Calendar
} from "lucide-react";

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const users = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 98765 43210",
      joinDate: "2024-01-10",
      status: "Active",
      totalOrders: 12,
      totalSpent: 8450,
      lastOrder: "2024-01-15",
      address: "123 MG Road, Mumbai, 400001"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      email: "rajesh@example.com", 
      phone: "+91 87654 32109",
      joinDate: "2024-01-05",
      status: "Active",
      totalOrders: 8,
      totalSpent: 5200,
      lastOrder: "2024-01-14",
      address: "456 Park Street, Delhi, 110001"
    },
    {
      id: 3,
      name: "Anita Patel",
      email: "anita@example.com",
      phone: "+91 76543 21098", 
      joinDate: "2023-12-20",
      status: "Active",
      totalOrders: 15,
      totalSpent: 12300,
      lastOrder: "2024-01-13",
      address: "789 Gandhi Road, Pune, 411001"
    },
    {
      id: 4,
      name: "Suresh Singh",
      email: "suresh@example.com",
      phone: "+91 65432 10987",
      joinDate: "2023-11-15",
      status: "Blocked",
      totalOrders: 3,
      totalSpent: 890,
      lastOrder: "2023-12-01",
      address: "321 Station Road, Bangalore, 560001"
    },
    {
      id: 5,
      name: "Kavya Nair",
      email: "kavya@example.com",
      phone: "+91 54321 09876",
      joinDate: "2024-01-12",
      status: "Active",
      totalOrders: 2,
      totalSpent: 750,
      lastOrder: "2024-01-12",
      address: "654 Beach Road, Chennai, 600001"
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    return status === "Active" 
      ? <Badge variant="default">Active</Badge>
      : <Badge variant="destructive">Blocked</Badge>;
  };

  const toggleUserStatus = (userId: number, currentStatus: string) => {
    const newStatus = currentStatus === "Active" ? "Blocked" : "Active";
    console.log(`Changing user ${userId} status to ${newStatus}`);
    // In a real app, this would make an API call
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === "Active").length;
  const totalRevenue = users.reduce((sum, user) => sum + user.totalSpent, 0);
  const totalOrders = users.reduce((sum, user) => sum + user.totalOrders, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage customer accounts and activity</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeUsers}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalOrders}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or phone..."
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell className="text-center">{user.totalOrders}</TableCell>
                  <TableCell className="font-medium">₹{user.totalSpent.toLocaleString()}</TableCell>
                  <TableCell>{user.lastOrder}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => setSelectedUser(user)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>User Details - {user.name}</DialogTitle>
                          </DialogHeader>
                          {selectedUser && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h3 className="font-medium mb-3">Personal Information</h3>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Name:</strong> {selectedUser.name}</div>
                                    <div><strong>Email:</strong> {selectedUser.email}</div>
                                    <div><strong>Phone:</strong> {selectedUser.phone}</div>
                                    <div><strong>Join Date:</strong> {selectedUser.joinDate}</div>
                                    <div><strong>Status:</strong> {getStatusBadge(selectedUser.status)}</div>
                                  </div>
                                </div>
                                
                                <div>
                                  <h3 className="font-medium mb-3">Order Statistics</h3>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Total Orders:</strong> {selectedUser.totalOrders}</div>
                                    <div><strong>Total Spent:</strong> ₹{selectedUser.totalSpent.toLocaleString()}</div>
                                    <div><strong>Last Order:</strong> {selectedUser.lastOrder}</div>
                                    <div><strong>Avg Order Value:</strong> ₹{Math.round(selectedUser.totalSpent / selectedUser.totalOrders)}</div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="font-medium mb-3">Address</h3>
                                <p className="text-sm">{selectedUser.address}</p>
                              </div>
                              
                              <div className="flex gap-2">
                                <Button 
                                  variant={selectedUser.status === "Active" ? "destructive" : "default"}
                                  onClick={() => toggleUserStatus(selectedUser.id, selectedUser.status)}
                                >
                                  {selectedUser.status === "Active" ? (
                                    <>
                                      <UserX className="w-4 h-4 mr-2" />
                                      Block User
                                    </>
                                  ) : (
                                    <>
                                      <UserCheck className="w-4 h-4 mr-2" />
                                      Activate User
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => toggleUserStatus(user.id, user.status)}
                      >
                        {user.status === "Active" ? (
                          <UserX className="w-4 h-4 text-red-600" />
                        ) : (
                          <UserCheck className="w-4 h-4 text-green-600" />
                        )}
                      </Button>
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

export default AdminUsers;