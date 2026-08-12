import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 28, stiffness: 350 } },
  exit: { opacity: 0, scale: 0.92, y: 30, transition: { duration: 0.2 } },
};

export default function TermsEmailModal({
  isOpen,
  onClose,
  productName,
  productPrice,
  checkoutUrl,
}) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState('form'); // 'form' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState(false);

  const isValidEmail = EMAIL_REGEX.test(email);
  const canSubmit = isValidEmail && agreed && status !== 'sending';

  const resetForm = useCallback(() => {
    setEmail('');
    setAgreed(false);
    setStatus('form');
    setErrorMsg('');
    setTouched(false);
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  const handleSend = useCallback(async () => {
    if (!canSubmit) return;

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          customer_email: email,
          product_name: productName,
          product_price: productPrice,
          product_url: typeof window !== 'undefined' ? window.location.href : '',
          terms_url: 'https://lifilumen.com/terms-and-conditions',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setStatus('success');

      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 2500);
    } catch (err) {
      setStatus('error');
      setErrorMsg('Unable to send email. Please try again.');
    }
  }, [canSubmit, email, productName, productPrice, checkoutUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={status !== 'sending' && status !== 'success' ? handleClose : undefined}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.97) 100%)',
              border: '1px solid rgba(26,110,191,0.15)',
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header accent bar */}
            <div
              className="h-1.5 w-full"
              style={{ background: 'linear-gradient(90deg, #1A6EBF 0%, #00C2C7 100%)' }}
            />

            <div className="p-6 sm:p-8">
              {/* Close button */}
              {status !== 'success' && (
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              )}

              {/* ── FORM STATE ── */}
              {(status === 'form' || status === 'sending' || status === 'error') && (
                <>
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
                    >
                      <Mail size={26} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-center text-slate-900 mb-1">
                    Almost there!
                  </h3>
                  <p className="text-sm text-center text-slate-500 mb-6">
                    We'll send the Terms &amp; Conditions for <span className="font-semibold text-slate-700">{productName}</span> to your email before checkout.
                  </p>

                  {/* Email input */}
                  <div className="mb-4">
                    <label htmlFor="terms-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        id="terms-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched(true)}
                        placeholder="you@example.com"
                        disabled={status === 'sending'}
                        className={`w-full h-12 pl-4 pr-10 rounded-xl border-2 text-sm font-medium text-slate-900 placeholder-slate-400 outline-none transition-all ${
                          touched && !isValidEmail && email.length > 0
                            ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                            : 'border-slate-200 bg-white focus:border-[#1A6EBF] focus:bg-blue-50/30'
                        } disabled:opacity-60 disabled:cursor-not-allowed`}
                      />
                      {touched && email.length > 0 && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          {isValidEmail ? (
                            <Check size={16} className="text-emerald-500" />
                          ) : (
                            <AlertCircle size={16} className="text-red-400" />
                          )}
                        </div>
                      )}
                    </div>
                    {touched && !isValidEmail && email.length > 0 && (
                      <p className="mt-1 text-xs text-red-500 font-medium">Please enter a valid email address.</p>
                    )}
                  </div>

                  {/* Agreement checkbox */}
                  <label className="flex items-start gap-3 mb-6 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        disabled={status === 'sending'}
                        className="sr-only peer"
                      />
                      <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                        agreed
                          ? 'bg-[#1A6EBF] border-[#1A6EBF]'
                          : 'border-slate-300 bg-white group-hover:border-[#1A6EBF]/50'
                      }`}>
                        {agreed && <Check size={13} className="text-white" strokeWidth={3} />}
                      </div>
                    </div>
                    <span className="text-sm text-slate-600 leading-snug select-none">
                      I agree to receive the Terms &amp; Conditions and product information via email.
                    </span>
                  </label>

                  {/* Error message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-red-50 border border-red-200"
                    >
                      <AlertCircle size={16} className="text-red-500 shrink-0" />
                      <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
                    </motion.div>
                  )}

                  {/* Continue / Resend button */}
                  <motion.button
                    onClick={handleSend}
                    disabled={!canSubmit}
                    className={`w-full h-12 rounded-xl text-white font-bold text-sm tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 ${
                      canSubmit
                        ? 'cursor-pointer'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    style={{
                      background: canSubmit
                        ? 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)'
                        : 'linear-gradient(135deg, #94a3b8 0%, #94a3b8 100%)',
                    }}
                    whileHover={canSubmit ? { scale: 1.02, boxShadow: '0 10px 36px rgba(0,194,199,0.3)' } : {}}
                    whileTap={canSubmit ? { scale: 0.98 } : {}}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : status === 'error' ? (
                      <>
                        <RefreshCw size={16} />
                        Resend Email
                      </>
                    ) : (
                      'Continue'
                    )}
                  </motion.button>

                  <p className="mt-4 text-xs text-center text-slate-400">
                    Your email is only used to send Terms &amp; Conditions.
                  </p>
                </>
              )}

              {/* ── SUCCESS STATE ── */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  {/* Animated checkmark */}
                  <div className="flex justify-center mb-5">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
                    >
                      <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <Check size={32} className="text-white" strokeWidth={3} />
                      </motion.div>
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Email Sent!
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    Terms &amp; Conditions have been sent to
                  </p>
                  <p className="text-sm font-semibold text-[#1A6EBF] mb-5">
                    {email}
                  </p>

                  {/* Redirect indicator */}
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                    <Loader2 size={14} className="animate-spin" />
                    Redirecting to checkout…
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #1A6EBF 0%, #00C2C7 100%)' }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2.5, ease: 'linear' }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
