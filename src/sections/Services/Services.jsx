import React from 'react'
import './Services.css'
import SCard from './ServiceCard/SCard'

const Services = () => {
    return (
        <div className="services-section" id="services">
            <h2> My Experiences </h2>
            <p>I provide innovative and integrated solutions to help you achieve the success you aspire to.</p>

            {/* Container for the cards grid */}
            <div className="services-grid">
                <SCard
                    Icon="🔍"
                    title="Client Services"
                    List={["identifying client challenges and recommending ERP solutions.","Mapped and optimized ERP workflows to improve efficiency.","Managed SQL tables and data uploads for accurate system integration"]}
                />
               
                <SCard
                    Icon="🤝"
                    title="EFS & EHFS Facility Management Company"
                    List={["Supply Chain: Oversees the full procurement cycle, tracks inventory transactions, and integrates with finance for smooth operations and reporting.",
                         "Facility Management: Handles maintenance, space utilization, asset tracking, energy monitoring, and vendor coordination using a unified system.",
                          "Ticketing Integration: Supports routine and emergency repair requests within facilities through an integrated ticketing module."]}
                />
                <SCard
                    Icon="🏭"
                    title="Mwasalat Misr Company"
                    List={["Supply Chain: Manages the full procurement cycle, tracks inventory, and integrates with finance for smooth reporting.", 
                        "Maintenance: Handles scheduled maintenance, repairs, and cost tracking with finance integration for budget control.",
                         "CRM: Manages customer tickets from social media and other channels, improving response time and service quality."]}
                />
                <SCard
                    Icon="💡"
                    title="Sugar Logistics"
                    List={["Supply Chain & Operations: Manages raw materials and finished products flow, covering shipments, dock handling, production, and exports.",
                        "Planning & Dispatching: Optimizes import/export plans, factory schedules, and ensures timely dispatch of goods to customers.",
                        "Tracking: Monitors cargo movement across the supply chain, identifying delays and ensuring smooth logistics.",
                        ]}
                />
                <SCard
                    Icon="🖥️"
                    title="Smart City Platform (in Saudi)"
                    List={["IoT Platform & Monitoring: Centralized system integrating IoT devices for real-time tracking, analytics, and infrastructure maintenance.",
                           "Smart Services: Includes smart parking with real-time availability and automated booking, plus streamlined facility management workflows.",
                            "Mobile App: Empowers employees with task assignment, geo-tracking, offline access, and real-time reporting."]}
                />
                <SCard
                    Icon="📊"
                    title="Creazure Company"
                    List={["Manufacturing: Oversees production processes, asset tracking, equipment maintenance, and energy efficiency to ensure operational excellence.", 
                           "Supply Chain: Manages end-to-end procurement, inventory transactions, and integrates with finance for streamlined product distribution.",
                        "CRM & Sales: Handles customer interactions and ticketing, while supporting sales processes to boost customer satisfaction and business performance."]}
                />
            </div>
        </div>
    )
}

export default Services