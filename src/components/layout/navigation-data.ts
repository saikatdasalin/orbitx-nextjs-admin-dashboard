import {
  FolderOpen,
  Calendar,
  Briefcase,
  FolderKanban,
  Users,
  Link2,
  Store,
  Gavel,
  Share2,
  Building2,
  DollarSign,
  Truck,
  ShoppingCart,
  BarChart3,
  HeadphonesIcon,
  Podcast,
  Home,
  Search,
  LayoutGrid,
  FileText,
  Table,
  FileQuestion,
  Lock,
  CreditCard,
  Map,
  Mail,
  UserCircle,
  Bell,
  Settings,
  LogIn,
  UserPlus,
  KeyRound,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  shortcut?: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationItems: NavSection[] = [
  {
    title: "Overview",
    items: [
      { name: "File Manager", href: "/", icon: FolderOpen, shortcut: "1" },
      { name: "Appointment", href: "/appointment", icon: Calendar, shortcut: "2" },
      { name: "Executive", href: "/executive", icon: Briefcase, shortcut: "3" },
      { name: "Project", href: "/project", icon: FolderKanban, shortcut: "4" },
      { name: "CRM", href: "/crm", icon: Users, shortcut: "5" },
      { name: "Affiliate", href: "/affiliate", icon: Link2, shortcut: "6" },
      { name: "Store Analytics", href: "/store-analytics", icon: Store, badge: "NEW", shortcut: "7" },
      { name: "Bidding", href: "/bidding", icon: Gavel, badge: "NEW", shortcut: "8" },
      { name: "Social Media", href: "/social-media", icon: Share2, shortcut: "9" },
      { name: "Job Board", href: "/job-board", icon: Building2, shortcut: "0" },
      { name: "Financial", href: "/financial", icon: DollarSign },
      { name: "Logistics", href: "/logistics", icon: Truck },
      { name: "E-Commerce", href: "/ecommerce", icon: ShoppingCart },
      { name: "Analytics", href: "/analytics", icon: BarChart3 },
      { name: "Support", href: "/support", icon: HeadphonesIcon },
      { name: "Podcast", href: "/podcast", icon: Podcast, badge: "NEW" },
    ],
  },
  {
    title: "Apps Kit",
    items: [
      {
        name: "E-Commerce",
        href: "#",
        icon: ShoppingCart,
        children: [
          { name: "Products", href: "/ecommerce/products", icon: ShoppingCart },
          { name: "Product Details", href: "/ecommerce/product-details", icon: ShoppingCart },
          { name: "Create Product", href: "/ecommerce/create-product", icon: ShoppingCart },
          { name: "Edit Product", href: "/ecommerce/edit-product", icon: ShoppingCart },
          { name: "Categories", href: "/ecommerce/categories", icon: ShoppingCart },
          { name: "Create Category", href: "/ecommerce/create-category", icon: ShoppingCart },
          { name: "Edit Category", href: "/ecommerce/edit-category", icon: ShoppingCart },
          { name: "Orders", href: "/ecommerce/orders", icon: ShoppingCart },
          { name: "Order Details", href: "/ecommerce/order-details", icon: ShoppingCart },
          { name: "Create Order", href: "/ecommerce/create-order", icon: ShoppingCart },
          { name: "Edit Order", href: "/ecommerce/edit-order", icon: ShoppingCart },
          { name: "Reviews", href: "/ecommerce/reviews", icon: ShoppingCart },
          { name: "Shop", href: "/ecommerce/shop", icon: ShoppingCart },
          { name: "Cart", href: "/ecommerce/cart", icon: ShoppingCart },
          { name: "Checkout", href: "/ecommerce/checkout", icon: ShoppingCart },
        ],
      },
      {
        name: "Support",
        href: "#",
        icon: HeadphonesIcon,
        children: [
          { name: "Inbox", href: "/support/inbox", icon: HeadphonesIcon },
          { name: "Snippets", href: "/support/snippets", icon: HeadphonesIcon },
          { name: "Templates", href: "/support/templates", icon: HeadphonesIcon },
        ],
      },
      {
        name: "Invoice",
        href: "#",
        icon: DollarSign,
        children: [
          { name: "List", href: "/invoice/list", icon: DollarSign },
          { name: "Details", href: "/invoice/details", icon: DollarSign },
          { name: "Builder", href: "/invoice/builder", icon: DollarSign },
        ],
      },
      {
        name: "Logistics",
        href: "#",
        icon: Truck,
        children: [
          { name: "Shipment List", href: "/logistics/shipment-list", icon: Truck },
          { name: "Shipment Details", href: "/logistics/shipment-details", icon: Truck },
          { name: "Tracking", href: "/logistics/tracking", icon: Truck },
        ],
      },
      { name: "Job Feeds", href: "/job-board/feed", icon: Building2 },
      { name: "Appointment", href: "/appointment/list", icon: Calendar },
      { name: "File Manager", href: "/file-manager", icon: FolderOpen },
      { name: "Event Calendar", href: "/event-calendar", icon: Calendar },
      { name: "Roles & Permissions", href: "/roles-permissions", icon: Lock },
      { name: "Point of Sale", href: "/point-of-sale", icon: CreditCard },
      { name: "Invoice Builder", href: "/invoice/builder", icon: FileText },
      { name: "Image Viewer", href: "/image-viewer", icon: LayoutGrid },
    ],
  },
  {
    title: "Search & Filters",
    items: [
      { name: "Real Estate", href: "/search/real-estate", icon: Home },
      { name: "Flight Booking", href: "/search/flight", icon: Search },
      { name: "NFT", href: "/search/nft", icon: LayoutGrid },
    ],
  },
  {
    title: "Widgets",
    items: [
      { name: "Cards", href: "/widgets/cards", icon: LayoutGrid },
      { name: "Icons", href: "/widgets/icons", icon: LayoutGrid },
      { name: "Charts", href: "/widgets/charts", icon: BarChart3 },
      { name: "Maps", href: "/widgets/maps", icon: Map },
      { name: "Email Templates", href: "/email-templates", icon: Mail },
    ],
  },
  {
    title: "Forms",
    items: [
      { name: "Account Settings", href: "/forms/profile-settings", icon: UserCircle },
      { name: "Notification Preference", href: "/forms/profile-settings/notification", icon: Bell },
      { name: "Personal Information", href: "/forms/profile-settings/profile", icon: UserCircle },
      { name: "Newsletter", href: "/forms/newsletter", icon: Mail },
      { name: "Multi Step", href: "/multi-step", icon: FileText },
      { name: "Multi Step 2", href: "/multi-step-2", icon: FileText },
      { name: "Payment Checkout", href: "/ecommerce/checkout", icon: CreditCard },
    ],
  },
  {
    title: "Tables",
    items: [
      { name: "Basic", href: "/tables/basic", icon: Table },
      { name: "Collapsible", href: "/tables/collapsible", icon: Table },
      { name: "Enhanced", href: "/tables/enhanced", icon: Table },
      { name: "Sticky Header", href: "/tables/sticky-header", icon: Table },
      { name: "Pagination", href: "/tables/pagination", icon: Table },
      { name: "Search", href: "/tables/search", icon: Table },
      { name: "Resizable", href: "/tables/resizable", icon: Table },
      { name: "Pinning", href: "/tables/pinning", icon: Table },
      { name: "Drag & Drop", href: "/tables/dnd", icon: Table },
    ],
  },
  {
    title: "Pages",
    items: [
      { name: "Profile", href: "/profile", icon: UserCircle },
      { name: "Welcome", href: "/welcome", icon: Home },
      { name: "Coming soon", href: "/coming-soon", icon: FileQuestion },
      { name: "Access Denied", href: "/access-denied", icon: Lock },
      { name: "Not Found", href: "/not-found", icon: FileQuestion },
      { name: "Maintenance", href: "/maintenance", icon: Settings },
      { name: "Blank", href: "/blank", icon: FileText },
    ],
  },
  {
    title: "Authentication",
    items: [
      {
        name: "Sign Up",
        href: "#",
        icon: UserPlus,
        children: [
          { name: "Sign Up 1", href: "/auth/sign-up-1", icon: UserPlus },
          { name: "Sign Up 2", href: "/auth/sign-up-2", icon: UserPlus },
          { name: "Sign Up 3", href: "/auth/sign-up-3", icon: UserPlus },
          { name: "Sign Up 4", href: "/auth/sign-up-4", icon: UserPlus },
          { name: "Sign Up 5", href: "/auth/sign-up-5", icon: UserPlus },
        ],
      },
      {
        name: "Sign In",
        href: "#",
        icon: LogIn,
        children: [
          { name: "Sign In 1", href: "/auth/sign-in-1", icon: LogIn },
          { name: "Sign In 2", href: "/auth/sign-in-2", icon: LogIn },
          { name: "Sign In 3", href: "/auth/sign-in-3", icon: LogIn },
          { name: "Sign In 4", href: "/auth/sign-in-4", icon: LogIn },
          { name: "Sign In 5", href: "/auth/sign-in-5", icon: LogIn },
        ],
      },
      {
        name: "Forgot Password",
        href: "#",
        icon: KeyRound,
        children: [
          { name: "Forgot Password 1", href: "/auth/forgot-password-1", icon: KeyRound },
          { name: "Forgot Password 2", href: "/auth/forgot-password-2", icon: KeyRound },
          { name: "Forgot Password 3", href: "/auth/forgot-password-3", icon: KeyRound },
          { name: "Forgot Password 4", href: "/auth/forgot-password-4", icon: KeyRound },
          { name: "Forgot Password 5", href: "/auth/forgot-password-5", icon: KeyRound },
        ],
      },
      {
        name: "OTP Pages",
        href: "#",
        icon: Smartphone,
        children: [
          { name: "OTP 1", href: "/auth/otp-1", icon: Smartphone },
          { name: "OTP 2", href: "/auth/otp-2", icon: Smartphone },
          { name: "OTP 3", href: "/auth/otp-3", icon: Smartphone },
          { name: "OTP 4", href: "/auth/otp-4", icon: Smartphone },
          { name: "OTP 5", href: "/auth/otp-5", icon: Smartphone },
        ],
      },
    ],
  },
];

// Simplified navigation for top nav layout (Lithium)
export const topNavItems = [
  { name: "Overview", items: navigationItems[0].items },
  { name: "Apps Kit", items: navigationItems[1].items },
  { name: "Widgets", items: navigationItems[3].items },
  { name: "Forms", items: navigationItems[4].items },
  { name: "Tables", items: navigationItems[5].items },
  { name: "Pages", items: navigationItems[6].items },
  { name: "Authentication", items: navigationItems[7].items },
];

// Icon-only navigation for Beryllium layout
export const iconNavItems = [
  { name: "Home", icon: Home, section: "Overview" },
  { name: "Apps", icon: LayoutGrid, section: "Apps Kit" },
  { name: "Search", icon: Search, section: "Search & Filters" },
  { name: "Widgets", icon: LayoutGrid, section: "Widgets" },
  { name: "Forms", icon: FileText, section: "Forms" },
  { name: "Tables", icon: Table, section: "Tables" },
  { name: "Pages", icon: FileQuestion, section: "Pages" },
  { name: "Auth", icon: Lock, section: "Authentication" },
];
