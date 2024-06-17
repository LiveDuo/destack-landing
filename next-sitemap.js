const fs = require('fs')
const matter = require('gray-matter')


module.exports = {
    siteUrl: 'https://www.getdestack.com',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    transform: async (config, path) => {
        const newConfig = {}
        if (path === '/') {
            newConfig.priority = 1
        } else if (path.startsWith('/blog/')) {
            const pathCleaned = path.substring(6, path.length)
            const data = fs.readFileSync(`${process.cwd()}/posts/${pathCleaned}/index.md`, { encoding: 'utf-8' })
            const c = matter(data)
            newConfig.lastmod = c.data.date.toISOString()
            newConfig.priority = 0.8
            newConfig.changefreq = 'weekly'
        }
        return {
            loc: path,
            changefreq: newConfig.changefreq ?? config.changefreq,
            priority: newConfig.priority ?? config.priority,
            lastmod: newConfig.lastmod ?? (config.autoLastmod ? new Date().toISOString() : undefined),
            alternateRefs: config.alternateRefs ?? [],
        }
    },
}