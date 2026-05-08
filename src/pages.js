const meetingUrl = "https://meetings-na2.hubspot.com/richard-bussey";
const email = "Richard@MrBussey.com";
const journeyVideoUrl = "https://img1.wsimg.com/blobby/go/63bfdc41-7a0c-4fb9-bcd5-4c41020a98ef/video/Untitled%20design.mp4";
const media = {
  logo: "https://img1.wsimg.com/isteam/ip/63bfdc41-7a0c-4fb9-bcd5-4c41020a98ef/MrB-3cd2d98.png",
  me: "https://img1.wsimg.com/isteam/ip/63bfdc41-7a0c-4fb9-bcd5-4c41020a98ef/Me.jpg/:/rs=w:800,h:1067,cg:true,m/cr=w:800,h:1067",
  journeyThumb: "https://img1.wsimg.com/isteam/ip/63bfdc41-7a0c-4fb9-bcd5-4c41020a98ef/thumbnails/thumbnail-82ff7908-1ac2-4974-8318-85a60353c17d.png",
  factory: "https://img1.wsimg.com/isteam/getty/2204916274/:/rs=w:1920,m",
  automation: "https://img1.wsimg.com/isteam/getty/2179705717/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/fx-gs/rs=w:1920,m",
  reporting: "https://img1.wsimg.com/isteam/getty/687797800/:/cr=t:7.81%25,l:0%25,w:84.38%25,h:84.38%25/fx-gs/rs=w:1920,m",
  tooling: "https://img1.wsimg.com/isteam/getty/840650660/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/fx-gs/rs=w:1920,m",
  systems: "https://img1.wsimg.com/isteam/getty/2187118644/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/fx-gs/rs=w:1920,m",
  data: "https://img1.wsimg.com/isteam/getty/2160811416/:/cr=t:7.15%25,l:0%25,w:85.7%25,h:85.7%25/fx-gs/rs=w:1920,m",
  cloud: "https://img1.wsimg.com/isteam/getty/2222854853/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/fx-gs/rs=w:1920,m",
  startProject: "https://img1.wsimg.com/blobby/go/63bfdc41-7a0c-4fb9-bcd5-4c41020a98ef/downloads/289055aa-23bc-4766-8c36-e16086a1acdb/Start%20Your%20Project.pdf?ver=1778196271147",
  resume: "https://img1.wsimg.com/blobby/go/63bfdc41-7a0c-4fb9-bcd5-4c41020a98ef/downloads/3e9ee303-f918-4053-9132-ff02b608f9bf/Resume.pdf?ver=1778196270706"
};

