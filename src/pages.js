const meetingUrl = "https://meetings-na2.hubspot.com/richard-bussey";
const email = "Richard@MrBussey.com";

function nav(route) {
  const items = [
    ["/", "Home"],
    ["/six-pillars", "Six Pillars™"],
    ["/about", "About"],
    ["/contact", "Contact"]
  ];

  return items.map(([href, label]) => {
    const active = route === href ? ' aria-current="page"' : "";
    return `<a href="${href}"${active}>${label}</a>`;
  }).join("");
}

function renderPage(title, content, route = "/") {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Senior IT and business systems consulting for ERP, Azure, automation, reporting, and data integration.">
  <title>${title} | MrBussey Consulting LLC</title>
  <link rel="stylesheet" href="/assets/styles.css">
  <script defer src="/assets/site.js"></script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="/" aria-label="MrBussey Consulting home">
      <span class="brand-mark">MB</span>
      <span><strong>MrBussey Consulting LLC</strong><small>Systems that work, without the chaos</small></span>
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav">${nav(route)}</nav>
  </header>
  <main>${content}</main>
  <footer class="site-footer">
    <p>Copyright © 2025 MrBussey Consulting LLC - All Rights Reserved.</p>
    <p>How can I help you succeed</p>
    <nav>${nav(route)}</nav>
  </footer>
  <aside class="cookie-banner" aria-live="polite">
    <div>
      <h2>This website uses cookies.</h2>
      <p>We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p>
    </div>
    <div class="cookie-actions">
      <button data-cookie="decline">Decline</button>
      <button data-cookie="accept">Accept</button>
    </div>
  </aside>
</body>
</html>`;
}

const pillars = [
  {
    icon: "⚙️",
    title: "Smart Workflow Automation",
    slug: "/six-pillars/smart-workflow-automation",
    summary: "Automate repetitive, manual processes to save time, reduce errors, and let your team focus on meaningful work.",
    lead: "Stop losing billable hours to busywork. Smart Workflow Automation turns repetitive routines into reliable background processes that run the same way every time.",
    details: [
      "Map the current manual process and identify the exact steps that create delays, rework, or duplicate entry.",
      "Build Power Automate flows, PowerShell scripts, lightweight services, or API-driven routines that remove unnecessary handoffs.",
      "Add logging, alerts, and clear operating notes so the automation can be trusted after launch."
    ],
    outcomes: [
      "Fewer manual touchpoints",
      "Reduced data-entry errors",
      "Faster turnaround on recurring work",
      "More time for billable or customer-facing activity"
    ]
  },
  {
    icon: "📊",
    title: "Instant Insight Reporting",
    slug: "/six-pillars/instant-insight-reporting",
    summary: "Turn complex data into clear, decision-ready insights with reliable, easy-to-understand reporting.",
    lead: "Instant Insight Reporting gives leadership and operators the numbers they need without waiting on spreadsheet cleanup or manual exports.",
    details: [
      "Extract and normalize data from systems, files, and databases.",
      "Create repeatable reporting pipelines using SQL, Power BI, Power Automate, or custom scripts.",
      "Design reports around business decisions instead of raw system output."
    ],
    outcomes: [
      "Consistent recurring reports",
      "Less spreadsheet handling",
      "Cleaner performance visibility",
      "Faster decisions from trusted data"
    ]
  },
  {
    icon: "🧭",
    title: "Precision Data Integrity",
    slug: "/six-pillars/precision-data-integrity",
    summary: "Keep data accurate, secure, compliant, and trustworthy across systems and reports.",
    lead: "Precision Data Integrity protects the quality of the data your business relies on before small issues become expensive operational problems.",
    details: [
      "Find duplicate, missing, stale, or malformed records across important systems.",
      "Build validation, cleanup, and normalization routines that can run repeatedly.",
      "Create checks and reporting that show where data quality is improving or drifting."
    ],
    outcomes: [
      "Cleaner master data",
      "More reliable reporting",
      "Fewer downstream corrections",
      "Better audit readiness"
    ]
  },
  {
    icon: "🔄",
    title: "Seamless System Sync",
    slug: "/six-pillars/seamless-system-sync",
    summary: "Integrate disconnected systems so data flows automatically, accurately, and without manual intervention.",
    lead: "Seamless System Sync connects the tools your business already uses so information moves without copy-and-paste work.",
    details: [
      "Identify authoritative source systems and the direction each data flow should move.",
      "Build integrations with APIs, files, Power Automate, PowerShell, SQL, or middleware when appropriate.",
      "Include retry handling and visibility so synchronization failures are easy to spot and resolve."
    ],
    outcomes: [
      "Less duplicate entry",
      "More consistent records between systems",
      "Faster handoffs across teams",
      "Clearer ownership of business data"
    ]
  },
  {
    icon: "🏗️",
    title: "Scalable Data Foundations",
    slug: "/six-pillars/scalable-data-foundations",
    summary: "Design cloud-ready data architectures that support growth without adding chaos.",
    lead: "Scalable Data Foundations help growing businesses move from scattered files and fragile workarounds into structured, maintainable data environments.",
    details: [
      "Design practical data models, storage patterns, and access boundaries.",
      "Plan Azure, SQL, Synapse, storage, or reporting foundations around actual business needs.",
      "Document the architecture clearly so future growth does not depend on guesswork."
    ],
    outcomes: [
      "A clearer data architecture",
      "Better reporting and integration readiness",
      "Less dependency on fragile spreadsheets",
      "Room to grow without rebuilding from scratch"
    ]
  },
  {
    icon: "⚡",
    title: "High-Speed Custom Tooling",
    slug: "/six-pillars/high-speed-custom-tooling",
    summary: "Build lightweight, purpose-built tools that solve specific business problems without unnecessary complexity.",
    lead: "High-Speed Custom Tooling fills the gap when off-the-shelf software is too broad and manual work is too slow.",
    details: [
      "Define the narrow job the tool must do and keep the scope practical.",
      "Build utilities for file handling, batch processing, data cleanup, system configuration, or focused workflow tasks.",
      "Deliver the tool with simple instructions and enough logging to make daily use straightforward."
    ],
    outcomes: [
      "Fast relief for specific process pain",
      "Less dependence on manual workarounds",
      "Tools shaped around the way your team actually works",
      "A practical path before investing in larger applications"
    ]
  }
];

function pillarCard(pillar) {
  return `<article>
    <a class="pillar-card-link" href="${pillar.slug}">
      <span>${pillar.icon}</span>
      <h3>${pillar.title}</h3>
      <p>${pillar.summary}</p>
      <strong>Learn more</strong>
    </a>
  </article>`;
}

function pillarOverview(pillar) {
  return `<article>
    <h2>${pillar.icon} ${pillar.title}</h2>
    <p>${pillar.lead}</p>
    <a class="text-link" href="${pillar.slug}">View ${pillar.title}</a>
  </article>`;
}

function pillarPage(pillar) {
  return `
    <section class="page-heading pillar-heading">
      <p class="eyebrow">Six Pillars to Success™</p>
      <h1>${pillar.icon} ${pillar.title}</h1>
      <p>${pillar.lead}</p>
      <div class="hero-actions">
        <a class="button primary" href="${meetingUrl}">Schedule Your Free Workflow Audit</a>
        <a class="button secondary" href="/six-pillars">All Six Pillars</a>
      </div>
    </section>
    <section class="pillar-detail">
      <div>
        <h2>What This Covers</h2>
        <ul>${pillar.details.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <aside>
        <h2>Expected Outcomes</h2>
        <ul>${pillar.outcomes.map(item => `<li>${item}</li>`).join("")}</ul>
      </aside>
    </section>
    <section class="band">
      <div>
        <h2>Ready to look at this in your business?</h2>
        <p>A short workflow audit is usually enough to identify the best first improvement and the systems it touches.</p>
      </div>
      <a class="button primary" href="mailto:${email}">Start the Conversation</a>
    </section>`;
}

const pages = {
  "/": {
    title: "Senior IT / Business Systems Consultant",
    content: () => `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Senior IT / Business Systems Consultant</p>
          <h1>I Help Organizations Build Systems That Work Without the Chaos</h1>
          <p class="lead">40+ years solving real-world business system problems, now helping small businesses run smoother.</p>
          <div class="hero-actions">
            <a class="button primary" href="${meetingUrl}">Schedule Your Free Workflow Audit</a>
            <a class="button secondary" href="mailto:${email}">${email}</a>
          </div>
        </div>
      </section>
      <section class="split">
        <div>
          <h2>Mr. Bussey</h2>
          <p>I am a senior IT and business systems consultant with 40+ years of experience translating business needs into scalable, reliable technical solutions. I specialize in Azure architecture, data integration, and enterprise process improvement, bringing structure, clarity, and calm to complex initiatives.</p>
          <a class="text-link" href="/about">Learn More About Me</a>
        </div>
        <div>
          <h2>Expert Solutions for Every Digital Friction Point</h2>
          <p>You should not have to fight your software to get your work done. I provide a suite of specialized services, the Six Pillars to Success™, designed to bridge the gaps between your tools and your team.</p>
          <a class="text-link" href="/six-pillars">Six Pillars™</a>
        </div>
      </section>
      <section class="band">
        <div>
          <h2>Streamline your Workflow. Scale Your Business.</h2>
          <p>I turn hours of manual work into minutes of automated precision using modern development languages and automation tools.</p>
          <p><strong>Stop booking billable hours to repetitive tasks.</strong></p>
        </div>
        <a class="button primary" href="${meetingUrl}">Schedule Your Free Workflow Audit</a>
      </section>
      <section class="pillars-preview">
        <h2>My Six Pillars to Success™</h2>
        <div class="pillar-grid">
          ${pillars.map(pillarCard).join("")}
        </div>
      </section>`
  },
  "/six-pillars": {
    title: "IT Consulting Services",
    content: () => `
      <section class="page-heading">
        <p class="eyebrow">IT Consulting Services</p>
        <h1>Six Pillars to Success™</h1>
        <p>Automation, reporting, tooling, synchronization, integrity, and data foundations for businesses that need practical systems improvement.</p>
      </section>
      <section class="service-list">
        ${pillars.map(pillarOverview).join("")}
      </section>
      <section class="faq">
        <h2>Frequently Asked Questions</h2>
        <details open><summary>Is my data secure during automation?</summary><p>Security is baked into the architecture from day one. Solutions run within your existing environment using least-privilege access and industry-standard protections.</p></details>
        <details><summary>What happens if a process breaks or an error occurs?</summary><p>Automation should not be a black box. I build error handling, logging, and optional notifications into scripts and applications.</p></details>
        <details><summary>Do I need to be a tech person to run these tools?</summary><p>No. The goal is to make daily work easier with clear, practical tools that handle complexity behind the scenes.</p></details>
        <details><summary>Will these solutions work with my existing software?</summary><p>In most cases, yes. During the initial Workflow Audit, I confirm compatibility before implementation begins.</p></details>
      </section>
      <section class="band">
        <div>
          <h2>Why MrBussey Consulting LLC</h2>
          <p>I do not just hand over code and disappear. Every project includes a walk-through and a support window so the solution fits your daily routine.</p>
        </div>
        <a class="button primary" href="mailto:${email}">Start Your Project</a>
      </section>`
  },
  "/about": {
    title: "About Richard K. Bussey",
    content: () => `
      <section class="page-heading">
        <p class="eyebrow">About Me</p>
        <h1>About Richard K. Bussey | Senior IT Consultant</h1>
        <p>I help organizations build systems that work, without the chaos.</p>
      </section>
      <section class="prose">
        <h2>About Richard</h2>
        <p>I, Richard K. Bussey, am an IT and business systems consultant with over 40 years of experience helping organizations turn complicated business needs into scalable, dependable technical solutions. I specialize in translating what the business means into what technology actually needs to do.</p>
        <p>Over the years, I have led enterprise ERP implementations, cloud and data architecture initiatives, and system integrations in highly regulated environments. I am known for asking uncomfortable questions early, documenting things clearly, and keeping projects moving.</p>
        <p>Outside of work, I am a husband, father, grandfather, and soon-to-be great-grandfather. I love my wife, value family above job titles, enjoy fishing, still miss riding motorcycles, and appreciate systems that are well-engineered and responsibly managed.</p>

        <h2>About MrBussey Consulting LLC</h2>
        <p>MrBussey Consulting LLC is an Ohio based consulting business providing remote IT consulting services nationwide. The business helps organizations get control of systems, data, and processes when growth, complexity, or regulation have made things harder than they need to be.</p>
        <ul>
          <li>Clarify business requirements before costly mistakes are made</li>
          <li>Design scalable, auditable, and supportable systems</li>
          <li>Improve data flow, reporting, and integration reliability</li>
          <li>Deliver projects with clear documentation and realistic expectations</li>
        </ul>

        <h2>Experience</h2>
        ${job("Project Manager / Sr. Application Developer and Sr. DBA", "Telgian Corporation, Phoenix AZ | September 2022 - October 2025", "Led Dynamics 365 Field Service and Finance and Operations implementation work, custom Power Apps development, third-party integrations, Azure DevOps contractor management, Paycom, OptimoRoute, and Deltek Vision integrations, Azure Synapse and Data Lake architecture, reporting, automation, and tier III ERP support.")}
        ${job("Enterprise Application Architect and Sr. MS SQL DBA", "AtriCure Inc., Mason OH | September 2013 - July 2022", "Architected migrations from physical infrastructure to Hyper-V and Azure, designed SQL high availability, led ERP and Dynamics 365 Field Service projects, built reporting and ODS standards, and developed C# and PowerShell automation that saved substantial manual effort.")}
        ${job("Enterprise Application Lead and Software Developer", "Comprehensive Computer Solutions, Christiansburg VA | October 2010 - July 2013", "Managed Dynamics GP, Dynamics CRM, SQL, IIS, terminal services, reporting and enterprise applications while building MVC tools for manufacturing, purchasing, logistics, sales, accounting, warehouse, and shipping workflows.")}
        ${job("Owner", "Binary Construction Services, Blacksburg VA | January 2007 - December 2012", "Developed custom software for clients including Canon EOS control software, camera control tooling, and FTP utilities in C++ and C#.")}
        ${job("IT Manager / Programmer", "Branch and Associates, Roanoke VA | May 2002 - May 2010", "Led enterprise infrastructure operations, built custom C# image management, remote support, knowledge portal, drawing distribution, fax server, and construction documentation solutions.")}
        ${job("Infrastructure Engineer", "Waste Policy Institute, Blacksburg VA | May 1996 - December 1998", "Owned a multi-state WAN modernization across eight offices, implemented Voice over Frame Relay, migrated from Novell NetWare to Windows NT, and supported enterprise email and tier III operations.")}
        ${job("USMC", "United States Marine Corps | 1983 - 1987", "Served in the United States Marine Corps.")}

        <h2>Skills</h2>
        <p>Azure, ADF, SQL, Storage, Key Vault, VMs, RBAC, Azure DevOps, RDS, Runbooks, Synapse Analytics, Power Platform, Dataverse, Power Automate, Power BI, C#, VBScript, PowerShell, T-SQL, ASP.NET, JavaScript, documentation, SDLC, CI/CD, REST APIs, Agile, Waterfall, Lean, SSIS, SQLite, MySQL, FTP, Windows Server, HTML, CSS, requirements gathering, project management, and business process improvement.</p>
      </section>`
  },
  "/contact": {
    title: "Contact Mr. Bussey",
    content: (params) => `
      <section class="page-heading">
        <p class="eyebrow">Contact</p>
        <h1>Contact Mr. Bussey</h1>
        <p>Reach out to discuss experience, fit, and next steps for your organization.</p>
      </section>
      <section class="contact-layout">
        <form method="post" action="/contact" class="contact-form">
          ${params.get("sent") ? `<p class="notice">Your message is ready. <a href="${params.get("mailto") || `mailto:${email}`}">Open your email app to send it.</a></p>` : ""}
          <label>Name*<input name="name" autocomplete="name" required></label>
          <label>Email*<input name="email" type="email" autocomplete="email" required></label>
          <label>Phone*<input name="phone" type="tel" autocomplete="tel" required></label>
          <label>Message<textarea name="message" rows="6"></textarea></label>
          <button class="button primary" type="submit">Send</button>
          <p class="fine-print">This local conversion prepares a mail message instead of sending through the original hosted form service.</p>
        </form>
        <aside class="contact-card">
          <h2>MrBussey Consulting LLC</h2>
          <p><strong>Phone:</strong> <a href="tel:15133415681">(513) 341-5681</a></p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <h2>Meet with Me</h2>
          <p>If you would like to discuss my experience and how I might fit a position within your organization, schedule a one-on-one meeting.</p>
          <a class="button secondary" href="${meetingUrl}">Schedule a meeting with me</a>
        </aside>
      </section>`
  }
};

for (const pillar of pillars) {
  pages[pillar.slug] = {
    title: pillar.title,
    content: () => pillarPage(pillar)
  };
}

function job(title, org, body) {
  return `<article class="job"><h3>${title}</h3><p><strong>${org}</strong></p><p>${body}</p></article>`;
}

module.exports = { renderPage, pages };
