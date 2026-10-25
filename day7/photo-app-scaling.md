# SnapShare: Photo-Sharing Application Scaling Plan

A comprehensive system architecture and capacity planning specification for **SnapShare**, a high-scale photo-sharing platform where users upload photos and scroll personalized feeds of accounts they follow.

---

## 1. Assumptions & Starting Facts

### 1.1 Given Facts
- **Registered Users:** $10,000,000$ (10 million registered users)
- **Daily Active User Ratio:** $10\%$ active each day
- **Daily Uploads per Active User:** $1$ photo per active user per day
- **Daily Feed Views per Active User:** $50$ feed pages per active user per day
- **Average Original Photo Size:** $2\text{ MB}$ ($2,000\text{ KB}$)
- **Average Thumbnail Size:** $50\text{ KB}$ ($0.05\text{ MB}$)
- **Peak Traffic Multiplier:** $5\times$ average load
- **Time Conversions:** $1\text{ day} = 24\text{ hours} = 1,440\text{ minutes} = 86,400\text{ seconds}$; $1\text{ year} = 365\text{ days}$

### 1.2 Additional Architectural Assumptions
- **Storage Metrics:** SI decimal standard ($1\text{ MB} = 1,000\text{ KB}$, $1\text{ GB} = 1,000\text{ MB}$, $1\text{ TB} = 1,000\text{ GB}$) is used for baseline storage calculations, with binary ($1\text{ TiB} = 1,024\text{ GiB}$) equivalents noted.
- **Feed Page Size:** Each feed view returns metadata for $10$ to $20$ posts and displays thumbnail images rather than full-resolution images to conserve bandwidth and reduce client load time.
- **Data Retention:** Photo and thumbnail files are retained indefinitely (permanent storage); read replicas and caches absorb read spikes.

### 1.3 Daily Active Users (DAU) Calculation
$$\text{DAU} = \text{Total Registered Users} \times \text{Daily Active Ratio}$$
$$\text{DAU} = 10,000,000 \times 0.10 = 1,000,000\text{ Daily Active Users (1 Million DAU)}$$

---

## 2. Capacity Estimations & Calculations

### 2.1 Uploads Per Second (Writes)
Each active user uploads $1$ photo daily:
$$\text{Total Daily Uploads} = 1,000,000\text{ DAU} \times 1\text{ photo/day} = 1,000,000\text{ photos/day}$$

- **Average Uploads Per Second:**
  $$\text{UPS}_{\text{avg}} = \frac{1,000,000\text{ uploads}}{86,400\text{ seconds}} \approx 11.57\text{ uploads/second}\quad (\approx 12\text{ uploads/sec})$$

- **Peak Uploads Per Second ($5\times$ peak multiplier):**
  $$\text{UPS}_{\text{peak}} = 11.574 \times 5 \approx 57.87\text{ uploads/second}\quad (\approx 58\text{ uploads/sec})$$

---

### 2.2 Feed Views Per Second (Reads)
Each active user views $50$ feed pages daily:
$$\text{Total Daily Feed Views} = 1,000,000\text{ DAU} \times 50\text{ views/day} = 50,000,000\text{ views/day}$$

- **Average Feed Views Per Second:**
  $$\text{VPS}_{\text{avg}} = \frac{50,000,000\text{ views}}{86,400\text{ seconds}} \approx 578.70\text{ views/second}\quad (\approx 579\text{ views/sec})$$

- **Peak Feed Views Per Second ($5\times$ peak multiplier):**
  $$\text{VPS}_{\text{peak}} = 578.7037 \times 5 \approx 2,893.52\text{ views/second}\quad (\approx 2,894\text{ views/sec})$$

---

### 2.3 Photo & Thumbnail Storage Per Year
Every photo uploaded produces two distinct binary objects:
1. **Original Photo:** $2\text{ MB}$
2. **Thumbnail Image:** $50\text{ KB} = 0.05\text{ MB}$
3. **Total Media Size per Upload:** $2\text{ MB} + 0.05\text{ MB} = 2.05\text{ MB}$

#### Daily Storage Accumulation:
- **Original Photos:** $1,000,000\text{ uploads} \times 2\text{ MB} = 2,000,000\text{ MB} = 2,000\text{ GB} = 2.00\text{ TB/day}$
- **Thumbnails:** $1,000,000\text{ uploads} \times 50\text{ KB} = 50,000,000\text{ KB} = 50\text{ GB} = 0.05\text{ TB/day}$
- **Total Storage Added Per Day:** $2.00\text{ TB} + 0.05\text{ TB} = 2.05\text{ TB/day}$

