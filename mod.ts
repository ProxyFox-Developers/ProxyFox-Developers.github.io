import { serve } from "https://deno.land/std@0.144.0/http/server.ts"

serve(async (req) => {
    var split = req.url.split("://")[1]
    var url = split.substring(split.indexOf("/"))
    switch (url) {
        case "/index.js":
            return new Response((await Deno.readTextFile("./site/index.js")).replace("{}/*sidebars*/",await Deno.readTextFile("./sidebars.json")), {
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
            const sidebar = JSON.parse(await Deno.readTextFile("./sidebars.json"))
            const currentSidebar = url.substring(1).split("/")[0] || "home"
            const selectedSidebar = url.substring(1).split("/")[1] || undefined
            let content = (sidebar[currentSidebar] || sidebar["wip"])
            if (!selectedSidebar)
                for (let i in content) {
                    content = content[i]
                    break
                }
            else content = content[selectedSidebar]
            if (content == undefined)
                for (let i in sidebar[currentSidebar] || sidebar["wip"]) {
                    console.log(i)
                    content = (sidebar[currentSidebar] || sidebar["wip"])[i]
                    break
                }
            console.log(content)
            let page = await Deno.readTextFile("./site/index.html")
            page = page.replace("<!--sidebar-->", await getSidebar(sidebar, currentSidebar))
            page = page.replace("<!--title-->", content.title.replace("\n", "<br>"))
            page = page.replace("%image%", content.image)
            page = page.replace("<!--body-->", content.description.replace("\n", "<br>"))
            return new Response(page, {
                headers: {
                    "content-type": "text/html"
                }
            })
    }
})
async function getSidebar(sidebars: {
    [name: string]: {
        [name: string]: {
            title: string,
            image: string,
            description: string
        }
    }
}, page: string): Promise<string> {
    let currentSidebar = sidebars[page] || sidebars["wip"];
    let sidebar = "";
    for (let name in currentSidebar) {
        sidebar += '<dt onclick="setMain(\''+name+'\')">'+currentSidebar[name].title+'</dt>\n'
    }
    return sidebar
}