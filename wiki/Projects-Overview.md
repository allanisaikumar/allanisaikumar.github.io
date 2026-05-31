# Projects Overview — Detailed Documentation

Welcome to my projects documentation page. This wiki provides comprehensive details about the major projects I've architected, led, and contributed to throughout my 10+ years of software engineering experience.

---

## Table of Contents
1. [Intela Workplan (Deloitte)](#intela-workplan-deloitte)
2. [Guiding Care Platform (HealthEdge)](#guiding-care-platform-healthedge)
3. [Multi-Tenant Microservice Architecture (HealthEdge)](#multi-tenant-microservice-architecture-healthedge)
4. [Team Vihaan: AI in SSDLC (Deloitte)](#team-vihaan-ai-in-ssdlc-deloitte)
5. [Claims Data Migration (HealthEdge)](#claims-data-migration-healthedge)

---

## Intela Workplan (Deloitte)

### Overview
**Intela Workplan** is Deloitte's flagship tax technology platform used globally across multiple tax engagements, managing complex workflow automation and task management systems.

**Duration:** Dec 2021 — Present (4.5+ years)  
**Position:** Lead Software Engineer (Dec 2021 — May 2025) → Software Engineering Manager (Jun 2025 — Present)  
**Team Size:** 30+ engineers (developers, QA), plus vendor teams

### Key Technologies
- **.NET Core** — Core backend platform
- **Azure Cloud Infrastructure** — AKS, App Services, Service Bus, SignalR
- **MongoDB & SQL Server** — Dual database architecture for flexibility
- **Azure DevOps** — CI/CD and project management
- **Microservices Architecture** — Event-driven design patterns

### Major Accomplishments

#### 1. **Performance Optimization (40% API Response Improvement)**
- Achieved **40% improvement** in API response times
- Achieved **25% reduction** in system latency
- Implementation strategy:
  - Horizontal scaling on Azure App Services
  - Intelligent caching strategies (Redis)
  - Database query optimization and indexing
  - Asynchronous processing patterns

#### 2. **Automation Engine (60% Manual Work Reduction)**
- Built a sophisticated automation engine with:
  - Configurable workflow templates
  - Rule-based trigger system
  - Reduced manual intervention by over **60%**
  - Support for **7-level hierarchical entity** management
- Features:
  - Automatic task progression through workflow stages
  - Conditional logic based on business rules
  - Audit trails and compliance tracking

#### 3. **Real-Time Task Updates with SignalR**
- Designed SignalR-based real-time notification system
- Improved user efficiency by **30%** during:
  - Task tracking operations
  - Review cycles
  - Status updates
- Implementation benefits:
  - Eliminated polling overhead
  - Real-time push notifications
  - Reduced infrastructure load

#### 4. **Leadership & Team Management**
- Lead a cross-functional team through:
  - Sprint delivery cycles
  - Architectural design reviews
  - End-to-end release management
  - Quality assurance integration

### Architecture Highlights
```
┌─────────────────────────────────────────┐
│         Client Applications              │
├─────────────────────────────────────────┤
│  Azure API Management (APIM)             │
├─────────────────────────────────────────┤
│  .NET Core Microservices                │
│  ├─ Workplan Service                    │
│  ├─ Automation Service                  │
│  ├─ Notification Service                │
│  └─ Document Service                    │
├─────────────────────────────────────────┤
│  Azure Service Bus (Event Hub)          │
├─────────────────────────────────────────┤
│  Data Layer (MongoDB + SQL Server)      │
│  ├─ SQL Server (Transactional Data)     │
│  └─ MongoDB (Document Storage)          │
├─────────────────────────────────────────┤
│  Azure Storage (Blobs, Queues)          │
└─────────────────────────────────────────┘
```

### Business Impact
- Supports multiple tax engagement models globally
- Handles complex workflow scenarios with 7+ hierarchy levels
- Reduced operational overhead through automation
- Improved user satisfaction through real-time updates

---

## Team Vihaan: AI in SSDLC (Deloitte)

### Overview
**Team Vihaan** is a new strategic initiative launching June 2026, focused on driving AI adoption across the Software Secure Development Lifecycle (SSDLC).

**Start Date:** June 2026  
**Position:** Lead — Team Vihaan  
**Scope:** Enterprise-wide AI tooling integration for secure development

### Mission & Vision
- Integrate AI-powered tooling into the development lifecycle
- Focus on code generation with security-first approach
- Enhance secure coding practices
- Improve development velocity without compromising security

### Key AI Initiatives
1. **AI-Powered Code Generation**
   - Intelligent code suggestions based on context
   - Security compliance-aware generation
   - Performance optimization patterns

2. **Secure Development Practices**
   - AI-assisted vulnerability detection
   - Automated security scanning
   - Compliance checking within IDE

3. **Developer Productivity**
   - AI-assisted documentation
   - Smart code reviews with AI insights
   - Automated testing suggestions

### Expected Impact
- Faster development cycles
- Improved code quality
- Enhanced security posture
- Reduced manual security review time

---

## Guiding Care Platform (HealthEdge)

### Overview
**Guiding Care** is a comprehensive care management platform for non-commercial (Medicaid/Medicare) and commercial healthcare engagements.

**Duration:** Jun 2016 — Dec 2020 (4 yrs 7 mos)  
**Positions:** Software Engineer I (Jun 2016 — Sep 2018) → Software Engineer II (Oct 2018 — Dec 2020) → Technical Lead (Jan 2021)

### Project Evolution

#### Phase 1: Foundation (2016-2018)
- Two-level hierarchy platform for Medicaid/Medicare
- Non-commercial focus
- Basic care management workflows

#### Phase 2: Transformation (2018-2020)
**Major Achievement: N-Level Flexible Hierarchy Support**

- Transformed from two-level to N-level hierarchy model
- Commercial platform expansion
- Support for complex organizational structures
- Flexible role-based access control

### Key Technologies
- **C#** — Backend development
- **ASP.NET MVC** — Web framework
- **SQL Server** — Primary data store
- **MongoDB** — Document storage (introduced in later phases)
- **JavaScript** — Frontend interactions

### Technical Accomplishments

1. **Hierarchy Model Redesign**
   - Replaced rigid two-level structure
   - Implemented recursive, flexible N-level hierarchy
   - Support for unlimited organizational depths
   - Efficient query performance at scale

2. **Multi-Tenancy Features**
   - Commercial platform customization
   - Tenant-specific workflows
   - Data isolation and security
   - Billing and licensing per tenant

3. **Data Migration Strategy**
   - Zero-downtime migration (see Claims Migration project below)
   - Preserved historical data integrity
   - Maintained audit trails
   - Seamless user experience during transition

### Business Impact
- Successfully transitioned from non-commercial to commercial model
- Supported enterprise healthcare organizations
- Enabled complex care coordination workflows
- Improved operational efficiency for care managers

---

## Multi-Tenant Microservice Architecture (HealthEdge)

### Overview
Built HealthEdge's first **Multi-Tenant Microservice**, establishing a new architectural paradigm for enterprise-scale applications.

**Duration:** Jan 2021 — Dec 2021 (1 year)  
**Position:** Technical Lead

### Architecture Design

The microservice supports document management across multiple cloud platforms from a single unified service:

```
┌─────────────────────────────────────┐
│   Multi-Tenant Document Service     │
├─────────────────────────────────────┤
│  Abstraction Layer                  │
├─────────────────────────────────────┤
│  Storage Adapters (Pluggable)       │
│  ├─ Azure Blob Storage              │
│  ├─ Amazon S3                       │
│  └─ MongoDB GridFS                  │
├─────────────────────────────────────┤
│  Metadata (SQL Server)              │
└─────────────────────────────────────┘
```

### Key Features

1. **Multi-Cloud Support**
   - **Azure Blob Storage** — Primary cloud provider
   - **Amazon S3** — Multi-cloud strategy
   - **MongoDB GridFS** — NoSQL document storage
   - Seamless provider switching at tenant level

2. **Multi-Tenancy Implementation**
   - Tenant isolation at storage level
   - Separate metadata partitioning
   - Billing per tenant
   - Custom retention policies

3. **Abstraction & Flexibility**
   - Provider-agnostic interface
   - Easy addition of new storage backends
   - No client-side logic changes required
   - Transparent failover capabilities

### Technical Achievements

1. **Migration of Single-Tenant APIs**
   - Systematically migrated all existing single-tenant APIs
   - Zero downtime for users
   - Backward compatibility maintained
   - Gradual rollout approach

2. **Infrastructure Optimization**
   - Consolidated multiple storage systems
   - Optimized Azure infrastructure costs
   - Improved resource utilization
   - Scalability improvements

3. **Performance Metrics**
   - Reduced storage redundancy
   - Improved query performance
   - Decreased operational complexity
   - Better cost-to-performance ratio

### Design Patterns Applied
- **Adapter Pattern** — Storage provider abstraction
- **Strategy Pattern** — Storage provider selection
- **Factory Pattern** — Service instance creation
- **Multi-Tenancy Pattern** — Data isolation

### Business Value
- Reduced infrastructure costs
- Increased platform flexibility
- Enabled enterprise customer requirements
- Improved time-to-market for new customers

---

## Claims Data Migration (HealthEdge)

### Overview
A strategic project to migrate large-scale Claims data from SQL Server to MongoDB, dramatically improving performance and reducing operational costs.

**Duration:** Part of 2016-2020 engagement (HealthEdge)  
**Impact:** Enterprise-wide data platform transformation

### Problem Statement
- **Challenge:** Massive volume of claims data with complex queries
- **Issue:** SQL Server struggling with query performance
- **Cost:** High infrastructure and licensing expenses
- **Need:** Flexible schema for healthcare claims data

### Solution Architecture

```
Legacy System                New System
(SQL Server)                 (MongoDB)
    ↓                            
Data Export Pipeline ────────→ MongoDB Cluster
    ↓                            ↑
Validation Layer ──────────────→
    ↓
Reconciliation & Testing
    ↓
Production Migration
```

### Technical Implementation

1. **MongoDB Schema Design**
   - Document-based claims structure
   - Flexible schema for healthcare domain
   - Embedded relationships instead of joins
   - Optimized indexing strategy

2. **Data Pipeline**
   - Extraction from SQL Server
   - Transformation to document format
   - Validation rules engine
   - Load into MongoDB

3. **Performance Optimization**
   - Query optimization for common patterns
   - Strategic indexing
   - Denormalization for read performance
   - Horizontal scaling with sharding

### Key Results

#### Performance Improvements
- **Query Performance:** Significantly improved response times
- **Throughput:** Increased queries per second capacity
- **Latency:** Reduced average query latency

#### Cost Benefits
- **Licensing:** Eliminated expensive SQL Server licensing
- **Infrastructure:** Optimized cloud infrastructure costs
- **Operations:** Reduced DBA overhead
- **ROI:** Positive ROI within first year

### Data Integrity Measures
- Comprehensive validation framework
- Before/after record count reconciliation
- Sampling-based verification
- Audit trail maintenance
- Rollback procedures

### Lessons Learned
1. Importance of thorough data validation
2. Need for comprehensive testing strategy
3. Communication with stakeholders during migration
4. Gradual rollout reduces risk
5. Post-migration monitoring is critical

---

## Skills Demonstrated Across Projects

### Architecture & Design
- Microservices architecture
- Multi-tenant design patterns
- Event-driven systems
- Cloud-native applications
- API design and management
- Database architecture (SQL & NoSQL)

### Cloud Platforms
- **Microsoft Azure**
  - App Services
  - Kubernetes (AKS)
  - Service Bus
  - Azure Storage
  - Cosmos DB
  - API Management
- **Amazon Web Services**
  - S3
  - EC2
  - Lambda

### Technologies & Languages
- **.NET Core** — 10+ years
- **C#** — Enterprise applications
- **SQL Server** — Complex queries, optimization
- **MongoDB** — Large-scale data storage
- **Azure DevOps** — CI/CD, source control
- **Kubernetes** — Container orchestration
- **SignalR** — Real-time communications

### Engineering Practices
- Agile development
- Code reviews and quality
- Performance optimization
- Security best practices
- Data migration strategies
- Infrastructure automation
- Testing (unit, integration, E2E)

### Leadership
- Team management (30+ engineers)
- Technical mentoring
- Architecture decisions
- Release management
- Vendor coordination
- Stakeholder communication

---

## Performance Awards & Recognition

Throughout these projects, received:
- **3 performance awards** at Deloitte
- Consistent leadership recognition
- Instrumental contributor to platform success
- Trusted architect and technical leader

---

## Contact & Collaboration

Interested in discussing these projects or collaborating on similar initiatives?

- **Email:** allanisaikumar@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/allanisaikumar/
- **GitHub:** https://github.com/allanisaikumar
- **Location:** Hyderabad, India

---

**Last Updated:** May 31, 2026  
**Author:** Saikumar Allani
