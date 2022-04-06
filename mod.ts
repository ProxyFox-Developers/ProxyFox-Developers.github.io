import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, ssr, tw } from "https://crux.land/nanossr@0.0.1";

const page = await Deno.readTextFile("index.html");

await serve((req) => {
    const url = new URL(req.url);
    return ssr(() => page);
});