const navItems = [
  ["/", "Home"],
  ["/six-pillars", "Six Pillars™"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

const originalRoutes = {
  "/six-pillars™": "/six-pillars",
  "/smart-workflow-automation": "/six-pillars/smart-workflow-automation",
  "/instant-insight-reporting-1": "/six-pillars/instant-insight-reporting",
  "/precision-data-integrity-1": "/six-pillars/precision-data-integrity",
  "/seamless-system-sync-1": "/six-pillars/seamless-system-sync",
  "/scalable-data-foundations-1": "/six-pillars/scalable-data-foundations",
  "/high-speed-custom-tooling-1": "/six-pillars/high-speed-custom-tooling"
};

const pillars = [
  {
    icon: "⚙️",
    title: "Smart Workflow Automation",
    slug: "/six-pillars/smart-workflow-automation",
    original: "/smart-workflow-automation",
    linkText: "Learn More About Workflow Automation",
    hero: media.automation,
    intro: "Streamline Your Workflow. Scale Your Business.",
    body: [
      "Stop losing billable hours to busywork. I help small businesses reclaim their time by automating repetitive, manual tasks.",
      "By bridging the gaps in your current workflow, I transform complex, hands-on routines into seamless background processes. My solutions do not just work faster, they help protect data integrity and eliminate the human error that often comes with manual entry.",
      "If your team is spending hours on routines that should take seconds, let’s turn that grunt work into a competitive advantage."
    ]
  },
  {
    icon: "📊",
    title: "Instant Insight Reporting",
    slug: "/six-pillars/instant-insight-reporting",
    original: "/instant-insight-reporting-1",
    linkText: "Learn More About Insight Reporting",
    hero: media.reporting,
    intro: "Stop building the same reports every Monday.",
    body: [
      "I automate the extraction, transformation, and visualisation of your data. I can pull data from fragmented sources and deliver polished, accurate reports directly to your inbox or dashboard with no manual copying and pasting required.",
      "No more Monday morning spreadsheet marathons. I automate the entire data pipeline, from extraction to visualization, delivering board-room ready reports before you even open your laptop."
    ]
  },
  {
    icon: "💻",
    title: "High-Speed Custom Tooling",
    slug: "/six-pillars/high-speed-custom-tooling",
    original: "/high-speed-custom-tooling-1",
    linkText: "Learn More About Custom Tooling",
    hero: media.tooling,
    intro: "Lightweight tools for heavy-duty tasks.",
    body: [
      "Sometimes a web app is overkill. I develop high-performance console applications, custom command centers that perform complex batch processing, file manipulation, or system configuration with lightning speed and minimal resource overhead.",
      "When off-the-shelf software is too slow or too complex, I build lightweight power tools that perform heavy-duty file and data processing with surgical precision and zero bloat."
    ]
  },
  {
    icon: "🔗",
    title: "Seamless System Sync",
    slug: "/six-pillars/seamless-system-sync",
    original: "/seamless-system-sync-1",
    linkText: "Learn More About System Sync",
    hero: media.systems,
    intro: "Make your software talk to each other.",
    body: [
      "I bridge the gap between siloed systems that do not natively communicate. By leveraging Power Automate, PowerShell, and custom APIs, I ensure that when data changes in one application, it updates everywhere else automatically.",
      "The result is a tech stack that is easier to trust because your systems stay in sync without recurring manual intervention."
    ]
  },
  {
    icon: "🗄️",
    title: "Precision Data Integrity",
    slug: "/six-pillars/precision-data-integrity",
    original: "/precision-data-integrity-1",
    linkText: "Learn More About Data Integrity",
    hero: media.data,
    intro: "Data is only valuable if it is clean.",
    body: [
      "I build automated validation, deduplication, and formatting routines that keep your business data organized and trustworthy.",
      "Whether cleaning up a CRM, normalizing imports, or managing large file directories, the goal is the same: fewer surprises, fewer manual corrections, and stronger confidence in the information your business uses."
    ]
  },
  {
    icon: "🏗️",
    title: "Scalable Data Foundations",
    slug: "/six-pillars/scalable-data-foundations",
    original: "/scalable-data-foundations-1",
    linkText: "Learn More About Data Foundations",
    hero: media.cloud,
    intro: "Build on a solid foundation.",
    body: [
      "I design the blueprints for how your data flows through your business.",
      "I help small businesses move away from messy spreadsheets and into structured, scalable environments that are optimized for speed, security, reporting, and future automation."
    ]
  }
];

function nav(route) {
  return navItems.map(([href, label]) => {
    const active = route === href || (href === "/six-pillars" && route.startsWith("/six-pillars")) ? ' aria-current="page"' : "";
    return `<a href="${href}"${active}>${label}</a>`;
  }).join("");
}

function renderPage(title, content, route = "/") {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Senior IT consultant with 40+ years of experience helping organisations automate workflows and build reliable data solutions without the chaos.">
  <title>${title} | MrBussey Consulting LLC</title>
  <link rel="icon" href="${media.logo}">
  <link rel="stylesheet" href="/assets/styles.css">
  <script defer src="/assets/site.js"></script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="/" aria-label="MrBussey Consulting home"><img src="${media.logo}" alt="Mr. Bussey Consulting llc"></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav">${nav(route)}</nav>
  </header>
  <main>${content}</main>
  <footer class="site-footer">
    <div><p>Copyright © 2025 MrBussey Consulting LLC - All Rights Reserved.</p><p>How can I help you succeed</p></div>
    <nav>${nav(route)}</nav>
  </footer>
  <aside class="cookie-banner" aria-live="polite">
    <h2>This website uses cookies.</h2>
    <p>We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p>
    <div class="cookie-actions"><button data-cookie="decline">Decline</button><button data-cookie="accept">Accept</button></div>
  </aside>
</body>
</html>`;
}

function sectionTitle(text, level = "h2") {
  return `<div class="section-title"><${level}>${text}</${level}><span></span></div>`;
}

function paragraphs(items) {
  return items.map(item => `<p>${item}</p>`).join("");
}

const pages = {
  "/": {
    title: "Senior IT / Business Systems Consultant",
    content: () => `
      <section class="home-hero">
        <div>
          <h1>I Fix Broken Business Systems, Data, and Automation Problems</h1>
          <p class="tagline"><em>"Senior-level consulting for companies dealing with messy data, manual processes, and systems that don’t talk to each other."</em></p>
          <p><a href="mailto:${email}">${email}</a></p>
        </div>
      </section>
      <section class="journey">
        ${sectionTitle("Success is a journey")}
        <video src="${journeyVideoUrl}" poster="${media.journeyThumb}" autoplay muted loop playsinline controls></video>
      </section>
      <section class="narrow-copy">
        <h2>What I Fix</h2>
        <p>Most clients come to me with problems like:</p>
        <ul>
          <li>Systems that don’t communicate with each other</li>
          <li>Data that doesn’t match across platforms</li>
          <li>Reporting that takes hours (or days) to produce</li>
          <li>Manual processes that should have been automated years ago</li>
          <li>“Temporary” workarounds that became permanent problems</li>
        </ul>
        <p>I don’t patch symptoms—I fix the underlying issues.</p>
      </section>
      <section class="narrow-copy">
        <h2>Who I Work WIth</h2>
        <p>I typically work with companies that:</p>
        <ul>
          <li>Are using Microsoft-based systems (Dynamics, SQL Server, Power Platform)</li>
          <li>Have systems that don’t integrate properly</li>
          <li>Struggle with unreliable or inconsistent data</li>
          <li>Rely on manual processes and spreadsheets to get work done</li>
          <li>Have outgrown their current setup but don’t know how to fix it</li>
        </ul>
        <p>If your team is spending time working <em>around</em> your systems instead of <em>with</em> them—you’re in the right place.</p>
      </section>
      <section class="narrow-copy pillar-summary">
        <h2>My "Six Pillars to Success™"</h2>
        <ul>${pillars.map(p => `<li><strong>${p.icon} <a href="${p.slug}">${p.title}</a></strong> - ${p.body[0]}</li>`).join("")}</ul>
        <a class="outline-button" href="${meetingUrl}">Book a 30-Minute Workflow Audit (No Sales Pitch)</a>
      </section>`
  },
  "/six-pillars": {
    title: "IT Consulting Services | Automation & Data Solutions",
    content: () => `
      <section class="image-hero" style="--hero-image: url('${media.factory}')">
        <h1>IT Consulting Services | Automation & Data Solutions</h1>
      </section>
      <section class="pillar-index">
        ${sectionTitle("Six Pillar to Success™")}
        <div class="pillar-grid">${pillars.map(pillarOverview).join("")}</div>
      </section>
      <section class="faq">
        ${sectionTitle("Frequently Asked Questions")}
        <p>Please reach me at <a href="mailto:${email}">${email}</a> if you cannot find an answer to your question.</p>
        <details><summary>Is my data secure during automation?</summary><p>Security is baked into the architecture from day one. Solutions run within your existing environment using least-privilege access and industry-standard protections.</p></details>
        <details><summary>What happens if a process breaks or an error occurs?</summary><p>Automation should not be a black box. I build error handling, logging, and optional notifications into scripts and applications.</p></details>
        <details><summary>Do I need to be a "tech person" to run these tools?</summary><p>No. The goal is to make daily work easier with clear, practical tools that handle complexity behind the scenes.</p></details>
        <details><summary>Will these solutions work with my existing software?</summary><p>In most cases, yes. During the initial Workflow Audit, I confirm compatibility before implementation begins.</p></details>
        <details><summary>Why MrBussey Consulting LLC</summary><p>I do not just hand over code and disappear. Every project includes a walk-through and practical support so the solution fits your daily routine.</p></details>
      </section>
      <section class="download-section">
        <p>Download the below "Start Your Project" document to begin the project process. Once you have completed the document, return it to me at <a href="mailto:${email}">${email}</a>.</p>
        <a class="outline-button" href="${media.startProject}">Download Start Your Project</a>
      </section>`
  },
  "/about": {
    title: "About Richard K. Bussey",
    content: () => `
      <section class="about-page">
        ${sectionTitle("About Richard K. Bussey | Senior IT Consultant", "h1")}
        <div class="about-intro">
          <img src="${media.me}" alt="Richard K. Bussey">
          <div>
            <h2>About Me</h2>
            ${paragraphs([
              "I, Richard K. Bussey, am an IT and business systems consultant with over 40 years of experience helping organizations turn complicated business needs into scalable, dependable technical solutions. I specialize in translating what the business <em>means</em> into what technology actually needs to do — because “we just need it to work” has never passed a requirements review.",
              "Over the years, I’ve led enterprise ERP implementations, cloud and data architecture initiatives, and system integrations in highly regulated environments. I’m known for asking uncomfortable questions early, documenting things clearly, and keeping projects moving when the room goes quiet and everyone suddenly looks at IT.",
              "Outside of work, I’m a husband, father, grandfather, and soon-to-be great-grandfather. I dearly love my wife, value family above job titles, and have a dry sense of humor that tends to surface once people realize I’m serious about the work—but not about myself.",
              "At the end of the day, I bring experience, clarity, and steady leadership to complex environments; without unnecessary buzzwords, theatrics, or chaos.",
              "<strong>I help organizations build systems that work—without the chaos.</strong>"
            ])}
          </div>
        </div>
        <div class="narrow-copy">
          <h2>About MrBussey Consulting LLC</h2>
          <p>MrBussey Consulting LLC, an Ohio based consulting business providing remote IT consulting services, exists to help organizations nationwide get control of their business systems, data, and processes—especially when growth, complexity, or regulation have made things harder than they need to be.</p>
          <p>I work with leadership, finance, operations, and technical teams to:</p>
          <ul>
            <li>Clarify business requirements before costly mistakes are made</li>
            <li>Design scalable, auditable, and supportable systems</li>
            <li>Improve data flow, reporting, and integration reliability</li>
            <li>Deliver projects with clear documentation and realistic expectations</li>
          </ul>
          <p><strong>MrBussey Consulting</strong> brings senior-level experience, practical judgement, and hands-on execution — without overhead, hype, or consultant jargon.</p>
        </div>
        <div class="narrow-copy experience">
          <h2>Experience</h2>
          ${job("Project Manager / Sr. Application Developer and Sr. DBA", "Telgian Corporation, Phoenix AZ | September 2022 – October 2025", "Spearheaded Dynamics 365 Field Service and Finance and Operations implementation work, custom Power Apps development, data integrations, Azure DevOps contractor management, Azure Synapse and Data Lake architecture, reporting, automation, and tier III ERP support.")}
          ${job("Enterprise Application Architect and Sr. MS SQL DBA", "AtriCure Inc., Mason OH | September 2013 – July 2022", "Architected migrations to Hyper-V and Azure, designed SQL high availability, led ERP and Dynamics 365 Field Service projects, established SQL, reporting, and SDLC standards, and developed automation that saved substantial manual effort.")}
          ${job("Enterprise Application Lead and Software Developer", "Comprehensive Computer Solutions, Christiansburg VA | October 2010 – July 2013", "Managed Dynamics GP, Dynamics CRM, SQL, IIS, terminal services, reporting, and custom MVC tools for manufacturing, purchasing, logistics, sales, accounting, warehouse, and shipping workflows.")}
          ${job("Owner", "Binary Construction Services, Blacksburg VA | January 2007 – December 2012", "Developed custom software for clients including Canon EOS control software, camera control tooling, and FTP utilities in C++ and C#.")}
          ${job("IT Manager / Programmer", "Branch and Associates, Roanoke VA | May 2002 – May 2010", "Led enterprise infrastructure operations and built custom C# image management, remote support, knowledge portal, drawing distribution, fax server, and construction documentation solutions.")}
          ${job("Infrastructure Engineer", "Waste Policy Institute, Blacksburg VA | May 1996 – December 1998", "Owned multi-state WAN modernization, Voice over Frame Relay implementation, Novell NetWare to Windows NT migration, enterprise email, and tier III operations.")}
          ${job("USMC", "United States Marine Corps | 1983 – 1987", "Served in the United States Marine Corps.")}
          <a class="outline-button" href="${media.resume}">Download Resume</a>
        </div>
      </section>`
  },
  "/contact": {
    title: "Contact Mr. Bussey",
    content: (params) => `
      <section class="contact-page">
        ${sectionTitle("Contact Mr. Bussey", "h1")}
        <div class="contact-layout">
          <form method="post" action="/contact" class="contact-form">
            <h2>Send a message</h2>
            ${params.get("sent") ? `<p class="notice">Your message is ready. <a href="${params.get("mailto") || `mailto:${email}`}">Open your email app to send it.</a></p>` : ""}
            <label><span>Name*</span><input name="name" autocomplete="name" required></label>
            <label><span>Email*</span><input name="email" type="email" autocomplete="email" required></label>
            <label><span>Message*</span><textarea name="message" rows="8" required></textarea></label>
            <label><span>Phone:*</span><input name="phone" type="tel" autocomplete="tel" required></label>
            <button class="outline-button" type="submit">Send</button>
          </form>
          <aside class="contact-card">
            <p>I look forward to speaking with you about a possible future together. Please feel free to contact me so we can schedule a meeting.</p>
            <h2>MrBussey Consulting LLC</h2>
            <p>Phone: <a href="tel:15133415681"><strong>(513) 341-5681</strong></a></p>
            <h2>Meet with Me</h2>
            <p><a href="${meetingUrl}">Schedule a meeting to begin discussions.</a></p>
            <p><a href="https://www.linkedin.com/in/misterbussey">LinkedIn</a></p>
          </aside>
        </div>
      </section>`
  }
};

for (const pillar of pillars) {
  pages[pillar.slug] = { title: pillar.title, content: () => pillarPage(pillar) };
  pages[pillar.original] = pages[pillar.slug];
}

function pillarOverview(pillar) {
  return `<article>
    <h2>${pillar.icon} ${pillar.title}</h2>
    <p><strong>${pillar.intro}</strong></p>
    ${paragraphs(pillar.body)}
    <a href="${pillar.slug}">${pillar.linkText}</a>
  </article>`;
}

function pillarPage(pillar) {
  return `
    <section class="image-hero pillar-hero" style="--hero-image: url('${pillar.hero}')">
      <h1>${pillar.title}</h1>
    </section>
    <section class="narrow-copy pillar-detail">
      ${sectionTitle(`${pillar.icon} ${pillar.title}`, "h1")}
      <p><strong>${pillar.intro}</strong></p>
      ${paragraphs(pillar.body)}
      <a class="outline-button" href="${meetingUrl}">Schedule Your Free Workflow Audit</a>
      <a class="text-link" href="/six-pillars">Back to Six Pillars™</a>
    </section>`;
}

function job(title, org, body) {
  return `<article class="job"><h3>${title}</h3><p><strong>${org}</strong></p><p>${body}</p></article>`;
}

module.exports = { renderPage, pages, originalRoutes };
