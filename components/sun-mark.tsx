type SunMarkProps = {
  className?: string;
};

export default function SunMark({ className }: SunMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 44 44"
    >
      <path
        d="M22 2.5v5M22 36.5v5M2.5 22h5M36.5 22h5M8.2 8.2l3.6 3.6m20.4 20.4 3.6 3.6m0-27.6-3.6 3.6M11.8 32.2l-3.6 3.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle
        cx="22"
        cy="22"
        r="12"
        stroke="currentColor"
        strokeOpacity=".55"
        strokeWidth="1.4"
      />
      <circle cx="22" cy="22" r="7.5" fill="#C68C5E" />
    </svg>
  );
}
