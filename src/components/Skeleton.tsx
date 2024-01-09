import { Skeleton } from "@nextui-org/react";
import { Grid } from "@radix-ui/themes";

export const MarkdownSkeleton = () => {
    return (
      <Grid gap="4" pt="4" aria-busy="true">
        {/* Simulate an H1 Title */}
        <Grid gap="2">
          <Skeleton className="w-full h-8 rounded-md" />
          {/* Simulate paragraphs */}
          <Skeleton className="w-4/5 h-4 rounded-md" />
          <Skeleton className="w-3/4 h-4 rounded-md" />
          <Skeleton className="w-5/6 h-4 rounded-md" />
        </Grid>

        {/* Simulate smaller headers and paragraphs */}
        <Grid gap="2">
          <Skeleton className="w-2/3 h-6 rounded-md" />
          <Skeleton className="w-4/5 h-4 rounded-md" />
          <Skeleton className="w-3/4 h-4 rounded-md" />
          <Skeleton className="w-5/6 h-4 rounded-md" />
        </Grid>

        <Grid gap="2">
          <Skeleton className="w-1/2 h-6 rounded-md" />
          <Skeleton className="w-4/5 h-4 rounded-md" />
          <Skeleton className="w-3/4 h-4 rounded-md" />
          <Skeleton className="w-5/6 h-4 rounded-md" />
        </Grid>

        {/* Simulate a Code Block */}
        <Skeleton className="w-full h-36 rounded-md" />
      </Grid>
    );
};
