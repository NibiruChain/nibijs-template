type LoaderCirclesProps = {
  count: number;
  className?: string;
  color?: string;
};

const LoaderCircles = ({ count, className, color }: LoaderCirclesProps) => {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      {Array.from(Array(count), (_, x) => x / 2 + 0.5).map((x) => {
        return (
          <div
            key={x}
            className={`w-4 h-4 rounded-full animate-pulse ${
              color ?? "bg-Purple200"
            }`}
            style={{ animationDelay: `${x.toString()}s` }}
          />
        );
      })}
    </div>
  );
};

export default LoaderCircles;
