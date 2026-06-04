'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

type FormData = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('https://formspree.io/f/xeerarqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _subject: `[RackingHub] ${formData.subject}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.errors?.[0]?.message || 'Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('idle');
    }
  };

  const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim();

  return (
    <div className="container-main section-padding">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Contact Our Racking Experts
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Have a warehouse racking project or question? Our team of industry
            professionals responds personally — not an automated system.
          </p>
        </div>

        {/* Success State */}
        {status === 'success' && (
          <div className="mb-8 p-6 bg-green-50 rounded-xl border border-green-200 text-center animate-fade-in">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-green-800">
              Message Sent Successfully
            </h3>
            <p className="text-sm text-green-600 mt-1">
              Thank you for reaching out. We will get back to you within 24
              hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
            >
              Send another message
            </button>
          </div>
        )}

        {/* Error State */}
        {errorMsg && status === 'idle' && (
          <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200 text-center animate-fade-in">
            <p className="text-sm text-red-700">{errorMsg}</p>
          </div>
        )}

        {/* Form */}
        {status !== 'success' && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="w-full h-10 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full h-10 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Company name (optional)"
                  className="w-full h-10 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full h-10 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
                >
                  <option value="">Select a topic...</option>
                  <option value="quotation-request">
                    Quotation Request
                  </option>
                  <option value="custom-solution">
                    Custom Solution Inquiry
                  </option>
                  <option value="planner-feedback">Planner Feedback</option>
                  <option value="resource-suggestion">
                    Resource Suggestion
                  </option>
                  <option value="content-correction">Content Correction</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="general">General Question</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Describe your warehouse project or question — include dimensions, pallet count, load weights, or any specifications you have..."
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-y"
              />
            </div>

            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={!isValid || status === 'submitting'}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-500 hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors"
            >
              {status === 'submitting' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}

        {/* Contact Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-primary-50 rounded-xl border border-primary-100">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-900">
                General Inquiries
              </span>
            </div>
            <p className="text-xs text-primary-600 mb-1.5">
              Questions about resources, standards, or the planner tool.
            </p>
            <a
              href="mailto:info@rackinghub.com"
              className="text-sm text-accent-600 hover:text-accent-500 font-medium transition-colors"
            >
              info@rackinghub.com
            </a>
          </div>
          <div className="p-4 bg-accent-50 rounded-xl border border-accent-100">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-900">
                Expert Consultation
              </span>
            </div>
            <p className="text-xs text-accent-600 mb-1.5">
              Project-specific racking advice and custom solutions.
            </p>
            <a
              href="mailto:kevin@rackinghub.com"
              className="text-sm text-primary-600 hover:text-primary-500 font-medium transition-colors"
            >
              kevin@rackinghub.com
            </a>
          </div>
          <div className="p-4 bg-green-50 rounded-xl border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-900">
                WhatsApp
              </span>
            </div>
            <p className="text-xs text-green-600 mb-1.5">
              For urgent inquiries and quick project discussions.
            </p>
            <a
              href="https://wa.me/8615348317266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-700 hover:text-green-800 font-medium transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
