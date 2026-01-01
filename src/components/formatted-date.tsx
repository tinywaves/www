'use client';

import { useMemo } from 'react';
import { Tooltip, TooltipTrigger, TooltipPopup } from './ui/tooltip';

export default function FormattedDate({
  date,
  showTooltip = true,
}: {
  date: Date;
  showTooltip?: boolean;
}) {
  const formatted = useMemo(
    () =>
      new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    [date],
  );

  const formattedWhole = useMemo(
    () =>
      new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
      }),
    [date],
  );

  return (
    showTooltip
      ? (
          <Tooltip>
            <TooltipTrigger
              className="border-foreground/30 cursor-help border-b border-dotted"
              render={<time dateTime={new Date(date).toISOString()} />}
            >
              {formatted}
            </TooltipTrigger>
            <TooltipPopup>{formattedWhole}</TooltipPopup>
          </Tooltip>
        )
      : formatted
  );
}