#### Yearly Storage Accumulation ($365\text{ days}$):
- **Original Photos Storage / Year:**
  $$\text{Storage}_{\text{originals}} = 2.00\text{ TB/day} \times 365\text{ days} = 730\text{ TB/year}$$
- **Thumbnails Storage / Year:**
  $$\text{Storage}_{\text{thumbnails}} = 0.05\text{ TB/day} \times 365\text{ days} = 18.25\text{ TB/year}$$
- **Total Combined Storage Per Year:**
  $$\text{Storage}_{\text{total}} = 730\text{ TB} + 18.25\text{ TB} = 748.25\text{ TB/year}\quad (\approx 0.748\text{ PB/year})$$
  *(In binary units: $748.25 \times 10^{12} \text{ bytes} \div 1024^4 \approx 680.53\text{ TiB/year}$)*

---

### 2.4 Capacity Summary Table

| Metric | Daily Volume | Average Rate | Peak Rate ($5\times$) | Annual Accumulation |
| :--- | :--- | :--- | :--- | :--- |
| **Active Users (DAU)** | $1,000,000$ users | — | — | — |
| **Photo Uploads (Writes)** | $1,000,000$ uploads | $11.57$ uploads/sec | $57.87$ uploads/sec | $365,000,000$ photos |
| **Feed Views (Reads)** | $50,000,000$ views | $578.70$ views/sec | $2,893.52$ views/sec | $18.25$ billion views |
| **Original Photo Storage** | $2.00$ TB/day | $23.15$ MB/sec write | $115.74$ MB/sec write | $730.00$ TB/year |
| **Thumbnail Storage** | $50.00$ GB/day | $0.58$ MB/sec write | $2.89$ MB/sec write | $18.25$ TB/year |
| **Total Media Storage** | **$2.05$ TB/day** | **$23.73$ MB/sec write** | **$118.63$ MB/sec write** | **$748.25$ TB/year** |

---

## 3. Read-Heavy vs. Write-Heavy Analysis & Architectural Impact

### 3.1 System Characterization
SnapShare is **massively read-heavy**.

Comparing direct user interactions:
- **Write Operations (Uploads):** $1,000,000$ requests/day
- **Read Operations (Feed Views):** $50,000,000$ requests/day
- **Read-to-Write Ratio:**
  $$\text{Ratio} = \frac{50,000,000\text{ reads}}{1,000,000\text{ writes}} = 50:1$$

For every $1$ photo uploaded, users request $50$ feed page views. Furthermore, because each feed page displays multiple image assets ($10$–$20$ thumbnails/photos per view), the raw asset read-to-write ratio easily exceeds **$500:1$ to $1000:1$**.

### 3.2 Design Consequences & Architectural Implications
1. **Aggressive Edge Caching (CDN):** Over $95\%$ of all read traffic consists of fetching static media (photos and thumbnails). Offloading static media distribution to a globally distributed Content Delivery Network (CDN) guarantees low sub-50ms latency for global users and prevents our application origin servers from collapsing under multi-gigabit media egress demands.
2. **In-Memory Feed Caching:** Querying relational databases for feed timelines on every single request would quickly overwhelm database connections. We must implement an in-memory cache layer (e.g., Redis) to hold precomputed feed IDs, user profile snippets, and post metadata.
3. **Primary / Read-Replica Database Segregation:** Because write throughput is modest ($11.57$ avg / $57.87$ peak writes/sec) while read throughput is intense ($578.70$ avg / $2,894$ peak reads/sec), the database layer must isolate writes on a single Primary database instance while routing feed and profile queries across horizontally scalable Read Replicas.
4. **Asynchronous Non-Blocking Write Path:** Photo uploads and image transformations (like resizing thumbnails) must never block the application thread. Heavy processing is deferred to an asynchronous message queue and background worker pool so upload APIs remain responsive and lightweight.

---

## 4. Media Storage Strategy: Why Photos Do NOT Belong in the Database

