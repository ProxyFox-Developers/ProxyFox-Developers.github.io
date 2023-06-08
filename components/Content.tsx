const content = {
    home: {
        name: "Home",
        values: {
            about: {
                name: "About ProxyFox",
                image: "https://cdn.discordapp.com/avatars/872276960951296051/2855a032de10cbe0dec4f1177e469e06.png",
                description: `
ProxyFox is a modern Discord bot designed for systems to aid communication.
It looks for certain tags in messages to associate them with a system member, and uses a webhook to proxy that message as a pseudo-user. 
Due to limitations set by Discord, these messages will show as a bot, however, the people using ProxyFox are not bots.

::https://discord.gg/M2uBsJmRNT
::https://discord.com/api/oauth2/authorize?client_id=947174063841894500&permissions=277696539728&scope=applications.commands%20bot
`.trim()
            },
            privacy: {
                name: "Privacy Policy",
                description: `
Before we start, it's important to note that we are not lawyers, and are unfit to give legal advice.
So here's what we do and don't store:

++What we store:
- Any information directly given to ProxyFox
-- Ex: Members, Swithces\n- Metadata relating to messages sent via ProxyFox
-- Ex: the member who sent it
-- It's also important to note that we don't store message content, and the metadata is deleted after 24h.
- Data relating to how many Members, Switches, or Systems have been created
- Any information logged when an error occurs
-- We do not know what that entails until errors happen.

++What we don't store:
- Anything not mentioned above
- Message content
- Any data that has been deleted from ProxyFox's database

++Extra notes:
- You can delete your system data at any time using 'pf>system delete'
                `.trim()
            }
        }
    }
} as {
    [tab: string]: {
        name: string,
        values: {
            [element: string]: {
                name: string,
                image?: string|null,
                description?: string
            }
        }
    }
}

export default content
