// src/components/BookingWidget.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const HOTELRUNNER_BASE =
  "https://riad-alassala-fes.hotelrunner.com/bv3/search?search=";

function formatDateYYYYMMDD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function diffDays(checkin, checkout) {
  const a = new Date(checkin);
  const b = new Date(checkout);
  a.setHours(0, 0, 0, 0);
  b.setHours(0, 0, 0, 0);
  const ms = b.getTime() - a.getTime();
  return Math.max(1, Math.round(ms / (1000 * 60 * 60 * 24)));
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export default function BookingWidget() {
  const { t } = useTranslation();

  // Dates (default: tomorrow -> +3 nights)
  const today = useMemo(() => new Date(), []);
  const [checkIn, setCheckIn] = useState(formatDateYYYYMMDD(addDays(today, 1)));
  const [checkOut, setCheckOut] = useState(formatDateYYYYMMDD(addDays(today, 4)));

  // Rooms & guests
  const [rooms, setRooms] = useState([
    { adult_count: 2, child_count: 0, child_ages: [] },
  ]);

  // Promo code
  const [promoCode, setPromoCode] = useState("");

  // Dropdown state
  const [openGuests, setOpenGuests] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click + escape
  useEffect(() => {
    function onDown(e) {
      if (!openGuests) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenGuests(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpenGuests(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGuests]);

  // Keep checkout always after checkin
  useEffect(() => {
    if (new Date(checkOut) <= new Date(checkIn)) {
      setCheckOut(formatDateYYYYMMDD(addDays(new Date(checkIn), 1)));
    }
  }, [checkIn]);

  // Calculate totals
  const totals = useMemo(() => {
    const room_count = rooms.length;
    const total_adult = rooms.reduce((sum, r) => sum + (Number(r.adult_count) || 0), 0);
    const total_child = rooms.reduce((sum, r) => sum + (Number(r.child_count) || 0), 0);
    return { room_count, total_adult, total_child };
  }, [rooms]);

  // Summary label
  const summaryLabel = useMemo(() => {
    const r = totals.room_count;
    const a = totals.total_adult;
    const c = totals.total_child;
    const roomText = r > 1 ? t("booking.rooms", { count: r }) : t("booking.room", { count: r });
    const adultText = a > 1 ? t("booking.adultsPlural", { count: a }) : t("booking.adult", { count: a });
    
    if (c > 0) {
      const childText = c > 1 ? t("booking.childrenPlural", { count: c }) : t("booking.child", { count: c });
      return `${r} ${roomText}, ${a} ${adultText}, ${c} ${childText}`;
    }
    return `${r} ${roomText}, ${a} ${adultText}`;
  }, [totals, t]);

  // Update room
  function updateRoom(idx, patch) {
    setRooms((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, ...patch } : r))
    );
  }

  // Add room
  function addRoom() {
    setRooms((prev) => {
      if (prev.length >= 4) return prev;
      return [...prev, { adult_count: 1, child_count: 0, child_ages: [] }];
    });
  }

  // Remove room
  function removeRoom(idx) {
    setRooms((prev) => {
      if (prev.length <= 1) return prev;
      const copy = prev.slice();
      copy.splice(idx, 1);
      return copy;
    });
  }

  // Build HotelRunner URL
  function buildHotelRunnerUrl() {
    const day_count = diffDays(checkIn, checkOut);

    // Build rooms payload
    const roomsPayload = rooms.map((r) => ({
      adult_count: Number(r.adult_count) || 1,
      guest_count: (Number(r.adult_count) || 1) + (Number(r.child_count) || 0),
      child_count: Number(r.child_count) || 0,
      child_ages: Array.isArray(r.child_ages) ? r.child_ages : [],
    }));

    // Build guest_rooms object (indexed by room number)
    const guest_rooms = roomsPayload.reduce((acc, r, i) => {
      acc[i] = {
        adult_count: r.adult_count,
        guest_count: r.guest_count,
        child_count: r.child_count,
        child_ages: r.child_ages,
      };
      return acc;
    }, {});

    // Build search object
    const searchObj = {
      checkin_date: checkIn,
      checkout_date: checkOut,
      day_count,
      room_count: totals.room_count,
      total_adult: totals.total_adult,
      total_child: totals.total_child,
      rooms: roomsPayload,
      guest_rooms,
    };

    // Add coupon code if provided
    if (promoCode.trim()) {
      searchObj.coupon_code = promoCode.trim();
    }

    // Encode and build URL
    const encoded = encodeURIComponent(JSON.stringify(searchObj));
    return `${HOTELRUNNER_BASE}${encoded}`;
  }

  // Handle form submit
  function onSubmit(e) {
    e.preventDefault();
    const url = buildHotelRunnerUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="w-full max-w-4xl bg-white/95 px-4 py-4 shadow-sm backdrop-blur lg:px-6 lg:py-5 overflow-visible relative z-50">
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-3 md:grid-cols-4 overflow-visible"
      >
        {/* Check In */}
        <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.26em]">
          <span className="text-neutral-500">{t("booking.checkIn")}</span>
          <input
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            type="date"
            className="border border-neutral-300 bg-transparent px-2 py-2 text-[12px] normal-case tracking-normal outline-none focus:border-neutral-900"
            required
          />
        </label>

        {/* Check Out */}
        <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.26em]">
          <span className="text-neutral-500">{t("booking.checkOut")}</span>
          <input
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            type="date"
            className="border border-neutral-300 bg-transparent px-2 py-2 text-[12px] normal-case tracking-normal outline-none focus:border-neutral-900"
            required
          />
        </label>

        {/* Rooms & Guests Dropdown */}
        <div className="relative overflow-visible" ref={dropdownRef}>
          <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.26em]">
            <span className="text-neutral-500">{t("booking.guests")}</span>
            <button
              type="button"
              onClick={() => setOpenGuests((v) => !v)}
              className="flex items-center justify-between border border-neutral-300 bg-transparent px-2 py-2 text-[12px] normal-case tracking-normal outline-none focus:border-neutral-900 text-left"
              aria-expanded={openGuests}
            >
              <span className="truncate">{summaryLabel}</span>
              <svg
                className={`h-4 w-4 text-neutral-500 transition-transform flex-shrink-0 ml-2 ${
                  openGuests ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
          </label>

          {/* Dropdown Panel */}
          {openGuests && (
            <div className="absolute left-0 right-0 z-[9999] mt-2 bg-white shadow-xl border border-neutral-200 overflow-visible min-w-[320px]">
              <div className="p-5">
                {/* Rooms List */}
                <div className="space-y-4">
                  {rooms.map((room, idx) => (
                    <div
                      key={idx}
                      className="pb-4 border-b border-neutral-200 last:border-0 last:pb-0"
                    >
                      {/* Room Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-neutral-900 font-medium capitalize">
                          {t("booking.room")} {idx + 1}
                        </div>
                        {rooms.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRoom(idx)}
                            className="text-neutral-400 hover:text-neutral-900 transition-colors text-lg leading-none w-5 h-5 flex items-center justify-center"
                            aria-label={`Remove ${t("booking.room").toLowerCase()} ${idx + 1}`}
                            title={`Remove ${t("booking.room").toLowerCase()}`}
                          >
                            ×
                          </button>
                        )}
                      </div>

                      {/* Adults Control */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-neutral-700">{t("booking.adults")}</div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              updateRoom(idx, {
                                adult_count: clamp(
                                  Number(room.adult_count) - 1,
                                  1,
                                  8
                                ),
                              })
                            }
                            className="h-8 w-8 border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-all flex items-center justify-center text-base"
                            aria-label="Decrease adults"
                          >
                            −
                          </button>
                          <div className="w-10 text-center text-sm text-neutral-900 font-medium">
                            {room.adult_count}
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              updateRoom(idx, {
                                adult_count: clamp(
                                  Number(room.adult_count) + 1,
                                  1,
                                  8
                                ),
                              })
                            }
                            className="h-8 w-8 border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-all flex items-center justify-center text-base"
                            aria-label="Increase adults"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Room Button */}
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={addRoom}
                      disabled={rooms.length >= 4}
                      className="text-sm text-neutral-900 hover:text-neutral-700 disabled:text-neutral-300 transition-colors"
                    >
                      {t("booking.addRoom")}
                    </button>
                    <div className="text-xs text-neutral-500">
                      {t("booking.maxRooms")}
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <label className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.1em] text-neutral-600">
                      {t("booking.promoCode")} <span className="normal-case tracking-normal text-neutral-400">{t("booking.promoCodeOptional")}</span>
                    </span>
                    <input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder={t("booking.enterPromoCode")}
                      className="border border-neutral-300 bg-white px-2 py-2 text-sm normal-case tracking-normal outline-none focus:border-neutral-900 transition-colors"
                    />
                  </label>
                </div>

                {/* Search Button */}
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setOpenGuests(false)}
                    className="w-full bg-neutral-100 hover:bg-neutral-200 px-4 py-2.5 text-sm text-neutral-900 transition-colors font-medium"
                  >
                    {t("booking.search")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-brand-dark px-4 py-3 text-[11px] tracking-[0.28em] uppercase text-white hover:bg-neutral-800 transition-colors"
          >
            {t("booking.checkRates")}
          </button>
        </div>
      </form>
    </div>
  );
}
