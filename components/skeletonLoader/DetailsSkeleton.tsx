import styled from "styled-components";

const SkeletonContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: var(--details-bg);
  min-height: 100vh;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: pulse 1.5s infinite ease-in-out;
`;

const SkeletonBlock = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  background-color: var(--loader-bg);
  border-radius: 0.375rem;
  margin: 0.5rem auto;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: var(--details-grid);
  border-radius: 0.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DetailsSkeleton = () => {
  return (
    <SkeletonContainer>
      {/* Title */}
      <SkeletonBlock width="12rem" height="2rem" />
      <SkeletonBlock width="16rem" height="1rem" />

      {/* Grid Content */}
      <GridContainer>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} style={{ display: "flex", gap: "0.5rem" }}>
            <SkeletonBlock width="5rem" height="1.5rem" />
            <SkeletonBlock width="8rem" height="1.5rem" />
          </div>
        ))}
      </GridContainer>

      {/* Flag Placeholder */}
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <SkeletonBlock width="16rem" height="10rem" />
      </div>

      {/* Maps Placeholder */}
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <SkeletonBlock width="8rem" height="1.5rem" />
        <SkeletonBlock width="10rem" height="1rem" />
      </div>
    </SkeletonContainer>
  );
};

export default DetailsSkeleton;
