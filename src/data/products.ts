import { BookOpen, Wrench, Package } from "lucide-react";
import productLms from "@/assets/product-lms.jpg";
import productService from "@/assets/product-service.jpg";
import productStock from "@/assets/product-stock.jpg";

export const products = [
    {
        id: "lms",
        title: "Ophex Learn",
        subtitle: "Enterprise Learning Management System",
        description: "A comprehensive e-learning platform designed to revolutionize education delivery. create, manage, and track educational content with advanced analytics and engagement tools.",
        fullDescription: `
      Ophex Learn is a state-of-the-art Learning Management System (LMS) tailored for educational institutions and corporate training programs. 
      It provides a seamless environment for instructors to deliver content and for students to engage with learning materials effectively.
      
      With built-in video conferencing, automated grading, and detailed progress tracking, Ophex Learn bridges the gap between traditional and digital education.
    `,
        icon: BookOpen,
        image: productLms,
        features: [
            "Intuitive Course Builder",
            "Live Virtual Classrooms",
            "Student Progress Analytics",
            "Automated Assessments & Quizzes",
            "Digital Certificate Generation",
            "Mobile-First Student Portal",
        ],
        benefits: [
            "Increase engagement with interactive content",
            "Reduce administrative workload with automation",
            "Scale your training programs effortlessly",
            "Access learning materials anywhere, anytime",
        ]
    },
    {
        id: "service-center",
        title: "Ophex Fix",
        subtitle: "Service Center Management Solution",
        description: "Streamline your service operations with our powerful ticketing, scheduling, and customer management solution.",
        fullDescription: `
      Ophex Fix is the ultimate solution for authorized service centers and repair shops. 
      From ticket creation to invoicing, it automates every step of the repair lifecycle.
      
      Keep your customers informed with automated SMS/Email updates and manage your spare parts inventory in real-time to avoid stockouts.
    `,
        icon: Wrench,
        image: productService,
        features: [
            "End-to-End Ticket Management",
            "Comprehensive Customer CRM",
            "Technician Scheduling & assignment",
            "Real-time Parts Inventory",
            "Automated Invoicing & Billing",
            "Performance & Revenue Reports",
        ],
        benefits: [
            "Minimize turnaround time for repairs",
            "Enhance customer satisfaction with transparency",
            "Optimize technician productivity",
            "Eliminate parts pilferage and wastage",
        ]
    },
    {
        id: "stock-management",
        title: "Ophex Stock",
        subtitle: "Advanced Inventory Control System",
        description: "Take full control of your inventory with real-time tracking, automated reordering, and comprehensive reporting.",
        fullDescription: `
      Ophex Stock empowers businesses to maintain optimal inventory levels, reduce carrying costs, and prevent stockouts.
      
      Ideal for retail chains, warehouses, and distribution centers, our system integrates seamlessly with barcode scanners and POS systems for accurate, real-time data.
    `,
        icon: Package,
        image: productStock,
        features: [
            "Real-time Inventory Tracking",
            "Barcode & QR Code Scanning",
            "Multi-Warehouse Support",
            "Low Stock Automated Alerts",
            "Purchase Order Management",
            "Expiry Date Tracking",
        ],
        benefits: [
            "Prevent stockouts and overstocking",
            "Streamline procurement processes",
            "Gain visibility across multiple locations",
            "Improve order fulfillment accuracy",
        ]
    },
];
