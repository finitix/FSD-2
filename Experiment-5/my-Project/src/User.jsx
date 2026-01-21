import React, { lazy, Suspense } from "react";

const LazyImage = lazy(() => import("./LazyImage"));

function User() {
  return (
    <div>
      {/* Text loads immediately */}
      <h1>User name is Jnaneswar</h1>

      {/* Image loads lazily */}
      <Suspense fallback={<p>Loading image...</p>}>
        <LazyImage />
      </Suspense>
    </div>
  );
}

export default User;
