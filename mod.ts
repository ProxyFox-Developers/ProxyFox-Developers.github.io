import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, ssr, tw } from "https://crux.land/nanossr@0.0.1";
import * as discord from "https://deno.land/x/harmony@v2.6.0/mod.ts";

const page = await Deno.readTextFile("index.html");

let url = discord.createOAuthURL({
    "clientID": "947174063841894500",
    "scopes": ["identify"],
    "redirectURI": "https://proxyfox.olivermakesco.de"
});
console.log(url);

await serve((req) => {
    console.log(req);
    return ssr(() => url);
});