import React from 'react';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

export interface AuthAlertProps {
  type?: 'error' | 'success' | 'info';
  message: string | null;
}

export const AuthAlert: React.FC<AuthAlertProps> = ({ type = 'error', message }) => {
  if (!message) return null;

  const icons = {
    error: <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '1px' }} />,
    success: <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: '1px' }} />,
    info: <Info size={18} style={{ flexShrink: 0, marginTop: '1px' }} />,
  };

  return (
    <div className={`ff-auth-alert ff-auth-alert-${type}`} role="alert">
      {icons[type]}
      <div style={{ flex: 1 }}>{message}</div>
    </div>
  );
};
