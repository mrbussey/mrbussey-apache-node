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
  ["⚙️", "Smart Workflow Automation", "/six-pillars/smart-workflow-automation", "/smart-workflow-automation", media.automation, "Streamline Your Workflow. Scale Your Business.", "Stop losing billable hours to busywork. I help small businesses reclaim their time by automating repetitive, manual tasks."],
  ["📊", "Instant Insight Reporting", "/six-pillars/instant-insight-reporting", "/instant-insight-reporting-1", media.reporting, "Stop building the same reports every Monday.", "I automate the extraction, transformation, and visualisation of your data and deliver polished, accurate reports directly to your inbox or dashboard."],
  ["💻", "High-Speed Custom Tooling", "/six-pillars/high-speed-custom-tooling", "/high-speed-custom-tooling-1", media.tooling, "Lightweight tools for heavy-duty tasks.", "I develop high-performance console applications and focused power tools for batch processing, file manipulation, data cleanup, and system configuration."],
  ["🔗", "Seamless System Sync", "/six-pillars/seamless-system-sync", "/seamless-system-sync-1", media.systems, "Make your software talk to each other.", "I bridge siloed systems with Power Automate, PowerShell, SQL, and custom APIs so data updates where it needs to go automatically."],
  ["🗄️", "Precision Data Integrity", "/six-pillars/precision-data-integrity", "/precision-data-integrity-1", media.data, "Data is only valuable if it is clean.", "I build validation, deduplication, and formatting routines that keep your business data organized and trustworthy."],
  ["🏗️", "Scalable Data Foundations", "/six-pillars/scalable-data-foundations", "/scalable-data-foundations-1", media.cloud, "Build on a solid foundation.", "I design the blueprints for how your data flows through your business, moving messy spreadsheets into structured environments optimized for growth."]
].map(([icon, title, slug, original, hero, intro, body]) => ({ icon, title, slug, original, hero, intro, body }));

