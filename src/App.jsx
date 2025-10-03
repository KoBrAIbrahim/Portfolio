// src/App.jsx
import { useState } from "react";
import "./App.css";
import "./index.css";
import { project1Images, project2Images, mobileImages, project3Images } from "./data";

function Gallery({ basePath, images, showCaptions = true }) {
  const [lightbox, setLightbox] = useState(null); // {src, caption}

  return (
    <>
      <div className="gallery">
        {images.map((img, i) => (
          <div
            className="tile"
            key={i}
            onClick={() => setLightbox({ src: `${basePath}/${img.file}`, caption: img.caption })}
            title="Click to zoom"
          >
            <img src={`${basePath}/${img.file}`} alt={img.caption || "Preview"} loading="lazy" />
            {showCaptions && img.caption && <div className="caption">{img.caption}</div>}
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div>
            <img src={lightbox.src} alt={lightbox.caption || "Preview"} />
            {showCaptions && lightbox.caption && <div className="lb-caption">{lightbox.caption}</div>}
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <img className="brand-logo" src="/images/logo_Portfolio.png" alt="Portfolio logo" />
            <span className="brand-text">Portfolio apps</span>
          </div>
        <div className="nav-links">
  <a href="#pharmacy">Pharmacy Web</a>
  <a href="#cafe">Café & Billiards</a>
  <a href="#drivingschool">Driving School</a>   {/* NEW */}
  <a href="#mobile">Mobile Apps</a>
</div>

        </div>
      </nav>

      {/* HERO */}
      <header className="container hero">
        <h1>Selected Projects — Single Page</h1>
        <p>
          A curated one-page showcase built with <strong>React + Vite</strong>. Two web applications are explained in
          detail with image-by-image captions. Mobile applications are presented as images only to preserve intellectual
          property and client confidentiality.
        </p>
        <div className="badges">
          <span className="badge">React + Vite</span>
          <span className="badge">Modern UI</span>
          <span className="badge">Glassmorphism</span>
          <span className="badge">Responsive</span>
        </div>
      </header>

      {/* PROJECT 1 — PHARMACY */}
      <section id="pharmacy" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Pharmacy & Warehouse Web App</h2>
            <span className="subtitle">Inventory & batch tracking</span>
          </div>

          <div className="card" style={{ marginBottom: 14 }}>
            <p style={{ marginTop: 0 }}>
              A comprehensive pharmacy inventory and data platform. The system displays rich item details, batch
              tracking, expiries, suppliers, purchase orders, and analytics. The interface supports multiple languages
              and includes a built-in email inquiry form. The company profile and partners are highlighted to build
              trust and transparency.
            </p>

            <div className="features" style={{ marginTop: 12 }}>
              <div className="feature">
                <strong>Inventory with Details</strong>
                Medicines, batches, expiry dates, suppliers, and purchase orders — all in one place.
              </div>
              <div className="feature">
                <strong>Multi-Language UI</strong>
                Seamless English/Arabic switching to match user preference.
              </div>
              <div className="feature">
                <strong>Email Inquiry</strong>
                Ask questions directly from the site; messages are routed to support.
              </div>
              <div className="feature">
                <strong>Company & Partners</strong>
                Clear “About” and partners pages to present collaborations.
              </div>
            </div>

            <div className="notice">
              The following gallery explains each screen directly — every image has a concise caption.
            </div>

            <Gallery basePath="/images/project1" images={project1Images} />
          </div>
        </div>
      </section>

      {/* PROJECT 2 — CAFE & BILLIARDS */}
      <section id="cafe" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Café & Billiards Management Suite</h2>
            <span className="subtitle">Orders, tables & tournaments</span>
          </div>

          <div className="card" style={{ marginBottom: 14 }}>
            <p style={{ marginTop: 0 }}>
              A professional web app for cafés with billiards tables. It calculates accurate session time and price,
              manages stock, handles orders per table/person, and provides a realistic tournament engine with visual
              brackets and automatic progression.
            </p>

            <div className="features" style={{ marginTop: 12 }}>
              <div className="feature">
                <strong>Billiards Time Tracking</strong>
                Start/stop timers, pause/resume, and precise pricing per hour.
              </div>
              <div className="feature">
                <strong>Orders per Table/Person</strong>
                Attach drinks and food to specific tables or individuals.
              </div>
              <div className="feature">
                <strong>Inventory + Reports</strong>
                Stock management with daily/monthly revenue analytics.
              </div>
              <div className="feature">
                <strong>Pro Tournaments</strong>
                Create realistic brackets; pick winners and advance rounds.
              </div>
            </div>

            <div className="notice">
              The gallery below provides a direct explanation for each interface.
            </div>

            <Gallery basePath="/images/project2" images={project2Images} />
          </div>
        </div>
      </section>

      {/* PROJECT 3 — DRIVING SCHOOL */}
<section id="drivingschool" className="section">
  <div className="container">
    <div className="section-header">
      <h2>Driving School Management Platform</h2>
  <span className="subtitle">Bookings & smart scheduling</span>
    </div>

    <div className="card" style={{ marginBottom: 14 }}>
      <p style={{ marginTop: 0 }}>
        A web platform to help driving schools manage student bookings and lessons. Students book and confirm
        sessions, instructors see smart schedules, and every lesson is evaluated. The system also supports a
        formal complaints workflow and provides financial profiles for both students and instructors.
      </p>

      <div className="features" style={{ marginTop: 12 }}>
        <div className="feature">
          <strong>Student Bookings & Confirmation</strong>
          Requests with preferred time/instructor, plus attendance confirmation.
        </div>
        <div className="feature">
          <strong>Smart Scheduling</strong>
          Conflict-free calendar with per-instructor capacity and availability.
        </div>
        <div className="feature">
          <strong>Per-Lesson Evaluation</strong>
          Rubrics, notes, and progress history for each session.
        </div>
        <div className="feature">
          <strong>Complaints Workflow</strong>
          Submit, track, and resolve complaints with status and SLA.
        </div>
        <div className="feature">
          <strong>Financial Profiles</strong>
          Student balances & payments; instructor earnings and statements.
        </div>
        <div className="feature">
          <strong>Multi-language Ready</strong>
          English/Arabic UI support just like other projects.
        </div>
      </div>

      <div className="notice">
        The gallery below explains each interface directly — each image has a concise caption.
      </div>

      <Gallery basePath="/images/project3" images={project3Images} />
    </div>
  </div>
</section>


      {/* MOBILE APPS — IMAGES ONLY */}
      <section id="mobile" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Mobile Applications</h2>
            <span className="subtitle">Images only — details are confidential</span>
          </div>

          <div className="card">
            <p style={{ marginTop: 0 }}>
              For confidentiality reasons, mobile projects are presented as images only. No feature descriptions or
              implementation details are publicly shared.
            </p>

            <Gallery basePath="/images/mobile" images={mobileImages} showCaptions={false} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">© {new Date().getFullYear()} — Portfolio </div>
          <div className="footer-contact">
            <a href="mailto:ibrahem.j.ghanem@gmail.com">ibrahem.j.ghanem@gmail.com</a>
            <span className="sep">•</span>
            <a href="tel:+970568071127">+970 568 071 127</a>
          </div>
        </div>
      </footer>
    </>
  );
}