### 4.1 The Pitfalls of Storing Photos as Database BLOBs
Storing raw binary image files ($2\text{ MB}$ each) inside database tables (such as `BLOB` or `BYTEA` columns) causes catastrophic scaling and operational failures:
1. **Severe Database Bloat & Storage Inefficiency:** Relational database storage engines (e.g., MySQL InnoDB, PostgreSQL) organize data into fixed-size pages (typically $8\text{ KB}$–$16\text{ KB}$). A single $2\text{ MB}$ photo fragments across hundreds of pages, causing massive page bloat, severe table fragmentation, and rapid exhaustion of provisioned disk space ($748.25\text{ TB}$ in just one year).
2. **Buffer Pool & Memory Starvation:** Databases rely on keeping active indexes and hot data pages in RAM (e.g., the InnoDB Buffer Pool). Reading multi-megabyte binary payloads into memory continually evicts critical indexes and transactional rows, reducing cache hit rates to zero and forcing disk I/O thrashing for ordinary queries.
3. **Connection & Thread Exhaustion:** Transferring $2\text{ MB}$ photos over database connections holds database connection threads open for seconds over slow client networks. Database connection pools are resource-constrained (typically capped in the hundreds); streaming large files directly through database connections rapidly exhausts the pool, causing entire backend outages.
4. **Devastating Backup & Replication Costs:** Database backups (`pg_dump`, binary snapshots) and replication to read replicas require duplicating the entire transaction log and database image. Replicating hundreds of gigabytes of new binary data daily across database replicas induces extreme replication lag, huge network overhead, and hours-long backup restoration windows.
5. **Prohibitive Financial Cost:** High-performance database storage (provisioned high-IOPS NVMe SSDs) costs between $\$0.10$ and $\$0.25$ per GB/month, making petabyte-scale storage cost-prohibitive compared to specialized storage solutions.

### 4.2 Where Photos Go Instead: Dedicated Object Storage
Photo files must be stored in a dedicated **Cloud Object Storage Service** (such as Amazon S3, Google Cloud Storage, Cloudflare R2, or MinIO):
- **Specialized Binary Handling:** Object storage is architected specifically for unstructured, immutable binary data of arbitrary size, offering virtually unlimited horizontal scalability.
- **Extreme Durability & Availability:** Standard object stores provide $99.999999999\%$ (11 nines) of annual data durability with automatic multi-datacenter geographic redundancy.
- **Cost Effectiveness:** Object storage costs approximately $\$ 0.015$–$\$ 0.023$ per GB/month (nearly $10\times$ cheaper than database SSDs), with automated lifecycle policies to transition aged photos to cold archive tiers (e.g., S3 Glacier) for even lower costs.
- **Native CDN Integration & Presigned Direct Access:** Object storage seamlessly serves as an origin for CDNs, supports byte-range requests for streaming, and allows direct-to-bucket uploads via secure, short-lived presigned URLs, bypassing application servers entirely.

### 4.3 Database Role: Lightweight Metadata Only
The relational database stores only compact, indexed metadata pointing to object storage locations:
```sql
CREATE TABLE photos (
    id             BIGSERIAL PRIMARY KEY,
    user_id        BIGINT NOT NULL REFERENCES users(id),
    original_url   VARCHAR(512) NOT NULL, -- e.g., "https://s3.amazonaws.com/snapshare-media/photos/2026/10/img_9872.jpg"
    thumbnail_url  VARCHAR(512),          -- e.g., "https://s3.amazonaws.com/snapshare-media/thumbs/2026/10/img_9872_thumb.jpg"
    file_size      INT NOT NULL,          -- in bytes
    width          SMALLINT NOT NULL,
    height         SMALLINT NOT NULL,
    caption        TEXT,
    status         VARCHAR(20) NOT NULL DEFAULT 'processing', -- 'processing', 'active', 'deleted'
    created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```
Each metadata row occupies less than $1\text{ KB}$, allowing millions of records to fit effortlessly into relational memory buffers.

---

## 5. System Architecture Diagram