function nav(route) {
  return [["/", "Home"], ["/six-pillars", "Six Pillars™"], ["/about", "About"], ["/contact", "Contact"]]
    .map(([href, label]) => `<a href="${href}"${route === href || (href === "/six-pillars" && route.startsWith("/six-pillars")) ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");
}

function renderPage(title, content, route = "/") {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Senior IT consultant with 40+ years of experience helping organisations automate workflows and build reliable data solutions without the chaos."><title>${title} | MrBussey Consulting LLC</title><link rel="icon" href="${media.logo}"><link rel="stylesheet" href="/assets/styles.css"><script defer src="/assets/site.js"></script></head><body><header class="site-header"><a class="brand" href="/" aria-label="MrBussey Consulting home"><img src="${media.logo}" alt="Mr. Bussey Consulting llc"></a><button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button><nav id="site-nav">${nav(route)}</nav></header><main>${content}</main><footer class="site-footer"><div><p>Copyright © 2025 MrBussey Consulting LLC - All Rights Reserved.</p><p>How can I help you succeed</p></div><nav>${nav(route)}</nav></footer><aside class="cookie-banner" aria-live="polite"><h2>This website uses cookies.</h2><p>We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p><div class="cookie-actions"><button data-cookie="decline">Decline</button><button data-cookie="accept">Accept</button></div></aside></body></html>`;
}

function sectionTitle(text, level = "h2") {
  return `<div class="section-title"><${level}>${text}</${level}><span></span></div>`;
}

function homePage() {
  return `<section class="home-hero"><div><h1>I Fix Broken Business Systems, Data, and Automation Problems</h1><p class="tagline"><em>"Senior-level consulting for companies dealing with messy data, manual processes, and systems that don’t talk to each other."</em></p><p><a href="mailto:${email}">${email}</a></p></div></section><section class="journey">${sectionTitle("Success is a journey")}<video src="${journeyVideoUrl}" poster="${media.journeyThumb}" autoplay muted loop playsinline controls></video></section><section class="narrow-copy"><h2>What I Fix</h2><p>Most clients come to me with problems like:</p><ul><li>Systems that don’t communicate with each other</li><li>Data that doesn’t match across platforms</li><li>Reporting that takes hours (or days) to produce</li><li>Manual processes that should have been automated years ago</li><li>“Temporary” workarounds that became permanent problems</li></ul><p>I don’t patch symptoms—I fix the underlying issues.</p></section><section class="narrow-copy"><h2>Who I Work WIth</h2><p>I typically work with companies using Microsoft-based systems, struggling with unreliable data, manual processes, and spreadsheets that have become part of daily operations.</p><p>If your team is spending time working <em>around</em> your systems instead of <em>with</em> them—you’re in the right place.</p></section><section class="narrow-copy pillar-summary"><h2>My "Six Pillars to Success™"</h2><ul>${pillars.map(p => `<li><strong>${p.icon} <a href="${p.slug}">${p.title}</a></strong> - ${p.body}</li>`).join("")}</ul><a class="outline-button" href="${meetingUrl}">Book a 30-Minute Workflow Audit (No Sales Pitch)</a></section>`;
}

function sixPillarsPage() {
  return `<section class="image-hero" style="--hero-image: url('${media.factory}')"><h1>IT Consulting Services | Automation & Data Solutions</h1></section><section class="pillar-index">${sectionTitle("Six Pillar to Success™")}<div class="pillar-grid">${pillars.map(p => `<article><h2>${p.icon} ${p.title}</h2><p><strong>${p.intro}</strong></p><p>${p.body}</p><a href="${p.slug}">Learn More</a></article>`).join("")}</div></section><section class="faq">${sectionTitle("Frequently Asked Questions")}<p>Please reach me at <a href="mailto:${email}">${email}</a> if you cannot find an answer to your question.</p><details><summary>Is my data secure during automation?</summary><p>Security is baked into the architecture from day one.</p></details><details><summary>What happens if a process breaks or an error occurs?</summary><p>I build error handling, logging, and optional notifications into scripts and applications.</p></details><details><summary>Do I need to be a "tech person" to run these tools?</summary><p>No. The goal is to make daily work easier.</p></details><details><summary>Will these solutions work with my existing software?</summary><p>During the initial Workflow Audit, I confirm compatibility before implementation begins.</p></details><details><summary>Why MrBussey Consulting LLC</summary><p>Every project includes a walk-through and practical support so the solution fits your daily routine.</p></details></section><section class="download-section"><p>Download the below "Start Your Project" document to begin the project process. Once completed, return it to me at <a href="mailto:${email}">${email}</a>.</p><a class="outline-button" href="${media.startProject}">Download Start Your Project</a></section>`;
}

function aboutPage() {
  return `<section class="about-page">${sectionTitle("About Richard K. Bussey | Senior IT Consultant", "h1")}<div class="about-intro"><img src="${media.me}" alt="Richard K. Bussey"><div><h2>About Me</h2><p>I, Richard K. Bussey, am an IT and business systems consultant with over 40 years of experience helping organizations turn complicated business needs into scalable, dependable technical solutions. I specialize in translating what the business <em>means</em> into what technology actually needs to do.</p><p>Over the years, I’ve led enterprise ERP implementations, cloud and data architecture initiatives, and system integrations in highly regulated environments. I’m known for asking uncomfortable questions early, documenting things clearly, and keeping projects moving.</p><p>Outside of work, I’m a husband, father, grandfather, and soon-to-be great-grandfather. I dearly love my wife, value family above job titles, and enjoy fishing.</p><p><strong>I help organizations build systems that work—without the chaos.</strong></p></div></div><div class="narrow-copy"><h2>About MrBussey Consulting LLC</h2><p>MrBussey Consulting LLC, an Ohio based consulting business providing remote IT consulting services, exists to help organizations nationwide get control of their business systems, data, and processes.</p><ul><li>Clarify business requirements before costly mistakes are made</li><li>Design scalable, auditable, and supportable systems</li><li>Improve data flow, reporting, and integration reliability</li><li>Deliver projects with clear documentation and realistic expectations</li></ul></div><div class="narrow-copy experience"><h2>Experience</h2>${job("Project Manager / Sr. Application Developer and Sr. DBA", "Telgian Corporation, Phoenix AZ | September 2022 – October 2025", "Dynamics 365, Power Apps, integrations, Azure DevOps, Synapse, Data Lake, reporting, automation, and tier III ERP support.")}${job("Enterprise Application Architect and Sr. MS SQL DBA", "AtriCure Inc., Mason OH | September 2013 – July 2022", "Azure migrations, SQL high availability, ERP projects, reporting standards, and automation.")}${job("Enterprise Application Lead and Software Developer", "Comprehensive Computer Solutions, Christiansburg VA | October 2010 – July 2013", "Dynamics GP, Dynamics CRM, SQL, IIS, reporting, and custom MVC business tools.")}<a class="outline-button" href="${media.resume}">Download Resume</a></div></section>`;
}

function contactPage(params) {
  return `<section class="contact-page">${sectionTitle("Contact Mr. Bussey", "h1")}<div class="contact-layout"><form method="post" action="/contact" class="contact-form"><h2>Send a message</h2>${params.get("sent") ? `<p class="notice">Your message is ready. <a href="${params.get("mailto") || `mailto:${email}`}">Open your email app to send it.</a></p>` : ""}<label><span>Name*</span><input name="name" autocomplete="name" required></label><label><span>Email*</span><input name="email" type="email" autocomplete="email" required></label><label><span>Message*</span><textarea name="message" rows="8" required></textarea></label><label><span>Phone:*</span><input name="phone" type="tel" autocomplete="tel" required></label><button class="outline-button" type="submit">Send</button></form><aside class="contact-card"><p>I look forward to speaking with you about a possible future together. Please feel free to contact me so we can schedule a meeting.</p><h2>MrBussey Consulting LLC</h2><p>Phone: <a href="tel:15133415681"><strong>(513) 341-5681</strong></a></p><h2>Meet with Me</h2><p><a href="${meetingUrl}">Schedule a meeting to begin discussions.</a></p><p><a href="https://www.linkedin.com/in/misterbussey">LinkedIn</a></p></aside></div></section>`;
}

function pillarPage(pillar) {
  return `<section class="image-hero pillar-hero" style="--hero-image: url('${pillar.hero}')"><h1>${pillar.title}</h1></section><section class="narrow-copy pillar-detail">${sectionTitle(`${pillar.icon} ${pillar.title}`, "h1")}<p><strong>${pillar.intro}</strong></p><p>${pillar.body}</p><a class="outline-button" href="${meetingUrl}">Schedule Your Free Workflow Audit</a><a class="text-link" href="/six-pillars">Back to Six Pillars™</a></section>`;
}

function job(title, org, body) {
  return `<article class="job"><h3>${title}</h3><p><strong>${org}</strong></p><p>${body}</p></article>`;
}

const pages = {
  "/": { title: "Senior IT / Business Systems Consultant", content: homePage },
  "/six-pillars": { title: "IT Consulting Services | Automation & Data Solutions", content: sixPillarsPage },
  "/about": { title: "About Richard K. Bussey", content: aboutPage },
  "/contact": { title: "Contact Mr. Bussey", content: contactPage }
};

for (const pillar of pillars) {
  pages[pillar.slug] = { title: pillar.title, content: () => pillarPage(pillar) };
  pages[pillar.original] = pages[pillar.slug];
}

module.exports = { renderPage, pages, originalRoutes };
