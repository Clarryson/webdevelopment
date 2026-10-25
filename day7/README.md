# SnapShare Photo-Sharing App Scaling Plan (Day 7 Assignment)

A comprehensive scaling plan and system architecture specification for **SnapShare**, a high-scale photo-sharing platform where users upload photos and scroll personalized feeds.

---

## Deliverables in this Directory

- **[`photo-app-scaling.md`](./photo-app-scaling.md)**: Complete scaling document containing:
  1. **Assumptions & Starting Facts**: 10M registered users, 10% daily active ratio ($1\text{M}$ DAU), 1 upload/user/day, 50 feed views/user/day, 2 MB photo size, 50 KB thumbnail size, and $5\times$ peak multiplier.
  2. **Capacity Estimations**:
     - **Uploads / sec**: $11.57$ uploads/sec (avg), $57.87$ uploads/sec (peak).
     - **Feed views / sec**: $578.70$ views/sec (avg), $2,893.52$ views/sec (peak).
     - **Storage / year**: $2.05\text{ TB/day} \rightarrow 748.25\text{ TB/year}$ ($730\text{ TB}$ originals + $18.25\text{ TB}$ thumbnails).
  3. **Read-Heavy vs. Write-Heavy Analysis**: 50:1 feed-to-upload ratio ($500:1+$ image asset ratio) establishing an overwhelmingly read-heavy architecture, with detailed design implications.
  4. **Media Storage Strategy**: Comprehensive technical analysis of why photos must **never** be stored as database BLOBs (page bloat, buffer pool starvation, connection exhaustion, backup paralysis) and why dedicated Cloud Object Storage (S3/GCS/R2) is mandatory.
  5. **System Architecture Text Diagram**: Full ASCII/Unicode architecture topology featuring Client, CDN, Load Balancer, Stateless App Servers, Redis Cache Cluster, Primary Database, Read Replica Database, Object Storage, Message Queue, and Thumbnail Workers.
  6. **One-Sentence Component Explanations**: Concise, precise problem-solution statements for all 9 core architectural components.
  7. **Step-by-Step Upload Flow**: Detailed 9-step end-to-end sequence diagram and explanation illustrating direct presigned uploads, metadata creation, asynchronous message queue dispatch, worker thumbnail processing, and feed cache updates.
  8. **Architectural Trade-Offs**: In-depth analysis of 4 critical trade-offs:
     - Fan-out-on-Write (Push) vs. Fan-out-on-Read (Pull) vs. Hybrid Feed Models.
     - Asynchronous (Queue/Worker) vs. Synchronous Image Processing.
     - Direct-to-Storage (Presigned URLs) vs. App Server Proxying.
     - Read Replicas (Eventual Consistency) vs. Single Primary (Monolithic).
