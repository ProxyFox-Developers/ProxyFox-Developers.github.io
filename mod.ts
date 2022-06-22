import { serve } from "https://deno.land/std@0.144.0/http/server.ts"

console.log("listening...")
serve(async (req) => {
    var split = req.url.split("://")[1]
    var url = split.substring(split.indexOf("/"))
    switch (url) {
        case "/index.js":
            return new Response(await Deno.readFile("./site/index.js"), {
                headers: {
                    "content-type": "text/javascript"
                }
            })
        case "/index.css":
            return new Response(await Deno.readFile("./site/index.css"), {
                headers: {
                    "content-type": "text/css"
                }
            })
        default:
            return new Response(await Deno.readFile("./site/index.html"), {
                headers: {
                    "content-type": "text/html"
                }
            })
    }
})