```
                              +---------------------------------------+
                              |         Clients / Mobile Apps         |
                              +---------------------------------------+
                                   |                             ^
       [1] Upload Photo (Direct)   |                             | [Read Media]
       or Presigned URL Request    |                             | Photos & Thumbs
                                   v                             |
        +-----------------------------------+             +---------------------+
        |           Load Balancer           |             |         CDN         |
        |      (Nginx / AWS ALB / Envoy)    |             | (Cloudflare / CF)   |
        +-----------------------------------+             +---------------------+
                         |                                           ^
                         | [HTTP Requests]                           | [Origin Fetch]
                         v                                           |
        +-----------------------------------+                        |
        |        App Server Cluster         |                        |
        |    (Stateless REST / GraphQL)     |                        |
        +-----------------------------------+                        |
          |               |               |                          |
 [Queries]|       [Writes]|       [Queue] |                          |
          v               v               v                          |
+-------------------+ +-------------+ +--------------------+         |
|   Cache Cluster   | | Primary DB  | |   Message Queue    |         |
|   (Redis Feed /   | | (PostgreSQL)| | (RabbitMQ / SQS)   |         |
|   Timeline Store) | +-------------+ +--------------------+         |
+-------------------+        |                  |                    |
          ^                  | [Async Repl]     | [Consume Job]      |
          |                  v                  v                    |
          |           +-------------+ +--------------------+         |
          |           | Read Replica| |  Thumbnail Worker  |         |
          +-----------| (PostgreSQL)| |     (Python / Go)  |         |
     [Populate Cache] +-------------+ +--------------------+         |
                                                |                    |
                                                | [Store Thumbnails] |
                                                v                    |
                                      +------------------------------------+
                                      |           Object Storage           |
                                      |        (Amazon S3 / GCS / R2)      |
                                      |   - Original Photos (2 MB)         |
                                      |   - Generated Thumbnails (50 KB)   |
                                      +------------------------------------+
```

---

## 6. Component Explanations (One Sentence per Component)

1. **CDN (Content Delivery Network):** Caches static photos and thumbnails at geographically distributed edge points of presence near end users, drastically reducing delivery latency and shielding origin infrastructure from petabyte-scale egress traffic.
2. **Load Balancer:** Distributes incoming user traffic evenly across the stateless application server cluster using health checks and round-robin or least-connections routing to eliminate single points of failure.
3. **App Servers:** Execute core application business logic, authenticate user sessions, handle post metadata creation, generate presigned upload URLs, and assemble personalized feeds.
4. **Cache (In-Memory Redis):** Stores precomputed user feed timelines, follower lists, and hot photo metadata in high-speed RAM to serve high-volume feed requests without touching the relational database.
5. **Database (Primary):** Serves as the authoritative source of truth for transactional consistency, strictly managing write operations for user accounts, follower relationships, and photo metadata records.
6. **Database (Read Replica):** Scales read capacity horizontally by executing read-only SQL queries for follower graphs, user profiles, and post queries asynchronously replicated from the Primary database.
7. **Object Storage:** Stores all immutable binary assets—both original $2\text{ MB}$ photos and generated $50\text{ KB}$ thumbnails—in an infinitely scalable, highly durable, and cost-effective distributed storage pool.
8. **Message Queue:** Buffers background image processing tasks reliably, decoupling upload requests from CPU-intensive thumbnail generation so application servers remain responsive under peak write spikes.
9. **Thumbnail Worker:** Consumes background jobs from the message queue to download original photos from object storage, resize them into optimized $50\text{ KB}$ thumbnails, upload the thumbnails back to object storage, and update photo records in the database.

---

## 7. Step-by-Step Flow of Uploading a Photo

```
Client              App Server            Primary DB         Object Storage       Message Queue       Worker
  |                      |                    |                    |                    |               |
  |-- (1) Request Upload |                    |                    |                    |               |
  |--------------------->|                    |                    |                    |               |
  |                      |-- (2) Create Pending                    |                    |               |
  |                      |------------------->|                    |                    |               |
  |                      |                    |                    |                    |               |
  |<- (3) Presigned URL -|                    |                    |                    |               |
  |----------------------|                    |                    |                    |               |
  |                                           |                    |                    |               |
  |-- (4) Direct Binary Upload (2 MB) ---------------------------->|                    |               |
  |                                           |                    |                    |               |
  |-- (5) Confirm Upload Completed ---------->|                    |                    |               |
  |                      |                    |                    |                    |               |
  |                      |-- (6) Publish Job ------------------------------------------>|               |
  |                      |                    |                    |                    |               |
  |<- (7) 202 Accepted --|                    |                    |                    |               |
  |                      |                    |                    |                    |               |
  |                      |                    |                    |                    |-- (8) Poll -->|
  |                      |                    |                    |                    |<--------------|
  |                      |                    |                    |                    |               |
  |                      |                    |                    |<- (9) Fetch Orig --|               |
  |                      |                    |                    |----------------------------------->|
  |                      |                    |                    |                    |   [Generate   ]
  |                      |                    |                    |                    |   [Thumbnail  ]
  |                      |                    |                    |<- (10) Put Thumb ------------------|
  |                      |                    |                    |----------------------------------->|
  |                      |                    |                    |                    |               |
  |                      |                    |<- (11) Update URL & Active -------------|               |
  |                      |                    |-------------------------------------------------------->|
```

