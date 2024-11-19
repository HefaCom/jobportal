// src/@types/toastify-js.d.ts
declare module 'toastify-js' {
  interface ToastifyOptions {
    text: string;
    duration?: number;
    gravity?: 'top' | 'bottom';
    position?: 'left' | 'center' | 'right';
    backgroundColor?: string;
    stopOnFocus?: boolean;
  }

  export default function Toastify(options: ToastifyOptions): {
    showToast: () => void;
  };
}

