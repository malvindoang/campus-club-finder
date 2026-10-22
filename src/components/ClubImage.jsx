import { useState } from "react";

const ClubImage = ({ src, alt, className = "" }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`overflow-hidden bg-linear-to-br from-indigo-200 via-sky-100 to-emerald-100 ${className}`}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default ClubImage;