### Detailed Sequence:

1. **Step 1: Upload Initiation & Presigned URL Request**  
   The client application sends an authenticated `POST /api/v1/photos/upload-intent` request to the Load Balancer, which routes it to an App Server with file metadata (filename, content type, image dimensions, caption).
2. **Step 2: Database Record Initialization**  
   The App Server verifies user permissions, validates file metadata (restricting file types to PNG/JPEG and sizes under $10\text{ MB}$), generates a unique UUID (e.g., `img_9872.jpg`), and inserts a metadata row into the **Primary Database** with status set to `'pending'`.
3. **Step 3: Issuing Presigned Upload Credentials**  
   The App Server creates a cryptographically signed, short-lived (e.g., 5-minute expiry) S3 Presigned URL that grants the client permission to write directly to a designated bucket path (`photos/2026/10/img_9872.jpg`). The server returns this URL along with the photo ID to the client.
4. **Step 4: Direct Binary Upload to Object Storage**  
   The client uploads the raw $2\text{ MB}$ photo binary directly from the user's mobile device to **Object Storage** via HTTP `PUT` over TLS. Bypassing the application servers preserves internal network bandwidth and prevents connection pooling bottlenecks.
5. **Step 5: Upload Confirmation**  
   Upon receiving a `200 OK` from Object Storage, the client notifies the App Server via `POST /api/v1/photos/{id}/complete`.
6. **Step 6: Enqueueing Background Thumbnail Job**  
   The App Server writes a task message containing `{ photo_id: 9872, original_s3_key: "photos/2026/10/img_9872.jpg", user_id: 42 }` to the **Message Queue** (e.g., RabbitMQ or SQS) and immediately responds to the client with `202 Accepted`.
7. **Step 7: Worker Consumption & Thumbnail Processing**  
   A dedicated **Thumbnail Worker** pulls the task from the queue, streams the original $2\text{ MB}$ photo from Object Storage, and processes the image using an optimized image library (e.g., libvips or Pillow) to produce a crisp, compressed $50\text{ KB}$ thumbnail image.
8. **Step 8: Storing Thumbnail & Finalizing Metadata**  
   The worker uploads the generated $50\text{ KB}$ thumbnail to Object Storage (`thumbs/2026/10/img_9872_thumb.jpg`), updates the photo row in the **Primary Database** with the `thumbnail_url` and updates `status = 'active'`.
9. **Step 9: Feed Invalidation / Fan-out Cache Update**  
   The worker publishes an event or writes directly to the **Redis Cache** to append the new photo ID to the user's followers' cached timelines or invalidate stale feed cache entries. When followers refresh their feed, the new post and thumbnail are instantly available.

---

## 8. Architectural Trade-Offs

### Trade-Off 1: Feed Generation Strategy — Fan-out-on-Write (Push) vs. Fan-out-on-Read (Pull)

| Dimension | Fan-out-on-Write (Push Model) | Fan-out-on-Read (Pull Model) | SnapShare Choice & Rationale |
| :--- | :--- | :--- | :--- |
| **Mechanics** | When a user posts a photo, background workers push the post ID into every follower's precomputed feed cache. | When a user opens their feed, the system queries the database/cache for the latest posts of all followed users and merges them dynamically. | **Hybrid Architecture (Push for standard users, Pull for high-follower celebrities).** |
| **Read Performance** | Extremely fast ($O(1)$ lookup from Redis); perfect for our $50:1$ read-heavy workload ($2,894$ peak reads/sec). | Slower ($O(N \log K)$); requires multi-table joins or multi-key cache fetches across hundreds of followed creators. | Precomputing feeds ensures sub-50ms feed page loads for regular users. |
| **Write Impact** | Write amplification occurs when a user with $500,000$ followers posts, triggering $500,000$ cache writes. | Low write overhead; photo upload only writes $1$ database record and $0$ follower feed caches. | For celebrities/influencers (followers $> 25,000$), we use the **Pull** approach, merging their posts at read time to avoid devastating write spikes. |
| **Resource Cost** | High memory usage in Redis storing redundant feed lists for inactive users. | High CPU and database query overhead on read spikes. | Only active users (DAU $1\text{M}$) retain active cached timelines in Redis with a 72-hour TTL. |

---

### Trade-Off 2: Image Processing — Asynchronous (Queue + Worker) vs. Synchronous (In-Request)

