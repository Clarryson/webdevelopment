# SnapShare: Complete Scaling Plan & System Architecture Guide (Day 7)

Welcome to the comprehensive, beginner-friendly architectural guide for **SnapShare**—a photo-sharing application built to handle millions of active users uploading pictures and scrolling through social feeds.

This document breaks down every concept, mathematical estimation, architectural component, and engineering trade-off in **plain, everyday layman's terms** with relatable real-world analogies.

---

## Table of Contents
1. [What is SnapShare & Why Do We Need Scaling?](#1-what-is-snapshare--why-do-we-need-scaling)
2. [The Capacity Math in Plain English](#2-the-capacity-math-in-plain-english)
   - [Daily Active Users (DAU)](#21-daily-active-users-dau)
   - [Uploads Per Second (Writes)](#22-uploads-per-second-writes)
   - [Feed Views Per Second (Reads)](#23-feed-views-per-second-reads)
   - [Photo Storage Per Year](#24-photo-storage-per-year)
   - [Summary Table](#25-summary-table)
3. [Read-Heavy vs. Write-Heavy: What It Means](#3-read-heavy-vs-write-heavy-what-it-means)
4. [Why Photos Must NEVER Go Inside the Database](#4-why-photos-must-never-go-inside-the-database)
5. [The Architecture Components (With Everyday Analogies)](#5-the-architecture-components-with-everyday-analogies)
6. [Complete System Architecture Diagram](#6-complete-system-architecture-diagram)
7. [One-Sentence Quick Reference for Components](#7-one-sentence-quick-reference-for-components)
8. [The Life of a Photo: Step-by-Step Upload Flow](#8-the-life-of-a-photo-step-by-step-upload-flow)
9. [Key Engineering Trade-Offs Explained](#9-key-engineering-trade-offs-explained)
10. [Files in this Directory & How to Review](#10-files-in-this-directory--how-to-review)

---

## 1. What is SnapShare & Why Do We Need Scaling?

Imagine an app like Instagram or Pinterest called **SnapShare**. People open the app to post photos of their meals, vacations, and pets, and they scroll through an endless feed of photos shared by friends and creators they follow.

### The Problem: Why a Normal Computer Fails
When you build a project on your laptop, it runs great for you and a few friends. But imagine:
- **10 Million Registered Users** have an account on SnapShare.
- **1 Million People** use the app every single day.
- They upload **1 million new photos** every day.
- They view **50 million pages of photos** every day.

> **The Restaurant Kitchen Analogy:**  
> Cooking dinner for a family of 4 in your home kitchen is easy. But cooking dinner for 50,000 hungry fans at a stadium during halftime requires a completely different setup: you need multiple chefs, dedicated prep stations, separate order takers, large industrial freezers, and a clear ticketing system.  
> **System scaling** is simply designing that industrial kitchen for computer software so the app never slows down, freezes, or crashes.

---

## 2. The Capacity Math in Plain English

Before writing code or buying servers, software architects do "back-of-the-envelope" math. We need to know how much traffic to expect and how much storage space we must buy.

### 2.1 Daily Active Users (DAU)
- **Total registered users:** $10,000,000$ (10 Million).
- **Active percentage:** $10\%$ of registered users open the app on any given day.

$$\text{Daily Active Users (DAU)} = 10,000,000 \times 10\% = 1,000,000\text{ people each day}$$

> **The Gym Analogy:**  
> Just like a fitness club might have 10,000 total signed-up members, but only about 1,000 show up to exercise on an average Tuesday. Our "active gym-goers" count is **1 Million people**.

---

### 2.2 Uploads Per Second (Writes)
Each active user uploads $1$ photo every day.
- **Total daily uploads:** $1,000,000\text{ active users} \times 1\text{ photo} = 1,000,000\text{ photos per day}$.
- **Seconds in one full day:** $24\text{ hours} \times 60\text{ minutes} \times 60\text{ seconds} = 86,400\text{ seconds}$.

#### Average Uploads Per Second:
$$\text{Average Uploads/sec} = \frac{1,000,000\text{ uploads}}{86,400\text{ seconds}} \approx 11.57\text{ uploads/second}$$
On average, about **$12$ photos arrive on our servers every second**, day and night.

#### Peak Uploads Per Second ($5\times$ Rush Hour):
People don't upload photos at a steady pace while sleeping at 3 AM. Uploads peak during lunch breaks, evening leisure hours, holidays, and concert events. We use an industry-standard **$5\times$ peak multiplier**:
$$\text{Peak Uploads/sec} = 11.574 \times 5 \approx 57.87\text{ uploads/second}$$
During the busiest rush hours, **almost $58$ photos are uploaded every single second**.

---

### 2.3 Feed Views Per Second (Reads)
Each active user scrolls through $50$ feed pages every day.
- **Total daily feed views:** $1,000,000\text{ users} \times 50\text{ pages} = 50,000,000\text{ feed views per day}$.

#### Average Feed Views Per Second:
$$\text{Average Views/sec} = \frac{50,000,000\text{ views}}{86,400\text{ seconds}} \approx 578.70\text{ views/second}$$
On average, users are tapping "refresh" or scrolling to load a new page of photos **$579$ times every second**.

#### Peak Feed Views Per Second ($5\times$ Rush Hour):
$$\text{Peak Views/sec} = 578.7037 \times 5 \approx 2,893.52\text{ views/second}$$
During rush hour, our system must deliver **almost $2,894$ feed pages every single second** with zero lag!

---

### 2.4 Photo Storage Per Year
Every time a user uploads a photo, our system stores two things:
1. **The Original High-Resolution Photo:** $2\text{ MB}$ (Megabytes).
2. **A Small Thumbnail Preview:** $50\text{ KB}$ ($0.05\text{ MB}$) used for quick grid scrolling.
3. **Total storage per upload:** $2\text{ MB} + 0.05\text{ MB} = 2.05\text{ MB}$.

#### Daily Storage Added:
- **Originals:** $1,000,000 \times 2\text{ MB} = 2,000,000\text{ MB} = 2,000\text{ GB} = \mathbf{2\text{ Terabytes (TB) per day}}$.
- **Thumbnails:** $1,000,000 \times 50\text{ KB} = 50,000,000\text{ KB} = 50\text{ GB} = \mathbf{0.05\text{ TB per day}}$.
- **Daily Total:** $2.00\text{ TB} + 0.05\text{ TB} = \mathbf{2.05\text{ TB added every single day}}$.

#### Annual Storage Accumulation ($365\text{ days}$):
- **Original Photos / Year:** $2\text{ TB/day} \times 365 = \mathbf{730\text{ TB/year}}$.
- **Thumbnails / Year:** $0.05\text{ TB/day} \times 365 = \mathbf{18.25\text{ TB/year}}$.
- **Total Storage / Year:** $730 + 18.25 = \mathbf{748.25\text{ Terabytes per year}}$ ($\approx 0.748\text{ Petabytes}$).

> **How Big is 748 Terabytes?**  
> If an average high-end smartphone has $256\text{ GB}$ of storage, $748\text{ TB}$ is equivalent to filling up nearly **$3,000$ brand new iPhones** to maximum capacity every single year!

---

### 2.5 Summary Table

| Metric | Daily Volume | Average Speed | Peak Rush Hour ($5\times$) | 1-Year Total |
| :--- | :--- | :--- | :--- | :--- |
| **Active Users (DAU)** | $1,000,000$ users | — | — | — |
| **Photo Uploads (Writes)** | $1,000,000$ photos | $11.57$ photos/sec | $57.87$ photos/sec | $365,000,000$ photos |
| **Feed Views (Reads)** | $50,000,000$ views | $578.70$ views/sec | $2,893.52$ views/sec | $18.25$ billion views |
| **Original Photos Storage** | $2.00$ TB/day | $23.15$ MB/sec written | $115.74$ MB/sec written | $730.00$ TB/year |
| **Thumbnail Storage** | $50.00$ GB/day | $0.58$ MB/sec written | $2.89$ MB/sec written | $18.25$ TB/year |
| **Total Media Storage** | **$2.05$ TB/day** | **$23.73$ MB/sec written** | **$118.63$ MB/sec written** | **$748.25$ TB/year** |

---

## 3. Read-Heavy vs. Write-Heavy: What It Means

### The Verdict: SnapShare is Overwhelmingly Read-Heavy!
Let's compare the daily actions:
- **Writes (Uploading Photos):** $1,000,000$ requests per day.
- **Reads (Viewing Feeds):** $50,000,000$ requests per day.

$$\text{Read to Write Ratio} = \frac{50,000,000\text{ reads}}{1,000,000\text{ writes}} = \mathbf{50:1}$$

For every single photo someone uploads, people view **50 feed pages**. And because each feed page displays between 10 to 20 thumbnails, the raw number of picture download requests is between **$500:1$ and $1000:1$** compared to uploads!

### What This Means For Our Engineering Design:
1. **Focus on Caching:** Since people read the same posts repeatedly, we should keep copies of feeds and pictures in super-fast memory (RAM) and at local internet hubs (CDNs) so we don't have to recalculate or re-fetch them from the main database every time.
2. **Make Reads Independent of Writes:** We must split the database into one machine for saving new data (Writes) and multiple duplicate machines for viewing data (Reads).
3. **Keep Uploads Painless & Quick:** When someone uploads a photo, don't make them wait on a loading bar while the server resizes it. Take the photo immediately, say "Got it!", and do the heavy thumbnail work quietly in the background.

---

## 4. Why Photos Must NEVER Go Inside the Database

A common beginner mistake is to store photo files directly inside a SQL database table as a binary blob (`BLOB`). In a production system, doing this will completely destroy performance.

### The Real-World Analogy: The Filing Cabinet vs. The Warehouse
> Imagine an office with a metal **filing cabinet**. A filing cabinet is designed to hold thin, neat paper forms (names, phone numbers, addresses, account IDs).  
> If you start shoving thick, heavy, leather-bound photo albums inside the filing cabinet:
> - The drawers jam and won't slide open.
> - The cabinet gets so heavy the floor cracks.
> - When someone asks for John's phone number, the clerk has to dig through piles of heavy photo albums just to find the index card.
> - Making a safety photocopy of the cabinet takes 3 days instead of 5 minutes.

### The Technical Reasons:
1. **Database Bloat & Memory Thrashing:** Relational databases (like PostgreSQL or MySQL) keep small memory caches (RAM) of popular records and indexes. Giant $2\text{ MB}$ photos push the valuable indexes out of RAM, forcing the computer to constantly read from slow disks.
2. **Connection Exhaustion:** Uploading or downloading a $2\text{ MB}$ photo takes time over cellular connections. A database can only hold a few hundred simultaneous connections. If 500 people download photos directly from the database at once, the entire database runs out of connections and crashes for everyone!
3. **Backup Nightmares:** Backing up a database with $748\text{ TB}$ of binary data takes days, slows down live users, and causes replication to fall behind.
4. **Huge Costs:** High-speed SSD database storage is very expensive ($\$0.10$–$\$0.25$ per GB/month). 

### Where Do Photos Go Instead? **Object Storage**
We store the photos in dedicated **Cloud Object Storage** (like Amazon S3, Google Cloud Storage, or MinIO):
- **Like a giant, automated warehouse:** Object storage is built specifically for huge, unchanging files. It has virtually infinite space and costs $10\times$ less ($\approx \$0.02$ per GB/month).
- **The Database Only Stores The Receipt (Metadata):**  
  The database keeps a simple, clean, lightweight text record:
  - `photo_id`: 10482
  - `user_id`: 42
  - `photo_url`: `"https://s3.amazonaws.com/snapshare/photos/vacation.jpg"`
  - `thumbnail_url`: `"https://s3.amazonaws.com/snapshare/thumbs/vacation_thumb.jpg"`
  - `caption`: `"Sunset at the beach!"`
  - `uploaded_at`: `"2026-10-25 18:30:00"`

The database stays tiny, lightning fast, and easily searchable, while the heavy image files live safely in the warehouse!

---

## 5. The Architecture Components (With Everyday Analogies)

Here is a breakdown of all 9 core pieces of the SnapShare system, explained with everyday analogies:

### 1. Clients (Mobile Apps & Web Browsers)
- **What it is:** The Instagram-like app on the user's iPhone, Android, or laptop.
- **Analogy:** The customer walking into the store or holding the catalog.

### 2. CDN (Content Delivery Network - e.g., Cloudflare, CloudFront)
- **What problem it solves:** Distance causes delay. If our main servers are in Virginia (USA), a user scrolling in London, Tokyo, or Nairobi would wait seconds for each picture to cross the ocean.
- **How it works:** The CDN has thousands of small servers located all around the world. The first time someone in Nairobi opens a photo, the CDN downloads a copy and keeps it locally. The next 10,000 users in Nairobi get the photo instantly from their local neighborhood server in milliseconds!
- **Analogy:** Your local neighborhood convenience store having fresh milk so you don't have to drive 200 miles to the dairy farm every morning.

### 3. Load Balancer (e.g., NGINX, AWS ALB, Envoy)
- **What problem it solves:** If 100,000 people hit a single server at once, it overheats and crashes.
- **How it works:** The load balancer sits at the front door. As requests arrive, it distributes them evenly across a fleet of application servers: *"Server 1 take this request, Server 2 take that one, Server 3 take the next."* If Server 2 breaks down, the load balancer stops sending it traffic automatically.
- **Analogy:** The friendly usher or bank queue manager directing people to the next available teller window.

### 4. App Servers (Stateless Web & API Cluster)
- **What problem it solves:** The brains of the operation that handle business logic.
- **How it works:** App servers check if passwords are correct, generate feed timelines, grant upload permissions, and send responses. They are "stateless," meaning they don't store user files locally—any app server can handle any request from any user.
- **Analogy:** The busy kitchen waitstaff taking orders, checking menus, and bringing food to tables.

### 5. Cache (In-Memory Redis Cluster)
- **What problem it solves:** Looking up information on a hard drive takes 5 to 10 milliseconds. Looking it up in computer RAM memory takes 0.001 milliseconds (microseconds).
- **How it works:** Redis keeps pre-assembled timelines of recent post IDs and popular user profiles directly inside blazing-fast RAM. When you open your feed, Redis gives you the list of post IDs in the blink of an eye.
- **Analogy:** A sticky note stuck right on the cashier's computer with today's 5 daily specials, so they don't have to walk back to the manager's office to check every time a customer asks.

### 6. Primary Database (PostgreSQL / MySQL - Master)
- **What problem it solves:** You need one single official record book for important permanent data so nothing is lost or corrupted.
- **How it works:** The Primary database handles all **Writes**—new user registrations, new followers, and new photo metadata entries. Because only one server writes to the master ledger, there are never conflicting records.
- **Analogy:** The Chief Accountant with the master ledger who is the only person permitted to record official contracts.

### 7. Database Read Replica (PostgreSQL / MySQL - Replicas)
- **What problem it solves:** If 3,000 people are trying to read from the master bookkeeper every second, the bookkeeper gets overwhelmed and can't write down new records.
- **How it works:** Whenever the Primary database records a new post, it instantly sends a copy to several Read Replicas. All feed queries and profile searches are directed to these replicas, leaving the Primary free to handle new uploads.
- **Analogy:** Photocopied copies of today's newspaper handed out to thousands of readers in the library reading room. Everyone reads freely without bothering the editor writing tomorrow's edition.

### 8. Object Storage (Amazon S3, Google Cloud Storage, Cloudflare R2)
- **What problem it solves:** Safely storing 748 Terabytes of heavy media files cheaply and reliably forever.
- **How it works:** A specialized cloud storage system that stores raw image files across multiple redundant data centers, guaranteeing that pictures are never lost even if an entire building loses power.
- **Analogy:** A secure, climate-controlled, industrial shipping warehouse built specifically for bulky cargo.

### 9. Message Queue (RabbitMQ, Apache Kafka, AWS SQS)
- **What problem it solves:** Image resizing is slow and takes heavy computer processor power. If 1,000 users upload photos simultaneously, the app servers would freeze if they tried to resize all photos on the spot.
- **How it works:** Instead of resizing immediately, the app server creates a small task ticket: *"Please make a 50 KB thumbnail for Photo #10482"* and drops it into the Message Queue. The user immediately receives a message: *"Upload successful!"*
- **Analogy:** The order ticket carousel in a restaurant kitchen where orders are clipped on a wheel so chefs can cook them one by one without the waiter having to stand in the kitchen waiting.

### 10. Thumbnail Worker (Background Worker Fleet)
- **What problem it solves:** The dedicated workers that do the heavy lifting of image processing away from the main website.
- **How it works:** Background worker programs continuously watch the Message Queue. When a ticket arrives, a worker grabs the original $2\text{ MB}$ photo from Object Storage, shrinks it to a crisp $50\text{ KB}$ thumbnail, saves the thumbnail back to Object Storage, and updates the database.
- **Analogy:** The dedicated kitchen prep chef whose only job is to chop vegetables and prepare sides as tickets arrive on the wheel.

---

## 6. Complete System Architecture Diagram

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

## 7. One-Sentence Quick Reference for Components

1. **CDN:** Caches static photos and thumbnails at edge locations close to users worldwide to provide lightning-fast image loading and save origin server bandwidth.
2. **Load Balancer:** Spreads incoming network traffic across multiple application servers so no single server gets overwhelmed or crashes.
3. **App Servers:** Runs the core software logic, validates user logins, manages database queries, and creates personalized user feeds.
4. **Cache (Redis):** Keeps recent feeds, active user profiles, and hot post information in ultra-fast computer RAM memory for sub-millisecond retrieval.
5. **Database (Primary):** Acts as the single authoritative source of truth that safely records all new user data, follower links, and photo metadata.
6. **Database (Read Replica):** Takes copies of the primary data and answers the millions of daily read searches so the primary database is never bogged down.
7. **Object Storage:** Safely stores raw original photos and thumbnails in an infinitely expandable, highly durable, low-cost cloud warehouse.
8. **Message Queue:** Holds background image-processing tasks in an orderly line so heavy resizing work never slows down the user's upload experience.
9. **Thumbnail Worker:** Grabs jobs from the message queue, downloads the original photo, shrinks it into a $50\text{ KB}$ thumbnail, and saves it back to storage.

---

## 8. The Life of a Photo: Step-by-Step Upload Flow

Here is what happens behind the scenes from the moment a user taps **"Share Photo"** on their phone:

```
[User Phone]                     [App Server]                 [Primary DB]                 [Object Storage]              [Queue & Worker]
     |                                |                            |                              |                              |
     |-- 1. I want to upload a photo ->|                           |                              |                              |
     |                                |-- 2. Save metadata (pending)->                            |                              |
     |<- 3. Here is your VIP Pass ----|                            |                              |                              |
     |      (Presigned S3 URL)        |                            |                              |                              |
     |                                |                            |                              |                              |
     |-- 4. Send 2 MB Photo Directly to Storage ------------------------------------------------->|                              |
     |                                |                            |                              |                              |
     |-- 5. Upload Finished! -------->|                            |                              |                              |
     |                                |-- 6. Queue Thumbnail Task -------------------------------------------------------------->|
     |<- 7. 202 Accepted (Done!) -----|                            |                              |                              |
     |                                                             |                              |                              |-- 8. Download, resize
     |                                                             |                              |<-- 9. Upload thumbnail ------|      to 50 KB thumb
     |                                                             |<-- 10. Update status: active -------------------------------|
     |                                                             |        and thumbnail_url                                    |
```

### In Plain English:

1. **Step 1: Asking Permission (Upload Intent)**  
   The phone sends a small message to the App Server: *"User Sarah wants to upload a photo called vacation.jpg that is 2 MB."*
2. **Step 2: Recording the Pending State**  
   The App Server checks Sarah's login, generates a unique photo ID (`photo_10482`), and writes a new row in the **Primary Database** with status `'pending'`.
3. **Step 3: Handing Sarah a "VIP Delivery Pass" (Presigned URL)**  
   Instead of taking the heavy $2\text{ MB}$ file itself, the App Server creates a secure, temporary key (an Amazon S3 Presigned URL) that says: *"Sarah is allowed to upload exactly one file to folder `photos/photo_10482.jpg` within the next 5 minutes."* The server gives this URL to Sarah's phone.
4. **Step 4: Direct Delivery to the Warehouse**  
   Sarah's phone uploads the $2\text{ MB}$ photo directly to **Object Storage**. The photo never touches our app servers, keeping our network lines free and fast!
5. **Step 5: Confirmation Call**  
   Once Object Storage confirms receipt, the phone sends a tiny ping to the App Server: *"Hey, the photo is safely in the warehouse."*
6. **Step 6: Dropping the Task in the Queue**  
   The App Server writes a job ticket into the **Message Queue**: `{ photo_id: 10482, path: "photos/photo_10482.jpg" }`.
7. **Step 7: Instant Success for the User**  
   The App Server immediately tells Sarah's phone: *"All done!"* Sarah is happy because her screen didn't freeze waiting for image compression.
8. **Step 8: Worker Crops and Resizes**  
   A **Thumbnail Worker** picks up the ticket from the queue, downloads the $2\text{ MB}$ photo, and generates an optimized $50\text{ KB}$ thumbnail image.
9. **Step 9: Saving the Thumbnail**  
   The worker uploads the new thumbnail to Object Storage (`thumbs/photo_10482_thumb.jpg`).
10. **Step 10: Going Live**  
    The worker updates the database row to `status = 'active'`, saves the thumbnail URL, and adds the photo ID to Sarah's followers' feeds in the **Redis Cache**. Sarah's friends now see the thumbnail on their screens!

---

## 9. Key Engineering Trade-Offs Explained

In software engineering, there are no perfect solutions—only trade-offs. Here are the 4 big decisions we made for SnapShare:

---

### Trade-Off 1: How to Build the Feed? (Push vs. Pull vs. Hybrid)

How should a user's feed be built when they follow 500 different people?

- **Option A: The "Push" Model (Fan-out-on-Write)**
  - *How it works:* When Alice posts a photo, the server immediately pushes a copy of that photo ID into the feed inbox of all 200 of her followers.
  - *Advantage:* When Alice's followers open the app, their feed is already waiting in Redis. It opens in 10 milliseconds!
  - *The Problem (The Celebrity Problem):* What if Cristiano Ronaldo posts? He has 600 Million followers! If we use the Push model, one single photo upload would force our servers to make 600,000,000 database writes at once, instantly crashing the system.
- **Option B: The "Pull" Model (Fan-out-on-Read)**
  - *How it works:* When Alice posts, we just save it to her profile. We do nothing else. When Bob opens the app, the server searches for all 500 people Bob follows, finds their latest posts, and sorts them by date.
  - *Advantage:* Uploading is dirt cheap and instant, even for celebrities.
  - *The Problem:* Scrolling is slow. Every time someone opens the app, the server has to do expensive, heavy database searches.
- **Our SnapShare Solution: The Smart Hybrid Model!**
  - For **regular users** (under 25,000 followers), we use **Push**. Their feeds are precomputed and instant.
  - For **celebrities** (over 25,000 followers), we use **Pull**. We don't push their posts to millions of inboxes. Instead, when a fan opens their feed, we pull the celebrity's latest post and blend it with their pre-made feed on the fly. Best of both worlds!

---

### Trade-Off 2: Thumbnail Resizing (Asynchronous Worker vs. Synchronous In-Request)

- **Synchronous (Make them wait):** The app server resizes the photo before replying to the user.
  - *Pros:* Simple code; thumbnail is ready immediately.
  - *Cons:* The user has to stare at a spinning wheel for 3 seconds. Worse, if 10,000 people upload at the same time, the server CPUs run at 100% and the entire app crashes.
- **Asynchronous (Use Queue & Worker - Our Choice):** The app server takes the upload, hands the job to a queue, and finishes. Dedicated worker computers process the queue.
  - *Pros:* Sub-second upload times for users. If traffic spikes, jobs just wait safely in the queue without crashing the site.
  - *Cons:* Eventual consistency—there is a 1-to-2 second window where the photo is uploaded but the thumbnail is still being created (we show a clean skeleton loading placeholder during this brief time).

---

### Trade-Off 3: Upload Routing (Direct-to-S3 vs. Through App Servers)

- **Uploading Through App Servers:** The user's phone sends the $2\text{ MB}$ photo to the app server, and the app server forwards it to S3.
  - *The Danger:* At peak times, with 58 uploads per second, our app servers would have to ingest and pass along over **$116\text{ MB}$ of data every second** ($928\text{ Mbps}$). The app servers' network cards would max out, blocking normal user logins and feed requests.
- **Direct-to-S3 with Presigned URLs (Our Choice):** The user's phone uploads directly to the cloud warehouse.
  - *The Benefit:* Our app servers only handle tiny JSON messages ($< 1\text{ KB}$), saving massive amounts of server bandwidth and hosting costs.

---

### Trade-Off 4: Database Replicas (Eventual Consistency vs. Strong Consistency)

- **One Big Central Database:** Everyone reads and writes to the exact same computer.
  - *Pros:* 100% immediate consistency.
  - *Cons:* It cannot handle 2,894 feed views per second during rush hour. You will hit a hard hardware limit.
- **Read Replicas (Our Choice):** We have one Primary database for writes, and multiple Read Replicas for reads.
  - *The Trade-Off (Replication Lag):* It takes about $50$ to $200$ milliseconds for a new write on the Primary to copy over to the Read Replicas. If a user uploads a photo and immediately pulls down to refresh their profile within 0.1 seconds, they might not see their photo for a split second.
  - *Our Fix (Read-Your-Own-Writes):* When a user views their *own* profile, we route their request to the Primary database for the first 5 seconds, while all general feed browsing queries go to the Read Replicas.

---

## 10. Files in this Directory & How to Review

Inside the `day7/` folder, you will find:

1. **[`README.md`](./README.md)** *(This file)*: The detailed, comprehensive, layman-friendly guide breaking down every calculation, concept, and real-world analogy.
2. **[`photo-app-scaling.md`](./photo-app-scaling.md)**: The formal engineering scaling plan and system architecture specification containing all mathematical proofs, ASCII architecture diagrams, one-sentence component definitions, upload sequences, and trade-off tables.

---

*SnapShare Architecture & Scaling Plan — Prepared for Day 7 System Design Review.*
