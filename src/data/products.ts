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
        title: "OPHEX LMS",
        subtitle: "All-in-One Learning Management System",
        description: "Streamline your institution's operations with our all-in-one Learning Management System (LMS) designed to simplify academic and administrative tasks.",
        fullDescription: `
      Ophex Learn is designed specifically to streamline operations for Schools, Colleges, and Institute Centers by simplifying academic and administrative tasks while enhancing learning experiences.
      
      Digitize your entire admission process with online applications, automated approvals, and real-time data tracking to effortlessly manage student records. Simplify exam scheduling, grading, and result publishing to generate accurate performance reports.
      
      Automate fee collection, invoice generation, and payment tracking with timely reminders. Track student attendance in real-time with automated marking and instant absence notifications. Empower parents and students with instant access to their own dedicated portal for grades, attendance, and assignments.
      
      Keep everyone connected with built-in SMS, email, and push communication tools, and seamlessly integrate virtual e-learning platforms to fully support modern remote education.
    `,
        icon: BookOpen,
        image: productLms,
        features: [
            "Student Enrollment & Admission",
            "Grade & Exam Management",
            "Real-time Attendance Tracking",
            "Automated Fee Management",
            "Parent & Student Portal",
            "Timetable & Class Management",
            "Integrated Communication Tools",
            "24x7 Technical Support",
        ],
        benefits: [
            "Boost overall institutional productivity",
            "Save administrative time & resources",
            "Improve communication between staff, students & parents",
            "Enhance student learning outcomes",
        ]
    },
    {
        id: "service-center",
        title: "OPHEX SCMS",
        subtitle: "Smart Service Center Management System",
        description: "Transform your service shop into a Smart Shop! Streamline your workflow, boost efficiency, and grow your business with smart automation.",
        fullDescription: `
      Managing a service center has never been this easy! Ophex Fix is designed for auto repair shops, electronics service centers, appliance repair businesses, and more. 
      
      It streamlines your entire workflow—from customers booking hassle-free online appointments to mechanics tracking repairs via Job Cards. 
      
      Keep your spare parts stock under perfect control, generate automated invoices in a click, and improve customer retention by maintaining detailed service histories and sending automated SMS & Email updates. Handle it all on-the-go with our mobile-friendly dashboard!
    `,
        icon: Wrench,
        image: productService,
        features: [
            "Online Appointments & Booking",
            "Job Card & Repair Tracking",
            "Spare Parts & Inventory Control",
            "Automated Invoicing & Billing",
            "SMS & Email Notifications",
            "Warranty & Claim Tracking",
            "Mobile-Friendly Dashboard",
            "Custom Service Packages",
        ],
        benefits: [
            "Convert into a modernized Smart Shop",
            "Boost shop efficiency and workflow",
            "Improve long-term customer retention",
            "Get instant AI-driven business insights",
        ]
    },
    {
        id: "stock-management",
        title: "OPHEX STOCK",
        subtitle: "Web-Based Stock Management System",
        description: "Transform your inventory! Streamline your warehouse, store, and delivery operations with our Web-Based Stock Management System.",
        fullDescription: `
      Ophex Stock is designed specifically for hardware shops, warehouses, and product delivery agencies. Reduce manual work, improve accuracy, and gain full control over your inventory from anywhere.
      
      Digitize your goods receiving process with fast GRN issuing, track supplier payments, and monitor stock availability across multiple district locations effortlessly. 
      
      For distribution, effectively organize orders by route and store, assign bikers to collect orders with complete operational summaries, and generate lorry release notes and journey summaries covering stock movements and shortages.
      
      Maintain absolute transparency and accountability with complete audit logs and secure role-based access control (RBAC).
    `,
        icon: Package,
        image: productStock,
        features: [
            "GRN Issuing & Goods Receipt",
            "Supplier Payment Tracking",
            "District-Based Inventory Control",
            "Route & Store Order Management",
            "Biker Collection & Payment Reports",
            "Lorry Release Notes & Journey Logs",
            "Returns Handling & Auto Reports",
            "Audit Logging & Activity Tracking",
        ],
        benefits: [
            "Reduce stock tracking errors",
            "Improve delivery and logistics efficiency",
            "Automate payments and detailed reporting",
            "Gain complete business and inventory control",
        ]
    },
    {
        id: "hr-management",
        title: "OPHEX HR",
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
        title: "OPHEX CRM",
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
