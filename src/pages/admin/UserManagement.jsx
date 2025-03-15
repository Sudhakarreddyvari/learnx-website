"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Filter,
  Download,
  CheckCircle,
  XCircle,
  User,
  UserCog,
  GraduationCap,
  Clock,
} from "lucide-react"

// Mock user data
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "student", status: "active", joinDate: "2023-01-15" },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "student",
    status: "active",
    joinDate: "2023-02-20",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@example.com",
    role: "trainer",
    status: "active",
    joinDate: "2023-01-10",
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily@example.com",
    role: "student",
    status: "inactive",
    joinDate: "2023-03-05",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert@example.com",
    role: "trainer",
    status: "pending",
    joinDate: "2023-04-12",
  },
  {
    id: 6,
    name: "Jennifer Lee",
    email: "jennifer@example.com",
    role: "admin",
    status: "active",
    joinDate: "2023-01-05",
  },
  {
    id: 7,
    name: "David Miller",
    email: "david@example.com",
    role: "student",
    status: "active",
    joinDate: "2023-05-18",
  },
  { id: 8, name: "Lisa Garcia", email: "lisa@example.com", role: "student  joinDate: '2023-05-18" },
  { id: 8, name: "Lisa Garcia", email: "lisa@example.com", role: "student", status: "active", joinDate: "2023-05-22" },
  {
    id: 9,
    name: "James Wilson",
    email: "james@example.com",
    role: "trainer",
    status: "active",
    joinDate: "2023-06-10",
  },
  {
    id: 10,
    name: "Maria Rodriguez",
    email: "maria@example.com",
    role: "student",
    status: "inactive",
    joinDate: "2023-04-30",
  },
]

const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [showEditUserModal, setShowEditUserModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    // Simulate API call to fetch users
    const fetchUsers = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setUsers(mockUsers)
          setFilteredUsers(mockUsers)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching users:", error)
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    // Filter users based on search term, role, and status
    const filtered = users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesRole = roleFilter === "all" || user.role === roleFilter
      const matchesStatus = statusFilter === "all" || user.status === statusFilter

      return matchesSearch && matchesRole && matchesStatus
    })

    setFilteredUsers(filtered)
  }, [searchTerm, roleFilter, statusFilter, users])

  const handleAddUser = () => {
    setCurrentUser(null)
    setShowAddUserModal(true)
  }

  const handleEditUser = (user) => {
    setCurrentUser(user)
    setShowEditUserModal(true)
  }

  const handleDeleteUser = (userId) => {
    // In a real app, this would be an API call
    const updatedUsers = users.filter((user) => user.id !== userId)
    setUsers(updatedUsers)
  }

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <UserCog size={16} className="text-primary" />
      case "trainer":
        return <User size={16} className="text-violet-500" />
      case "student":
        return <GraduationCap size={16} className="text-blue-500" />
      default:
        return <User size={16} />
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
            <CheckCircle size={12} className="mr-1" />
            Active
          </span>
        )
      case "inactive":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            <XCircle size={12} className="mr-1" />
            Inactive
          </span>
        )
      case "pending":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
            <Clock size={12} className="mr-1" />
            Pending
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center gap-2"
        >
          <Plus size={16} />
          <span>Add User</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background"
          />
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 border border-input rounded-md bg-background"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="trainer">Trainer</option>
              <option value="student">Student</option>
            </select>
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 border border-input rounded-md bg-background"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </div>

          <button className="px-4 py-2 border border-input rounded-md bg-background hover:bg-secondary flex items-center gap-2">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-muted-foreground">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-muted/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          {user.name.charAt(0)}
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getRoleIcon(user.role)}
                        <span className="ml-2 capitalize">{user.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(user.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(user.joinDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleEditUser(user)} className="p-1 hover:bg-secondary rounded-md">
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="p-1 hover:bg-destructive/10 text-destructive rounded-md"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button className="p-1 hover:bg-secondary rounded-md">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredUsers.length}</span> of{" "}
          <span className="font-medium">{users.length}</span> users
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-input rounded-md bg-background hover:bg-secondary">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary text-white rounded-md">1</button>
          <button className="px-3 py-1 border border-input rounded-md bg-background hover:bg-secondary">2</button>
          <button className="px-3 py-1 border border-input rounded-md bg-background hover:bg-secondary">3</button>
          <button className="px-3 py-1 border border-input rounded-md bg-background hover:bg-secondary">Next</button>
        </div>
      </div>

      {/* Add User Modal would go here */}
      {/* Edit User Modal would go here */}
    </div>
  )
}

export default UserManagement

