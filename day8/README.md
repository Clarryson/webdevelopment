# Day 8: Capstone System Design — "TicketHub" & Course Reflection

Welcome to **Day 8** of **my web development journey**! This is the culminating capstone project where I apply the full end-to-end software engineering framework—spanning REST APIs, relational databases, concurrency control, and cloud-scale infrastructure—to design **TicketHub**, an event ticketing platform capable of handling massive concert flash sales.

---

## 🎯 Capstone Deliverables

This directory contains two core deliverables:

1. **[`ticketing-design.md`](./ticketing-design.md)**: A complete, rigorous system design document for TicketHub covering:
   - **Requirements (Functional & Non-Functional)**: Speed ($<150\text{ms}$ reads, $<500\text{ms}$ writes), Correctness (absolute zero double-booking), and Fairness (FIFO virtual waiting room).
   - **Capacity Math & Estimations**: Normal day traffic ($5.79\text{ RPS}$ reads, $0.058\text{ WPS}$ writes) compared with a popular concert flash sale ($8,333\text{--}30,000\text{ RPS}$ reads, $333\text{--}2,500\text{ hold attempts/sec}$) with $200,000$ fans competing for $20,000$ seats ($10:1$ buyer ratio).
   - **RESTful API**: 5 fully specified endpoints for browsing events, loading interactive seat maps, holding seats for 10 minutes, completing checkout with idempotency keys, and retrieving digital tickets with QR barcodes.
   - **Relational Data Model**: 5 normalized tables (`users`, `events`, `seats`, `orders`, `order_items`), full SQL DDL with composite unique constraints, foreign key cascades, and B-tree indexes.
   - **Concurrency Control & Zero Double-Booking**: 4-tier defense using state machines, Optimistic Atomic Updates (`WHERE status = 'available'`), Pessimistic Locks (`FOR UPDATE`), Redis distributed locks, and database `UNIQUE(seat_id)` constraints.
   - **Architecture Diagram & Big Sale Survival**: Comprehensive Mermaid diagram and component explanations (Cloudflare Waiting Room, ALB, Auto-scaling API cluster, Redis Cluster, PostgreSQL Primary + Read Replicas, RabbitMQ, and Stripe).
   - **Engineering Trade-Offs**: 4 deep-dive comparative evaluations analyzing OCC vs. Pessimistic Locking, Virtual Waiting Rooms vs. Oversubscription, Redis Caching vs. Direct DB, and Seat Selection vs. Auto-Assignment.

2. **[`reflection.md`](./reflection.md)**: A concise, thoughtful 245-word reflection answering:
   - What was the most difficult concept in the course and how it was overcome (database concurrency, isolation levels, and atomic SQL transactions).
   - Which part of the capstone could be improved based on feedback (real-time WebSocket/SSE seat broadcasts and dynamic tiered pricing).
   - What will be learned next (Docker containerization, Kubernetes orchestration, Apache Kafka, and GraphQL).

---

## 🛠️ Key Architectural Concepts in Plain English

### The Stampede Problem: 200,000 People, 20,000 Seats
When a superstar artist announces a concert, $200,000$ fans attempt to click the same front-row seats at the exact same split-second.

> **The Box Office Counter Analogy:**  
> If 200,000 people rush a stadium ticket counter all at once, the physical gate will collapse.  
> Instead, TicketHub places a **Virtual Waiting Room** outside the stadium. The security gate admits exactly 500 fans per second in orderly lines. Inside the stadium, an in-memory electronic board (Redis) immediately turns a seat red the microsecond someone clicks it, and the database issues a hard lock so two people can never receive the same physical ticket.

---

## 📂 File Structure

```
day8/
├── README.md               # Overview of Day 8 Capstone & key concepts
├── ticketing-design.md     # Full 6-part TicketHub system design specification
└── reflection.md           # Engineering course reflection (150–300 words)
```
