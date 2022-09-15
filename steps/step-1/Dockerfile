FROM denoland/deno:1.25.1 as builder
WORKDIR /opt
COPY . .
RUN deno bundle ./mod.ts mod.js

FROM denoland/deno:1.25.1
COPY --from=builder /opt/mod.js .
RUN deno install --allow-all --name inngest-init-deno https://deno.land/x/inngest@v0.1.6/init.ts ./mod.js
ENTRYPOINT ["inngest-init-deno"]
