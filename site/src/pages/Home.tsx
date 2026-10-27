import DemoRequestForm from "@/components/DemoRequestForm";
import { openCalendly } from "@/lib/calendly";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Baby, Bell, ChartColumn, CircleCheck, ClipboardCheck, Clock, FileCheck, FileText, Play, Shield, Star, TrendingUp, Users, Utensils } from "lucide-react";

const scrollToDemo = () => document.getElementById("demo-request")?.scrollIntoView({ behavior: "smooth" });

export default function Home() {
  return (
    <>
    <main id="main-content">
      <section className="relative overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-28 right-0 h-72 w-72 rounded-full bg-chart-blue/20 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-card p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_0.95fr] lg:gap-6">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Award className="h-3.5 w-3.5 text-primary" />
                  The Admin's Superpower
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-foreground">
                  Childcare Compliance Software
                  <span className="block text-primary">
                    Built for Daycare Centers
                  </span>
                </h1>
                <p className="mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  KinderCompliance gives childcare administrators one command center for deadlines, credentials, and documents so inspection prep becomes routine, not crisis work.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    6 core modules
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Daily action visibility
                  </span>
                  <span className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Inspection-ready records
                  </span>
                </div>
                <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
                  <Link to="/register" className="w-full sm:w-auto">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 text-base shadow-button">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                  <button type="button" onClick={scrollToDemo} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground rounded-md w-full sm:w-auto h-12 px-6 text-base border-border text-foreground">
                    Request Demo
                  </button>
                  <button type="button" onClick={openCalendly} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground rounded-md w-full sm:w-auto h-12 px-6 text-base border-primary/30 text-primary hover:bg-primary/10">
                    <Clock className="mr-2 h-4 w-4" />
                    Schedule Meeting
                  </button>
                </div>
              </div>
              <div className="dashboard-card p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-base font-semibold">
                    Today's Priorities
                  </h2>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="space-y-2.5">
                  <div className="dashboard-surface-link p-3">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-warning" />
                      <p className="text-sm text-foreground leading-snug">
                        License Renewal Due Next Week
                      </p>
                    </div>
                  </div>
                  <div className="dashboard-surface-link p-3">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <p className="text-sm text-foreground leading-snug">
                        New Enrollment: Sarah Johnson Added
                      </p>
                    </div>
                  </div>
                  <div className="dashboard-surface-link p-3">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-success" />
                      <p className="text-sm text-foreground leading-snug">
                        Compliance Audit Completed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-border/70 bg-background/60 px-2 py-2 text-center">
                    <p className="text-[10px] uppercase tracking-wide text-slate-600">
                      Actions
                    </p>
                    <p className="text-lg font-semibold text-critical">
                      12
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-background/60 px-2 py-2 text-center">
                    <p className="text-[10px] uppercase tracking-wide text-slate-600">
                      Staff
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      24
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-background/60 px-2 py-2 text-center">
                    <p className="text-[10px] uppercase tracking-wide text-slate-600">
                      Centers
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none h-32 bottom-0 top-auto" />
            <div className="rounded-xl sm:rounded-2xl border border-border shadow-2xl overflow-hidden bg-[#f8fafc]">
              <div className="bg-[#e2e8f0] px-3 sm:px-5 py-2.5 sm:py-3.5 border-b border-slate-300 flex items-center gap-2">
                <div className="flex gap-2 sm:gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef8d88]" />
                  <div className="w-3 h-3 rounded-full bg-[#f5bf65]" />
                  <div className="w-3 h-3 rounded-full bg-[#8cb48b]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="text-[10px] sm:text-xs text-slate-700 font-medium">
                    kindercompliance.com
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm sm:text-base">
                      Dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-blue-700 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium cursor-pointer hover:bg-blue-800 transition-colors">
                      <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                      <span className="hidden sm:inline">
                        Run Audit
                      </span>
                      <span className="sm:hidden">
                        Audit
                      </span>
                    </div>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center">
                      <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-200 flex items-center justify-center text-[10px] sm:text-xs font-medium text-blue-800">
                        AD
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 hidden md:inline">
                        Admin
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="rounded-xl p-3 sm:p-4 border border-slate-200 bg-white transition-shadow shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-2 sm:mb-3">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-800 mb-0.5 sm:mb-1 truncate">
                      Center Documentation
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-slate-600 truncate hidden sm:block">
                      Manage Policies, Licenses & Forms
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <div className="bg-blue-700 text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-xl inline-block">
                        View
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-3 sm:p-4 border border-slate-200 bg-white transition-shadow shadow-md">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-2 sm:mb-3">
                      <Baby className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-800 mb-0.5 sm:mb-1 truncate">
                      Parents & Children
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-slate-600 truncate hidden sm:block">
                      Track Enrollments & Info
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <div className="bg-blue-700 text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-xl inline-block">
                        View
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-3 sm:p-4 border border-slate-200 bg-white transition-shadow shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-2 sm:mb-3">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-800 mb-0.5 sm:mb-1 truncate">
                      Staff Records
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-slate-600 truncate hidden sm:block">
                      Employee Data & Schedules
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <div className="bg-blue-700 text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-xl inline-block">
                        View
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-3 sm:p-4 border border-slate-200 bg-white transition-shadow shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-2 sm:mb-3">
                      <ClipboardCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-800 mb-0.5 sm:mb-1 truncate">
                      Compliance Reports
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-slate-600 truncate hidden sm:block">
                      Inspections & Audits
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <div className="bg-blue-700 text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-xl inline-block">
                        View
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-3 sm:p-4 border border-slate-200 bg-white transition-shadow shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-2 sm:mb-3">
                      <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-800 mb-0.5 sm:mb-1 truncate">
                      CACFP
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-slate-600 truncate hidden sm:block">
                      Meal Program Management
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <div className="bg-blue-700 text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-xl inline-block">
                        View
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl p-3 sm:p-4 border border-slate-200 bg-white transition-shadow shadow-sm">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-2 sm:mb-3">
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </div>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-800 mb-0.5 sm:mb-1 truncate">
                      Gold Star Rating
                    </p>
                    <p className="text-[8px] sm:text-[10px] text-slate-600 truncate hidden sm:block">
                      Quality & Rating Assessment
                    </p>
                    <div className="mt-2 sm:mt-3">
                      <div className="bg-blue-700 text-white text-[8px] sm:text-[10px] px-2 py-0.5 sm:py-1 rounded-xl inline-block">
                        View
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                        Enrollment Overview
                      </h4>
                      <div className="text-slate-500 text-xs">
                        •••
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 mb-2 sm:mb-3">
                      <div>
                        <span className="text-[10px] sm:text-xs text-slate-600">
                          Total Children
                        </span>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-blue-700">
                          128
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs text-slate-600">
                          Active Parents
                        </span>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
                          72
                        </p>
                      </div>
                    </div>
                    <div className="h-14 sm:h-16 md:h-20 flex items-end gap-0.5 sm:gap-1">
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "40%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "55%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "45%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "60%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "70%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "65%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "75%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "80%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "85%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "78%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "90%" }} />
                      <div className="flex-1 bg-gradient-to-t from-emerald-100 to-emerald-700 rounded-t-md" style={{ height: "95%" }} />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                        Staff Summary
                      </h4>
                      <div className="text-slate-500 text-xs">
                        •••
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 mb-2 sm:mb-3">
                      <div>
                        <span className="text-[10px] sm:text-xs text-slate-600">
                          Total Staff
                        </span>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-blue-700">
                          24
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs text-slate-600">
                          Hours This Week
                        </span>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
                          960
                        </p>
                      </div>
                    </div>
                    <div className="h-14 sm:h-16 md:h-20 flex items-end gap-1 sm:gap-2">
                      <div className="flex-1 rounded-t-md" style={{ background: "linear-gradient(to top, rgb(147, 197, 253), rgb(59, 130, 246))", height: "48%" }} />
                      <div className="flex-1 rounded-t-md" style={{ background: "linear-gradient(to top, rgb(214, 211, 209), rgb(59, 130, 246))", height: "60%" }} />
                      <div className="flex-1 rounded-t-md" style={{ background: "linear-gradient(to top, rgb(153, 246, 228), rgb(59, 130, 246))", height: "42%" }} />
                      <div className="flex-1 rounded-t-md" style={{ background: "linear-gradient(to top, rgb(251, 207, 232), rgb(59, 130, 246))", height: "72%" }} />
                      <div className="flex-1 rounded-t-md" style={{ background: "linear-gradient(to top, rgb(196, 181, 253), rgb(59, 130, 246))", height: "66%" }} />
                      <div className="flex-1 rounded-t-md" style={{ background: "linear-gradient(to top, rgb(254, 202, 202), rgb(59, 130, 246))", height: "54%" }} />
                      <div className="flex-1 rounded-t-md" style={{ background: "linear-gradient(to top, rgb(103, 232, 249), rgb(59, 130, 246))", height: "36%" }} />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                        CACFP Summary
                      </h4>
                      <div className="text-slate-500 text-xs">
                        •••
                      </div>
                    </div>
                    <div className="flex gap-4 mb-2 sm:mb-3">
                      <div>
                        <span className="text-[10px] sm:text-xs text-slate-600">
                          Meals Today
                        </span>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-blue-700">
                          210
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs text-slate-600">
                          Reimbursement
                        </span>
                        <p className="text-base sm:text-lg md:text-xl font-bold text-emerald-700">
                          $1,540
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted/30" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="35 65" className="text-chart-teal" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="25 75" strokeDashoffset="-35" className="text-chart-orange" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-60" className="text-chart-green" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="15 85" strokeDashoffset="-80" className="text-chart-red" />
                        </svg>
                      </div>
                      <div className="text-[9px] sm:text-[10px] space-y-0.5 sm:space-y-1">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-chart-teal" />
                           Breakfast
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-chart-orange" />
                           Lunch
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-chart-green" />
                           Snack
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-chart-red" />
                           Dinner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              One Dashboard. Complete Visibility.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
              KinderCompliance brings every compliance requirement into a single, elegant dashboard—so administrators can see exactly where their center stands at any moment.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base md:text-lg text-foreground">
              <span className="flex items-center justify-center gap-2">
                <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                No binders.
              </span>
              <span className="flex items-center justify-center gap-2">
                <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                No guesswork.
              </span>
              <span className="flex items-center justify-center gap-2">
                <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                No last-minute scrambling.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Designed for How Childcare Actually Operates
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Built around real inspection cycles and the daily realities of childcare compliance
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Centralized Compliance Oversight
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Staff credentials, inspections, drills, and documentation are unified into one clear system.
              </p>
            </div>
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Intelligent Expiration Monitoring
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Visual indicators clearly show what is current, approaching renewal, or urgent—so nothing is missed.
              </p>
            </div>
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Staff Compliance Badges
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Each staff member has a live compliance profile displaying required credentials and renewal status at a glance.
              </p>
            </div>
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Inspection-Ready by Design
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Administrators can confidently present required records instantly—without searching or reassembling information.
              </p>
            </div>
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <ChartColumn className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Built Around Real Inspection Cycles
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Monthly, quarterly, and annual requirements are structured correctly and tracked continuously.
              </p>
            </div>
            <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Sustainable Compliance Systems
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Reduced administrative burden with clear accountability and improved inspection confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              The Outcome
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              Administrators no longer carry compliance alone—KinderCompliance does.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                Reduced
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Administrative Burden
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                Improved
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Inspection Confidence
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                Clear
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Accountability
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                Sustainable
              </p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Compliance Systems
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              Who KinderCompliance Is For
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              KinderCompliance is built for childcare administrators, center directors, and program managers who oversee one or multiple daycare locations. Whether you run a single center or a network of facilities, our childcare compliance software adapts to your operational scale while keeping every credential, inspection cycle, and licensing deadline organized and accessible.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CircleCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground">
                  Single-site daycare center directors
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground">
                  Multi-location childcare program managers
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground">
                  Head Start and Early Head Start coordinators
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CircleCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-foreground">
                  CACFP meal program administrators
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              Common Childcare Compliance Challenges
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Daycare administrators face a constant stream of regulatory requirements that consume valuable time and create unnecessary stress. Paper-based tracking systems break down when staff turnover happens, deadlines pile up, or inspection season arrives. The most common challenges we see include:
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>
                  Expired staff credentials discovered during surprise inspections, leading to citations and corrective action plans.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>
                  Incomplete family enrollment files that delay licensing renewals and audit clearances.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>
                  Missing or misfiled drill logs, safety checklists, and health documentation required by state regulators.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>
                  No centralized view of which compliance items are current, expiring, or overdue across the entire center.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>
                  Hours lost each week manually tracking deadlines in spreadsheets or paper binders that are easily outdated.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              State & Federal Childcare Licensing Requirements
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
              Every childcare center must comply with a layered set of regulations from state licensing agencies, the federal Child and Adult Care Food Program (CACFP), and local fire and health departments. These requirements span staff background checks, CPR and first-aid certifications, child-to-staff ratios, facility safety inspections, and comprehensive documentation of emergency drills and incident reports.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              KinderCompliance maps these regulatory frameworks directly into its tracking system so that administrators know exactly which items are due, which are current, and which need immediate attention—without memorizing every regulation or maintaining a separate checklist for each requirement category.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              How KinderCompliance Helps You Pass Audits
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              When an inspector arrives, confidence comes from knowing every document, credential, and log is current and accessible. KinderCompliance replaces the panic of last-minute preparation with a system that keeps you inspection-ready every day of the year.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 border border-border">
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Instant Document Retrieval
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pull any required record in seconds instead of searching through filing cabinets.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Automated Expiration Alerts
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get notified before staff certifications and facility permits expire.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Inspection Checklists
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pre-built checklists aligned to state-specific licensing standards.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Audit Trail History
                </h3>
                <p className="text-sm text-muted-foreground">
                  Complete record of when documents were uploaded, updated, and reviewed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center">
              Why Daycare Centers Trust KinderCompliance
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              KinderCompliance was designed by people who understand the daily reality of running a childcare center—not by engineers guessing what administrators need. Every feature exists because a real director asked for it, and every workflow is structured around how compliance actually works in licensed facilities.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  6
                </p>
                <p className="text-sm text-muted-foreground">
                  Core Compliance Modules
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  100%
                </p>
                <p className="text-sm text-muted-foreground">
                  Web-Based Access
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  14 Days
                </p>
                <p className="text-sm text-muted-foreground">
                  Free Trial, No Card
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="demo-request" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                See KinderCompliance in Action
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">
                Get a personalized demo and discover how we can help your center achieve compliance confidence.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    See how all compliance tracking works together
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Get answers to your specific questions
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    Learn about pricing and implementation
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">
                    No commitment required
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Request a Demo
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we'll show you how KinderCompliance can transform your center.
              </p>
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
                A System That Works as Hard as You Do
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/95 mb-2 sm:mb-4 max-w-2xl mx-auto">
                Compliance should feel calm, controlled, and clear.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                That's the Admin's Superpower. That's KinderCompliance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link to="/register" className="w-full sm:w-auto">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md h-11 sm:h-14 px-6 sm:px-8 text-sm sm:text-lg w-full sm:w-auto">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </Link>
                <button type="button" onClick={scrollToDemo} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-md h-11 sm:h-14 px-6 sm:px-8 text-sm sm:text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto">
                  Request Demo
                </button>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-primary-foreground/90 text-xs sm:text-sm">
                <span className="flex items-center gap-2">
                  <CircleCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CircleCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <CircleCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
