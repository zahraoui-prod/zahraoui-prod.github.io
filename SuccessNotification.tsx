import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessNotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  type?: 'success' | 'error';
}

/**
 * SuccessNotification Component
 * Displays animated success or error notifications
 * 
 * Design: Art Deco style with smooth animations
 */
export const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  message,
  isVisible,
  onClose,
  duration = 5000,
  type = 'success'
}) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible && !isAnimatingOut) return null;

  const bgColor = type === 'success' ? 'bg-green-500/20 border-green-500' : 'bg-red-500/20 border-red-500';
  const textColor = type === 'success' ? 'text-green-400' : 'text-red-400';
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <div
      className={`fixed top-8 right-8 z-50 transition-all duration-300 ${
        isAnimatingOut ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
      style={{
        animation: isVisible && !isAnimatingOut ? 'slideInDown 0.5s ease-out' : 'none'
      }}
    >
      <div
        className={`flex items-center gap-4 p-6 rounded-lg border-2 backdrop-blur-sm ${bgColor} ${textColor} shadow-lg shadow-primary/50`}
      >
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <CheckCircle className={`w-6 h-6 ${iconColor} animate-pulse`} />
          ) : (
            <div className={`w-6 h-6 ${iconColor}`}>⚠️</div>
          )}
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm md:text-base">{message}</p>
        </div>
        <button
          onClick={() => {
            setIsAnimatingOut(true);
            setTimeout(onClose, 300);
          }}
          className={`flex-shrink-0 p-1 hover:bg-white/10 rounded transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessNotification;
