import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { ssr } from "https://crux.land/nanossr@0.0.1";
import * as discord from "https://deno.land/x/harmony@v2.6.0/mod.ts";

const page = await Deno.readTextFile("index.html");

let url = "https://discord.com/api/oauth2/authorize?client_id=947174063841894500&redirect_uri=https%3A%2F%2Fproxyfox.olivermakesco.de&response_type=code&scope=identify"
console.log(url);

await serve((req) => {
    console.log(req);
    return ssr(() => req.url);
});