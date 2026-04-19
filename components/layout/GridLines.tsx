// components/layout/GridLines.tsx
export function GridLines() {
  const cols = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 mx-auto max-w-screen-xl px-6"
    >
      <div className="relative h-full w-full">
        <div className="relative grid h-full grid-cols-12 gap-6">
          {cols.map((c) => {
            const lineStyle = { gridColumnStart: c, gridRowStart: 1 }
            return (
              <div
                key={c}
                className="h-full w-px bg-border"
                style={lineStyle}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}