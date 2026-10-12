"use client";

import { useState, useMemo } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  X,
  Sparkles,
} from "lucide-react";
import ContactForm from "./ContactForm";

const MEETING_TYPES = [
  { id: "discovery", label: "Discovery Call (30 Minutes)", duration: "30 min" },
  { id: "technical", label: "Technical Consultation (45 Minutes)", duration: "45 min" },
  { id: "strategy", label: "Strategy Session (60 Minutes)", duration: "60 min" },
];

const TIMEZONES = [
  "(GMT-05:00) Central Time (US & Canada)",
  "(GMT-04:00) Eastern Time (US & Canada)",
  "(GMT-08:00) Pacific Time (US & Canada)",
  "(GMT+00:00) UTC / London (GMT)",
  "(GMT+01:00) Central European Time (CET)",
  "(GMT+05:00) Pakistan Standard Time (PKT)",
];

const TIME_SLOTS = [
  "09:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "01:30 pm",
  "02:00 pm",
  "03:30 pm",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function BookingSection({ id }: { id?: string }) {
  const [activeTab, setActiveTab] = useState<"book" | "contact">("book");

  // Calendar state - default to July 2026 as shown in Figma design
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(6); // 6 = July (0-indexed)
  const [selectedDate, setSelectedDate] = useState<number>(14);
  const [selectedTime, setSelectedTime] = useState<string>("10:30 am");
  const [meetingType, setMeetingType] = useState<string>(MEETING_TYPES[0].label);
  const [timezone, setTimezone] = useState<string>(TIMEZONES[0]);

  // Modal confirmation state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Calculate calendar grid for current month
  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    // Sunday is 0, convert so Monday is 0
    let startDay = firstDay.getDay() - 1;
    if (startDay === -1) startDay = 6;

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    const days: { day: number; isCurrentMonth: boolean }[] = [];

    // Prev month days
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, isCurrentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    // Next month days to fill grid of 35 or 42
    const totalSlots = days.length > 35 ? 42 : 35;
    const remaining = totalSlots - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  }, [currentYear, currentMonth]);

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  async function handleConfirmBooking(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const meetingDate = `${MONTH_NAMES[currentMonth]} ${selectedDate}, ${currentYear}`;

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_name: clientName,
          client_email: clientEmail,
          client_notes: clientNotes,
          meeting_type: meetingType,
          meeting_date: meetingDate,
          meeting_time: selectedTime,
          timezone: timezone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setBookingConfirmed(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetBooking() {
    setIsModalOpen(false);
    setBookingConfirmed(false);
    setClientName("");
    setClientEmail("");
    setClientNotes("");
    setSubmitError(null);
  }

  // Highlighted available dates (for authentic calendar feel)
  const highlightedDates = [14, 15, 16, 17, 18, 19, 20];

  return (
    <section id={id || "booking"} className="booking-section-wrapper">
      <div className="booking-main-card">
        {/* Top Dual Tabs: Contact Us vs Book a Meeting */}
        <div className="booking-tabs-header">
          <button
            type="button"
            className={`booking-tab-btn ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            Contact Us
          </button>
          <button
            type="button"
            className={`booking-tab-btn ${activeTab === "book" ? "active" : ""}`}
            onClick={() => setActiveTab("book")}
          >
            Book a Meeting
          </button>
        </div>

        {activeTab === "book" ? (
          /* ========================================================
             BOOK A MEETING TAB CONTENT (2 COLUMNS)
             ======================================================== */
          <div className="booking-grid">
            {/* Left Column: Heading + Subtext + 3 Benefit Cards */}
            <div className="booking-left-col">
              <h2 className="booking-main-heading">
                <span className="booking-main-heading__light">Choose a </span>
                <span className="booking-main-heading__bold">Time</span>
                <br />
                <span className="booking-main-heading__accent">That Works</span>
                <br />
                <span className="booking-main-heading__light">for You</span>
              </h2>
              <p className="booking-left-desc">
                Select a time from our calendar and book a meeting with our team.
                We&apos;ll be ready to discuss your project, answer your questions,
                and explore the best way to move forward.
              </p>

              {/* 3 Benefit Feature Cards */}
              <div className="booking-benefits-list">
                <div className="benefit-card">
                  <div className="benefit-card__icon-wrap">
                    <Clock className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="benefit-card__title">30-Minute Discovery Call</h3>
                    <p className="benefit-card__desc">
                      Quick, focused conversation about your needs and goals.
                    </p>
                  </div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-card__icon-wrap">
                    <CalendarIcon className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="benefit-card__title">Flexible Scheduling</h3>
                    <p className="benefit-card__desc">
                      Choose a time that works for your schedule, including after-hours and weekends.
                    </p>
                  </div>
                </div>

                <div className="benefit-card">
                  <div className="benefit-card__icon-wrap">
                    <Video className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="benefit-card__title">Virtual Meeting</h3>
                    <p className="benefit-card__desc">
                      Join from anywhere - Google Meet, Zoom or via phone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: White Interactive Calendar Card */}
            <div className="booking-right-col">
              <div className="calendar-card">
                {/* Header */}
                <div className="calendar-header">
                  <div className="calendar-header__icon">
                    <CalendarIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="calendar-header__title">BOOK YOUR MEETING</h3>
                    <p className="calendar-header__subtitle">
                      Schedule your next meeting easily.
                    </p>
                  </div>
                </div>

                {/* Meeting Type Selector */}
                <div className="calendar-field">
                  <label className="calendar-label">Meeting Type</label>
                  <div className="calendar-select-wrap">
                    <select
                      value={meetingType}
                      onChange={(e) => setMeetingType(e.target.value)}
                      className="calendar-select"
                    >
                      {MEETING_TYPES.map((t) => (
                        <option key={t.id} value={t.label}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="calendar-select-chevron" />
                  </div>
                </div>

                {/* Calendar Month Navigation */}
                <div className="calendar-month-bar">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="calendar-nav-btn"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="calendar-month-label">
                    {MONTH_NAMES[currentMonth]} {currentYear}
                  </span>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="calendar-nav-btn"
                    aria-label="Next Month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Days of Week */}
                <div className="calendar-weekdays">
                  {WEEK_DAYS.map((wd) => (
                    <span key={wd} className="calendar-weekday">
                      {wd}
                    </span>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="calendar-days-grid">
                  {calendarDays.map((item, index) => {
                    const isSelected = item.isCurrentMonth && item.day === selectedDate;
                    const isHighlighted =
                      item.isCurrentMonth && highlightedDates.includes(item.day);

                    return (
                      <button
                        key={index}
                        type="button"
                        disabled={!item.isCurrentMonth}
                        onClick={() => {
                          if (item.isCurrentMonth) setSelectedDate(item.day);
                        }}
                        className={`calendar-day-btn ${
                          !item.isCurrentMonth
                            ? "muted"
                            : isSelected
                            ? "selected"
                            : isHighlighted
                            ? "highlighted"
                            : ""
                        }`}
                      >
                        {item.day}
                      </button>
                    );
                  })}
                </div>

                {/* Timezone Selector */}
                <div className="calendar-field mt-4">
                  <label className="calendar-label">Timezone</label>
                  <div className="calendar-select-wrap">
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="calendar-select"
                    >
                      {TIMEZONES.map((tz) => (
                        <option key={tz} value={tz}>
                          {tz}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="calendar-select-chevron" />
                  </div>
                </div>

                {/* Available Time Slots */}
                <div className="calendar-field mt-4">
                  <label className="calendar-label text-center block mb-2 font-medium text-xs text-zinc-500">
                    Available Time Slots
                  </label>
                  <div className="time-slots-row">
                    {TIME_SLOTS.slice(0, 3).map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`time-slot-btn ${
                          selectedTime === slot ? "selected" : ""
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Confirm Meeting Action Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="confirm-meeting-btn"
                >
                  Confirm Meeting
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================
             CONTACT US TAB CONTENT
             ======================================================== */
          <div className="contact-tab-grid">
            <div className="contact-tab-info">
              <p className="contact-section-label">Find us here</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-2">
                Bring your next idea into focus.
              </h2>
              <p className="text-white/70 mt-4 leading-relaxed text-sm sm:text-base">
                From first sketch to final launch, our team brings strategy, design,
                and technology together around the problem that matters most.
              </p>

              <div className="contact-methods mt-8">
                <a href="mailto:Info@voidandkey.com" className="contact-method">
                  <span className="contact-method-icon">
                    <Mail size={19} />
                  </span>
                  <span>
                    <strong>Email us</strong>
                    <small>Info@voidandkey.com</small>
                  </span>
                </a>
                <a href="tel:+16124660346" className="contact-method">
                  <span className="contact-method-icon">
                    <Phone size={19} />
                  </span>
                  <span>
                    <strong>Call us</strong>
                    <small>+1 612-466-0346</small>
                  </span>
                </a>
                <a
                  href="https://maps.google.com/?q=1003+S+Front+St+%23100,+Mankato,+MN+56001"
                  className="contact-method"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-method-icon">
                    <MapPin size={19} />
                  </span>
                  <span>
                    <strong>Visit us</strong>
                    <small>1003 S Front St #100, Mankato, MN</small>
                  </span>
                </a>
              </div>
            </div>

            <div className="contact-tab-form-wrap">
              <ContactForm />
            </div>
          </div>
        )}
      </div>

      {/* ========================================================
          CONFIRMATION MODAL
          ======================================================== */}
      {isModalOpen && (
        <div className="booking-modal-overlay">
          <div className="booking-modal-card">
            <button
              type="button"
              onClick={resetBooking}
              className="booking-modal-close"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingConfirmed ? (
              <form onSubmit={handleConfirmBooking}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 font-display">
                      Confirm Your Meeting
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {meetingType} &bull; {selectedTime}, {MONTH_NAMES[currentMonth]} {selectedDate}, {currentYear}
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 my-5">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Project Notes / Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you'd like to discuss..."
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                    />
                  </div>
                </div>

                {submitError && (
                  <p className="text-red-500 text-xs mb-3 text-center">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:opacity-95 transition-opacity shadow-lg shadow-orange-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Saving...
                    </>
                  ) : (
                    "Schedule Call"
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-display text-zinc-900">
                  Meeting Scheduled!
                </h3>
                <p className="text-sm text-zinc-600 mt-2 max-w-sm mx-auto">
                  Thank you, <strong>{clientName}</strong>! We&apos;ve sent a calendar invite to <strong>{clientEmail}</strong> for:
                </p>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 my-5 inline-block text-left text-xs text-zinc-800 space-y-1">
                  <p><strong>Session:</strong> {meetingType}</p>
                  <p><strong>Date:</strong> {MONTH_NAMES[currentMonth]} {selectedDate}, {currentYear}</p>
                  <p><strong>Time:</strong> {selectedTime} ({timezone.split(" ")[0]})</p>
                  <p><strong>Location:</strong> Google Meet (link sent to email)</p>
                </div>
                <button
                  type="button"
                  onClick={resetBooking}
                  className="block w-full py-3 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
