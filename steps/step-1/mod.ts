import type { InngestStep } from "./deps.ts";
import type { Args } from "./types.ts";

export const run: InngestStep<Args> = ({ event }) => {
  // Your logic goes here.
  return {
    status: 200,
    body: {
      event: event.name,
    },
  };
};
