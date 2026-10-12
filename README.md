# 🌿 Project GAIA 2.0: Smart & Sustainable Forest – INDIA

[![IEEE Funding](https://img.shields.io/badge/IEEE%20Funding-%246%2C429-10b981?style=for-the-badge&logo=ieee)](https://epics.ieee.org/project/gaia-smart-and-sustainable-forest-india/)
[![Institution](https://img.shields.io/badge/Sri%20Sai%20Ram%20Engineering%20College-Chennai-00ff87?style=for-the-badge)](https://sairam.edu.in/)
[![LoRaWAN](https://img.shields.io/badge/LoRaWAN-IN865%20Mesh-10b981?style=for-the-badge)](https://www.thethingsnetwork.org/)
[![Edge AI](https://img.shields.io/badge/Edge%20AI-Sony%20IMX%20%2B%20Pi-059669?style=for-the-badge)](https://pytorch.org/)

> **Autonomous multi-tier forest early-warning and ecological protection network engineered to detect wildfires with early intervention, mitigate human-wildlife encounters, and halt illicit timber trafficking.**

---

## 📌 Project Overview

**GAIA (Smart and Sustainable Forest – INDIA)** was born in response to successive environmental disasters in the **Mathigiri Forest** and **Cauvery North Wildlife Sanctuary (Anchetty R.F, Hosur, Tamil Nadu)**:
- **January 2020 Midnight Wildfire:** Nocturnal fire raged undetected for hours across pristine sanctuary reserve before rangers could mobilize.
- **Deadly Wildlife Intrusions:** Human-animal conflicts resulting in a leopard entering rural villages (attacking 5 humans, killing 23 livestock animals) and herds of 37 elephants damaging crop borders.
- **Sandalwood & Timber Trafficking:** Illegal logging exploiting blind-spots in remote forest sectors.

Developed by the **IEEE Student Branch of Sri Sai Ram Engineering College, Chennai** in collaboration with the **Kenneth Anderson Nature Society (KANS)** and the **Tamil Nadu Forest Department**, the project received a **$6,429 grant from EPICS in IEEE & IEEE Standards Association**.

---

## 🛰️ Technological Architecture

```
[ Tree Canopy Nodes (WisBlock) ]  --> LoRa (IN865) --+
  - RAK1906 (BME680 Gas/Weather)                     |
  - Flame, Light & Smoke Triggers                    |
                                                     v
[ Ground Level Nodes ] ------------> LoRa (IN865) --> [ RAK LoRaWAN Gateway ] 
  - RAK12023 Soil Moisture / Temp                      - Dual 5.8 dBi Antennas
  - RAK12015 Vibration (Chainsaw)                      - 16 Channels (IN865)
  - RAK12005 Rain Detector                             - 15 km Verified Range
                                                     |
[ Edge AI Vision Nodes ] ----------> LoRa / Alert ---+
  - Sony IMX AI Camera Module                        |
  - Raspberry Pi Zero 2 W / Pi 4                     v
  - 4-Class Fire Model (80.69% Acc)           [ Airtel 4G LTE Backhaul ]
  - 2S LiFePO4 Thermal-Safe BMS                      |
                                                     v
                                           [ The Things Stack Cloud ]
                                                     |
                                                     v
                                           [ Web Telemetry Portal ]
```

### 1. Dual-Tier Environmental Sensing
- **Canopy Altitude Tier:** RAK1906 (BME680) measures barometric pressure, volatile gas resistance, ambient temperature, and relative humidity. RAK12020 ambient light sensor detects nocturnal illumination anomalies.
- **Subterranean Soil Tier:** RAK12023 & RAK12035 monitor soil conditions to anticipate flash drying and peat combustion. RAK12015 vibration and RAK12033 6-axis accelerometers capture seismic shocks from falling timber or poacher activity.

### 2. Edge AI Fire & Smoke Detection
- Custom deep neural network trained over **120 epochs** using a **70:30 dataset split** achieving **80.69% accuracy**.
- Four classified states:
  1. *Fire Only*
  2. *Smoke Only*
  3. *Fire and Smoke*
  4. *Normal / No Fire*
- Compiled from PyTorch (`best.pt`) directly into **Sony IMX binary format** (`.imx`) for zero-latency, low-power edge execution on Raspberry Pi Zero 2 W.

### 3. Long-Range LoRaWAN Mesh
- Central RAK Gateway configured for India's **IN865 Band (16 channels)**.
- Dual **5.8 dBi omnidirectional antennas** delivering a **15 km verified radius** over rugged ridges and thick tree canopies.
- Secure Over-The-Air Activation (OTAA) with Airtel 4G cellular backhaul routing packets into The Things Stack.

### 4. Custom Battery Management System (BMS)
- **Raspberry Pi Compute Nodes:** Powered by a 2S LiFePO4 (6V, 6Ah 32650 cells) pack (~38 Wh) with flat discharge, 2000+ cycle life, and high thermal stability. Regulated via MP1584 3A DC-DC buck converter (5V, 90–95% efficiency) protected by a 1.5A slow-blow fuse.
- **Autonomous Sensing Nodes:** Powered by Saft 3.6V 2.6Ah Lithium Thionyl Chloride (Li-SOCl2) non-rechargeable chemistry for multi-year maintenance-free remote operation.

### 5. 3D Digital Twining Simulation
- Point-cloud LiDAR and photogrammetry models of forest topography used to calculate mathematically optimal mounting heights and angles for camera traps to maximize PIR detection radii.

---

## 📊 Key Impact Metrics

| Metric | Achievement |
| :--- | :--- |
| **Grant Funding** | **$6,429.00 USD** (IEEE Standards Association / EPICS in IEEE) |
| **Estimated Impact** | **8,000+** community members & hectares protected |
| **Core Engineers** | **4 Student Innovators** (Sri Sai Ram Engineering College) |
| **Field Volunteers** | **4 Dedicated Volunteers** |
| **Transmission Range** | **15 Kilometers** (Dense Mountainous Canopy) |
| **Edge AI Accuracy** | **80.69%** (120 epochs) |
| **Field Uptime Test** | **21+ Hours** continuous operational deployment |

---

## 👥 Engineering Team & Contacts

- **Team Leader & Edge AI ML Lead:** **Vishwar S J**
  - Institution: Sri Sai Ram Engineering College, Chennai
  - Phone: `+91 9342384995`
  - Email: `vishwarvishwar6@gmail.com`
- **Hardware & Sensor Integration Lead:** **Thivyadharshini**
- **BMS & Power Electronics Lead:** **Kanmanni**
- **Collaborating Partners:**
  - Sri Sai Ram Engineering College IEEE Student Branch
  - EPICS in IEEE & IEEE Standards Association
  - Kenneth Anderson Nature Society (KANS)
  - Tamil Nadu Forest Department (Cauvery Wildlife Sanctuary)

---

## 🌐 Static Website Structure

```
gaia_website/
├── index.html               # Home Dashboard & Overview
├── about.html               # Full Project Story, Hardware & Architecture
├── gallery.html             # 16-Image Lightbox Gallery
├── videos.html              # Multi-Stream Video Demonstration Player
├── reports.html             # Field Deployment & Student Technical Reports
├── team.html                # Leadership Profiles, Volunteers & Partners
├── telemetry.html           # Quick-Redirect to Live Telemetry Table
├── assets/
│   ├── css/
│   │   └── style.css        # Black & Cyber Green Modern Theme
│   ├── js/
│   │   ├── main.js          # Navigation, Mobile Drawer & Metrics
│   │   ├── gallery.js       # Lightbox Modal & Category Filters
│   │   ├── video.js         # Video Switcher & Playlist Manager
│   │   └── reports.js       # Telemetry Search, Filters & GPS Copy
│   ├── images/              # Logo, Field Captures & Topography Maps
│   ├── videos/              # Demo Videos & AI Inference Footage
│   └── docs/                # Downloadable PDF Reports
└── README.md
```

---

## 🚀 Running Locally

To preview the website locally on your machine:

```bash
# Using Python built-in server:
python -m http.server 8080

# Then open in your browser:
http://localhost:8080
```

---

*Project GAIA: Engineering Technology for Community Service & Forest Conservation.*
