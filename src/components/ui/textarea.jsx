import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "block w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus:border-primary  focus:ring-2 focus:ring-primary sm:text-base bg-transparent",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