| Dimension | Asynchronous Processing (Our Architecture) | Synchronous Processing (Alternative) |
| :--- | :--- | :--- |
| **User Experience (Latency)** | **Ultra-Low Upload Latency:** Client finishes upload in milliseconds once bytes reach Object Storage; does not wait for image resizing. | **High Latency:** User client must wait $500\text{ms}$–$2000\text{ms}$ while the application server decodes, scales, and compresses the image before receiving an HTTP response. |
| **System Stability & Reliability** | **High Isolation:** If thousands of users upload simultaneously during a live event ($57.87+$ uploads/sec), spikes accumulate safely in the message queue without crashing web servers. Workers scale independently via autoscaling. | **Catastrophic Failure Risk:** Heavy CPU-bound image encoding operations run on application web servers. A traffic surge exhausts server CPU and memory, dropping web connections and taking down the API. |
| **Data Consistency** | **Eventual Consistency:** Followers may see a post in their feed a few seconds before the thumbnail finishes rendering (handled via placeholder/skeleton screens). | **Strong Consistency:** Original photo and thumbnail are guaranteed to be available simultaneously at the moment of request completion. |
| **Operational Complexity** | Requires maintaining message broker infrastructure (RabbitMQ/SQS) and separate worker process deployments. | Simpler codebase and fewer infrastructure components to manage. |
| **Decision & Verdict** | **Selected Asynchronous:** For a 10M-user platform, decoupling CPU-heavy image processing via a queue and dedicated workers is mandatory to safeguard core API availability and guarantee smooth user uploads. |

---

### Trade-Off 3: Media Upload Routing — Direct-to-Storage (Presigned URLs) vs. Application Server Proxying

| Dimension | Direct-to-Storage via Presigned URLs (Our Architecture) | Proxying Uploads via App Servers (Alternative) |
| :--- | :--- | :--- |
| **App Server Bandwidth** | **Zero Media Ingress:** The $2\text{ MB}$ payload bypasses the app cluster entirely, flowing directly from client to Cloud Object Storage. App servers only exchange tiny JSON metadata payloads ($< 1\text{ KB}$). | **Saturated Network:** With $58$ peak uploads/sec at $2\text{ MB}$ each, app servers must ingest and forward over $116\text{ MB/s}$ ($928\text{ Mbps}$) of inbound network traffic, bottlenecking API throughput. |
| **Resource Consumption** | App server memory and CPU remain minimal since no multipart binary streams are buffered or parsed in app processes. | App servers consume significant RAM buffering file streams in memory or temp disks, requiring larger and more expensive server instances. |
| **Inspection & Validation** | Requires coordinating upload confirmation via webhooks or client notifications; deep virus/content scanning must happen asynchronously after bucket arrival. | App server can inspect bytes, check magic numbers, and reject invalid images synchronously before saving to storage. |
| **Decision & Verdict** | **Selected Direct-to-Storage:** Presigned URLs eliminate the primary infrastructure cost and network bottleneck of photo-sharing backends, allowing a lean cluster of application servers to handle millions of users effortlessly. |

---

### Trade-Off 4: Database Scaling — Read Replicas with Eventual Consistency vs. Single Monolithic Primary

| Dimension | Read Replicas (Our Architecture) | Single Monolithic Primary Database (Alternative) |
| :--- | :--- | :--- |
| **Read Throughput** | Virtually unlimited horizontal scalability; add read replica nodes behind a read-pool load balancer to absorb thousands of feed queries per second. | Hard vertical limit; single database hardware limits maximum IOPS and connection threads, capping platform growth. |
| **Replication Lag & Consistency** | **Eventual Consistency:** Asynchronous database replication introduces a slight replication lag (typically $10\text{ms}$–$200\text{ms}$). A user refreshing immediately after posting might occasionally read from a replica that hasn't received the latest write. | **Strict ACID Consistency:** All reads and writes hit the same instance, guaranteeing instantaneous consistency for all reads. |
| **Mitigation Strategy** | Implement "Read-Your-Own-Writes" routing: requests from the author for their own recent posts are routed to the Primary DB for 5 seconds; all general feed queries hit Read Replicas. | Requires expensive high-end enterprise database hardware (scale-up) with high risk of single-point failure. |
| **Decision & Verdict** | **Selected Read Replicas:** The read-heavy nature of SnapShare ($50:1$ ratio, up to $2,894$ views/sec peak) makes read replication essential for reliability, resilience, and horizontal cost efficiency. |
