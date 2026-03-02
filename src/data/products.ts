import { BookOpen, Wrench, Package, Users, ClipboardList, Receipt } from "lucide-react";
import productLms from "@/assets/product-lms.jpg";
import productService from "@/assets/product-service.jpg";
import productStock from "@/assets/product-stock.jpg";
import productHr from "@/assets/poduct-hr.jpg";
import productCrm from "@/assets/product-crm.jpg";
import productBill from "@/assets/product-bill.jpg";

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
    {
        id: "hr-management",
        title: "Ophex HR",
        subtitle: "Complete Human Resource Management System",
        description: "Streamline your workforce operations, from recruitment and onboarding to payroll, attendance tracking, and performance evaluations.",
        fullDescription: `
      Ophex HR is an all-in-one Human Resource Management System designed to simplify complex HR processes and foster a productive workplace culture.
      
      Automate routine administrative tasks, effortlessly manage employee leave requests, track daily attendance, and ensure compliant payroll processing. Our system provides management with clear, actionable insights into workforce dynamics.
    `,
        icon: Users,
        image: productHr,
        features: [
            "Employee Database & Profiles",
            "Leave & Attendance Tracking",
            "Automated Payroll Processing",
            "Performance & Appraisal Management",
            "Recruitment & Onboarding Workflows",
            "Employee Self-Service Portal",
        ],
        benefits: [
            "Minimize tedious HR paperwork and administration",
            "Ensure accurate, timely payroll distribution",
            "Boost employee satisfaction with transparent policies",
            "Make data-driven hiring and promotion decisions",
        ]
    },
    {
        id: "crm-system",
        title: "Ophex CRM",
        subtitle: "Customer Relationship & Task Progress Tracking",
        description: "Build stronger customer relationships and track internal task progress seamlessly through a unified, collaborative dashboard.",
        fullDescription: `
      Ophex CRM goes beyond traditional customer management by tightly integrating task tracking directly alongside your client profiles.
      
      Keep your sales, marketing, and support teams perfectly aligned. Track every customer interaction, monitor active deal pipelines, assign internal follow-up tasks, and visualize project milestones all within a single command center.
    `,
        icon: ClipboardList,
        image: productCrm,
        features: [
            "Centralized Client & Lead Database",
            "Visual Task & Project Boards",
            "Interaction History & Logging",
            "Sales Pipeline Tracking",
            "Automated Follow-up Reminders",
            "Team Collaboration Chat Tools",
        ],
        benefits: [
            "Never miss a potential sales follow-up",
            "Keep all team members aligned on active tasks",
            "Improve customer retention with personalized service",
            "Easily identify bottlenecks in sales workflows",
        ]
    },
    {
        id: "bila-potha",
        title: "Bila Potha",
        subtitle: "Mobile Tax Invoice Management App",
        description: "A specialized mobile application enabling suppliers and field salesmen to issue, share, and manage formal tax invoices with just a few clicks.",
        fullDescription: `
      Bila Potha is a purpose-built mobile application designed specifically to empower on-the-go suppliers, field salesmen, and distribution fleets.
      
      Eliminate the hassle of manual receipt books. Issue perfectly formatted tax invoices directly from your smartphone, instantly share them with clients via WhatsApp or Email, and automatically sync all billing data back to the company's central backend.
    `,
        icon: Receipt,
        image: productBill,
        features: [
            "Instant Mobile Tax Invoice Generation",
            "One-Click WhatsApp/Email Sharing",
            "Field Salesman Tracking Dashboard",
            "Supplier & Client Record Management",
            "Offline Mode with Auto-Sync",
            "Customizable Invoice Templates",
        ],
        benefits: [
            "Drastically speed up the field billing process",
            "Eliminate errors in physical invoice creation",
            "Provide professional, digital receipts to clients instantly",
            "Maintain perfectly synchronized financial records company-wide",
        ]
    },
];
