// ╔══════════════════════════════════════════════════════════════╗
// ║               PORTFOLIO CONFIG — edit this file             ║
// ║  All personal info lives here. Nothing else needs changing  ║
// ║  unless you want to add new pages / animations.             ║
// ╚══════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ── Basic Info ───────────────────────────────────────────────────
  name:     "Daniel Kisenko",
  handle:   "d4n13l",
  title:    "cs @ uottawa",
  tagline:  "long live privacy",
  location: "Ottawa, ON",
  email:    "danielkisenk@outlook.com",
  github:   "github.com/danielkisenko1",
  linkedin: "linkedin.com/in/danielkisenko",

  // ── About Blurb ──────────────────────────────────────────────────
  about: "Computer Science student at the University of Ottawa with a " +
         "focus on cybersecurity, networking, and software development. " +
         "CTF competitor, hackathon winner, and builder of things.",

  // ── Skills ───────────────────────────────────────────────────────
  skills: [
    "C / C++",
    "Python",
    "Java",
    "HTML / CSS / JavaScript",
    "Linux",
    "Git / GitHub",
    "SQL",
    "Wireshark",
    "OOP",
    "CTF Competitions",
  ],

  // ── Volunteering ─────────────────────────────────────────────────
  volunteering: [
    {
      org:     "uOttawa Cybersecurity Club",
      role:    "VP Events",
      period:  "2026 – Present",
      bullets: [
        "Hosted and organized CTF competitions for 100+ participants, handing out $1000+ in prizes.",
        "Hosted workshops on cybersecurity and physical security topics including lockpicking, with 80+ attendees.",
        "Pulled the club out of long-term dormancy, leading the team and setting high standards.",
      ],
    },
    {
      org:     "IEEE uOttawa Branch",
      role:    "Academic Commissioner",
      period:  "2025 – Present",
      bullets: [
        "Organized and promoted study sessions for 300+ engineering students, a 50% increase in engagement.",
      ],
    },
    {
      org:     "uOttaHack",
      role:    "Logistics Organizer",
      period:  "2025 – Present",
      bullets: [
        "Coordinated logistics for a 1,000+ person event, growing it to Canada's second largest hackathon.",
      ],
    },
  ],

  // ── Work Experience ───────────────────────────────────────────────
  experience: [
    {
      company: "City of Ottawa",
      role:    "Sports Attendant",
      period:  "2025 – Present",
      bullets: [
        "Monitored activities and assisted guests to ensure a safe, organized, and enjoyable sports environment.",
      ],
    },
    {
      company: "India Village Restaurant",
      role:    "Lead Server / Host",
      period:  "2021 – 2023",
      bullets: [
        "Led service team to deliver efficient, high-quality guest experiences in a fast-paced environment.",
      ],
    },
  ],

  // ── Projects ──────────────────────────────────────────────────────
  projects: [
    {
      name: "Applied Cybersecurity & CTF",
      desc: "Completed 100+ HackTheBox and PicoCTF exercises. Competed in uOttawa CTF, Carleton CTFs, and CyberSci Regionals focusing on web exploitation and forensics.",
      tech: ["HackTheBox", "PicoCTF", "Wireshark"],
      url:  "#",
    },
    {
      name: "Home Lab",
      desc: "Designed home networks using VLANs, deployed WireGuard VPN and firewall rules on a Linux (Ubuntu) server, hosting a media and file server with Git version control.",
      tech: ["Linux", "WireGuard", "VLANs", "Git"],
      url:  "#",
    },
    {
      name: "Shazam for Drones",
      desc: "ML algorithm built with Python that classifies drone models by sound signature. Placed 4th out of 87 teams at a Defense Tech Hackathon.",
      tech: ["Python", "Machine Learning"],
      url:  "#",
    },
    {
      name: "RoomieUP",
      desc: "Roommate and housing match-up app built for the SESA Housing Hackathon. Won 3rd place.",
      tech: ["Next.js", "TypeScript", "Firebase", "Vercel"],
      url:  "#",
    },
  ],

  // ── Certifications ───────────────────────────────────────────────
  certifications: [
    "CompTIA Security+ (SY0-701), 2025",
    "Google Certificate in Cybersecurity, 2025",
  ],

  // ── Login Page Cosmetics ──────────────────────────────────────────
  loginOrgName:  "Lockwood Mortin",
  loginSubtitle: "Secure Employee Portal v2.4.1",
  lastUpdated:   "March 2026",

  // ── SQL Injection "Database Record" ──────────────────────────────
  dbTable: "employees",
  dbRecord: {
    id:         1,
    clearance:  "LEVEL_5",
    department: "Cybersecurity",
    status:     "ACTIVE",
  },

};
